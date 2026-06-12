"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Shield, Check, Star } from "lucide-react";

export function HeroV3() {
    return (
        <section className="w-full min-h-screen bg-[#050505] relative overflow-hidden flex flex-col items-center justify-center py-32 px-6">
            {/* Cinematic Lighting Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-400/5 blur-[150px] rounded-full pointer-events-none"></div>

            {/* Top Badge: Review / Authority */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-4 mb-16 px-6 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-md"
            >
                <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 text-brand-400 fill-current" />)}
                </div>
                <div className="h-4 w-px bg-white/10"></div>
                <span className="text-[10px] font-black text-white uppercase tracking-widest">Top Rated DPO Service 2024</span>
            </motion.div>

            {/* Massive Editorial Headline */}
            <div className="relative text-center mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[4.5rem] md:text-[8rem] lg:text-[10rem] font-black text-white tracking-tighter leading-[0.8] mix-blend-difference"
                >
                    PRIVACIDADE <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-tr from-brand-300 via-brand-500 to-white">GERIDA POR QUEM ENTENDE DE DADOS</span>.
                </motion.h1>

                {/* Floating Shield Layer behind text */}
                <motion.div
                    animate={{
                        rotateY: [0, 10, -10, 0],
                        rotateX: [0, -10, 10, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-20"
                >
                    <Shield className="w-[500px] h-[500px] text-brand-400 stroke-[1]" />
                </motion.div>
            </div>

            {/* Minimal Subcopy */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-xl md:text-2xl text-neutral-400 font-light max-w-3xl text-center leading-relaxed mb-16 px-4"
            >
                Desenvolvemos o braço operacional e jurídico que sua empresa precisa para operar com segurança total em um mundo orientado a dados.
            </motion.p>

            {/* CTA Group */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="flex flex-col sm:flex-row items-center gap-8"
            >
                <Button size="lg" className="h-16 px-12 text-lg font-black bg-white text-black hover:bg-neutral-200 transition-all rounded-full shadow-[0_0_50px_rgba(255,255,255,0.15)] uppercase tracking-tight">
                    Falar com Estrategista
                </Button>

                {/* Minimal Proof Point */}
                <div className="flex flex-col gap-2">
                    {[
                        "Diagnóstico Gratuito",
                        "Setup em 48h",
                        "Time Legal Próprio"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="w-4 h-4 rounded-full bg-brand-400 flex items-center justify-center">
                                <Check className="w-2.5 h-2.5 text-black stroke-[4]" />
                            </div>
                            <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest">{item}</span>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
            >
                <div className="w-px h-12 bg-white/20"></div>
                <span className="text-[8px] font-black text-white uppercase tracking-[0.4em] rotate-90 origin-left translate-x-1 mt-4">Scroll</span>
            </motion.div>
        </section>
    );
}
