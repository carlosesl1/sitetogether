"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, ArrowRight, Layers } from "lucide-react";
import React, { useMemo } from "react";
import { cn } from "@/lib/utils";

const PerspectiveGrid = () => {
    const pulses = useMemo(() => Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        col: Math.floor(Math.random() * 10),
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4
    })), []);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden bg-white [perspective:1000px]">
            <div
                className="absolute inset-x-0 bottom-0 h-[150%] w-full origin-bottom"
                style={{
                    transform: "rotateX(60deg)",
                    backgroundImage: 'linear-gradient(to right, #f3f4f6 1px, transparent 1px), linear-gradient(to bottom, #f3f4f6 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }}
            >
                {pulses.map((pulse) => (
                    <motion.div
                        key={pulse.id}
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: "-100%", opacity: [0, 1, 0] }}
                        transition={{
                            duration: pulse.duration,
                            repeat: Infinity,
                            delay: pulse.delay,
                            ease: "linear"
                        }}
                        className="absolute h-40 bg-gradient-to-t from-brand-400 to-transparent opacity-20"
                        style={{
                            width: "60px",
                            left: `${pulse.col * 60}px`
                        }}
                    />
                ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
        </div>
    );
};

export function HeroV15() {
    return (
        <section className="w-full min-h-[90vh] bg-white relative overflow-hidden flex items-center pt-24 pb-40">
            <PerspectiveGrid />

            <div className="container px-6 relative z-10 mx-auto">
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-xl mb-12"
                    >
                        <Layers className="w-4 h-4 text-brand-400" />
                        <span className="text-xs font-black text-white uppercase tracking-[0.2em]">Institutional Privacy Scale</span>
                    </motion.div>

                    <h1 className="text-6xl md:text-9xl font-black text-neutral-900 leading-[0.85] tracking-tight mb-12">
                        Privacidade <br />
                        <span className="text-brand-500">gerida por quem entende de dados</span>.
                    </h1>

                    <p className="text-xl md:text-2xl text-neutral-500 font-medium leading-relaxed max-w-3xl mb-16">
                        Desenvolvemos o braço operacional e jurídico que sua empresa precisa para operar com segurança total em um mundo orientado a dados.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <Button size="lg" className="h-16 px-16 text-lg font-bold bg-neutral-900 text-white rounded-[2rem] hover:bg-neutral-800 transition-all shadow-2xl active:scale-95">
                            Falar com Time Comercial
                        </Button>
                        <Button size="lg" variant="outline" className="h-16 px-16 text-lg font-bold rounded-[2rem] border-neutral-200 hover:bg-neutral-50 transition-all bg-white shadow-sm">
                            Estudos de Caso
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
