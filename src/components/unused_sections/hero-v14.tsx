"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Globe, ArrowRight, Database } from "lucide-react";
import React, { useMemo } from "react";
import { cn } from "@/lib/utils";

const Wave = ({ delay, duration, path, color }: { delay: number, duration: number, path: string, color: string }) => (
    <motion.path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth="0.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: [0, 0.3, 0] }}
        transition={{
            duration,
            repeat: Infinity,
            delay,
            ease: "easeInOut",
        }}
    />
);

const SplashBackground = () => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden bg-white">
            <div className="absolute top-0 right-0 w-full h-full opacity-40">
                <svg viewBox="0 0 100 100" className="w-[150%] h-[150%] -translate-x-1/4 -translate-y-1/4">
                    <Wave
                        color="#fbbf24"
                        delay={0}
                        duration={10}
                        path="M 0 50 Q 25 30 50 50 T 100 50 Q 125 70 150 50"
                    />
                    <Wave
                        color="#f59e0b"
                        delay={2}
                        duration={12}
                        path="M 0 60 Q 30 40 60 60 T 120 60"
                    />
                    <Wave
                        color="#fbbf24"
                        delay={5}
                        duration={15}
                        path="M -20 40 Q 20 20 40 40 T 80 40"
                    />
                </svg>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-brand-400/5 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 backdrop-blur-[80px]" />
        </div>
    );
};

export function HeroV14() {
    return (
        <section className="w-full min-h-[85vh] bg-white relative overflow-hidden flex items-center pt-24 pb-32">
            <SplashBackground />

            <div className="container px-6 relative z-10 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="flex flex-col">
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3 mb-10"
                        >
                            <div className="w-10 h-10 rounded-2xl bg-brand-400 flex items-center justify-center shadow-lg shadow-brand-400/20">
                                <Globe className="w-5 h-5 text-neutral-900" />
                            </div>
                            <span className="text-sm font-black text-neutral-900 uppercase tracking-widest">Global Governance Standard</span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-black text-neutral-900 leading-tight mb-8">
                            Privacidade gerida por <br />
                            <span className="text-brand-500 italic underline decoration-neutral-100 underline-offset-8">quem entende de dados</span>.
                        </h1>

                        <p className="text-lg md:text-xl text-neutral-400 font-medium leading-relaxed max-w-lg mb-12">
                            Desenvolvemos o braço operacional e jurídico que sua empresa precisa para operar com segurança total em um mundo orientado a dados.
                        </p>

                        <div className="flex flex-wrap gap-5">
                            <Button size="lg" className="h-14 px-10 text-base font-bold bg-neutral-900 text-white rounded-2xl group transition-all">
                                Solicitar Assessment
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="grid grid-cols-2 gap-6 relative z-10">
                            <div className="bg-white/80 backdrop-blur-xl p-8 rounded-[2rem] border border-neutral-100 shadow-xl shadow-neutral-900/5">
                                <Database className="w-8 h-8 text-brand-500 mb-6" />
                                <div className="text-xs font-black text-neutral-400 uppercase tracking-widest mb-1">Data Inventory</div>
                                <div className="text-2xl font-bold text-neutral-900 font-sans">100% Mapped</div>
                            </div>
                            <div className="bg-white/80 backdrop-blur-xl p-8 rounded-[2rem] border border-neutral-100 shadow-xl shadow-neutral-900/5 translate-y-12">
                                <ShieldCheck className="w-8 h-8 text-brand-500 mb-6" />
                                <div className="text-xs font-black text-neutral-400 uppercase tracking-widest mb-1">Impact Level</div>
                                <div className="text-2xl font-bold text-neutral-900 font-sans">High Security</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const ShieldCheck = ({ className }: { className?: string }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" />
    </svg>
);
