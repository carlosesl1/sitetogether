"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Zap, Lock, Eye } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// GridPattern Implementation
const GridPattern = ({ className }: { className?: string }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const maskImage = useTransform(
        [mouseX, mouseY],
        ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, black, transparent)`
    );

    return (
        <div
            onMouseMove={onMouseMove}
            className={cn("absolute inset-0 z-0 h-full w-full bg-[#fffdf5]", className)}
        >
            <div className="absolute inset-0 h-full w-full bg-white [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" />
            <motion.div
                className="absolute inset-0 z-10 h-full w-full bg-[linear-gradient(to_right,#d4d4d4_1px,transparent_1px),linear-gradient(to_bottom,#d4d4d4_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:var(--mask-image)]"
                style={{
                    //@ts-ignore
                    "--mask-image": maskImage,
                }}
            />
            <div className="absolute inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#f5f5f5_1px,transparent_1px),linear-gradient(to_bottom,#f5f5f5_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
    );
};

export function HeroV8() {
    return (
        <section className="w-full min-h-[85vh] bg-white relative overflow-hidden flex items-center pt-24 pb-32">
            <GridPattern className="opacity-80" />

            <div className="container px-6 relative z-10 mx-auto">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-xs font-black uppercase tracking-widest mb-10"
                    >
                        <Zap className="w-3 h-3 fill-current" />
                        <span>Modern Privacy Infrastructure</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold text-neutral-900 leading-[1.1] tracking-tight mb-8"
                    >
                        Privacidade gerida por <br />
                        <span className="text-brand-500 font-black">quem entende de dados</span>.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-neutral-500 font-medium leading-relaxed max-w-2xl mb-12"
                    >
                        Desenvolvemos o braço operacional e jurídico que sua empresa precisa para operar com segurança total em um mundo orientado a dados.
                    </motion.p>

                    <div className="flex flex-wrap gap-5 mb-16">
                        <Button size="lg" className="h-14 px-8 text-base font-bold bg-neutral-900 hover:bg-neutral-800 text-white rounded-2xl transition-all group">
                            Começar Agora
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-8 text-base font-bold rounded-2xl border-neutral-200 text-neutral-600 transition-all hover:bg-neutral-50">
                            Ver Demonstração
                        </Button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-neutral-100">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-neutral-50 flex items-center justify-center">
                                <Lock className="w-4 h-4 text-neutral-400" />
                            </div>
                            <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Segurança 360</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-neutral-50 flex items-center justify-center">
                                <Eye className="w-4 h-4 text-neutral-400" />
                            </div>
                            <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Visibilidade Total</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-brand-400/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
}

const ArrowRight = ({ className }: { className?: string }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
);
