"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock3, Search, Settings, ShieldCheck, TrendingUp, Zap } from "lucide-react";
import { ActionLink, SectionPill } from "@/components/ui/site-primitives";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";

const steps = [
    {
        id: "01",
        label: "Semana 1",
        title: "Diagnóstico",
        description:
            "Entendimento profundo do seu modelo de negócio e identificação de gaps. Mapeamos riscos críticos e alinhamos expectativas estratégicas.",
        icon: Search,
        tile: "bg-brand-400 text-neutral-950 shadow-[0_24px_60px_rgba(255,214,55,0.34)]",
        line: "border-brand-400"
    },
    {
        id: "02",
        label: "Semanas 2-3",
        title: "Correções",
        description:
            "Execução das correções prioritárias. Limpeza da base de dados, ajustes de contratos e implementação de ferramentas de privacidade.",
        icon: Settings,
        tile: "bg-neutral-900 text-white shadow-[0_24px_60px_rgba(0,0,0,0.16)]",
        line: "border-neutral-300"
    },
    {
        id: "03",
        label: "Semana 4",
        title: "Governança",
        description:
            "Início oficial dos processos de resposta e DPO. Seu canal de privacidade entra no ar e o monitoramento em tempo real começa.",
        icon: ShieldCheck,
        tile: "bg-emerald-500 text-white shadow-[0_24px_60px_rgba(16,185,129,0.25)]",
        line: "border-neutral-300"
    },
    {
        id: "04",
        label: "Always-on",
        title: "Evolução",
        description:
            "Ciclo recorrente de monitoramento e auditoria. Garantimos que sua conformidade evolua junto com o crescimento do seu negócio.",
        icon: TrendingUp,
        tile: "bg-blue-500 text-white shadow-[0_24px_60px_rgba(59,130,246,0.28)]",
        line: "border-neutral-300"
    }
];

