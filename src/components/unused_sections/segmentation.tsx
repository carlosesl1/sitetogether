import React from "react";
import { CheckCircle2, Shield, TrendingUp, Code2, Users, Database, Server, Globe, Activity, ShieldCheck, FileCheck, Zap, Clock, Radio, ArrowRight, Settings, Lock, FileText } from "lucide-react";

export function Segmentation() {
    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes sync-flow {
                    0% { transform: translateX(-100%); opacity: 0; }
                    50% { opacity: 1; }
                    100% { transform: translateX(100%); opacity: 0; }
                }
                @keyframes beam-pulse {
                    0%, 100% { opacity: 0.3; height: 30%; }
                    50% { opacity: 1; height: 100%; }
                }
                @keyframes scan-line {
                    0% { top: 0%; }
                    100% { top: 100%; }
                }
                @keyframes pulse-wave {
                    0% { height: 20%; opacity: 0.4; }
                    50% { height: 80%; opacity: 1; }
                    100% { height: 20%; opacity: 0.4; }
                }
            `}} />
            <section className="w-full py-24 bg-white relative overflow-hidden">
                <div className="container px-4 md:px-6 relative z-10">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-50 border border-neutral-100 mb-8 shadow-sm w-fit">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 shadow-[0_0_10px_rgba(255,214,55,0.8)]"></span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">Segmentação</span>
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight md:text-5xl text-neutral-900 max-w-3xl">
                            Soluções desenhadas para <span className="relative z-10 inline-block">cada estágio<span className="absolute bottom-2 left-0 w-full h-3 bg-brand-200/50 -z-10 rounded-sm mix-blend-multiply"></span></span> de maturidade
                        </h2>
                        <p className="max-w-[700px] text-neutral-600 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed font-medium">
                            Não importa o tamanho da sua operação atual, temos um modelo de encaixe perfeito.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mx-auto w-full items-stretch">

                        {/* Card 1: DPO Interno (Wide - 60%) */}
                        <div className="lg:col-span-7 group relative overflow-hidden bg-white rounded-[24px] shadow-[0_2px_4px_rgba(0,0,0,0.02),0_8px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.04),0_12px_24px_rgba(0,0,0,0.06)] transition-all duration-300 p-8 flex flex-col gap-4 items-start border border-neutral-100 min-h-[400px]">
                            {/* Background Decoration */}
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-100/30 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>

                            <div className="relative z-10 w-full max-w-2xl">
                                <h3 className="text-xl font-bold text-neutral-900 mb-2 tracking-tight">Empresas com DPO Interno</h3>
                                <p className="text-neutral-500 text-sm leading-relaxed font-medium">
                                    Mesmo com um Encarregado, equipes enxutas podem sobrecarregar. Assumimos a parte operacional (configurações, respostas a titulares, ROPA), apoiando o DPO.
                                </p>
                            </div>

                            {/* Dashboard de Sincronização Operacional */}
                            <div className="w-full flex-1 relative bg-neutral-50/50 rounded-2xl border border-neutral-100 overflow-hidden flex justify-center pt-4 pb-6 px-4 group-hover:border-brand-200/50 transition-colors">
                                {/* Grid Pattern */}
                                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>



                                {/* Sidebar: Strategy (Internal DPO + TOGETHER) */}
                                <div className="flex-1 flex flex-col gap-3 pr-6 z-10">
                                    <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1 pl-2">Governança Integrada</div>
                                    <div className="bg-white p-3 rounded-xl border border-neutral-100 shadow-sm transition-all hover:translate-x-1 outline outline-1 outline-neutral-100">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="p-1 rounded bg-neutral-900 shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
                                                <Users className="w-3.5 h-3.5 text-brand-400" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[10px] font-bold text-neutral-900 leading-normal">DPO Interno + TOGETHER</span>
                                                <span className="text-[8px] text-neutral-400 font-bold uppercase tracking-tight">Estratégia & Liderança</span>
                                            </div>
                                        </div>
                                        <div className="h-1 w-full bg-neutral-50 rounded-full overflow-hidden">
                                            <div className="h-full bg-neutral-900 w-[85%]"></div>
                                        </div>
                                    </div>
                                    <div className="bg-white/60 p-3 rounded-xl border border-neutral-100 shadow-xs backdrop-blur-sm opacity-60">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="p-1 rounded bg-neutral-200">
                                                <Shield className="w-3 h-3 text-neutral-500" />
                                            </div>
                                            <span className="text-[10px] font-bold text-neutral-500">Diretrizes Legais</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Sync Arrows */}
                                <div className="relative w-12 flex flex-col gap-6 items-center justify-center z-20">
                                    <div className="w-7 h-7 rounded-full bg-brand-400 text-white flex items-center justify-center shadow-lg shadow-brand-200/50 border-2 border-white">
                                        <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
                                    </div>
                                    <div className="w-6 h-6 rounded-full bg-white border border-brand-200 text-brand-500 flex items-center justify-center opacity-50">
                                        <ArrowRight className="w-3 h-3 rotate-180" />
                                    </div>
                                </div>

                                {/* Main Module: TOGETHER Operations */}
                                <div className="flex-1 flex flex-col gap-2 pl-6 z-10">
                                    <div className="text-[10px] font-bold text-brand-600 uppercase tracking-wider mb-1 pl-2 flex items-center gap-1.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></div>
                                        TOGETHER: Braço Operacional
                                    </div>

                                    {/* Service 1: Data Mapping */}
                                    <div className="bg-white p-2.5 rounded-xl border border-brand-200 shadow-[0_4px_12px_rgba(230,194,0,0.1)] ring-1 ring-brand-100/50 scale-105 transition-all">
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="flex items-center gap-2">
                                                <div className="p-1 rounded bg-brand-50">
                                                    <Database className="w-3 h-3 text-brand-600" />
                                                </div>
                                                <div>
                                                    <div className="text-[9px] font-bold text-neutral-900">MAPEAMENTO DE DADOS</div>
                                                    <div className="text-[7px] text-green-600 font-bold uppercase">Sincronizado e Atualizado</div>
                                                </div>
                                            </div>
                                            <Zap className="w-2.5 h-2.5 text-brand-500" />
                                        </div>
                                        <div className="h-1 w-full bg-neutral-50 rounded-full overflow-hidden">
                                            <div className="h-full bg-brand-400 w-full animate-pulse"></div>
                                        </div>
                                    </div>

                                    {/* Service 2: Audit & Risk */}
                                    <div className="bg-white p-2.5 rounded-xl border border-neutral-100 shadow-sm transition-all hover:-translate-x-1 border-l-brand-400 border-l-2">
                                        <div className="flex items-center gap-2">
                                            <div className="p-1 rounded bg-neutral-50 text-neutral-600 border border-neutral-100">
                                                <ShieldCheck className="w-3 h-3" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[9px] font-bold text-neutral-800 uppercase tracking-tight">Auditoria e Gestão de Riscos</span>
                                                <span className="text-[7px] text-neutral-400 font-medium italic">Gestão de Fornecedores</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Service 3: DSAR & Incident */}
                                    <div className="bg-white p-2.5 rounded-xl border border-neutral-100 shadow-sm transition-all hover:-translate-x-1 border-l-brand-400 border-l-2">
                                        <div className="flex items-center gap-2">
                                            <div className="p-1 rounded bg-neutral-50 text-neutral-600 border border-neutral-100">
                                                <Activity className="w-3 h-3" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[9px] font-bold text-neutral-800 uppercase tracking-tight">Fluxo de DSAR e Incidentes</span>
                                                <span className="text-[7px] text-neutral-400 font-medium italic">Atendimento ao Titular</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Card 2: Sem DPO (Standard - 40%) */}
                        <div className="lg:col-span-5 group relative overflow-hidden bg-white rounded-[24px] shadow-[0_2px_4px_rgba(0,0,0,0.02),0_8px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.04),0_12px_24px_rgba(0,0,0,0.06)] transition-all duration-300 p-8 flex flex-col gap-4 items-start border border-neutral-100 min-h-[400px]">
                            {/* Background Decoration */}
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-100/30 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>

                            <div className="relative z-10 w-full">
                                <h3 className="text-xl font-bold text-neutral-900 mb-2 tracking-tight">Empresas sem DPO Estruturado</h3>
                                <p className="text-neutral-500 text-sm leading-relaxed font-medium">
                                    Quando o Compliance fica dividido entre setores, o risco aumenta. Atuamos como "DPO as a Service" assumindo total responsabilidade técnica e legal.
                                </p>
                            </div>

                            <div className="flex-1 relative w-full bg-neutral-50/50 rounded-2xl border border-neutral-100 overflow-hidden flex justify-center pt-4 pb-6 px-4 group-hover:border-brand-200/50 transition-colors">
                                {/* Grid Pattern */}
                                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>

                                {/* Sidebar: Governance (DPO as a Service) */}
                                <div className="flex-1 flex flex-col gap-3 pr-6 z-10">
                                    <div className="text-[10px] font-bold text-brand-600 uppercase tracking-widest mb-1 pl-2">Governança Completa</div>
                                    <div className="bg-white p-3 rounded-xl border border-brand-200 shadow-sm transition-all hover:translate-x-1 outline outline-1 outline-brand-100">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="p-1 rounded bg-brand-50 shadow-[0_2px_4px_rgba(255,214,0,0.1)]">
                                                <Shield className="w-3.5 h-3.5 text-brand-500" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[10px] font-bold text-neutral-900 leading-normal">TOGETHER DPO</span>
                                                <span className="text-[8px] text-neutral-400 font-bold uppercase tracking-tight">Jurídico & Compliance Integral</span>
                                            </div>
                                        </div>
                                        <div className="h-1 w-full bg-neutral-50 rounded-full overflow-hidden">
                                            <div className="h-full bg-brand-400 w-full"></div>
                                        </div>
                                    </div>
                                    <div className="bg-white/60 p-3 rounded-xl border border-neutral-100 shadow-xs backdrop-blur-sm opacity-60">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="p-1 rounded bg-neutral-200">
                                                <Users className="w-3 h-3 text-neutral-500" />
                                            </div>
                                            <span className="text-[10px] font-bold text-neutral-500">Comitê de Privacidade</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Sync Arrows */}
                                <div className="relative w-12 flex flex-col gap-6 items-center justify-center z-20">
                                    <div className="w-7 h-7 rounded-full bg-brand-400 text-white flex items-center justify-center shadow-lg shadow-brand-200/50 border-2 border-white">
                                        <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
                                    </div>
                                </div>

                                {/* Main Module: Execution */}
                                <div className="flex-1 flex flex-col gap-2 pl-6 z-10">
                                    <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-1 pl-2">Execução & Operação</div>

                                    {/* Item 1 */}
                                    <div className="bg-white p-2.5 rounded-xl border border-neutral-100 shadow-sm transition-all hover:-translate-x-1 border-l-brand-400 border-l-2">
                                        <div className="flex items-center gap-2">
                                            <div className="p-1 rounded bg-neutral-50 text-neutral-600 border border-neutral-100">
                                                <CheckCircle2 className="w-3 h-3" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[9px] font-bold text-neutral-800 uppercase tracking-tight">Diagnóstico & Adequação</span>
                                                <span className="text-[7px] text-neutral-400 font-medium italic">LGPD & GDPR</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Item 2 */}
                                    <div className="bg-white p-2.5 rounded-xl border border-neutral-100 shadow-sm transition-all hover:-translate-x-1 border-l-brand-400 border-l-2">
                                        <div className="flex items-center gap-2">
                                            <div className="p-1 rounded bg-neutral-50 text-neutral-600 border border-neutral-100">
                                                <Database className="w-3 h-3" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[9px] font-bold text-neutral-800 uppercase tracking-tight">Gestão de Cookies & DSAR</span>
                                                <span className="text-[7px] text-neutral-400 font-medium italic">Privacy Center</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Item 3 */}
                                    <div className="bg-white p-2.5 rounded-xl border border-neutral-100 shadow-sm transition-all hover:-translate-x-1 border-l-brand-400 border-l-2">
                                        <div className="flex items-center gap-2">
                                            <div className="p-1 rounded bg-neutral-50 text-neutral-600 border border-neutral-100">
                                                <Lock className="w-3 h-3" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[9px] font-bold text-neutral-800 uppercase tracking-tight">Resposta a Incidentes</span>
                                                <span className="text-[7px] text-neutral-400 font-medium italic">Security Team</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 3: Tech/SaaS (Standard - 40%) */}
                        <div className="lg:col-span-5 group relative overflow-hidden bg-white rounded-[24px] shadow-[0_2px_4px_rgba(0,0,0,0.02),0_8px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.04),0_12px_24px_rgba(0,0,0,0.06)] transition-all duration-300 p-8 flex flex-col gap-4 items-start border border-neutral-100 min-h-[400px]">
                            {/* Background Decoration */}
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-100/30 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>

                            <div className="relative z-10 w-full">
                                <h3 className="text-xl font-bold text-neutral-900 mb-2 tracking-tight">Empresas em Expansão e Enterprise</h3>
                                <p className="text-neutral-500 text-sm leading-relaxed font-medium">
                                    Foco total em passar em auditorias e agilizar o ciclo de vendas, garantindo que a privacidade seja um diferencial para grandes clientes, não um bloqueio.
                                </p>
                            </div>

                            <div className="flex-1 relative w-full bg-neutral-50/50 rounded-2xl border border-neutral-100 overflow-hidden pt-4 pb-6 px-4 group-hover:border-brand-200/50 transition-colors flex flex-col">
                                {/* Grid Pattern */}
                                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>

                                <div className="flex items-center justify-between gap-4 relative z-10 px-2 h-full">
                                    {/* Left Side: Compliance Input */}
                                    <div className="flex flex-col gap-3 flex-1">
                                        <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest pl-1">Auditoria Aprovada</div>

                                        {/* Vertical List of Compliance Items */}
                                        <div className="flex flex-col gap-1.5">
                                            {/* Item 1: Audit Report */}
                                            <div className="bg-white p-2 rounded-lg border border-neutral-100 shadow-sm flex items-center gap-2 hover:border-green-200 transition-colors">
                                                <div className="p-1 rounded-md bg-neutral-50 text-neutral-500 border border-neutral-100">
                                                    <FileText className="w-3 h-3" />
                                                </div>
                                                <span className="text-[9px] font-bold text-neutral-700 flex-1">Relatório de Auditoria</span>
                                                <CheckCircle2 className="w-3 h-3 text-green-500" />
                                            </div>

                                            {/* Item 2: Certificate */}
                                            <div className="bg-white p-2 rounded-lg border border-neutral-100 shadow-sm flex items-center gap-2 hover:border-green-200 transition-colors">
                                                <div className="p-1 rounded-md bg-green-50 text-green-600 border border-green-100">
                                                    <Shield className="w-3 h-3" />
                                                </div>
                                                <span className="text-[9px] font-bold text-neutral-700 flex-1">ISO 27001 / SOC2</span>
                                                <CheckCircle2 className="w-3 h-3 text-green-500" />
                                            </div>

                                            {/* Item 3: Compliance Check */}
                                            <div className="bg-white p-2 rounded-lg border border-green-200 shadow-sm flex items-center gap-2 ring-1 ring-green-100">
                                                <div className="p-1 rounded-md bg-green-50 text-green-600 border border-green-100">
                                                    <ShieldCheck className="w-3 h-3" />
                                                </div>
                                                <span className="text-[9px] font-bold text-neutral-900 flex-1">Compliance Verificado</span>
                                                <CheckCircle2 className="w-3 h-3 text-green-600" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Center: Transformation Arrow */}
                                    <div className="flex flex-col items-center gap-1 pt-4 px-2">
                                        <div className="w-8 h-8 rounded-full bg-white border border-brand-100 flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.05)] relative z-20">
                                            <ArrowRight className="w-4 h-4 text-brand-500 animate-[pulse_2s_ease-in-out_infinite]" />
                                            {/* Ripple Effect */}
                                            <div className="absolute inset-0 rounded-full border border-brand-200 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-50"></div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-3 flex-1">
                                        <div className="text-[10px] font-bold text-brand-600 uppercase tracking-wider pl-1 text-right">Vendas Rápidas</div>

                                        <div className="bg-white p-3 rounded-xl border border-brand-200 shadow-[0_4px_12px_rgba(230,194,0,0.1)] ring-1 ring-brand-100/50 flex flex-col justify-between relative overflow-hidden group/sales h-[88px]">
                                            <div className="flex items-center justify-between border-b border-neutral-50 pb-2 relative z-10">
                                                <span className="text-[9px] font-bold text-neutral-500">Crescimento</span>
                                                <div className="flex items-center text-green-600 text-[8px] font-bold bg-green-50 px-1.5 py-0.5 rounded-full border border-green-100">
                                                    <TrendingUp className="w-2.5 h-2.5 mr-1" />
                                                    +40%
                                                </div>
                                            </div>

                                            {/* Graph Area */}
                                            <div className="absolute inset-0 pt-8 flex items-end">
                                                {/* Background Grid */}
                                                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:12px_12px]"></div>

                                                {/* Line Graph */}
                                                <svg className="w-full h-12 overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 50">
                                                    {/* Gradient Fill */}
                                                    <defs>
                                                        <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
                                                            <stop offset="0%" stopColor="#16A34A" stopOpacity="0.2" />
                                                            <stop offset="100%" stopColor="#16A34A" stopOpacity="0" />
                                                        </linearGradient>
                                                    </defs>
                                                    <path d="M0,50 L0,35 C10,35 20,40 30,30 C45,15 55,25 70,10 C80,0 90,5 100,0 L100,50 Z" fill="url(#growthGradient)" />
                                                    <path d="M0,35 C10,35 20,40 30,30 C45,15 55,25 70,10 C80,0 90,5 100,0" fill="none" stroke="#16A34A" strokeWidth="2" vectorEffect="non-scaling-stroke" />

                                                    {/* Animated Datapoint */}
                                                    <circle cx="100" cy="0" r="3" fill="#16A34A" className="animate-[pulse_2s_infinite]" />
                                                </svg>
                                            </div>

                                            <div className="relative z-10 flex justify-end mt-auto">
                                                <div className="text-[10px] font-bold text-neutral-900 bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded border border-neutral-100 shadow-sm">
                                                    Mais Vendas
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 4: Empresas sem Adequação (Wide - 60%) */}
                        <div className="lg:col-span-7 group relative overflow-hidden bg-white rounded-[24px] shadow-[0_2px_4px_rgba(0,0,0,0.02),0_8px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.04),0_12px_24px_rgba(0,0,0,0.06)] transition-all duration-300 p-8 border border-neutral-100 flex flex-col items-start gap-4 min-h-[400px]">
                            <div className="relative z-10 w-full max-w-2xl">
                                <h3 className="text-xl font-bold text-neutral-900 mb-2 tracking-tight">Empresas sem Adequação à LGPD</h3>
                                <p className="text-neutral-500 text-sm leading-relaxed font-medium">
                                    Adequamos sua empresa a LGPD e realizamos a manutenção com uma operação contínua 24/7, garantindo que a conformidade seja viva e resistente a incidentes reais.
                                </p>
                            </div>

                            <div className="flex-1 relative w-full bg-neutral-50/50 rounded-2xl border border-neutral-100 overflow-hidden py-4 px-4 group-hover:border-brand-200/50 transition-colors flex flex-col items-center justify-center">

                                {/* Badge - no topo do container */}
                                <div className="flex justify-center mb-4">
                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-neutral-200 shadow-sm">
                                        <Zap className="w-3 h-3 text-[#FFD637] fill-current" />
                                        <span className="text-[9px] font-bold text-neutral-600 uppercase tracking-wide">Jornada Completa de Conformidade</span>
                                    </div>
                                </div>

                                <div className="relative z-10 flex items-center justify-between gap-6 px-4 w-full">
                                    {/* Phase 1: Adequacy (Done) */}
                                    <div className="flex flex-col gap-3 flex-1 opacity-80 hover:opacity-100 transition-opacity">
                                        <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest pl-1">Fase 1: Adequação</div>
                                        <div className="bg-white p-4 rounded-2xl border border-green-100 shadow-sm flex flex-col gap-3 relative overflow-hidden group/phase1">
                                            <div className="absolute top-0 right-0 p-2 opacity-10 group-hover/phase1:opacity-20 transition-opacity">
                                                <FileCheck className="w-24 h-24 text-green-500" />
                                            </div>

                                            <div className="flex items-center gap-3 relative z-10">
                                                <div className="p-2 rounded-xl bg-green-50 text-green-600 border border-green-100">
                                                    <FileCheck className="w-6 h-6" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-xs font-bold text-neutral-900">Adequação LGPD</span>
                                                    <span className="text-[10px] font-medium text-neutral-500">Diagnóstico & Implementação</span>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-2 mt-1">
                                                <div className="flex items-center gap-1.5 bg-green-50 px-2 py-1 rounded-md border border-green-100">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                                    <span className="text-[9px] font-bold text-green-700 uppercase">Concluído</span>
                                                </div>
                                                <span className="text-[9px] text-neutral-400">100% Finalizado</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Connector */}
                                    <div className="flex flex-col items-center justify-center gap-2 pt-6">
                                        <div className="w-24 h-[2px] bg-neutral-100 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-brand-500 w-1/2 animate-[shimmer_1.5s_infinite] translate-x-[-100%]"></div>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-white border border-brand-100 flex items-center justify-center shadow-sm relative z-20">
                                            <ArrowRight className="w-4 h-4 text-brand-500" />
                                        </div>
                                    </div>

                                    {/* Phase 2: Monitoring (Active) */}
                                    <div className="flex flex-col gap-3 flex-1">
                                        <div className="text-[10px] font-bold text-brand-600 uppercase tracking-widest pl-1 text-right">Fase 2: Manutenção</div>

                                        <div className="bg-white p-4 rounded-2xl border border-brand-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col gap-4 relative overflow-hidden group/phase2 ring-1 ring-brand-100/50">
                                            {/* Pulse Background */}
                                            <div className="absolute -right-6 -top-6 w-24 h-24 bg-brand-50 rounded-full animate-pulse opacity-50"></div>

                                            <div className="flex items-center justify-between relative z-10">
                                                <div className="flex items-center gap-3">
                                                    <div className="relative">
                                                        <div className="absolute inset-0 bg-brand-400 rounded-xl animate-ping opacity-20"></div>
                                                        <div className="p-2 rounded-xl bg-brand-50 text-brand-600 border border-brand-100 relative z-10">
                                                            <ShieldCheck className="w-6 h-6" />
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-xs font-bold text-neutral-900">Proteção Ativa</span>
                                                        <span className="text-[10px] font-medium text-neutral-500">Monitoramento 24/7</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col items-end">
                                                    <Activity className="w-4 h-4 text-brand-500 animate-pulse" />
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between pt-2 border-t border-dashed border-neutral-100">
                                                <div className="flex items-center gap-1.5">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                                                    <span className="text-[9px] font-bold text-green-700 uppercase">Sistema Seguro</span>
                                                </div>
                                                <div className="px-2 py-0.5 bg-neutral-50 rounded border border-neutral-100 text-[9px] font-bold text-neutral-500">
                                                    SLA Garantido
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section >
        </>
    );
}
