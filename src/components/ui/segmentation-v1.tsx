"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Shield, TrendingUp, Users, Database, Activity, ShieldCheck, FileCheck, Zap, ArrowRight, Lock, FileText, Code2, TrendingDown } from "lucide-react";

export function SegmentationV1() {
    return (
        <section className="w-full py-40 bg-white relative overflow-hidden">
            {/* Structural Grid Background from V2 */}
            <div className="absolute inset-0 opacity-[0.03] -z-10" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="container px-6 relative z-10 mx-auto">
                {/* Header from V1 Refined */}
                <div className="flex flex-col items-center text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-50 border border-neutral-100 mb-8 shadow-sm"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-400 shadow-[0_0_10px_rgba(255,214,55,0.8)]"></div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">Para Quem é A Together</span>
                    </motion.div>

                    <h2 className="text-5xl md:text-7xl font-bold text-neutral-900 tracking-tight leading-none mb-8">
                        Um modelo de privacidade <br />
                        <span className="text-neutral-400 italic font-light">para cada momento da sua empresa.</span>
                    </h2>
                    <p className="text-lg text-neutral-500 max-w-2xl font-medium">
                        Desde empresas começando a adequação até operações que precisam responder auditorias e grandes clientes.
                    </p>
                </div>

                {/* Bento Grid from V2 with Refined Content */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-neutral-200 border border-neutral-200 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-neutral-200/50">

                    {/* CARD 1: DPO INTERNO (Wide) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="md:col-span-12 lg:col-span-7 bg-white p-12 group"
                    >
                        <div className="flex flex-col md:flex-row justify-between gap-12">
                            <div className="max-w-xs">
                                <span className="text-[10px] font-black text-brand-600 uppercase tracking-widest mb-4 block">01 / DPO Sync</span>
                                <h3 className="text-3xl font-bold text-neutral-900 mb-6">Empresas com DPO Interno</h3>
                                <p className="text-sm text-neutral-500 font-medium leading-relaxed">
                                    Cuidamos das demandas do dia a dia para que seu DPO foque nas decisões estratégicas.
                                </p>
                            </div>

                            {/* Upscaled Vertical Pillar - Background Removed */}
                            <div className="flex-1 flex flex-col items-center justify-center relative min-h-[340px]">
                                <div className="flex flex-col items-center gap-4 relative z-10 w-full max-w-[320px]">

                                    {/* Top: The Mind (Internal DPO) - Upscaled */}
                                    <div className="bg-white rounded-2xl border border-neutral-100 p-5 shadow-2xl shadow-neutral-200/50 relative z-20 w-full max-w-[240px]">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-[1.25rem] bg-neutral-900 flex items-center justify-center shrink-0 shadow-lg">
                                                <Users className="w-6 h-6 text-brand-400" />
                                            </div>
                                            <div className="text-left">
                                                <div className="text-sm font-black text-neutral-900 uppercase leading-none mb-1 tracking-tight">DPO Interno</div>
                                                <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em]">Estratégia</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Connection: High-Energy Flow */}
                                    <div className="h-14 w-px bg-neutral-200 relative">
                                        <motion.div
                                            animate={{ height: ["0%", "100%"], opacity: [0, 1, 0] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                            className="absolute top-0 left-1/2 -translate-x-1/2 w-4 bg-brand-400 blur-md"
                                        />
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-brand-400 flex items-center justify-center shadow-xl border-4 border-white transition-transform group-hover:scale-110">
                                            <Zap className="w-5 h-5 text-neutral-900 fill-current animate-pulse" />
                                        </div>
                                    </div>

                                    {/* Bottom: The Engine (Together Ops) - Upscaled */}
                                    <div className="w-full max-w-[280px] bg-neutral-900 rounded-[1rem] p-7 shadow-[0_20px_40px_rgba(0,0,0,0.15)] relative z-10 scale-105">
                                        <div className="flex items-center gap-4 mb-5">
                                            <div className="w-11 h-11 rounded-[1.1rem] bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/5">
                                                <ShieldCheck className="w-6 h-6 text-brand-400" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-sm font-black text-white uppercase tracking-tight mb-0.5">Together Ops</div>
                                                <div className="text-[9px] font-bold text-brand-400 uppercase tracking-widest">Base Operacional</div>
                                            </div>
                                        </div>

                                        <div className="flex gap-2 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                                            {[1, 2, 3, 4].map((i) => (
                                                <div key={i} className="flex-1 h-1 bg-brand-400/20 rounded-full overflow-hidden">
                                                    <motion.div
                                                        animate={{ x: ["-100%", "100%"] }}
                                                        transition={{ duration: 5, repeat: Infinity, delay: i * 0.25 }}
                                                        className="h-full bg-brand-400 w-full"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* CARD 2: SEM DPO (Narrow) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="md:col-span-12 lg:col-span-5 bg-neutral-50 p-12 flex flex-col justify-between group"
                    >
                        <div>
                            <span className="text-[10px] font-black text-brand-600 uppercase tracking-widest mb-4 block">02 / Full Compliance</span>
                            <h3 className="text-3xl font-bold text-neutral-900 mb-6">Empresas sem DPO</h3>
                            <p className="text-sm text-neutral-500 font-medium leading-relaxed mb-4">
                                DPO as a Service assumindo toda a operação de privacidade da sua empresa, desde a adequação à LGPD até o atendimento contínuo das demandas do dia a dia.
                            </p>
                        </div>

                        <div className="flex flex-col justify-center h-[200px] relative group/dposerv">
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                            <div className="relative z-10 flex items-center gap-6 h-full px-4">
                                {/* Left: GESTÃO */}
                                <div className="flex-1 min-w-[140px] relative">
                                    <span className="absolute -top-8 inset-x-0 text-[10px] font-black text-neutral-400 uppercase tracking-widest text-center">Gestão</span>
                                    <div className="bg-neutral-900 p-2.5 rounded-xl shadow-[0_15px_30px_rgba(0,0,0,0.1)] border border-white/5 flex items-center gap-2 relative overflow-hidden group-hover/dposerv:scale-105 transition-transform duration-500">
                                        <div className="absolute inset-0 bg-brand-400/5 blur-lg"></div>
                                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10 relative z-10">
                                            <Shield className="w-4 h-4 text-brand-400" />
                                        </div>
                                        <div className="text-[11px] font-black text-white uppercase tracking-tighter relative z-10 whitespace-nowrap">Together DPO</div>
                                    </div>
                                </div>

                                {/* Middle: Single Arrow Connector */}
                                <div className="flex items-center justify-center">
                                    <div className="w-8 h-8 rounded-full bg-brand-400 flex items-center justify-center shadow-lg shadow-brand-400/20 group-hover/dposerv:translate-x-1 transition-transform">
                                        <ArrowRight className="w-4 h-4 text-neutral-900" />
                                    </div>
                                </div>

                                {/* Right: EXECUÇÃO */}
                                <div className="flex-[1.2] relative">
                                    <span className="absolute -top-8 left-1 text-[10px] font-black text-neutral-400 uppercase tracking-widest px-1">Execução</span>
                                    <div className="flex flex-col gap-1.5">
                                        {[
                                            { label: "Compliance LGPD", icon: CheckCircle2 },
                                            { label: "Privacy Center", icon: Database },
                                            { label: "Data Mapping", icon: Activity }
                                        ].map((item, i) => (
                                            <div key={i} className="bg-white p-2 rounded-lg border border-neutral-100 shadow-sm flex items-center gap-2 group-hover/dposerv:border-brand-200 transition-colors">
                                                <div className="w-6 h-6 rounded bg-neutral-50 flex items-center justify-center shrink-0">
                                                    <item.icon className="w-3.5 h-3.5 text-neutral-400" />
                                                </div>
                                                <div className="text-[9px] font-bold text-neutral-700 uppercase tracking-tight truncate">{item.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* CARD 3: ENTERPRISE (Narrow + V1 Graph) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-12 lg:col-span-5 bg-white p-12 flex flex-col justify-between group"
                    >
                        <div>
                            <span className="text-[10px] font-black text-brand-600 uppercase tracking-widest mb-4 block">03 / Expansion</span>
                            <h3 className="text-[1.75rem] font-bold text-neutral-900 mb-6 tracking-tight leading-tight">Empresas em Expansão e Enterprise</h3>
                            <p className="text-sm text-neutral-500 font-medium leading-relaxed">
                                Ajudamos sua empresa a passar por auditorias e responder exigências de grandes clientes com mais rapidez e segurança.
                            </p>
                        </div>

                        <div className="mt-12 bg-neutral-50 rounded-2xl p-6 relative overflow-hidden h-56 flex flex-col justify-between border border-neutral-100">
                            <div className="flex justify-between items-start relative z-10">
                                <div>
                                    <div className="text-[10px] font-bold text-green-600 uppercase mb-1">Crescimento Acelerado</div>
                                    <div className="text-4xl font-black text-neutral-900 tracking-tighter leading-none">+40%</div>
                                </div>
                                <div className="px-2 py-1 bg-white rounded-md border border-neutral-200 text-[8px] font-black uppercase text-neutral-400">Sales Velocity</div>
                            </div>

                            <div className="h-32 w-full flex items-end gap-1.5 px-1 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                                {[30, 45, 35, 60, 50, 80, 70, 100].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${h}%` }}
                                        className="flex-1 bg-brand-400 rounded-sm"
                                        transition={{
                                            duration: 0.8,
                                            delay: i * 0.05,
                                            ease: [0.33, 1, 0.68, 1]
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* CARD 4: SEM ADEQUAÇÃO LGPD (Wide + Maintenance Reveal) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="md:col-span-12 lg:col-span-7 bg-[#0a0a0a] p-12 flex flex-col group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-24 opacity-[0.03] pointer-events-none">
                            <Code2 className="w-[500px] h-[500px] text-white" />
                        </div>

                        <div className="relative z-10 max-w-md mb-16">
                            <span className="text-[10px] font-black text-brand-400 uppercase tracking-widest mb-4 block">04 / Transformation</span>
                            <h3 className="text-3xl font-bold text-white mb-6">Empresas sem Adequação à LGPD</h3>
                            <p className="text-sm text-neutral-400 font-medium leading-relaxed">
                                Estruturamos sua adequação à LGPD e continuamos acompanhando a operação para manter sua empresa protegida e atualizada.
                            </p>
                        </div>

                        <div className="relative z-10 flex flex-col md:flex-row items-stretch gap-6 h-64">
                            {/* Phase 1: Adequação - Checklist Style */}
                            <div className="flex-1 bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col gap-4 group/phase1">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-[10px] font-black text-brand-400 uppercase tracking-widest">Fase 01: Adequação</span>
                                    <ShieldCheck className="w-4 h-4 text-brand-400" />
                                </div>
                                <div className="space-y-3">
                                    {[
                                        "Diagnóstico Inicial",
                                        "Mapeamento de Dados",
                                        "Políticas de Privacidade"
                                    ].map((text, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.2 }}
                                            className="flex items-center gap-3"
                                        >
                                            <div className="w-5 h-5 rounded-full bg-brand-400/20 border border-brand-400/30 flex items-center justify-center">
                                                <CheckCircle2 className="w-3 h-3 text-brand-400" />
                                            </div>
                                            <span className="text-[10px] font-bold text-neutral-300 uppercase tracking-tight">{text}</span>
                                        </motion.div>
                                    ))}
                                </div>
                                <div className="mt-auto pt-4 border-t border-white/5">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[9px] font-black text-brand-400 uppercase">Status</span>
                                        <span className="text-[9px] font-black text-white uppercase italic">Concluído</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-center justify-center">
                                <div className="w-10 h-10 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center shadow-xl">
                                    <ArrowRight className="w-5 h-5 text-brand-400 animate-pulse" />
                                </div>
                            </div>

                            {/* Phase 2: Manutenção - Radar Style */}
                            <div className="flex-[1.2] bg-brand-400 rounded-3xl p-6 flex flex-col gap-4 shadow-2xl shadow-brand-400/20 group/phase2 relative overflow-hidden">
                                <div className="flex justify-between items-center mb-2 relative z-10">
                                    <span className="text-[10px] font-black text-neutral-900 uppercase tracking-widest">Fase 02: Manutenção</span>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-neutral-900 animate-ping"></div>
                                        <span className="text-[10px] font-black text-neutral-900 uppercase">Live</span>
                                    </div>
                                </div>

                                <div className="flex-1 flex items-center justify-center relative scale-110">
                                    {/* Radar Background Circles */}
                                    <div className="absolute w-32 h-32 rounded-full border border-neutral-900/10"></div>
                                    <div className="absolute w-24 h-24 rounded-full border border-neutral-900/20"></div>
                                    <div className="absolute w-16 h-16 rounded-full border border-neutral-900/30"></div>

                                    {/* Radar Scanner Beam */}
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                        className="absolute w-32 h-32 rounded-full border-t border-l border-neutral-900/40 z-10"
                                        style={{ background: 'conic-gradient(from 0deg, rgba(23,23,23,0.2) 0deg, transparent 90deg)' }}
                                    />

                                    {/* Pulsing Dots (Monitored Points) */}
                                    {[
                                        { top: '20%', left: '40%', delay: 0 },
                                        { top: '70%', left: '40%', delay: 2.5 },
                                        { top: '40%', left: '65%', delay: 4.2 },
                                    ].map((point, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: point.delay }}
                                            className="absolute w-2 h-2 rounded-full bg-neutral-900"
                                            style={{ top: point.top, left: point.left }}
                                        />
                                    ))}

                                    <div className="relative z-10 w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center border-4 border-brand-400">
                                        <Activity className="w-5 h-5 text-brand-400" />
                                    </div>
                                </div>

                                <div className="mt-auto flex justify-center">
                                    <span className="text-[10px] font-black text-neutral-900 uppercase tracking-widest bg-neutral-900/5 px-3 py-1 rounded-full whitespace-nowrap">Monitoramento 24/7/365</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
