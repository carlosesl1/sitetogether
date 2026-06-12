"use client";

import { motion } from "framer-motion";

export function FluidAurora() {
    return (
        <div className="absolute inset-0 overflow-hidden bg-white z-0 pointer-events-none">
            {/* Subtle background grid dots for scale */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>

            {/* Aurora Gradients Container */}
            <div className="absolute inset-0 opacity-40 mix-blend-multiply filter blur-[80px]">
                {/* Shape 1 */}
                <motion.div
                    className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-brand-300"
                    animate={{
                        x: ["0%", "20%", "-10%", "0%"],
                        y: ["0%", "-10%", "20%", "0%"],
                        scale: [1, 1.1, 0.9, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    }}
                />
                {/* Shape 2 */}
                <motion.div
                    className="absolute top-[30%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-yellow-200"
                    animate={{
                        x: ["0%", "-20%", "10%", "0%"],
                        y: ["0%", "15%", "-10%", "0%"],
                        scale: [1, 0.9, 1.1, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    }}
                />
                {/* Shape 3 */}
                <motion.div
                    className="absolute -bottom-[10%] left-[30%] w-[50vw] h-[40vw] rounded-full bg-amber-100"
                    animate={{
                        x: ["0%", "10%", "-20%", "0%"],
                        y: ["0%", "-20%", "10%", "0%"],
                        scale: [1, 1.2, 0.8, 1],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    }}
                />
            </div>

            {/* Floating high-tech lines/beams over the aurora */}
            <div className="absolute inset-0 overflow-hidden opacity-30">
                <motion.div
                    className="absolute top-1/4 -left-[20%] w-[140%] h-[1px] bg-gradient-to-r from-transparent via-brand-400 to-transparent rotate-12"
                    animate={{ y: [-20, 20, -20], opacity: [0.1, 0.5, 0.1] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute top-2/4 -left-[20%] w-[140%] h-[1px] bg-gradient-to-r from-transparent via-amber-300 to-transparent -rotate-6"
                    animate={{ y: [20, -20, 20], opacity: [0.2, 0.6, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />
            </div>

            {/* Masking out the bottom to fade beautifully into the next section */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>
    );
}
