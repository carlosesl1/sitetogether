"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    User,
    ShieldAlert,
    Cpu,
    TrendingUp,
    Gavel,
    Settings,
    CheckCircle2,
    Cloud,
    Zap,
    TrendingDown,
    Wallet,
    ShieldCheck,
    AlertCircle,
    Activity
} from "lucide-react";

// --- Types & Data ---

type ComparisonItem = {
    id: number;
    problem: {
        icon: React.ElementType;
        header: string;
        text: string;
        subIcon?: React.ElementType;
    };
    solution: {
        header: string;
        text: string;
        highlightText?: string;
        icons: React.ElementType[];
    };
};

const items: ComparisonItem[] = [
    {
        id: 1,
        problem: {
            icon: User,
            header: "Gestão Interna Isolada (Risco)",
            text: "Capacidade: Recursos limitados e centralizados em 1 pessoa.",
            subIcon: Activity
        },
        solution: {
            header: "Modelo TOGETHER (Segurança)",
            text: "Capacidade: ",
            highlightText: "Time Multidisciplinar (Jurídico + TI + Processos).",
            icons: [Gavel, Cpu, Settings]
        }
    },
    {
        id: 2,
        problem: {
            icon: ShieldAlert,
            header: "Risco Operacional",
            text: "Alta exposição a erros e ausências.",
        },
        solution: {
            header: "Blindagem",
            text: "Responsabilidade Técnica compartilhada e ",
            highlightText: "SLA garantido.",
            icons: [ShieldCheck]
        }
    },
    {
        id: 3,
        problem: {
            icon: Cpu,
            header: "Tecnologia",
            text: "Curva de aprendizado lenta para novas ferramentas.",
        },
        solution: {
            header: "Expertise",
            text: "Domínio Imediato das ",
            highlightText: "principais plataformas do mercado.",
            icons: [Zap, Cloud]
        }
    },
    {
        id: 4,
        problem: {
            icon: TrendingUp,
            header: "Custo-Eficiência",
            text: "Alto custo fixo (Salário + Encargos).",
        },
        solution: {
            header: "Otimização",
            text: "Custo variável previsível e ",
            highlightText: "menor que equipe própria.",
            icons: [TrendingDown, Wallet]
        }
    }
];

// --- Sub-Components ---

import { MotionValue } from "framer-motion";

function RiskCard({ item, blur }: { item: ComparisonItem; blur: MotionValue<string> }) {
    return (
        <motion.div
            style={{ filter: blur }}
            className="relative w-full bg-neutral-100 border border-neutral-200 rounded-2xl p-8 flex items-center gap-8"
        >
            <div className="absolute -top-3 left-6 bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-red-200 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                Risco
            </div>

            <div className="w-16 h-16 rounded-xl bg-white border border-neutral-200 flex items-center justify-center shrink-0 relative">
                {(() => {
                    const ProblemIcon = item.problem.icon as any;
                    const SubIcon = item.problem.subIcon as any;
                    return (
                        <>
                            <ProblemIcon className="w-8 h-8 text-neutral-400" />
                            {SubIcon && (
                                <SubIcon className="absolute -top-1 -right-1 w-4 h-4 text-red-400 animate-pulse" />
                            )}
                        </>
                    );
                })()}
            </div>
            <div className="flex-1">
                <h4 className="text-lg font-semibold text-neutral-600 mb-1">{item.problem.header}</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">{item.problem.text}</p>
            </div>
        </motion.div>
    );
}

function SolutionCardContent({ item }: { item: ComparisonItem }) {
    return (
        <>
            <div className="absolute -top-3 right-6 bg-brand-400 text-neutral-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
                <CheckCircle2 className="w-3 h-3" />
                TOGETHER
            </div>

            <div className="flex -space-x-4 shrink-0">
                {item.solution.icons.map((IconItem, idx) => {
                    const Icon = IconItem as any;
                    return (
                        <div
                            key={idx}
                            className="w-16 h-16 rounded-xl bg-neutral-900 flex items-center justify-center border-2 border-white shadow-md relative"
                            style={{ zIndex: 10 - idx }}
                        >
                            <Icon className="w-8 h-8 text-brand-400" />
                        </div>
                    );
                })}
            </div>

            <div className="flex-1 ml-2">
                <h3 className="text-xl font-bold text-neutral-900 mb-1">{item.solution.header}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                    {item.solution.text}
                    <span className="font-bold text-neutral-900 bg-brand-100 px-1 rounded">
                        {item.solution.highlightText}
                    </span>
                </p>
            </div>
        </>
    );
}

// --- Main Component ---

