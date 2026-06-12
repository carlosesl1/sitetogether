"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, ArrowRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

// BackgroundBeams Implementation
const BackgroundBeams = ({ className }: { className?: string }) => {
    const [beams, setBeams] = useState<any[]>([]);

    useEffect(() => {
        const beamCount = 12;
        const newBeams = Array.from({ length: beamCount }).map((_, i) => ({
            id: i,
            delay: Math.random() * 8,
            duration: 7 + Math.random() * 8,
            path: Math.random() * 100,
        }));
        setBeams(newBeams);
    }, []);

    return (
        <div className={cn("absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[#fffdf5]", className)}>
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor="#f59e0b" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                </defs>
                {beams.map((beam) => (
                    <motion.rect
                        key={beam.id}
                        initial={{ x: "-60%", y: `${beam.path}%`, opacity: 0 }}
                        animate={{ x: "160%", opacity: [0, 0.8, 0.8, 0] }}
                        transition={{
                            duration: beam.duration,
                            repeat: Infinity,
                            delay: beam.delay,
                            ease: "linear",
                        }}
                        width="60%"
                        height="4"
                        fill="url(#beam-gradient)"
                    />
                ))}
            </svg>
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-brand-400/20 to-transparent blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[40%] h-full bg-gradient-to-tr from-brand-400/10 to-transparent blur-[120px]" />
        </div>
    );
};

export function HeroV6() {
    return (
        <section className="w-full min-h-[85vh] bg-white relative overflow-hidden flex items-center pt-20 pb-32">
            <BackgroundBeams />

            <div className="container px-6 relative z-10 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div className="flex flex-col max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3 mb-8"
                        >
                            <div className="w-9 h-9 rounded-xl bg-neutral-900 flex items-center justify-center shadow-lg">
                                <ShieldCheck className="w-5 h-5 text-brand-400" />
                            </div>
                            <span className="text-sm font-bold text-neutral-900 px-3 py-1 border border-neutral-200 rounded-full bg-white/80 backdrop-blur-sm shadow-sm font-sans uppercase tracking-[0.1em]">DPO as a Service</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-6xl font-black text-neutral-900 leading-[1.05] tracking-tight mb-8"
                        >
                            Privacidade gerida por <br />
                            <span className="text-brand-500 italic">quem entende de dados</span>.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-neutral-500 font-medium leading-relaxed max-w-lg mb-10"
                        >
                            Desenvolvemos o braço operacional e jurídico que sua empresa precisa para operar com segurança total em um mundo orientado a dados.
                        </motion.p>

                        <div className="flex flex-wrap gap-4">
                            <Button size="lg" className="h-14 px-8 text-base font-bold shadow-xl shadow-brand-400/20 active:scale-95 transition-all">
                                Conhecer Soluções
                            </Button>
                            <Button size="lg" variant="outline" className="h-14 px-8 text-base font-medium rounded-xl border-neutral-200 hover:bg-neutral-50 active:scale-95 transition-all">
                                Ver Escopo de Atuação
                            </Button>
                        </div>
                    </div>

                    <div className="relative group">
                        {/* Visual Representation of Active Monitoring */}
                        <div className="bg-neutral-900 p-1 rounded-[2.5rem] shadow-2xl overflow-hidden">
                            <div className="bg-white p-10 rounded-[2.3rem] flex flex-col gap-6 relative overflow-hidden">
                                <div className="flex justify-between items-center relative z-10">
                                    <div className="text-xs font-black text-neutral-400 uppercase tracking-widest">Privacy Radar</div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-[10px] font-black text-neutral-900 uppercase">Live Operations</span>
                                    </div>
                                </div>
                                <div className="h-40 w-full relative group">
                                    <div className="absolute inset-0 bg-neutral-50 rounded-2xl flex items-center justify-center border border-dashed border-neutral-200 overflow-hidden">
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                            className="w-64 h-64 border border-brand-400/20 rounded-full flex items-center justify-center"
                                        >
                                            <div className="w-1 h-32 bg-gradient-to-t from-brand-400 to-transparent absolute top-0 origin-bottom" />
                                        </motion.div>
                                        <div className="absolute text-[10px] font-black text-neutral-300">Scanning Risks...</div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-100">
                                        <div className="text-[9px] font-black text-neutral-400 uppercase mb-1">Risk Level</div>
                                        <div className="text-lg font-bold text-neutral-900">Low Privacy Risk</div>
                                    </div>
                                    <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-100">
                                        <div className="text-[9px] font-black text-neutral-400 uppercase mb-1">Uptime</div>
                                        <div className="text-lg font-bold text-neutral-900">99.98% Managed</div>
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
