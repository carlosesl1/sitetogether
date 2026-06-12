"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Shield, Zap, BookOpen, Headphones } from "lucide-react";
import Link from "next/link";
import { ActionLink, SectionPill } from "@/components/ui/site-primitives";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";

const options = [
    {
        title: "Consultoria de Adequação",
        subtitle: "Projetos Pontuais",
        description: "Ideal para empresas que buscam conformidade inicial rápida e segura.",
        icon: <Zap className="w-6 h-6" />,
        items: ["Adequação à LGPD. 100% Compliance", "Mapeamento (Data Mapping)", "Implementação de Ferramentas de Privacidade", "Programa de Privacidade Estruturado", "Documentação completa"],
        button: "Ver Escopo de Projeto",
        link: "/servicos/consultoria-adequacao",
        featured: false
    },
    {
        title: "DPO as a Service",
        subtitle: "Gestão Completa",
        description: "Uma operação completa de privacidade funcionando como extensão do seu time.",
        icon: <Shield className="w-6 h-6" />,
        items: ["Nomeação de DPO Oficial", "Gestão Full-Service (Técnica + Jurídica)", "Gestão dos Fornecedores", "Gestão do Atendimento e Consentimento do Titular", "Resposta a Incidentes 24/7", "Monitoramento e Evolução"],
        button: "Ver Detalhes do Serviço",
        link: "/servicos/dpo-as-a-service",
        featured: true
    },
    {
        title: "Mentoria e Cultura",
        subtitle: "Educação Corporativa",
        description: "Capacite sua equipe interna para manter a privacidade no DNA do negócio.",
        icon: <BookOpen className="w-6 h-6" />,
        items: ["Treinamento para Equipes de Privacidade (Analistas e DPOs)", "Workshops Práticos", "Formação de 'Privacy Champions'", "Treinamentos Gerais sobre LGPD e Compliance", "Engajamento Oficial das Plataformas de Privacidade"],
        button: "Conhecer Treinamentos",
        link: "/servicos/mentoria-e-cultura",
        featured: false
    }
];

const stages = [
    {
        number: "1",
        title: "Iniciar",
        description: "Estruture o essencial e reduza riscos."
    },
    {
        number: "2",
        title: "Operar",
        description: "Tenha privacidade no dia a dia.",
        featured: true
    },
    {
        number: "3",
        title: "Evoluir",
        description: "Eduque, engaje e fortaleça sua cultura."
    }
];

