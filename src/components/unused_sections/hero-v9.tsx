"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, ArrowRight, Zap, Globe } from "lucide-react";
import React, { useMemo } from "react";
import { cn } from "@/lib/utils";

// HyperSpeed Implementation
const HyperSpeed = ({ className }: { className?: string }) => {
    const lines = useMemo(() => Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        width: 100 + Math.random() * 300,
        delay: Math.random() * 2,
        duration: 0.4 + Math.random() * 1.2,
    })), []);

    return (
        <div className={cn("absolute inset-0 z-0 overflow-hidden bg-[#fffdfa]", className)}>
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-brand-50/30" />
            {lines.map((line) => (
                <motion.div
                    key={line.id}
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: "200%", opacity: [0, 1, 1, 0] }}
                    transition={{
                        duration: line.duration,
                        repeat: Infinity,
                        delay: line.delay,
                        ease: "linear",
                    }}
                    className="absolute h-[2px] bg-brand-500"
                    style={{
                        left: `${line.left}%`,
                        top: `${line.top}%`,
                        width: `${line.width}px`,
                    }}
                />
            ))}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,white_90%)]" />
        </div>
    );
};

export function HeroV9() {
    return (
        <section className="w-full min-h-[85vh] relative overflow-hidden flex items-center pt-24 pb-32">
            <HyperSpeed />

            <div className="container px-6 relative z-10 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="flex flex-col">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-fit flex items-center gap-2 px-4 py-1.5 rounded-xl bg-neutral-900 text-white mb-10 shadow-2xl"
                        >
                            <div className="w-5 h-5 rounded-lg bg-brand-400 flex items-center justify-center">
                                <Zap className="w-3 h-3 text-neutral-900" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest">Next-Gen DPO Services</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-6xl md:text-7xl font-black text-neutral-900 leading-[1] tracking-tight mb-8"
                        >
                            Privacidade gerida por <br />
                            <span className="text-brand-500">quem entende de dados</span>.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-neutral-500 font-medium leading-relaxed max-w-lg mb-12"
                        >
                            Desenvolvemos o braço operacional e jurídico que sua empresa precisa para operar com segurança total em um mundo orientado a dados.
                        </motion.p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="h-14 px-10 text-base font-black bg-brand-400 text-neutral-900 hover:bg-brand-500 rounded-full transition-all group">
                                Iniciar Diagnóstico
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button size="lg" variant="outline" className="h-14 px-10 text-base font-bold rounded-full border-neutral-200 hover:bg-white active:scale-95 transition-all">
                                Ver Soluções
                            </Button>
                        </div>
                    </div>

                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, rotate: -5, scale: 0.95 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            className="relative z-10 bg-white p-2 rounded-[3rem] shadow-2xl border border-neutral-100"
                        >
                            <div className="bg-neutral-50 rounded-[2.8rem] p-8 md:p-12 overflow-hidden relative">
                                <div className="flex justify-between items-start mb-12">
                                    <div>
                                        <div className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em] mb-2">Technical Core</div>
                                        <div className="text-3xl font-black text-neutral-900">Privacy Ops</div>
                                    </div>
                                    <div className="w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center border border-neutral-100">
                                        <Globe className="w-6 h-6 text-brand-400" />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="h-16 w-full bg-white rounded-2xl shadow-sm border border-neutral-100 flex items-center px-6 gap-4">
                                        <div className="w-2 h-2 rounded-full bg-brand-400" />
                                        <div className="text-sm font-bold text-neutral-900">Mapeamento de Fluxos</div>
                                    </div>
                                    <div className="h-16 w-full bg-white rounded-2xl shadow-sm border border-neutral-100 flex items-center px-6 gap-4">
                                        <div className="w-2 h-2 rounded-full bg-neutral-200" />
                                        <div className="text-sm font-bold text-neutral-900">Gestão Jurídica</div>
                                    </div>
                                    <div className="h-16 w-full bg-white/50 blur-[1px] rounded-2xl border border-dashed border-neutral-200 flex items-center px-6 gap-4">
                                        <div className="w-2 h-2 rounded-full bg-neutral-100" />
                                        <div className="text-sm font-bold text-neutral-300">Conformidade Automatizada</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Decorative background circle */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-400/5 rounded-full blur-[100px] z-0" />
                    </div>
                </div>
            </div>
        </section>
    );
}
