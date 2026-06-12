"use client";

import { cn } from "@/lib/utils";

type PixelDecorMask =
    | "none"
    | "bottom"
    | "topRight"
    | "bottomLeft"
    | "bottomRight"
    | "left"
    | "right"
    | "diagonalCorners"
    | "oppositeCorners";

type PixelDecorPlacement =
    | "custom"
    | "full"
    | "right"
    | "left"
    | "topRight"
    | "bottomLeft"
    | "bottomRight"
    | "bottom";

const maskPresets: Record<Exclude<PixelDecorMask, "none">, string> = {
    bottom: "radial-gradient(ellipse 80% 50% at 50% 100%, black 30%, transparent 70%)",
    topRight:
        "radial-gradient(ellipse 62% 48% at 100% 0%, black 34%, transparent 72%)",
    bottomLeft:
        "radial-gradient(ellipse 62% 48% at 0% 100%, black 34%, transparent 72%)",
    bottomRight:
        "radial-gradient(ellipse 62% 48% at 100% 100%, black 34%, transparent 72%)",
    left:
        "radial-gradient(circle at 0% 50%, black 0%, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0.34) 56%, transparent 78%)",
    right:
        "radial-gradient(circle at 100% 50%, black 0%, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0.34) 56%, transparent 78%)",
    diagonalCorners:
        "radial-gradient(ellipse 50% 50% at 0% 0%, black 40%, transparent 70%), radial-gradient(ellipse 50% 50% at 100% 100%, black 40%, transparent 70%)",
    oppositeCorners:
        "radial-gradient(ellipse 50% 50% at 100% 0%, black 40%, transparent 70%), radial-gradient(ellipse 50% 50% at 0% 100%, black 40%, transparent 70%)",
};

const placementClasses: Record<PixelDecorPlacement, string> = {
    custom: "",
    full: "inset-0",
    right: "inset-y-0 right-0 w-1/2",
    left: "inset-y-0 left-0 w-1/2",
    topRight: "right-0 top-0 h-1/2 w-1/2",
    bottomLeft: "bottom-0 left-0 h-1/2 w-1/2",
    bottomRight: "bottom-0 right-0 h-1/2 w-1/2",
    bottom: "inset-x-0 bottom-0 h-1/2",
};

type PixelDecorProps = {
    className?: string;
    color?: string;
    gridGap?: number;
    mask?: PixelDecorMask;
    maskImage?: string;
    opacity?: number;
    placement?: PixelDecorPlacement;
    squareSize?: number;
};

function buildPixelSvg({
    cells,
    color,
    gridGap,
    squareSize,
}: {
    cells: number;
    color: string;
    gridGap: number;
    squareSize: number;
}) {
    const step = squareSize + gridGap;
    const tileSize = step * cells;
    const rects = Array.from({ length: cells * cells }, (_, index) => {
        const col = index % cells;
        const row = Math.floor(index / cells);
        const hash = (col * 37 + row * 67 + col * row * 19 + 23) % 100;

        if (hash < 10) return "";

        const fillOpacity = (0.22 + (hash / 100) * 0.78).toFixed(2);

        return `<rect x="${col * step}" y="${row * step}" width="${squareSize}" height="${squareSize}" fill="${color}" fill-opacity="${fillOpacity}"/>`;
    }).join("");

    return encodeURIComponent(
        `<svg width="${tileSize}" height="${tileSize}" viewBox="0 0 ${tileSize} ${tileSize}" xmlns="http://www.w3.org/2000/svg">${rects}</svg>`
    );
}

export function PixelDecor({
    className,
    color = "#F5C000",
    gridGap = 6,
    mask = "bottom",
    maskImage,
    opacity = 0.75,
    placement = "full",
    squareSize = 12,
}: PixelDecorProps) {
    const resolvedMask = maskImage ?? (mask === "none" ? undefined : maskPresets[mask]);
    const step = squareSize + gridGap;
    const cells = 8;
    const tileSize = step * cells;
    const svg = buildPixelSvg({ cells, color, gridGap, squareSize });

    return (
        <div
            aria-hidden="true"
            className={cn(
                "pointer-events-none absolute z-0 overflow-hidden",
                placementClasses[placement],
                className
            )}
            style={{
                opacity,
                WebkitMaskComposite: resolvedMask?.includes(",") ? "source-over" : undefined,
                WebkitMaskImage: resolvedMask,
                backgroundImage: `url("data:image/svg+xml,${svg}")`,
                backgroundSize: `${tileSize}px ${tileSize}px`,
                maskComposite: resolvedMask?.includes(",") ? "add" : undefined,
                maskImage: resolvedMask,
            }}
        />
    );
}
