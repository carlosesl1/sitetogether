"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { ActionLink, SectionPill } from "@/components/ui/site-primitives";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";

const vendors = [
    { id: "OneTrust", label: "OneTrust", src: "/logos/onetrust.svg" },
    { id: "TrustWorks", label: "TrustWorks", src: "/logos/trustworks.png" },
    { id: "Securiti", label: "Securiti", src: "/logos/securiti.svg" },
    { id: "Privacy Tools", label: "Privacy Tools", src: "/logos/privacy-tools.svg" },
    { id: "DPONet", label: "DPONet", src: "/logos/dponet.svg" },
    { id: "BeCompliance", label: "BeCompliance", src: "/logos/becompliance.svg" },
    { id: "Privally", label: "Privally", src: "/logos/privally.png" },
];

export function TechIntegration() {
    return (
        <section className="w-full py-24 md:py-48 bg-[#0a0a0a] text-white relative overflow-hidden font-sans">
            <PixelDecor
                placement="topRight"
                mask="topRight"
                opacity={0.18}
                className="h-[46%] w-[38%]"
            />
            <PixelDecor
                placement="bottomLeft"
                mask="bottomLeft"
                opacity={0.1}
                className="h-[42%] w-[28%]"
            />
            <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,rgba(10,10,10,0.98)_0%,rgba(10,10,10,0.9)_34%,rgba(10,10,10,0.42)_58%,rgba(10,10,10,0)_82%)]" />
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-brand-400/[0.03] rounded-full blur-[160px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-brand-400/[0.02] rounded-full blur-[140px] pointer-events-none"></div>

            <div className="container px-6 mx-auto relative z-10">

                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <SectionPill tone="dark">Expertise Tecnológica</SectionPill>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[2.65rem] md:text-7xl font-bold tracking-tighter mb-10 leading-[1.05]"
                    >
                        Tecnologia aplicada <br />
                        <span className="text-brand-500 italic font-light">à rotina da sua operação.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto font-normal leading-relaxed"
                    >
                        Além da estratégia e da adequação, também cuidamos da configuração e gestão das ferramentas usadas na rotina da privacidade.
                    </motion.p>
                </div>

                {/* VISIBLE GRID instead of Scroll Stream */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16 max-w-6xl mx-auto md:mb-24">
                    {vendors.map((v, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="w-full max-w-[280px] px-6 py-6 rounded-[24px] bg-neutral-900/40 border border-white/5 flex items-center gap-4 group hover:border-brand-400/30 hover:bg-neutral-900/60 transition-all duration-300 backdrop-blur-sm sm:w-auto sm:min-w-[240px] sm:px-8"
                        >
                            <div className="h-8 w-24 flex items-center justify-center">
                                {/* Using filter to make standard logos white depending on their original color, or keeping them original if preferable. 
                                    User said "can't see all companies" and showed dark logos. Brightness-0 invert makes them white. */}
                                <Image
                                    src={v.src}
                                    alt={v.label}
                                    width={120}
                                    height={32}
                                    className="h-full w-auto object-contain filter brightness-0 invert opacity-60 group-hover:opacity-100 transition-all duration-300"
                                />
                            </div>
                            <div className="flex flex-col text-left border-l border-white/10 pl-4">
                                <span className="text-[9px] font-bold tracking-widest text-neutral-500 uppercase mb-0.5">Expertise</span>
                                <span className="text-[10px] font-bold text-white tracking-wide uppercase">Técnica</span>
                            </div>
                        </motion.div>
                    ))}

                    {/* "And More" Card to imply expansiveness */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="w-full max-w-[280px] px-6 py-6 rounded-[24px] border border-dashed border-white/10 flex items-center gap-4 group hover:border-white/20 transition-all duration-300 backdrop-blur-sm sm:w-auto sm:px-8"
                    >
                        <div className="h-8 w-8 flex items-center justify-center rounded-full bg-white/5">
                            <Zap className="w-4 h-4 text-brand-400" />
                        </div>
                        <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest">E muito mais...</span>
                    </motion.div>
                </div>

                {/* CTA Area - Premium Banner Style */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-neutral-900/40 backdrop-blur-sm p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 group hover:border-brand-400/30 transition-all duration-500">
                        {/* Ambient glow inside the card */}
                        <div className="absolute -left-20 -top-20 w-64 h-64 bg-brand-400/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                        <div className="relative z-10 text-center md:text-left">
                            <h3 className="max-w-[724px] text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                                Sua equipe não precisa virar especialista em plataforma de privacidade.
                            </h3>
                            <p className="text-neutral-400 text-base md:text-lg font-medium">
                                Nós cuidamos da configuração, gestão e migração das ferramentas para que sua operação continue fluindo sem interrupções.
                            </p>
                        </div>

                        <ActionLink href="/contato" size="lg" className="relative z-10 w-full shrink-0 hover:bg-white sm:w-auto">
                            Migrar Operação
                        </ActionLink>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
