"use client";

import { useCallback, useEffect, useRef } from "react";

interface PixelGridProps {
    /** Base color for the pixels (hex). Default: "#fbbf24" (brand yellow) */
    pixelColor?: string;
    /** Secondary color for variety. Default: "#f59e0b" */
    secondaryColor?: string;
    /** Size of each pixel square in px. Default: 5 */
    pixelSize?: number;
    /** Gap between pixels in px. Default: 3 */
    gap?: number;
    /** Max opacity of a fully "on" pixel (0-1). Default: 0.6 */
    maxOpacity?: number;
    /** Speed factor for twinkle animation. Higher = faster. Default: 1 */
    speed?: number;
    /** Which side the grid concentrates on. Default: "right" */
    side?: "left" | "right" | "both";
    /** How much of the width the grid covers (0-1). Default: 0.55 */
    coverage?: number;
    /** Hover radius in px. Default: 120 */
    hoverRadius?: number;
    /** Draws outlined data cells mixed with solid pixels. Default: false */
    dataCellStyle?: boolean;
    /** Extra CSS class for the wrapper */
    className?: string;
}

interface Pixel {
    col: number;
    row: number;
    x: number;
    y: number;
    opacity: number;
    targetOpacity: number;
    baseOpacity: number;
    color: string;
    nextChangeTime: number;
    size: number;
    active: boolean;
    density: number;
}

/**
 * Deterministic hash per cell position for stable pixel placement.
 */
function cellHash(col: number, row: number, seed: number = 0): number {
    let h = (col * 374761393 + row * 668265263 + seed * 1274126177) | 0;
    h = ((h ^ (h >> 13)) * 1274126177) | 0;
    h = (h ^ (h >> 16)) | 0;
    return (h & 0x7fffffff) / 0x7fffffff;
}

