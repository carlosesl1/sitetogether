"use client";

import { motion, useSpring, useMotionValue } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Target, MousePointer2 } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const Dot = ({ mouseX, mouseY, basePos }: { mouseX: any, mouseY: any, basePos: { x: number, y: number } }) => {
    const distanceX = useMotionValue(0);
    const distanceY = useMotionValue(0);
    const scale = useSpring(1, { stiffness: 300, damping: 20 });
    const colorOpacity = useSpring(0, { stiffness: 300, damping: 20 });

    useEffect(() => {
        const unsubscribeX = mouseX.on("change", (v: number) => {
            const dx = v - basePos.x;
            const dy = mouseY.get() - basePos.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 150) {
                scale.set(1 + (150 - dist) / 100);
                colorOpacity.set((150 - dist) / 150);
            } else {
                scale.set(1);
                colorOpacity.set(0);
            }
        });
        return () => unsubscribeX();
    }, [basePos.x, basePos.y, mouseX, mouseY, scale, colorOpacity]);

    return (
        <motion.div
            style={{
                scale,
                left: basePos.x,
                top: basePos.y,
            }}
            className="absolute"
        >
            <div className="w-1.5 h-1.5 rounded-full bg-neutral-200" />
            <motion.div
                style={{ opacity: colorOpacity }}
                className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-brand-400 blur-[2px]"
            />
        </motion.div>
    );
};

const ProximityGrid = () => {
    const mouseX = useMotionValue(-1000);
    const mouseY = useMotionValue(-1000);
    const containerRef = useRef<HTMLDivElement>(null);
    const [dots, setDots] = useState<{ x: number, y: number }[]>([]);

    useEffect(() => {
        const calculateDots = () => {
            const spacing = 50;
            const cols = Math.ceil(window.innerWidth / spacing);
            const rows = Math.ceil(window.innerHeight / spacing);
            const newDots = [];
            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    newDots.push({ x: i * spacing + spacing / 2, y: j * spacing + spacing / 2 });
                }
            }
            setDots(newDots);
        };
        calculateDots();
        window.addEventListener('resize', calculateDots);
        return () => window.removeEventListener('resize', calculateDots);
    }, []);

    return (
        <div
            ref={containerRef}
            onMouseMove={(e) => {
                mouseX.set(e.clientX);
                mouseY.set(e.clientY);
            }}
            className="absolute inset-0 z-0 overflow-hidden bg-white"
        >
            {dots.map((dot, i) => (
                <Dot key={i} mouseX={mouseX} mouseY={mouseY} basePos={dot} />
            ))}
        </div>
    );
};

export function HeroV13() {
    return (
        <section className="w-full min-h-[90vh] bg-white relative overflow-hidden flex items-center pt-24 pb-32 cursor-none-area">
            <ProximityGrid />

            <div className="container px-6 relative z-10 mx-auto pointer-events-none">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 mb-10 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full border border-neutral-100 shadow-sm"
                    >
                        <Target className="w-4 h-4 text-brand-500" />
                        <span className="text-xs font-black text-neutral-900 uppercase tracking-[0.2em]">Data Mapping Precision</span>
                    </motion.div>

                    <h1 className="text-6xl md:text-9xl font-black text-neutral-900 leading-[0.85] tracking-tighter mb-12">
                        Privacidade <br />
                        <span className="text-brand-500 italic">gerida por quem entende de dados</span>.
                    </h1>

                    <p className="text-xl md:text-3xl text-neutral-400 font-medium leading-tight max-w-2xl mb-16">
                        Desenvolvemos o braço operacional e jurídico que sua empresa precisa para operar com segurança total em um mundo orientado a dados.
                    </p>

                    <div className="flex flex-wrap justify-center gap-8 pointer-events-auto">
                        <Button size="lg" className="h-20 px-16 text-xl font-bold bg-neutral-900 text-white rounded-[2rem] hover:bg-neutral-800 transition-all shadow-2xl shadow-neutral-900/20 active:scale-95">
                            Iniciar Auditoria
                        </Button>
                        <Button size="lg" variant="outline" className="h-20 px-16 text-xl font-bold rounded-[2rem] border-neutral-200 hover:bg-neutral-50 transition-all bg-white/50 backdrop-blur-md">
                            Ver Metodologia
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
