"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { ActionLink, SectionPill } from "@/components/ui/site-primitives";

export function CTASection() {
    return (
        <section className="w-full pt-24 pb-20 md:pt-48 bg-brand-400 relative overflow-hidden text-neutral-900" id="cta">
            {/* Minimalist Texture: Subtle industrial grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            {/* Ambient Lighting */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-20 rounded-full blur-[120px] -mr-40 -mt-40"></div>

            <div className="container px-6 mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">

                    {/* Left: Strategic Messaging */}
                    <div className="lg:col-span-7 space-y-12 text-left">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="w-fit"
                        >
                            <SectionPill tone="brand">Padrão de Qualidade Together</SectionPill>
                        </motion.div>

                        <h2 className="text-[2.75rem] sm:text-5xl md:text-[84px] font-bold tracking-tighter text-neutral-900 leading-[0.95]">
                            O custo do risco <br />
                            <span className="text-neutral-900/60">é maior que <br /> o da prevenção.</span>
                        </h2>

                        <div className="flex flex-col sm:flex-row gap-8 pt-4 items-start sm:items-center">
                            <ActionLink href="/contato" variant="dark" size="xl" className="w-full sm:w-auto">
                                Agendar Diagnóstico
                            </ActionLink>
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-600 mb-1">Tempo de resposta</span>
                                <span className="text-xl font-bold text-neutral-900">Em até 2 horas úteis</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Executive Contact Hub */}
                    <div className="lg:col-span-5 w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-white rounded-[36px] p-6 sm:p-8 md:rounded-[48px] md:p-12 border border-black/5 shadow-[0_40px_80px_rgba(0,0,0,0.06)] space-y-8 md:space-y-10"
                        >
                            <div className="space-y-3">
                                <h3 className="text-3xl font-bold text-neutral-900 tracking-tight">Canais Executivos</h3>
                                <p className="text-neutral-400 text-sm font-medium leading-relaxed max-w-[280px]">Fale diretamente com nosso time de DPOs e especialistas.</p>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { label: "WhatsApp Estratégico", value: "(11) 98952-6265", icon: Phone },
                                    { label: "E-mail Corporativo", value: "contato@togetherprivacy.com", icon: Mail },
                                    { label: "Sede de Operações", value: "Berrini, 1681 - SP", icon: MapPin }
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="group p-6 rounded-3xl bg-neutral-50/50 border border-neutral-100 hover:bg-white hover:border-brand-400/30 hover:shadow-2xl hover:shadow-brand-400/10 transition-all cursor-pointer"
                                    >
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex min-w-0 flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
                                                <div className="w-11 h-11 rounded-xl bg-brand-400 flex items-center justify-center text-neutral-900 shadow-inner group-hover:scale-110 transition-transform">
                                                    <item.icon className="w-5 h-5" />
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 mb-1">{item.label}</p>
                                                    <p className="break-words font-bold text-neutral-900 text-[15px] leading-tight sm:text-lg">{item.value}</p>
                                                </div>
                                            </div>
                                            <ArrowUpRight className="hidden w-4 h-4 text-neutral-200 group-hover:text-brand-400 transition-colors sm:block" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-black/5 pt-12 opacity-40 sm:flex-row sm:items-center">
                    <span className="text-[9px] font-bold uppercase tracking-[0.24em] sm:tracking-[0.5em]">Confiança de empresas líderes</span>
                    <span className="text-[9px] font-bold uppercase tracking-[0.24em] sm:tracking-[0.5em]">Together Centro Estratégico // 2026</span>
                </div>
            </div>
        </section>
    );
}