export function Offers() {
    return (
        <section className="w-full py-32 bg-white relative overflow-hidden flex flex-col items-center" id="offers">
            <PixelDecor mask="oppositeCorners" opacity={0.16} />
            {/* Original Design 1: Stripe-inspired Elevation & Crisp Grid */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>

            <div className="container px-6 relative z-10">
                <div className="max-w-3xl mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <SectionPill>Nossas Ofertas</SectionPill>
                    </motion.div>

                    <h2 className="text-[2.75rem] sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 mb-8 leading-[1.05] md:leading-[1.1]">
                        Serviços pensados para <br />
                        <span className="text-brand-500 italic font-light">o momento da sua empresa.</span>
                    </h2>
                    <p className="text-xl text-neutral-500 max-w-xl font-medium">
                        Da adequação inicial ao suporte contínuo, estruturamos o nível certo de apoio para sua operação.
                    </p>
                </div>

                <div className="mb-8 overflow-hidden rounded-[20px] border border-neutral-200 bg-white shadow-sm shadow-neutral-200/40">
                    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-100">
                        {stages.map((stage) => (
                            <div
                                key={stage.number}
                                className={`relative flex items-center gap-5 px-6 py-4 md:px-8 md:py-4 ${stage.featured ? "bg-brand-400/10" : "bg-white"}`}
                            >
                                {stage.featured && (
                                    <div className="absolute inset-x-0 bottom-0 h-0.5 bg-brand-400" />
                                )}
                                <div className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-base font-bold ${stage.featured ? "bg-brand-400 text-neutral-900 shadow-[0_10px_24px_rgba(255,214,55,0.3)]" : "bg-neutral-100 text-neutral-900"}`}>
                                    {stage.number}
                                </div>
                                <div className="relative z-10 min-w-0">
                                    <p className="mb-0.5 text-[11px] font-bold uppercase tracking-[0.28em] text-neutral-900">
                                        {stage.title}
                                    </p>
                                    <p className="text-[13px] font-medium leading-relaxed text-neutral-500">
                                        {stage.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-0 border border-neutral-100 rounded-[32px] overflow-hidden shadow-2xl shadow-neutral-200/50 bg-white">
                    {options.map((option, i) => (
                        <div
                            key={i}
                            className={`p-8 md:p-10 xl:p-14 flex flex-col relative transition-all duration-500 ${i > 0 ? "border-t border-neutral-100 xl:border-t-0" : ""} ${option.featured
                                ? "bg-gradient-to-b from-brand-400/[0.06] via-neutral-50/60 to-neutral-50/40 z-10 xl:border-x xl:border-brand-400/30 shadow-[inset_0_0_0_1px_rgba(255,214,55,0.18),0_14px_40px_rgba(15,23,42,0.04)]"
                                : "bg-white hover:bg-neutral-50/50"
                                }`}
                        >
                            {option.featured && (
                                <>
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-brand-400"></div>
                                    <div className="absolute top-8 right-8">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-400 text-neutral-900 text-[9px] font-bold uppercase tracking-widest shadow-sm">
                                            <span className="w-1 h-1 rounded-full bg-neutral-900 animate-pulse"></span>
                                            Mais Procurado
                                        </span>
                                    </div>
                                </>
                            )}

                            {/* Top Content Area */}
                            <div className="flex-grow">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-10 ${option.featured ? "bg-brand-400 text-neutral-900" : "bg-neutral-100 text-neutral-500"}`}>
                                    {option.icon}
                                </div>

                                <div className="mb-10">
                                    <span className={`text-[10px] font-bold uppercase tracking-widest mb-2 block ${option.featured ? "text-brand-600" : "text-neutral-400"}`}>
                                        {option.subtitle}
                                    </span>
                                    <h3 className="text-2xl font-bold text-neutral-900 mb-4 tracking-tight">{option.title}</h3>
                                    <p className="text-sm text-neutral-500 leading-relaxed font-medium">
                                        {option.description}
                                    </p>
                                </div>

                                <div className="space-y-5 mb-14">
                                    {option.items.map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <div className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-white border border-neutral-100 flex items-center justify-center shadow-sm">
                                                <Check className={`w-3 h-3 ${option.featured ? "text-brand-500" : "text-neutral-400"}`} strokeWidth={3} />
                                            </div>
                                            <span className="text-sm font-medium text-neutral-600 leading-tight">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Button Area - This will be aligned at the bottom */}
                            <div className="pt-4">
                                <ActionLink
                                    href={option.link}
                                    fullWidth
                                    size="md"
                                    variant={option.featured ? "primary" : "muted"}
                                    className="gap-2 px-4 tracking-[0.08em] sm:justify-between sm:px-4 sm:tracking-[0.08em] lg:tracking-[0.12em] xl:tracking-[0.16em]"
                                >
                                    {option.button}
                                </ActionLink>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 flex justify-center">
                    <p className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm font-medium text-neutral-500">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 text-neutral-900 shadow-sm">
                            <Headphones className="h-4 w-4" strokeWidth={2.4} />
                        </span>
                        <span>Dúvidas sobre o melhor caminho para sua empresa?</span>
                        <Link href="/contato" className="border-b border-brand-400 pb-0.5 text-neutral-900 transition-colors hover:text-brand-600">Fale com um especialista</Link>
                    </p>
                </div>
            </div>
        </section>
    );
}
