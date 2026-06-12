"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, Database, FileLock2, Globe, Code2, Users } from "lucide-react";
import { ThreeBackground } from "./three-background";

export function HeroV2() {
    return (
        <section className="w-full min-h-[85vh] bg-[#fafafa] relative overflow-hidden flex items-center pt-20 pb-32">

            {/* High-Level 3D Animated Background */}
            <ThreeBackground />

            {/* Subtle Gradient Overlay to ensure text legibility */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#fafafa] to-transparent pointer-events-none z-0"></div>

            <div className="container px-6 relative z-10 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left: Refined Technical Copy */}
                    <div className="flex flex-col max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3 mb-8"
                        >
                            <div className="w-9 h-9 rounded-xl bg-neutral-900 flex items-center justify-center shadow-lg">
                                <ShieldCheck className="w-5 h-5 text-brand-400" />
                            </div>
                            <span className="text-sm font-bold text-neutral-900 px-3 py-1 border border-neutral-200 rounded-full bg-white/80 backdrop-blur-sm">DPO as a Service</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-6xl sm:text-6xl font-black text-neutral-900 leading-[1.05] tracking-tight mb-8"
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
                            <Button size="lg" variant="outline" className="h-14 px-8 text-base font-medium rounded-xl border-neutral-200 hover:bg-white transition-all active:scale-95">
                                Ver Escopo de Atuação
                            </Button>
                        </div>
                    </div>

                    {/* Right: The Integrated Perspective (Refined Modular UI) */}
                    <div className="relative flex items-center justify-center py-10">
                        {/* Floating Modules Layout */}
                        <div className="relative grid grid-cols-2 gap-5 w-full max-w-lg z-10 p-4">

                            {/* Module 1: Data Pulse */}
                            <motion.div
                                initial={{ opacity: 0, y: 30, rotateX: 15 }}
                                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="bg-white/80 p-5 rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.03)] border border-white/50 backdrop-blur-xl hover:shadow-xl transition-shadow group"
                            >
                                <div className="w-9 h-9 rounded-xl bg-brand-50 flex items-center justify-center mb-12 border border-brand-100">
                                    <Database className="w-4 h-4 text-brand-600" />
                                </div>
                                <div className="space-y-1">
                                    <div className="text-[9px] font-black text-neutral-400 uppercase tracking-widest mb-1.5 flex items-center gap-1.5 overflow-hidden">
                                        Mapeamento Ativo
                                        <span className="w-1 h-1 rounded-full bg-brand-400 animate-pulse"></span>
                                    </div>
                                    <div className="text-xl font-bold text-neutral-900 tracking-tight">98.4%</div>
                                    <div className="h-1 w-full bg-neutral-50 rounded-full overflow-hidden">
                                        <div className="h-full bg-brand-400 w-[94%]" />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Module 2: Legal Safeguard */}
                            <motion.div
                                initial={{ opacity: 0, y: 30, rotateX: 15 }}
                                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="bg-neutral-900/90 p-5 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.15)] mt-12 hover:scale-[1.02] transition-transform backdrop-blur-xl border border-white/10"
                            >
                                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center mb-12 border border-white/5">
                                    <FileLock2 className="w-4 h-4 text-brand-400" />
                                </div>
                                <div className="space-y-1">
                                    <div className="text-[9px] font-black text-white/30 uppercase tracking-widest mb-1.5">Estrutura Jurídica</div>
                                    <div className="text-xl font-bold text-white tracking-tight">Full Compliance</div>
                                    <div className="flex gap-1 pt-1">
                                        {[1, 2, 3, 4].map(i => <div key={i} className="h-0.5 w-3 bg-brand-400/40 rounded-full" />)}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Module 3: Central Integration Hub */}
                            <motion.div
                                initial={{ opacity: 0, y: 30, rotateX: 15 }}
                                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="bg-white/80 p-6 rounded-[2.5rem] shadow-[0_25px_50px_rgba(0,0,0,0.04)] border border-white/50 col-span-2 -mt-2 relative overflow-hidden group hover:shadow-2xl transition-all backdrop-blur-xl"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="flex items-center justify-between relative z-10">
                                    <div className="flex items-center gap-5">
                                        <div className="w-14 h-14 rounded-full bg-neutral-900 flex items-center justify-center shadow-lg border border-white/10 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-brand-400/10 blur-xl"></div>
                                            <Globe className="w-6 h-6 text-brand-400 relative z-10" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-1">Arquitetura Global</div>
                                            <div className="text-xl font-black text-neutral-900 tracking-tighter">LGPD + GDPR + CCPA</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="px-2 py-0.5 rounded-md bg-brand-50 border border-brand-100 text-[8px] font-black text-brand-600 uppercase tracking-widest">Active</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Background Floating Elements */}
                        <div className="absolute inset-0 pointer-events-none z-0">
                            <motion.div
                                animate={{ opacity: [0.05, 0.1, 0.05], scale: [0.9, 1.1, 0.9] }}
                                transition={{ duration: 6, repeat: Infinity }}
                                className="absolute -top-10 right-0"
                            >
                                <Code2 className="w-40 h-40 text-neutral-200" />
                            </motion.div>
                            <motion.div
                                animate={{ opacity: [0.05, 0.1, 0.05], x: [0, 30, 0] }}
                                transition={{ duration: 5, repeat: Infinity }}
                                className="absolute bottom-0 left-0"
                            >
                                <Users className="w-32 h-32 text-neutral-200" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