export function Methodology() {
    return (
        <section className="relative w-full overflow-hidden bg-white py-24 md:py-48" id="methodology">
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-100 to-transparent" />
            <PixelDecor
                placement="custom"
                maskImage="radial-gradient(circle at 50% 50%, black 0%, rgba(0,0,0,0.9) 26%, rgba(0,0,0,0.38) 52%, transparent 74%)"
                opacity={0.22}
                className="right-[-310px] top-[12%] h-[620px] w-[620px]"
            />
            <PixelDecor
                placement="bottomLeft"
                mask="bottomLeft"
                opacity={0.52}
                className="h-[38%] w-[32%]"
            />
            <div className="absolute right-[-10%] top-[10%] -z-10 h-[800px] w-[800px] rounded-full bg-brand-400/[0.02] blur-[140px]" />

            <div className="container relative z-10 mx-auto px-6">
                <div className="mb-20 flex flex-col justify-between gap-10 md:mb-36 lg:flex-row lg:items-end">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-10"
                        >
                            <SectionPill>Fluxo de Trabalho</SectionPill>
                        </motion.div>

                        <h2 className="mb-8 text-[2.6rem] font-bold leading-[1.05] tracking-tight text-neutral-900 md:text-6xl md:leading-[1.1]">
                            Um ciclo pensado para <br />
                            <span className="font-light italic text-brand-500">destravar sua operação.</span>
                        </h2>
                    </div>

                    <div className="max-w-xs">
                        <p className="border-l-2 border-brand-400 py-2 pl-5 text-base font-medium leading-relaxed text-neutral-500 sm:pl-6 sm:text-lg">
                            Organizamos sua operação para reduzir riscos, responder auditorias e dar mais segurança para
                            o crescimento da empresa.
                        </p>
                    </div>
                </div>

                <div className="relative pb-6 lg:pb-24">
                    <div className="relative grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
                        {steps.map((step, i) => {
                            const Icon = step.icon;
                            const isLast = i === steps.length - 1;

                            return (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                    className={`relative rounded-[2rem] border border-neutral-200/80 bg-white/85 p-7 shadow-xl shadow-neutral-200/30 backdrop-blur-sm lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none ${isLast ? "lg:pl-2" : ""
                                        }`}
                                >
                                    {!isLast && (
                                        <div
                                            className={`absolute left-[144px] top-[58px] hidden w-[calc(100%-28px)] border-t border-dashed ${step.line} lg:block`}
                                        >
                                            <span className="absolute right-2 top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 rounded-[3px] border border-brand-400 bg-white shadow-[0_0_0_8px_rgba(255,214,55,0.12)]" />
                                            <ArrowRight className="absolute -right-5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-brand-500" />
                                        </div>
                                    )}

                                    <div className="relative mb-8 flex h-[116px] w-[116px] items-center justify-center rounded-[2rem] border border-white/70 bg-white/70 p-4 shadow-xl shadow-neutral-200/50 lg:mb-7">
                                        <div
                                            className={`flex h-full w-full items-center justify-center rounded-[1.35rem] transition-all duration-700 group-hover:rounded-[1.1rem] ${step.tile}`}
                                        >
                                            <Icon className="h-12 w-12 stroke-[2.2]" />
                                        </div>
                                    </div>

                                    <span className="inline-flex rounded-xl border border-neutral-200 bg-white px-3 py-1 text-sm font-black text-neutral-900 shadow-sm">
                                        {step.id}
                                    </span>

                                    <h3 className="mt-4 text-[2rem] font-bold leading-none tracking-tight text-neutral-900">
                                        {step.title}
                                    </h3>

                                    <div className="mt-4 flex items-center gap-2">
                                        <Clock3 className="h-4 w-4 text-brand-500" />
                                        <span
                                            className={`text-[12px] font-black uppercase tracking-[0.32em] ${isLast ? "text-brand-500 lg:text-brand-400" : "text-neutral-500"
                                                }`}
                                        >
                                            {step.label}
                                        </span>
                                    </div>

                                    <p className="mt-4 max-w-[330px] text-base font-medium leading-relaxed text-neutral-600">
                                        {step.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-28"
                >
                    <div className="group relative overflow-hidden rounded-[32px] bg-[#0a0a0a] p-1 sm:rounded-[40px] md:p-1.5">
                        <div className="grid gap-7 rounded-[30px] bg-[#0a0a0a] p-7 text-left transition-all sm:rounded-[38.5px] sm:p-9 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-center lg:gap-x-9 lg:gap-y-8 xl:grid-cols-[auto_minmax(0,1fr)_auto] xl:gap-14 xl:p-14">
                            <div className="relative shrink-0">
                                <div className="flex h-16 w-16 items-center justify-center rounded-[1.35rem] bg-brand-400 shadow-[0_0_50px_rgba(255,214,55,0.2)] sm:h-20 sm:w-20 sm:rounded-3xl">
                                    <Zap className="h-8 w-8 fill-neutral-950 text-neutral-950 sm:h-9 sm:w-9" />
                                </div>
                            </div>

                            <div className="min-w-0">
                                <h4 className="mb-4 max-w-[13ch] text-2xl font-bold leading-[1.08] tracking-tight text-white sm:max-w-none sm:text-3xl">
                                    Venda travada por falta de compliance?
                                </h4>
                                <p className="max-w-xl text-base font-medium leading-relaxed text-neutral-400 sm:text-lg">
                                    Entregamos{" "}
                                    <span className="text-brand-400">
                                        evidências técnicas de conformidade em dias
                                    </span>{" "}
                                    para destravar seus maiores contratos e garantir que o jurídico não pare o seu
                                    comercial.
                                </p>
                            </div>

                            <ActionLink href="/contato" variant="light" size="lg" className="w-full text-xs sm:text-sm lg:col-span-2 xl:col-span-1 xl:w-auto">
                                Falar com Especialista
                            </ActionLink>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
