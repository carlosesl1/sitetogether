"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Shield, TrendingUp, Users, Database, Activity, ShieldCheck, FileCheck, Zap, ArrowRight, Lock, FileText, ChevronRight, LayoutGrid, Sparkles } from "lucide-react";

export function SegmentationV3() {
    return (
        <section className="w-full py-40 bg-white relative overflow-hidden">
            {/* Soft Gradient Overlay */}
            <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-neutral-50 to-transparent -z-10"></div>

            <div className="container px-6 relative z-10 mx-auto">
                <div className="flex flex-col lg:flex-row items-end justify-between mb-32 gap-12">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="bg-white border border-neutral-100 shadow-sm px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-10"
                        >
                            <Sparkles className="w-3 h-3 text-brand-500" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400">Escalabilidade Adaptativa</span>
                        </motion.div>
                        <h2 className="text-6xl md:text-[7rem] font-bold tracking-tighter text-neutral-900 leading-[0.8] mb-0">
                            Modelos de <br />
                            <span className="text-neutral-300 italic">Encaixe Perfeito.</span>
                        </h2>
                    </div>

                    <div className="lg:max-w-xs pb-4">
                        <p className="text-lg text-neutral-500 font-medium leading-[1.4]">
                            Desenhamos operações que se moldam à complexidade da sua empresa, do bootstrapping ao IPO.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* CARD 1: DPO INTERNO */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="group relative bg-[#f8f9fa] rounded-[3rem] p-12 overflow-hidden flex flex-col h-[520px]"
                    >
                        <div className="relative z-10 mb-auto">
                            <h3 className="text-3xl font-bold text-neutral-900 mb-6">Empresas com <br />DPO Interno</h3>
                            <p className="text-neutral-500 font-medium max-w-xs leading-relaxed">
                                Braço operacional sênior para potencializar a governança que você já iniciou.
                            </p>
                        </div>

                        <div className="mt-12 bg-white rounded-[2.5rem] p-1 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-neutral-100 overflow-hidden">
                            <div className="flex items-center bg-neutral-50/50 p-6 gap-6 h-48">
                                <div className="flex-1 flex flex-col gap-3">
                                    <div className="h-2 w-full bg-neutral-200 rounded-full overflow-hidden">
                                        <motion.div initial={{ width: 0 }} whileInView={{ width: "90%" }} transition={{ duration: 1 }} className="h-full bg-neutral-900" />
                                    </div>
                                    <div className="h-2 w-full bg-neutral-200 rounded-full overflow-hidden">
                                        <motion.div initial={{ width: 0 }} whileInView={{ width: "65%" }} transition={{ duration: 1, delay: 0.2 }} className="h-full bg-neutral-400" />
                                    </div>
                                    <div className="h-2 w-full bg-neutral-200 rounded-full overflow-hidden">
                                        <motion.div initial={{ width: 0 }} whileInView={{ width: "80%" }} transition={{ duration: 1, delay: 0.4 }} className="h-full bg-brand-400" />
                                    </div>
                                </div>
                                <div className="w-px h-16 bg-neutral-100" />
                                <div className="text-center">
                                    <div className="text-sm font-black text-neutral-900">SYNC</div>
                                    <Activity className="w-5 h-5 text-brand-500 mx-auto mt-2 animate-pulse" />
                                </div>
                            </div>
                            <div className="px-8 py-5 flex items-center justify-between text-[11px] font-black uppercase tracking-widest text-neutral-400">
                                <span>Operation_Layer</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                            </div>
                        </div>
                    </motion.div>

                    {/* CARD 2: SEM DPO */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="group relative bg-neutral-900 rounded-[3rem] p-12 overflow-hidden flex flex-col h-[520px]"
                    >
                        <div className="absolute top-0 right-0 p-12 opacity-20 pointer-events-none">
                            <LayoutGrid className="w-64 h-64 text-brand-400" />
                        </div>

                        <div className="relative z-10 mb-auto">
                            <h3 className="text-3xl font-bold text-white mb-6">Empresas sem <br />DPO Estruturado</h3>
                            <p className="text-neutral-400 font-medium max-w-xs leading-relaxed">
                                Nomeação oficial e gestão full-service de todos os pilares da LGPD.
                            </p>
                        </div>

                        <div className="relative mt-12 flex justify-center py-8">
                            <div className="relative w-40 h-40">
                                <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-2 border-dashed border-white/20 rounded-full" />
                                <div className="absolute inset-4 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <ShieldCheck className="w-16 h-16 text-brand-400 drop-shadow-[0_0_20px_rgba(255,214,55,0.4)]" />
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 text-center relative z-10">
                            <span className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold text-white uppercase tracking-[0.3em]">
                                Full_Service Provider
                            </span>
                        </div>
                    </motion.div>

                    {/* CARD 3: ENTERPRISE (Now Wide - Bottom left) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="group relative bg-[#fffdf0] rounded-[3rem] p-12 overflow-hidden flex flex-col md:flex-row gap-12 md:items-center h-[400px]"
                    >
                        <div className="flex-1 relative z-10">
                            <h3 className="text-3xl font-bold text-neutral-900 mb-6">Expansão & Enterprise</h3>
                            <p className="text-neutral-500 font-medium max-w-xs leading-relaxed">
                                Foco em fechar contratos de alto ticket agilizando auditorias e reports de segurança.
                            </p>
                        </div>

                        <div className="flex-1 relative bg-white rounded-[2.5rem] p-8 shadow-sm border border-brand-200/50 flex flex-col justify-between h-full">
                            <div className="flex justify-between items-center">
                                <span className="text-[10px] font-black uppercase text-neutral-300 tracking-widest">Growth_Metrics</span>
                                <div className="w-8 h-8 rounded-lg bg-brand-400 flex items-center justify-center text-neutral-900">
                                    <TrendingUp className="w-5 h-5" />
                                </div>
                            </div>

                            <div className="text-5xl font-black text-neutral-900 tracking-tighter">
                                APROVADO.
                            </div>

                            <div className="space-y-3">
                                {["SOC2 Technical Report", "ISO 27001 Validation"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                                        <span className="text-[11px] font-bold text-neutral-400 uppercase">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* CARD 4: ADEQUAÇÃO LGPD (Now Wide - Bottom right) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="group relative bg-white border border-neutral-100 rounded-[3rem] p-12 overflow-hidden flex flex-col md:flex-row gap-12 md:items-center h-[400px] hover:shadow-2xl transition-all duration-700"
                    >
                        <div className="flex-1 relative z-10">
                            <h3 className="text-3xl font-bold text-neutral-900 mb-6">Adequação à LGPD</h3>
                            <p className="text-neutral-500 font-medium max-w-xs leading-relaxed">
                                Do diagnóstico à manutenção ativa. Garantimos conformidade viva e resistente.
                            </p>
                        </div>

                        <div className="flex-1 bg-neutral-900 rounded-[2.5rem] p-8 flex flex-col justify-center gap-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-400/10 blur-3xl rounded-full" />
                            <div className="flex items-center gap-4 text-white">
                                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                                    <Zap className="w-6 h-6 text-brand-400" />
                                </div>
                                <div>
                                    <div className="text-[11px] font-black uppercase tracking-widest text-brand-400">Active Stage</div>
                                    <div className="text-sm font-bold">Monitoramento 24/7</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 2, repeat: Infinity }} className="h-full bg-brand-400" />
                                </div>
                                <Activity className="w-4 h-4 text-brand-400 animate-pulse" />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