export function ComparisonModel() {
    const stickyContainerRef = useRef<HTMLDivElement>(null);

    // Track scroll progress within the sticky container
    const { scrollYProgress } = useScroll({
        target: stickyContainerRef,
        offset: ["start start", "end end"]
    });

    // Cards appear sequentially as user scrolls through the sticky section
    // Each card gets ~20% of the scroll range
    const card1Opacity = useTransform(scrollYProgress, [0.05, 0.15], [0, 1]);
    const card1Y = useTransform(scrollYProgress, [0.05, 0.15], [-20, 0]);

    const card2Opacity = useTransform(scrollYProgress, [0.25, 0.35], [0, 1]);
    const card2Y = useTransform(scrollYProgress, [0.25, 0.35], [-20, 0]);

    const card3Opacity = useTransform(scrollYProgress, [0.45, 0.55], [0, 1]);
    const card3Y = useTransform(scrollYProgress, [0.45, 0.55], [-20, 0]);

    const card4Opacity = useTransform(scrollYProgress, [0.65, 0.75], [0, 1]);
    const card4Y = useTransform(scrollYProgress, [0.65, 0.75], [-20, 0]);

    // Blur effect for Risk cards (activates after TOGETHER card is fully visible)
    const card1Blur = useTransform(scrollYProgress, [0.15, 0.20], ["blur(0px)", "blur(4px)"]);
    const card2Blur = useTransform(scrollYProgress, [0.35, 0.40], ["blur(0px)", "blur(4px)"]);
    const card3Blur = useTransform(scrollYProgress, [0.55, 0.60], ["blur(0px)", "blur(4px)"]);
    const card4Blur = useTransform(scrollYProgress, [0.75, 0.80], ["blur(0px)", "blur(4px)"]);

    const cardAnimations = [
        { opacity: card1Opacity, y: card1Y, blur: card1Blur },
        { opacity: card2Opacity, y: card2Y, blur: card2Blur },
        { opacity: card3Opacity, y: card3Y, blur: card3Blur },
        { opacity: card4Opacity, y: card4Y, blur: card4Blur },
    ];

    return (
        <section className="w-full relative bg-white pb-32">
            {/* Circuit Background Pattern */}
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
            />

            {/* HEADER - Normal scroll */}
            <div className="pt-24 pb-12 relative z-10">
                <div className="max-w-5xl mx-auto text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-50 border border-neutral-100 mb-8 shadow-sm"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-400 shadow-[0_0_10px_rgba(255,214,55,0.8)]"></div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">Vantagens da TOGETHER</span>
                    </motion.div>
                    <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 tracking-tight leading-[1.15] mb-16">
                        Por que uma equipe especializada <br />
                        <span className="text-neutral-400 italic font-light">supera a gestão isolada.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-600 font-medium">
                        A racionalidade financeira e operacional de escolher a{' '}
                        <span className="relative inline-block text-neutral-900 font-bold px-1">
                            <span className="absolute inset-0 bg-brand-400/30 -skew-x-6 rounded-sm"></span>
                            <span className="relative">TOGETHER</span>
                        </span>.
                    </p>
                </div>
            </div>

            {/* STICKY SCROLL CONTAINER - This creates the "locked" effect */}
            <div ref={stickyContainerRef} className="relative h-[220vh]">

                {/* Sticky content - stays fixed while scrolling through container */}
                <div className="sticky top-40 flex flex-col justify-start">
                    <div className="max-w-4xl w-full mx-auto px-4 flex flex-col gap-6">
                        {items.map((item, index) => (
                            <div key={item.id} className="relative">
                                {/* Risk Card (Base layer) */}
                                <RiskCard item={item} blur={cardAnimations[index].blur} />

                                {/* Solution Card (Overlay, scroll-driven) */}
                                <motion.div
                                    style={{
                                        opacity: cardAnimations[index].opacity,
                                        y: cardAnimations[index].y
                                    }}
                                    className="absolute inset-0 bg-white border border-brand-400/50 rounded-2xl p-8 flex items-center gap-8 shadow-lg shadow-brand-400/20 z-10"
                                >
                                    <SolutionCardContent item={item} />
                                </motion.div>
                            </div>
                        ))}

                        {/* FOOTER SUMMARY - Inside sticky, appears after cards */}
                        <motion.div
                            style={{
                                opacity: cardAnimations[3].opacity // Appears with last card
                            }}
                            className="mt-8"
                        >
                            <div className="bg-gradient-to-r from-neutral-50 via-brand-100 to-neutral-50 rounded-2xl p-6 text-center border border-neutral-100 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-brand-400 shadow-[0_0_15_#FFD637]"></div>

                                <p className="text-base md:text-lg font-light text-neutral-600">
                                    O Resultado: <span className="font-bold text-neutral-900">Profissionalização imediata da privacidade</span> com <span className="font-bold text-neutral-900">redução de risco</span>.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
