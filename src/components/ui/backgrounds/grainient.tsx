"use client";

import React, { useEffect, useRef } from 'react';

export function Grainient({ className = "" }: { className?: string }) {
    return (
        <div className={`absolute inset-0 z-0 overflow-hidden bg-white ${className}`}>
            {/* Base Gradient */}
            <div
                className="absolute inset-0 opacity-40"
                style={{
                    background: `
                        radial-gradient(circle at 20% 20%, #fbbf24 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, #fbbf24 0%, transparent 50%),
                        radial-gradient(circle at 50% 50%, #fff7ed 0%, transparent 70%)
                    `
                }}
            />

            {/* SVG Noise Filter */}
            <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none mix-blend-overlay">
                <filter id="grain">
                    <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                    <feColorMatrix type="saturate" values="0" />
                </filter>
                <rect width="100%" height="100%" filter="url(#grain)" />
            </svg>

            {/* Animated Glow */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-400/20 blur-[120px] animate-pulse" />
            </div>

            <style jsx>{`
                @keyframes pulse {
                    0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.2; }
                    50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.3; }
                }
                .animate-pulse {
                    animation: pulse 8s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}
