"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export function SpotlightGrid() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [mounted, setMounted] = useState(false);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    useEffect(() => {
        setMounted(true);
    }, []);

    const backgroundTemplate = useMotionTemplate`
        radial-gradient(
            600px circle at ${mouseX}px ${mouseY}px,
            rgba(251, 191, 36, 0.15),
            transparent 80%
        )
    `;

    return (
        <div
            className="absolute inset-0 bg-white overflow-hidden z-0 group"
            onMouseMove={handleMouseMove}
        >
            {/* The grid pattern */}
            <div
                className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]"
                style={{
                    maskImage: 'linear-gradient(to bottom, white 20%, transparent 90%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, white 20%, transparent 90%)'
                }}
            />

            {/* The spotlight that follows the mouse */}
            {mounted && (
                <motion.div
                    className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                    style={{
                        background: backgroundTemplate,
                    }}
                />
            )}

            {/* Subtle ambient glow to ensure it looks good even without mouse hover */}
            <div className="absolute top-0 right-1/4 w-1/2 h-1/2 bg-brand-300/20 rounded-full blur-[120px] mix-blend-multiply opacity-50" />
            <div className="absolute bottom-1/4 left-1/4 w-1/3 h-1/3 bg-brand-200/20 rounded-full blur-[100px] mix-blend-multiply opacity-50" />
        </div>
    );
}
