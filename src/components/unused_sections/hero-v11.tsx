"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, ArrowRight } from "lucide-react";
import React, { useEffect, useState, useMemo } from "react";
import { cn } from "@/lib/utils";

const SquaresBackground = ({
    squareSize = 40,
    strokeColor = "#f3f4f6", // neutral-100
    hoverColor = "#fbbf24", // brand yellow
    activeSquares = 15
}) => {
    const [squares, setSquares] = useState<any[]>([]);

    useEffect(() => {
        const updateSquares = () => {
            const cols = Math.ceil(window.innerWidth / squareSize);
            const rows = Math.ceil(window.innerHeight / squareSize);
            const total = cols * rows;

            const newSquares = Array.from({ length: activeSquares }).map(() => ({
                idx: Math.floor(Math.random() * total),
                delay: Math.random() * 5,
                duration: 2 + Math.random() * 3
            }));
            setSquares(newSquares);
        };

        updateSquares();
        window.addEventListener('resize', updateSquares);
        return () => window.removeEventListener('resize', updateSquares);
    }, [activeSquares, squareSize]);

    const gridInfo = useMemo(() => {
        if (typeof window === 'undefined') return { cols: 0, rows: 0 };
        return {
            cols: Math.ceil(window.innerWidth / squareSize),
            rows: Math.ceil(window.innerHeight / squareSize)
        };
    }, [squareSize]);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden bg-white">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `linear-gradient(to right, ${strokeColor} 1px, transparent 1px), linear-gradient(to bottom, ${strokeColor} 1px, transparent 1px)`,
                    backgroundSize: `${squareSize}px ${squareSize}px`,
                }}
            />
            {squares.map((sq, i) => {
                const row = Math.floor(sq.idx / gridInfo.cols);
                const col = sq.idx % gridInfo.cols;
                return (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.4, 0] }}
                        transition={{
                            duration: sq.duration,
                            repeat: Infinity,
                            delay: sq.delay,
                            ease: "easeInOut"
                        }}
                        className="absolute bg-brand-400"
                        style={{
                            width: squareSize,
                            height: squareSize,
                            left: col * squareSize,
                            top: row * squareSize,
                        }}
                    />
                );
            })}
            <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/50 to-white" />
        </div>
    );
};

export function HeroV11() {
    return (
        <section className="w-full min-h-[85vh] bg-white relative overflow-hidden flex items-center pt-20 pb-32">
            <SquaresBackground />

            <div className="container px-6 relative z-10 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="flex flex-col max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-3 mb-8"
                        >
                            <div className="w-9 h-9 rounded-xl bg-neutral-900 flex items-center justify-center">
                                <ShieldCheck className="w-5 h-5 text-brand-400" />
                            </div>
                            <span className="text-xs font-black text-neutral-900 uppercase tracking-widest bg-white/50 backdrop-blur-sm px-3 py-1 rounded-full border border-neutral-100">DPO Operations</span>
                        </motion.div>

                        <h1 className="text-6xl md:text-7xl font-black text-neutral-900 leading-[0.95] tracking-tight mb-8">
                            Privacidade gerida por <br />
                            <span className="text-brand-500">quem entende de dados</span>.
                        </h1>

                        <p className="text-lg md:text-xl text-neutral-500 font-medium leading-relaxed max-w-lg mb-10">
                            Desenvolvemos o braço operacional e jurídico que sua empresa precisa para operar com segurança total em um mundo orientado a dados.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button size="lg" className="h-14 px-10 text-base font-bold bg-neutral-900 text-white rounded-2xl hover:bg-neutral-800 transition-all shadow-xl shadow-neutral-900/10">
                                Começar Agora
                            </Button>
                            <Button size="lg" variant="outline" className="h-14 px-10 text-base font-bold rounded-2xl border-neutral-200 hover:bg-neutral-50 transition-all">
                                Ver Soluções
                            </Button>
                        </div>
                    </div>

                    <div className="relative hidden lg:block">
                        <div className="w-full aspect-square bg-white rounded-[3rem] shadow-2xl border border-neutral-100 p-12 overflow-hidden relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-400/5 to-transparent z-0" />
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <div className="w-16 h-16 rounded-2xl bg-neutral-900 flex items-center justify-center shadow-lg">
                                        <ShieldCheck className="w-8 h-8 text-brand-400" />
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em] mb-1">Status</div>
                                        <div className="text-xl font-bold text-green-500 flex items-center gap-2 justify-end">
                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                            Protected
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="h-2 w-full bg-neutral-100 rounded-full overflow-hidden">
                                        <motion.div
                                            animate={{ width: ["20%", "85%", "40%", "95%"] }}
                                            transition={{ duration: 10, repeat: Infinity }}
                                            className="h-full bg-brand-400"
                                        />
                                    </div>
                                    <div className="h-2 w-2/3 bg-neutral-100 rounded-full overflow-hidden">
                                        <motion.div
                                            animate={{ width: ["50%", "10%", "90%", "30%"] }}
                                            transition={{ duration: 8, repeat: Infinity, delay: 1 }}
                                            className="h-full bg-brand-300"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
