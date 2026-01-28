import { Search, Settings, CheckCircle2, RefreshCw, Zap } from "lucide-react";

export function Methodology() {
    return (
        <section className="w-full py-24 bg-white" id="methodology">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-20">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-neutral-900">
                        Da primeira conversa ao Compliance ativo em semanas
                    </h2>
                    <p className="text-xl text-neutral-500">
                        Processo testado e validado em centenas de implementações
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Timeline Line (Hidden on Mobile) */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-neutral-200 -translate-x-1/2 hidden md:block" />

                    {/* Steps */}
                    <div className="space-y-12 relative">

                        {/* Step 1 */}
                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                            <div className="flex-1 md:text-right">
                                <div className="inline-block p-1 bg-neutral-100 rounded mb-2 text-xs font-bold text-neutral-500 uppercase tracking-widest">Semana 1</div>
                                <h3 className="text-2xl font-bold text-neutral-900 mb-2">Diagnóstico</h3>
                                <p className="text-neutral-600">Mapeamos sua situação atual, identificamos gaps críticos e priorizamos o que trava vendas agora. Você sai com clareza total do caminho.</p>
                            </div>
                            <div className="relative z-10 flex cursor-default h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-brand-400 shadow-xl shrink-0">
                                <Search className="h-6 w-6 text-brand-950" />
                            </div>
                            <div className="flex-1 hidden md:block" />
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                            <div className="flex-1 hidden md:block" />
                            <div className="relative z-10 flex cursor-default h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-neutral-900 shadow-xl shrink-0">
                                <Settings className="h-6 w-6 text-white" />
                            </div>
                            <div className="flex-1 md:text-left">
                                <div className="inline-block p-1 bg-neutral-100 rounded mb-2 text-xs font-bold text-neutral-500 uppercase tracking-widest">Semanas 2-3</div>
                                <h3 className="text-2xl font-bold text-neutral-900 mb-2">Configuração</h3>
                                <p className="text-neutral-600">Implementamos tecnologia, documentação e processos. Você não precisa entender detalhes técnicos - só aprovar entregas. Operamos para você.</p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                            <div className="flex-1 md:text-right">
                                <div className="inline-block p-1 bg-neutral-100 rounded mb-2 text-xs font-bold text-neutral-500 uppercase tracking-widest">Semana 4</div>
                                <h3 className="text-2xl font-bold text-neutral-900 mb-2">Ativação</h3>
                                <p className="text-neutral-600">Seu DPO nomeado assume (ou apoiamos o DPO interno). Time treinado. Plataforma operacional. Responder "sim" no questionário do cliente.</p>
                            </div>
                            <div className="relative z-10 flex cursor-default h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-green-500 shadow-xl shrink-0">
                                <CheckCircle2 className="h-6 w-6 text-white" />
                            </div>
                            <div className="flex-1 hidden md:block" />
                        </div>

                        {/* Step 4 */}
                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                            <div className="flex-1 hidden md:block" />
                            <div className="relative z-10 flex cursor-default h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-brand-100 shadow-xl shrink-0">
                                <RefreshCw className="h-6 w-6 text-brand-600" />
                            </div>
                            <div className="flex-1 md:text-left">
                                <div className="inline-block p-1 bg-brand-50 rounded mb-2 text-xs font-bold text-brand-600 uppercase tracking-widest">Contínuo</div>
                                <h3 className="text-2xl font-bold text-neutral-900 mb-2">Operação</h3>
                                <p className="text-neutral-600">Nós mantemos tudo vivo: atualizações regulatórias, treinamentos, respostas a titulares, suporte em auditorias. Você foca no negócio.</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="mt-16 bg-brand-50 rounded-xl p-6 text-center max-w-3xl mx-auto border border-brand-100">
                    <p className="text-brand-900 font-medium flex items-center justify-center gap-2">
                        <Zap className="w-5 h-5 fill-brand-400 text-brand-600" />
                        <span className="font-bold">Contrato travado agora?</span> Conseguimos entregar primeiras evidências de compliance em dias para destravar vendas urgentes.
                    </p>
                </div>

            </div>
        </section>
    );
}
