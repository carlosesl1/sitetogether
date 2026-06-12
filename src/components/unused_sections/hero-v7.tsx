"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Database, FileLock2, Globe } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

// AuroraBackground Implementation
const AuroraBackground = ({ className, children }: { className?: string, children: React.ReactNode }) => {
    return (
        <div className={cn("relative flex flex-col items-center justify-center bg-[#fffcf0] transition-bg", className)}>
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className={cn(`
            [--aurora:repeating-linear-gradient(100deg,#f59e0b_10%,#fbbf24_15%,#f59e0b_20%,#fbbf24_25%,#f59e0b_30%)]
            [background-image:var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,_50%_50%]
            filter blur-[100px] opacity-[0.25]
            after:content-[""] 
            after:absolute 
            after:inset-0 
            after:[background-image:var(--aurora)]
            after:[background-size:200%,_100%] 
            after:animate-aurora
            pointer-events-none
          `)}
                />
            </div>
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.06] pointer-events-none z-0 mix-blend-multiply"
                style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none z-0" />
            {children}
        </div>
    );
};

export function HeroV7() {
    return (
        <AuroraBackground className="w-full min-h-[90vh]">
            <div className="container px-6 relative z-10 mx-auto py-20">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 mb-8 bg-neutral-900/5 backdrop-blur-md px-4 py-2 rounded-full border border-neutral-900/10 shadow-sm"
                    >
                        <ShieldCheck className="w-4 h-4 text-brand-500" />
                        <span className="text-xs font-black text-neutral-900 uppercase tracking-widest">DPO as a Service</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-8xl font-black text-neutral-900 leading-[0.95] tracking-tight mb-10"
                    >
                        Privacidade gerida por <br />
                        <span className="text-brand-500 italic drop-shadow-sm">quem entende de dados</span>.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-neutral-500 font-medium leading-relaxed max-w-2xl mb-12"
                    >
                        Desenvolvemos o braço operacional e jurídico que sua empresa precisa para operar com segurança total em um mundo orientado a dados.
                    </motion.p>

                    <div className="flex flex-wrap justify-center gap-6">
                        <Button size="lg" className="h-16 px-10 text-lg font-bold shadow-2xl shadow-brand-400/30 hover:scale-[1.02] active:scale-95 transition-all">
                            Conhecer Soluções
                        </Button>
                        <Button size="lg" variant="ghost" className="h-16 px-10 text-lg font-bold text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 border-b-2 border-transparent hover:border-brand-400 rounded-none transition-all">
                            Saiba Mais
                        </Button>
                    </div>

                    {/* Minimalist Floating Icons */}
                    <div className="mt-20 flex gap-12 text-neutral-300">
                        <Database className="w-8 h-8" />
                        <FileLock2 className="w-8 h-8" />
                        <Globe className="w-8 h-8" />
                    </div>
                </div>
            </div>
        </AuroraBackground>
    );
}
