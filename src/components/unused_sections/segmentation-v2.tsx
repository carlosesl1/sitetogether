"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Shield, TrendingUp, Users, Database, Activity, ShieldCheck, FileCheck, Zap, ArrowRight, Lock, FileText, Search, Code2 } from "lucide-react";

export function SegmentationV2() {
    return (
        <section className="w-full py-40 bg-[#fafafa] relative overflow-hidden">
            {/* Structural Grid Background */}
            <div className="absolute inset-0 opacity-[0.05] -z-10" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="container px-6 relative z-10 mx-auto">
                <div className="max-w-4xl mb-24">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-100 mb-8 shadow-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-400"></div>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] font-mono text-neutral-400">System_Module::Segmentation</span>
                    </div>
                    <h2 className="text-6xl md:text-[5.5rem] font-black text-neutral-900 tracking-tighter leading-[0.9] mb-8">
                        Infraestrutura <br />
                        <span className="text-neutral-300">de Conformidade.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-neutral-200 border border-neutral-200 rounded-[2rem] overflow-hidden shadow-2xl">

                    {/* CARD 1: DPO INTERNO (Wide) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="md:col-span-12 lg:col-span-7 bg-white p-12 group"
                    >
                        <div className="flex flex-col md:flex-row justify-between gap-12">
                            <div className="max-w-xs">
                                <span className="text-[10px] font-black text-brand-600 uppercase tracking-widest mb-4 block">01 / DPO Sync</span>
                                <h3 className="text-3xl font-bold text-neutral-900 mb-6">Empresas com DPO Interno</h3>
                                <p className="text-sm text-neutral-500 font-medium leading-relaxed">
                                    Integração imediata com seu time interno, assumindo as rotinas configurativas e operacionais.
                                </p>
                            </div>

                            <div className="flex-1 bg-neutral-50 rounded-2xl border border-neutral-100 p-8 flex items-center justify-center relative overflow-hidden h-64">
                                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
                                <div className="flex items-center gap-6 relative z-10">
                                    <div className="w-16 h-16 rounded-xl bg-white border border-neutral-200 shadow-sm flex items-center justify-center relative group-hover:scale-110 transition-transform duration-500">
                                        <Users className="w-8 h-8 text-neutral-900" />
                                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-400 rounded-full"></div>
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                        <div className="w-12 h-px bg-neutral-200 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-brand-400 w-full animate-[shimmer_2s_infinite]"></div>
                                        </div>
                                        <Zap className="w-3 h-3 text-brand-400" />
                                    </div>
                                    <div className="w-16 h-16 rounded-xl bg-neutral-900 border border-neutral-800 shadow-xl flex items-center justify-center scale-110">
                                        <ShieldCheck className="w-8 h-8 text-brand-400" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* CARD 2: SEM DPO (Narrow) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="md:col-span-12 lg:col-span-5 bg-neutral-50 p-12 flex flex-col justify-between group"
                    >
                        <div>
                            <span className="text-[10px] font-black text-brand-600 uppercase tracking-widest mb-4 block">02 / Full Compliance</span>
                            <h3 className="text-3xl font-bold text-neutral-900 mb-6">Empresas sem DPO</h3>
                            <p className="text-sm text-neutral-500 font-medium leading-relaxed mb-12">
                                Atuamos como seu departamento de privacidade inteiro, do jurídico ao técnico.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl border border-neutral-200 p-6 flex items-center justify-between gap-4 h-32 hover:border-brand-400 transition-colors">
                            <div className="flex -space-x-3">
                                {[Database, Lock, FileText].map((Icon, i) => (
                                    <div key={i} className="w-10 h-10 rounded-full bg-neutral-50 border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:text-brand-600 transition-colors">
                                        <Icon className="w-4 h-4" />
                                    </div>
                                ))}
                            </div>
                            <div className="h-4 w-px bg-neutral-100"></div>
                            <div className="flex items-center gap-3">
                                <div className="text-right">
                                    <div className="text-[10px] font-black uppercase text-neutral-900">TOGETHER DPO</div>
                                    <div className="text-[8px] font-bold text-brand-500 uppercase">Operação Ativa</div>
                                </div>
                                <Shield className="w-6 h-6 text-brand-400" />
                            </div>
                        </div>
                    </motion.div>

                    {/* CARD 3: ENTERPRISE (Narrow) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="md:col-span-12 lg:col-span-5 bg-white p-12 flex flex-col justify-between group"
                    >
                        <div>
                            <span className="text-[10px] font-black text-brand-600 uppercase tracking-widest mb-4 block">03 / Expansion</span>
                            <h3 className="text-3xl font-bold text-neutral-900 mb-6 tracking-tight">Enterprise & Auditoria</h3>
                            <p className="text-sm text-neutral-500 font-medium leading-relaxed">
                                Ciclos de vendas rápidos com due diligence técnica automatizada e reportes ISO/SOC2.
                            </p>
                        </div>

                        <div className="mt-12 space-y-3">
                            {[
                                { label: "Relatório SOC2", icon: <CheckCircle2 /> },
                                { label: "Security Assessment", icon: <Lock /> },
                                { label: "ISO 27001 Readiness", icon: <ShieldCheck /> }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-neutral-100 group-hover:bg-neutral-50 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="text-brand-500">{React.cloneElement(item.icon as React.ReactElement, { className: "w-4 h-4" })}</div>
                                        <span className="text-[10px] font-black uppercase tracking-wider text-neutral-400 group-hover:text-neutral-900 transition-colors">{item.label}</span>
                                    </div>
                                    <div className="w-8 h-[2px] bg-neutral-100"></div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* CARD 4: ADEQUAÇÃO LGPD (Wide) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="md:col-span-12 lg:col-span-7 bg-[#0a0a0a] p-12 flex flex-col group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-24 opacity-[0.03] pointer-events-none">
                            <Code2 className="w-[500px] h-[500px] text-white" />
                        </div>

                        <div className="relative z-10 max-w-sm mb-16">
                            <span className="text-[10px] font-black text-brand-400 uppercase tracking-widest mb-4 block">04 / Transformation</span>
                            <h3 className="text-3xl font-bold text-white mb-6">Adequação à LGPD</h3>
                            <p className="text-sm text-neutral-400 font-medium leading-relaxed">
                                Estruturação completa em tempo recorde com manutenção garantida por SLA.
                            </p>
                        </div>

                        <div className="relative z-10 flex flex-col md:flex-row items-stretch gap-6 h-40">
                            <div className="flex-1 border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:bg-white/5 transition-colors">
                                <div className="text-[10px] font-black text-white/20 uppercase">Stage 01</div>
                                <div className="text-[11px] font-black text-white uppercase tracking-widest mt-2 flex items-center gap-2">
                                    <FileCheck className="w-4 h-4 text-brand-400" /> Diagnóstico
                                </div>
                                <div className="h-1 w-full bg-white/10 rounded-full mt-4">
                                    <div className="h-full bg-brand-400 w-full shadow-[0_0_10px_#FFD637]"></div>
                                </div>
                            </div>

                            <div className="flex flex-col items-center justify-center p-2">
                                <ArrowRight className="w-6 h-6 text-brand-400 animate-pulse" />
                            </div>

                            <div className="flex-1 border border-brand-400/30 bg-brand-400/5 rounded-2xl p-6 flex flex-col justify-between group/active">
                                <div className="text-[10px] font-black text-brand-400/50 uppercase">Stage 02</div>
                                <div className="text-[11px] font-black text-white uppercase tracking-widest mt-2 flex items-center gap-2">
                                    <Activity className="w-4 h-4 text-brand-400 animate-pulse" /> Operação 24/7
                                </div>
                                <div className="h-1 w-full bg-white/5 rounded-full mt-4 overflow-hidden">
                                    <div className="h-full bg-brand-400 w-1/3 animate-[shimmer_2s_infinite]"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
