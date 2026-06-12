"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap, ArrowRight, Shield } from "lucide-react";
import React, { useMemo } from "react";
import { cn } from "@/lib/utils";

const HyperspeedBackground = () => {
    const trails = useMemo(() => Array.from({ length: 60 }).map((_, i) => ({
        id: i,
        angle: Math.random() * Math.PI * 2,
        distance: 10 + Math.random() * 40,
        length: 50 + Math.random() * 200,
        delay: Math.random() * 2,
        duration: 0.8 + Math.random() * 0.7,
    })), []);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden bg-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(251,191,36,0.05)_0%,transparent_70%)]" />

            <div className="absolute top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2 w-0 h-0">
                {trails.map((trail) => (
                    <motion.div
                        key={trail.id}
                        initial={{
                            x: Math.cos(trail.angle) * trail.distance,
                            y: Math.sin(trail.angle) * trail.distance,
                            width: 0,
                            opacity: 0
                        }}
                        animate={{
                            x: [Math.cos(trail.angle) * trail.distance, Math.cos(trail.angle) * 1000],
                            y: [Math.sin(trail.angle) * trail.distance, Math.sin(trail.angle) * 1000],
                            width: [0, trail.length, 0],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: trail.duration,
                            repeat: Infinity,
                            delay: trail.delay,
                            ease: "circIn",
                        }}
                        className="absolute h-[2px] bg-brand-400 blur-[1px]"
                        style={{
                            transformOrigin: "left center",
                            rotate: `${(trail.angle * 180) / Math.PI}deg`
                        }}
                    />
                ))}
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,white_0%,transparent_60%)] pointer-events-none" />
        </div>
    );
};

export function HeroV12() {
    return (
        <section className="w-full min-h-[85vh] bg-white relative overflow-hidden flex items-center pt-24 pb-32">
            <HyperspeedBackground />

            <div className="container px-6 relative z-10 mx-auto">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-brand-50 border border-brand-100 mb-10"
                    >
                        <Zap className="w-4 h-4 text-brand-600 fill-brand-600" />
                        <span className="text-xs font-black text-brand-700 uppercase tracking-widest">Acelerando Conformidade</span>
                    </motion.div>

                    <h1 className="text-6xl md:text-8xl font-black text-neutral-900 leading-[0.9] tracking-tighter mb-10">
                        Privacidade gerida por <br />
                        <span className="text-brand-500 italic">quem entende de dados</span>.
                    </h1>

                    <p className="text-xl md:text-2xl text-neutral-500 font-medium leading-relaxed max-w-2xl mb-12">
                        Desenvolvemos o braço operacional e jurídico que sua empresa precisa para operar com segurança total em um mundo orientado a dados.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <Button size="lg" className="h-16 px-12 text-lg font-bold bg-neutral-900 text-white rounded-3xl hover:bg-neutral-800 transition-all group">
                            Explorar Plataforma
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button size="lg" variant="ghost" className="h-16 px-12 text-lg font-bold text-neutral-600 hover:text-neutral-900 shadow-sm border border-neutral-100 rounded-3xl bg-white/50 backdrop-blur-md">
                            Falar com Especialista
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
