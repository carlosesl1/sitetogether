import { ArrowUpRight, CheckCircle2, TrendingDown } from "lucide-react";

export function SuccessCases() {
    return (
        <section className="w-full py-24 bg-neutral-50 border-t border-neutral-200">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-50 border border-neutral-100 mb-8 shadow-sm w-fit">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-400 shadow-[0_0_10px_rgba(255,214,55,0.8)]"></div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">Cases de Sucesso</span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-neutral-900">
                        Impacto real em vendas e eficiência operacional.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                    {/* Case 1 */}
                    <div className="group relative overflow-hidden rounded-2xl bg-white border border-neutral-200 shadow-sm hover:shadow-md transition-all">
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-2 bg-brand-100 rounded-lg text-brand-700">
                                    <ArrowUpRight className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">SaaS B2B</span>
                            </div>

                            <h3 className="text-2xl font-bold text-neutral-900 mb-4">SaaS B2B Technology</h3>

                            <div className="space-y-4 text-sm">
                                <div>
                                    <p className="font-bold text-neutral-700 mb-1">Desafio:</p>
                                    <p className="text-neutral-500">Venda Enterprise de R$ 2M travada em Due Diligence.</p>
                                </div>
                                <div>
                                    <p className="font-bold text-neutral-700 mb-1">Ação:</p>
                                    <p className="text-neutral-500">Montamos uma operação emergencial para responder a auditoria e concluir os ajustes necessários em 72h.</p>
                                </div>
                                <div className="pt-4 mt-4 border-t border-neutral-100">
                                    <p className="font-bold text-green-600 flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4" />
                                        Resultado: Contrato assinado e cliente validado.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="h-2 w-full bg-brand-400/50 group-hover:bg-brand-400 transition-colors"></div>
                    </div>

                    {/* Case 2 */}
                    <div className="group relative overflow-hidden rounded-2xl bg-white border border-neutral-200 shadow-sm hover:shadow-md transition-all">
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-2 bg-blue-100 rounded-lg text-blue-700">
                                    <TrendingDown className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Varejo</span>
                            </div>

                            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Rede de Varejo</h3>

                            <div className="space-y-4 text-sm">
                                <div>
                                    <p className="font-bold text-neutral-700 mb-1">Desafio:</p>
                                    <p className="text-neutral-500">Alto custo com DPO interno e ferramenta subutilizada.</p>
                                </div>
                                <div>
                                    <p className="font-bold text-neutral-700 mb-1">Ação:</p>
                                    <p className="text-neutral-500">Migração para modelo TOGETHER e reconfiguração de plataforma.</p>
                                </div>
                                <div className="pt-4 mt-4 border-t border-neutral-100">
                                    <p className="font-bold text-green-600 flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4" />
                                        Resultado: Redução de 40% no budget anual.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="h-2 w-full bg-blue-400/50 group-hover:bg-blue-400 transition-colors"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}
