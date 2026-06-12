"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Shield, Zap, Lock, ArrowRight } from "lucide-react";

export function HeroV1() {
    return (
        <section className="w-full pt-32 pb-40 bg-white relative overflow-hidden flex flex-col items-center justify-center">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,214,55,0.05),transparent_70%)]"></div>
                {/* Animated Light Beams */}
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            x: ["-100%", "200%"],
                            opacity: [0, 0.5, 0]
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            delay: i * 3,
                            ease: "linear"
                        }}
                        className="absolute h-px w-[600px] bg-gradient-to-r from-transparent via-brand-400 to-transparent top-1/4"
                        style={{ top: `${20 + i * 20}%`, rotate: "-15deg" }}
                    />
                ))}
            </div>

            <div className="container px-6 relative z-10 flex flex-col items-center text-center">
                {/* Top Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-12 shadow-2xl"
                >
                    <span className="flex h-2 w-2 rounded-full bg-brand-400 animate-pulse"></span>
                    The Future of Data Privacy
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl md:text-8xl font-black text-neutral-900 tracking-tighter leading-[0.9] max-w-5xl mb-12"
                >
                    Privacidade gerida por <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-brand-400 to-brand-600">quem entende de dados</span>.
                </motion.h1>

                {/* Central Kinetic Core Visual */}
                <div className="relative w-full max-w-lg aspect-square mb-12 flex items-center justify-center">
                    {/* Pulsing Circles */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="w-full h-full rounded-full border border-brand-400 border-dashed"
                        />
                        <motion.div
                            animate={{ scale: [1.2, 1.4, 1.2], opacity: [0.05, 0.1, 0.05] }}
                            transition={{ duration: 6, repeat: Infinity }}
                            className="absolute w-full h-full rounded-full border border-neutral-200"
                        />
                    </div>

                    {/* The Master Shield Card */}
                    <motion.div
                        whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
                        className="relative z-20 bg-white/80 backdrop-blur-2xl p-10 rounded-[2.5rem] border border-white shadow-[0_50px_100px_rgba(0,0,0,0.1)] group transition-all duration-500 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-400/10 to-transparent pointer-events-none"></div>
                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-24 h-24 bg-neutral-900 rounded-[2rem] flex items-center justify-center shadow-2xl mb-6 group-hover:scale-110 transition-transform duration-500">
                                <Shield className="w-10 h-10 text-brand-400" />
                            </div>
                            <div className="text-sm font-black text-neutral-900 uppercase tracking-widest mb-2 font-mono">Managed DPO System</div>
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Active Protection Layer</span>
                                <div className="flex gap-1">
                                    {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 rounded-full bg-brand-400 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />)}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Floating Tech Badges */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-10 -right-20 bg-white p-4 rounded-2xl shadow-xl border border-neutral-100 flex items-center gap-3"
                    >
                        <Zap className="w-5 h-5 text-brand-500" />
                        <span className="text-[10px] font-black uppercase text-neutral-900 tracking-tight">Real-time Response</span>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute -bottom-10 -left-20 bg-white p-4 rounded-2xl shadow-xl border border-neutral-100 flex items-center gap-3"
                    >
                        <Lock className="w-5 h-5 text-neutral-400" />
                        <span className="text-[10px] font-black uppercase text-neutral-900 tracking-tight">Legal Safeguard</span>
                    </motion.div>
                </div>

                {/* Sub-copy */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-lg text-neutral-500 font-medium max-w-2xl leading-relaxed mb-12"
                >
                    Desenvolvemos o braço operacional e jurídico que sua empresa precisa para operar com segurança total em um mundo orientado a dados.
                </motion.p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-6">
                    <Button size="lg" className="h-16 px-10 text-lg font-black uppercase tracking-tight rounded-[1.25rem] shadow-[0_20px_40px_rgba(255,214,55,0.3)] hover:scale-105 transition-transform">
                        Iniciar Diagnóstico
                    </Button>
                    <button className="h-16 px-10 text-lg font-bold text-neutral-900 group flex items-center gap-2 hover:translate-x-1 transition-transform">
                        Ver como funciona <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
}
