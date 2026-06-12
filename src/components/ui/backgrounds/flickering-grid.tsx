"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface FlickeringGridProps {
    className?: string;
    squareSize?: number;
    gridGap?: number;
    flickerChance?: number;
    color?: string;
    width?: number;
    height?: number;
    maxOpacity?: number;
}

const parseColor = (color: string) => {
    if (color.startsWith("#")) {
        const normalized = color.length === 4
            ? `#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}`
            : color;

        return {
            r: parseInt(normalized.slice(1, 3), 16),
            g: parseInt(normalized.slice(3, 5), 16),
            b: parseInt(normalized.slice(5, 7), 16),
        };
    }

    const match = color.match(/\d+/g);
    if (match && match.length >= 3) {
        return {
            r: Number(match[0]),
            g: Number(match[1]),
            b: Number(match[2]),
        };
    }

    return { r: 255, g: 214, b: 55 };
};

export function FlickeringGrid({
    className,
    squareSize = 4,
    gridGap = 6,
    flickerChance = 0.3,
    color = "#ffd637",
    width,
    height,
    maxOpacity = 0.3,
}: FlickeringGridProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const frameRef = useRef<number>(0);
    const lastFrameRef = useRef(0);
    const opacitiesRef = useRef<number[]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const parent = canvas.parentElement;
        if (!parent) return;

        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        const rgb = parseColor(color);
        const step = squareSize + gridGap;
        let columns = 0;
        let rows = 0;
        let canvasWidth = 0;
        let canvasHeight = 0;
        let isRunning = false;
        const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

        const resize = () => {
            const dpr = window.devicePixelRatio || 1;
            canvasWidth = width ?? parent.clientWidth;
            canvasHeight = height ?? parent.clientHeight;
            columns = Math.ceil(canvasWidth / step);
            rows = Math.ceil(canvasHeight / step);

            canvas.width = canvasWidth * dpr;
            canvas.height = canvasHeight * dpr;
            canvas.style.width = `${canvasWidth}px`;
            canvas.style.height = `${canvasHeight}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            opacitiesRef.current = Array.from(
                { length: columns * rows },
                () => Math.random() * maxOpacity
            );
        };

        const drawGrid = () => {
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);

            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < columns; col++) {
                    const index = row * columns + col;

                    if (Math.random() < flickerChance) {
                        opacitiesRef.current[index] = Math.random() * maxOpacity;
                    }

                    const opacity = opacitiesRef.current[index];
                    if (opacity < 0.015) continue;

                    ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
                    ctx.fillRect(col * step, row * step, squareSize, squareSize);
                }
            }
        };

        const stop = () => {
            isRunning = false;
            cancelAnimationFrame(frameRef.current);
        };

        const draw = (time: number) => {
            if (!isRunning) return;

            if (time - lastFrameRef.current < 42) {
                frameRef.current = requestAnimationFrame(draw);
                return;
            }

            lastFrameRef.current = time;
            drawGrid();

            frameRef.current = requestAnimationFrame(draw);
        };

        const canAnimate = () =>
            !document.hidden &&
            !reducedMotionQuery.matches &&
            canvasWidth > 0 &&
            canvasHeight > 0;

        const start = () => {
            if (!canAnimate()) {
                stop();
                drawGrid();
                return;
            }

            if (isRunning) return;
            isRunning = true;
            lastFrameRef.current = 0;
            frameRef.current = requestAnimationFrame(draw);
        };

        const handleVisibilityChange = () => {
            if (document.hidden) {
                stop();
            } else {
                start();
            }
        };

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                start();
            } else {
                stop();
            }
        });

        resize();
        window.addEventListener("resize", resize);
        document.addEventListener("visibilitychange", handleVisibilityChange);
        reducedMotionQuery.addEventListener("change", start);
        observer.observe(canvas);
        drawGrid();
        start();

        return () => {
            stop();
            window.removeEventListener("resize", resize);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            reducedMotionQuery.removeEventListener("change", start);
            observer.disconnect();
        };
    }, [color, flickerChance, gridGap, height, maxOpacity, squareSize, width]);

    return (
        <canvas
            ref={canvasRef}
            className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
        />
    );
}
