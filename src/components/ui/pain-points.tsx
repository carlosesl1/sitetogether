import { BadgeDollarSign, AlertTriangle, RefreshCcw } from "lucide-react";

export function PainPoints() {
    return (
        <section className="w-full py-24 bg-white">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-neutral-900 max-w-3xl">
                        O custo real de não ter um programa de privacidade operando:
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Column 1 */}
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-brand-100 rounded-lg text-brand-600">
                                <BadgeDollarSign className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900">Contratos Perdidos</h3>
                        </div>
                        <p className="text-neutral-600 leading-relaxed">
                            Seu time fecha a venda, mas o jurídico do cliente exige Due Diligence de privacidade. Você não tem ROPA atualizado, inventário de dados, política de resposta a incidentes.
                        </p>
                        <div className="p-4 bg-neutral-50 rounded-lg border-l-4 border-red-500">
                            <p className="text-sm font-medium text-neutral-800">
                                <span className="font-bold text-red-600">Resultado:</span> Deal de R$ 500k perdido para concorrente que tinha.
                            </p>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-brand-100 rounded-lg text-brand-600">
                                <AlertTriangle className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900">Risco Operacional</h3>
                        </div>
                        <p className="text-neutral-600 leading-relaxed">
                            Incidente de dados + imprensa = marca destruída. ANPD bate na porta e ninguém sabe responder. Titular exerce direito e você não tem processo estruturado.
                        </p>
                        <div className="p-4 bg-neutral-50 rounded-lg border-l-4 border-red-500">
                            <p className="text-sm font-medium text-neutral-800">
                                <span className="font-bold text-red-600">Resultado:</span> Crise de reputação + exposição legal + operação paralisada.
                            </p>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-brand-100 rounded-lg text-brand-600">
                                <RefreshCcw className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900">Gargalo de Crescimento</h3>
                        </div>
                        <p className="text-neutral-600 leading-relaxed">
                            Seu DPO/time interno está afogado: DSARs, inventário, treinamentos, auditorias, RIPDs, configuração de ferramentas. Ele não escala. Novos projetos ficam na fila.
                        </p>
                        <div className="p-4 bg-neutral-50 rounded-lg border-l-4 border-red-500">
                            <p className="text-sm font-medium text-neutral-800">
                                <span className="font-bold text-red-600">Resultado:</span> Oportunidades perdidas enquanto você tenta resolver internamente.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