export function PixelGrid({
    pixelColor = "#fbbf24",
    secondaryColor = "#f59e0b",
    pixelSize = 5,
    gap = 3,
    maxOpacity = 0.6,
    speed = 1,
    side = "right",
    coverage = 0.55,
    hoverRadius = 120,
    className = "",
}: PixelGridProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pixelsRef = useRef<Pixel[]>([]);
    const animFrameRef = useRef<number>(0);
    const lastTimeRef = useRef<number>(0);
    const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
        x: -1000,
        y: -1000,
        active: false,
    });
    const dimensionsRef = useRef<{ w: number; h: number }>({ w: 0, h: 0 });

    const hexToRgb = useCallback((hex: string) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result
            ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16),
            }
            : { r: 251, g: 191, b: 36 };
    }, []);

    const initPixels = useCallback(
        (width: number, height: number) => {
            const step = pixelSize + gap;
            const totalCols = Math.ceil(width / step);
            const totalRows = Math.ceil(height / step);
            const pixels: Pixel[] = [];
            const colors = [pixelColor, secondaryColor];

            // Hard-cap: pixels never go past the midpoint of the screen
            const gridLeftEdge = Math.max(0.5, 1 - coverage);
            const verticalCenter = 0.42;

            for (let row = 0; row < totalRows; row++) {
                for (let col = 0; col < totalCols; col++) {
                    const xNorm = totalCols <= 1 ? 0 : col / (totalCols - 1);
                    const yNorm = totalRows <= 1 ? 0 : row / (totalRows - 1);

                    // --- Horizontal progress ---
                    // 0 at left edge of grid zone, 1 at right edge of canvas
                    let hProgress: number;
                    if (side === "right") {
                        hProgress = (xNorm - gridLeftEdge) / (1 - gridLeftEdge);
                    } else if (side === "left") {
                        hProgress = ((1 - gridLeftEdge) - xNorm) / (1 - gridLeftEdge);
                    } else {
                        hProgress = (Math.abs(xNorm - 0.5) - (0.5 - coverage * 0.5)) / (coverage * 0.5);
                    }

                    // No pixels outside the grid zone
                    if (hProgress < 0) continue;

                    // --- Vertical envelope ---
                    // At right edge (hProgress=1): covers full height
                    // At left edge (hProgress=0): very narrow band around center
                    const clampedH = Math.max(0, Math.min(1, hProgress));
                    const verticalSpread = 0.08 + clampedH * 0.92;
                    const yDist = Math.abs(yNorm - verticalCenter);

                    // Add organic wobble to vertical boundary per-row
                    const wobble =
                        Math.sin(row * 0.23 + 1.7) * 0.04 +
                        Math.sin(row * 0.11 + 0.3) * 0.025 +
                        Math.sin(row * 0.37 + 4.1) * 0.015;

                    const adjustedYDist = yDist + wobble;
                    const verticalFactor = Math.max(0, 1 - (adjustedYDist / (verticalSpread * 0.85)));

                    if (verticalFactor <= 0) continue;

                    // --- Combined density ---
                    let horizontalDensity: number;
                    if (hProgress >= 0.5) {
                        // Right zone: nearly solid grid
                        horizontalDensity = 0.98;
                    } else if (hProgress >= 0.3) {
                        // High density
                        const t = (hProgress - 0.3) / 0.2;
                        horizontalDensity = 0.55 + t * 0.43;
                    } else if (hProgress >= 0.1) {
                        // Transition
                        const t = (hProgress - 0.1) / 0.2;
                        horizontalDensity = 0.15 + t * 0.40;
                    } else {
                        // Edge
                        const t = hProgress / 0.1;
                        horizontalDensity = 0.03 + t * 0.12;
                    }

                    let density = horizontalDensity * verticalFactor;

                    // At far right edge, force near-full density
                    if (hProgress > 0.6 && verticalFactor > 0) {
                        density = Math.max(density, 0.95 * verticalFactor);
                    }

                    // Per-cell noise
                    const noise = (cellHash(col, row, 1) - 0.5) * 0.06;
                    density = Math.max(0, Math.min(1, density + noise));

                    if (density <= 0.003) continue;

                    // Active check
                    const roll = cellHash(col, row, 0);
                    const isActive = roll < density;

                    if (!isActive && density < 0.04) continue;

                    const color = colors[cellHash(col, row, 2) < 0.5 ? 0 : 1];

                    // Opacity: dense areas should be nearly fully opaque
                    const opMult = density > 0.7
                        ? 0.92 + cellHash(col, row, 3) * 0.08
                        : density > 0.4
                            ? 0.55 + cellHash(col, row, 3) * 0.35
                            : 0.35 + cellHash(col, row, 3) * 0.45;

                    const baseOp = isActive
                        ? opMult * maxOpacity * Math.max(0.5, density)
                        : 0;

                    pixels.push({
                        col,
                        row,
                        x: col * step,
                        y: row * step,
                        opacity: density > 0.7 ? baseOp : baseOp * cellHash(col, row, 4),
                        targetOpacity: baseOp,
                        baseOpacity: baseOp,
                        color,
                        nextChangeTime: cellHash(col, row, 5) * 4000,
                        size: pixelSize,
                        active: isActive,
                        density,
                    });
                }
            }

            return pixels;
        },
        [pixelSize, gap, maxOpacity, pixelColor, secondaryColor, side, coverage]
    );

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const inside = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;
            mouseRef.current = { x, y, active: inside };
        };

        const resizeCanvas = () => {
            const parent = canvas.parentElement;
            if (!parent) return;
            const dpr = window.devicePixelRatio || 1;
            const w = parent.clientWidth;
            const h = parent.clientHeight;
            canvas.width = w * dpr;
            canvas.height = h * dpr;
            canvas.style.width = `${w}px`;
            canvas.style.height = `${h}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            dimensionsRef.current = { w, h };
            pixelsRef.current = initPixels(w, h);
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
        window.addEventListener("mousemove", handleMouseMove);

        const colorCache = new Map<string, { r: number; g: number; b: number }>();

        const animate = (time: number) => {
            if (!lastTimeRef.current) lastTimeRef.current = time;
            const delta = (time - lastTimeRef.current) * speed;
            lastTimeRef.current = time;

            const { w, h } = dimensionsRef.current;
            ctx.clearRect(0, 0, w, h);

            const mx = mouseRef.current.x;
            const my = mouseRef.current.y;
            const mouseActive = mouseRef.current.active;
            const hr2 = hoverRadius * hoverRadius;

            const pixels = pixelsRef.current;
            for (let i = 0; i < pixels.length; i++) {
                const p = pixels[i];

                // Twinkle — dense pixels barely fluctuate
                p.nextChangeTime -= delta;
                if (p.nextChangeTime <= 0) {
                    if (p.active) {
                        if (p.density > 0.7) {
                            // Dense area: stay nearly fully visible
                            p.targetOpacity = p.baseOpacity * (0.95 + Math.random() * 0.05);
                        } else {
                            p.targetOpacity = p.baseOpacity * (0.75 + Math.random() * 0.5);
                        }
                    } else {
                        p.targetOpacity = Math.random() < 0.03
                            ? Math.random() * maxOpacity * 0.15
                            : 0;
                    }
                    p.nextChangeTime = 1200 + Math.random() * 3500;
                }

                // Hover
                let hoverBoost = 0;
                if (mouseActive) {
                    const dx = p.x + p.size / 2 - mx;
                    const dy = p.y + p.size / 2 - my;
                    const dist2 = dx * dx + dy * dy;
                    if (dist2 < hr2) {
                        const proximity = 1 - Math.sqrt(dist2) / hoverRadius;
                        hoverBoost = Math.pow(proximity, 1.5) * maxOpacity * p.density;
                    }
                }

                // Subtle wave
                let waveBoost = 0;
                if (p.active) {
                    const timeS = time * 0.001;
                    const wave = Math.sin((p.col * 0.08 + p.row * 0.04) - timeS * 0.2);
                    waveBoost = Math.max(0, wave) * maxOpacity * 0.08 * p.density;
                }

                // Ease
                const baseEase = 0.002 * delta;
                const easeSpeed = hoverBoost > 0 ? baseEase * 3 : baseEase;
                const target = Math.min(1, p.targetOpacity + hoverBoost + waveBoost);
                p.opacity += (target - p.opacity) * Math.min(easeSpeed, 0.3);

                if (p.opacity < 0.005) continue;

                if (!colorCache.has(p.color)) {
                    colorCache.set(p.color, hexToRgb(p.color));
                }
                const rgb = colorCache.get(p.color)!;

                ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${p.opacity})`;
                ctx.fillRect(p.x, p.y, p.size, p.size);
            }

            animFrameRef.current = requestAnimationFrame(animate);
        };

        animFrameRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animFrameRef.current);
        };
    }, [initPixels, maxOpacity, speed, hexToRgb, hoverRadius]);

    return (
        <div
            className={`absolute inset-0 pointer-events-none ${className}`}
            style={{ zIndex: 1 }}
        >
            <canvas
                ref={canvasRef}
                className="absolute inset-0 h-full w-full pointer-events-none"
            />
        </div>
    );
}
