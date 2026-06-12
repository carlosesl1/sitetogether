"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, ArrowRight, Database, Users, Code2 } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

// ShapeBlur Implementation
const ShapeBlur = ({ className }: { className?: string }) => {
    return (
        <div className={cn("absolute inset-0 z-0 overflow-hidden bg-[#fffdf0]", className)}>
            <motion.div
                animate={{
                    x: [0, 150, -100, 0],
                    y: [0, -150, 100, 0],
                    scale: [1, 1.4, 0.8, 1]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 -right-40 w-[800px] h-[800px] bg-brand-400/40 blur-[150px] rounded-full"
            />
            <motion.div
                animate={{
                    x: [0, -150, 120, 0],
                    y: [0, 200, -120, 0],
                    scale: [1, 0.7, 1.3, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-60 -left-40 w-[700px] h-[700px] bg-amber-300/30 blur-[150px] rounded-full"
            />
            {/* Fine grain overlay */}
            <div className="absolute inset-0 opacity-[0.2] mix-blend-overlay pointer-events-none"
                style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
        </div>
    );
};

export function HeroV10() {
    return (
        <section className="w-full min-h-[90vh] relative overflow-hidden flex items-center pt-24 pb-32">
            <ShapeBlur />

            <div className="container px-6 relative z-10 mx-auto">
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-10"
                    >
                        <div className="flex items-center gap-2 px-4 py-2 bg-white border border-neutral-100 rounded-2xl shadow-sm">
                            <div className="w-2 h-2 rounded-full bg-brand-500" />
                            <span className="text-[10px] font-black text-neutral-900 uppercase tracking-widest">Premium DPO Lifecycle</span>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-8xl font-black text-neutral-900 leading-[0.9] tracking-tight mb-10"
                    >
                        Privacidade gerida por <br />
                        <span className="text-brand-500">quem entende de dados</span>.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-neutral-500 font-medium leading-relaxed max-w-3xl mb-14"
                    >
                        Desenvolvemos o braço operacional e jurídico que sua empresa precisa para operar com segurança total em um mundo orientado a dados.
                    </motion.p>

                    <div className="flex flex-col sm:flex-row gap-6 mb-24">
                        <Button size="lg" className="h-16 px-12 text-lg font-bold bg-neutral-900 text-white rounded-2xl hover:bg-neutral-800 transition-all shadow-xl hover:shadow-2xl">
                            Solicitar Proposta
                        </Button>
                        <Button size="lg" variant="outline" className="h-16 px-12 text-lg font-bold rounded-2xl border-neutral-200 hover:bg-white transition-all shadow-sm">
                            Agendar Reunião
                        </Button>
                    </div>

                    {/* Partner / Focus Icons */}
                    <div className="w-full pt-16 border-t border-neutral-200/50 flex flex-wrap justify-center gap-16 opacity-40 grayscale group-hover:grayscale-0 transition-all">
                        <div className="flex items-center gap-3">
                            <Database className="w-6 h-6" />
                            <span className="text-sm font-bold uppercase tracking-widest">Data Management</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Code2 className="w-6 h-6" />
                            <span className="text-sm font-bold uppercase tracking-widest">DevSecOps</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Users className="w-6 h-6" />
                            <span className="text-sm font-bold uppercase tracking-widest">DPO Network</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
