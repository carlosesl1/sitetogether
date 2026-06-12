"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Shield, Sparkles, Plus, ArrowRight } from "lucide-react";

export function HeroV4() {
    return (
        <section className="w-full pt-32 pb-40 bg-white relative overflow-hidden flex flex-col items-center justify-center">
            {/* Soft Ambient Light */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-400 opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container px-6 relative z-10 flex flex-col items-center text-center">
                {/* Minimalist Tech Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 mb-10 px-3 py-1 bg-neutral-50 border border-neutral-100 rounded-full"
                >
                    <Sparkles className="w-3 h-3 text-brand-500" />
                    <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest leading-none">Smart Protection System</span>
                </motion.div>

                {/* Refined Headline - No All Caps */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold text-neutral-900 tracking-tight leading-[1.05] max-w-4xl mb-8"
                >
                    Privacidade gerida por <span className="text-brand-500">quem entende de dados</span>.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-neutral-500 font-medium max-w-xl leading-relaxed mb-12"
                >
                    Desenvolvemos o braço operacional e jurídico que sua empresa precisa para operar com segurança total em um mundo orientado a dados.
                </motion.p>

                {/* Central "Glass Core" Asset - Compact & Deep */}
                <div className="relative w-full max-w-md aspect-[4/3] mb-16 flex items-center justify-center perspective-1000">
                    <motion.div
                        initial={{ rotateY: -10, rotateX: 10 }}
                        animate={{ rotateY: 10, rotateX: -10 }}
                        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                        className="relative w-full h-full"
                    >
                        {/* Layer 1: The Base Card */}
                        <div className="absolute inset-4 bg-white/40 backdrop-blur-xl border border-white/60 rounded-[3rem] shadow-2xl flex flex-col p-8 overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-400/20 to-transparent"></div>
                            <div className="flex justify-between items-start mb-8">
                                <div className="w-10 h-10 rounded-2xl bg-neutral-900 flex items-center justify-center shadow-lg">
                                    <Shield className="w-5 h-5 text-brand-400" />
                                </div>
                                <div className="flex flex-col items-end">
                                    <div className="text-[8px] font-black text-neutral-400 uppercase tracking-widest">Security Level</div>
                                    <div className="text-sm font-bold text-neutral-900">Enterprise</div>
                                </div>
                            </div>
                            <div className="mt-auto space-y-4">
                                <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                                    <span className="text-[10px] font-bold text-neutral-400 uppercase">Monitoramento</span>
                                    <span className="text-[10px] font-black text-green-500 uppercase flex items-center gap-1.5">
                                        <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse"></div>
                                        Estável
                                    </span>
                                </div>
                                <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                                    <span className="text-[10px] font-bold text-neutral-400 uppercase">Adequação</span>
                                    <span className="text-[10px] font-black text-neutral-900 uppercase">100% Concluída</span>
                                </div>
                            </div>
                        </div>

                        {/* Layer 2: Floating Detail */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-4 -right-4 bg-neutral-900 p-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/10"
                        >
                            <div className="w-6 h-6 rounded-lg bg-brand-400 flex items-center justify-center">
                                <Plus className="w-3 h-3 text-neutral-900 stroke-[3]" />
                            </div>
                            <span className="text-[9px] font-black text-white uppercase tracking-widest whitespace-nowrap">Nova Política Ativada</span>
                        </motion.div>
                    </motion.div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                    <Button size="lg" className="h-14 px-10 text-sm font-black uppercase tracking-tight rounded-xl shadow-xl shadow-brand-400/20 hover:scale-[1.02] transition-transform active:scale-95">
                        Agendar conversa
                    </Button>
                    <button className="flex items-center gap-2 text-sm font-bold text-neutral-900 group hover:translate-x-1 transition-transform">
                        Explore o ecossistema <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-all" />
                    </button>
                </div>
            </div>
        </section>
    );
}
