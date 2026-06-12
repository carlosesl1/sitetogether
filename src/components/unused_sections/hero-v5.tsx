"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle2, Globe, ArrowRight, ShieldCheck, Activity } from "lucide-react";

export function HeroV5() {
    return (
        <section className="w-full min-h-[90vh] bg-white relative overflow-hidden flex items-center pt-20 pb-20">

            {/* 1. Technical Dot Grid - Full Background */}
            <div className="absolute inset-0 z-0 opacity-[0.2]"
                style={{
                    backgroundImage: 'radial-gradient(#e5e5e5 1.2px, transparent 1.2px)',
                    backgroundSize: '32px 32px'
                }}
            />

            {/* 2. Stripe-Grade Ribbon Flow - Full Span with Fade Mask */}
            <div className="absolute inset-0 pointer-events-none z-0 select-none overflow-hidden">
                {/* Horizontal Fade: Keeps the text area clean on the left */}
                <div className="absolute inset-y-0 left-0 w-[40%] bg-gradient-to-r from-white via-white to-transparent z-10"></div>

                <div className="absolute top-0 right-[-5%] w-[80%] h-full skew-y-[-12deg] translate-y-[-10%] origin-top-right">
                    {/* Ribbon 1: Deep Indigo/Purple */}
                    <motion.div
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.1, 0.2, 0.1]
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[5%] left-0 w-full h-[600px] bg-gradient-to-r from-indigo-500/30 via-purple-500/40 to-transparent blur-[120px]"
                    />

                    {/* Ribbon 2: Brand Energy */}
                    <motion.div
                        animate={{
                            y: [0, 40, 0],
                            opacity: [0.2, 0.3, 0.2]
                        }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute top-[20%] left-[-20%] w-[140%] h-[400px] bg-gradient-to-r from-brand-400/40 via-brand-200/50 to-transparent blur-[140px]"
                    />

                    {/* Ribbon 3: Warm Glow */}
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.1, 0.15, 0.1]
                        }}
                        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute top-[35%] right-0 w-[70%] h-[500px] bg-gradient-to-l from-orange-400/30 via-pink-300/20 to-transparent blur-[160px]"
                    />
                </div>
            </div>

            <div className="container px-6 relative z-20 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Left: Refined Content */}
                    <div className="flex flex-col max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3 mb-10"
                        >
                            <div className="w-9 h-9 rounded-xl bg-neutral-900 flex items-center justify-center shadow-lg">
                                <ShieldCheck className="w-5 h-5 text-brand-400" />
                            </div>
                            <span className="text-[11px] font-black text-neutral-900 tracking-[0.2em] px-3 py-1.5 border border-neutral-200 rounded-lg bg-white/90 backdrop-blur-sm shadow-sm font-sans">
                                DPO as a Service
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-[5.5rem] font-bold text-neutral-900 leading-[0.9] tracking-tighter mb-8"
                        >
                            Privacidade gerida por <br />
                            <span className="text-neutral-300 font-medium italic">quem entende de dados</span>.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl text-neutral-500 font-medium leading-relaxed max-w-lg mb-12"
                        >
                            Desenvolvemos o braço operacional e jurídico que sua empresa precisa para operar com segurança total em um mundo orientado a dados.
                        </motion.p>

                        <div className="flex flex-wrap items-center gap-8">
                            <Button size="lg" className="h-16 px-12 text-base font-black tracking-tight rounded-2xl bg-neutral-900 hover:bg-neutral-800 shadow-2xl shadow-neutral-900/10 active:scale-95 transition-all text-white border-0">
                                Solicitar Proposta
                            </Button>
                            <div className="flex items-center gap-3 text-sm font-bold text-neutral-500 hover:text-neutral-900 cursor-pointer transition-all group">
                                <span className="underline decoration-neutral-200 underline-offset-8 group-hover:decoration-brand-400 transition-all">Ver nossa metodologia</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </div>

                    {/* Right: Technical Elements */}
                    <div className="relative flex flex-col gap-6 w-full max-w-lg lg:ml-auto select-none">

                        {/* Modular Card 1: Global Intel */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white/90 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.06)] border border-white relative z-10 group hover:border-brand-300 transition-all duration-500"
                        >
                            <div className="flex justify-between items-center mb-10">
                                <div className="w-12 h-12 rounded-2xl bg-neutral-900 flex items-center justify-center shadow-xl">
                                    <Globe className="w-6 h-6 text-brand-400" />
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="text-[9px] font-black text-neutral-300 uppercase tracking-widest">Network Live</span>
                                    <span className="text-[10px] font-black text-brand-500 uppercase flex items-center gap-2">
                                        Active Node
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <div className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-2">Global Compliance</div>
                                <div className="text-2xl font-bold text-neutral-900 tracking-tight">LGPD + GDPR + CCPA</div>
                            </div>
                        </motion.div>

                        {/* Modular Card 2: The Technical Core */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-neutral-900 p-10 rounded-[3rem] shadow-[0_60px_100px_rgba(0,0,0,0.2)] relative z-20 group hover:scale-[1.02] transition-transform duration-500"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                                <Activity className="w-40 h-40 text-white" />
                            </div>
                            <div className="flex justify-between items-start mb-12 relative z-10">
                                <div>
                                    <div className="text-[10px] font-black text-brand-400 uppercase tracking-[0.3em] mb-2">Privacy Health</div>
                                    <div className="text-3xl font-black text-white tracking-tighter">98.4% Secure</div>
                                </div>
                                <div className="bg-brand-400 p-2.5 rounded-xl">
                                    <Activity className="w-6 h-6 text-neutral-900" />
                                </div>
                            </div>
                            <div className="flex gap-2.5 h-12 items-end relative z-10">
                                {[0.6, 1.2, 0.8, 1.5, 1.0, 1.8, 1.2, 1.6, 0.9, 1.4, 0.7].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ height: [`${h * 20}%`, `${h * 100}%`, `${h * 20}%`] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                                        className="flex-1 bg-white/10 rounded-sm hover:bg-brand-400/50 transition-colors"
                                    />
                                ))}
                            </div>
                        </motion.div>

                        {/* Modular Card 3: Status */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="bg-white/95 backdrop-blur-lg p-6 rounded-[1.5rem] shadow-xl border border-white relative z-10 flex items-center justify-between group overflow-hidden"
                        >
                            <div className="flex items-center gap-6 relative z-10">
                                <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-[10px] font-black text-neutral-300 uppercase tracking-widest mb-1">Status de Operação</div>
                                    <div className="text-base font-bold text-neutral-900">Monitoramento Ativo 24/7</div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
