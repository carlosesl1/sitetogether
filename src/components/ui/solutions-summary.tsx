import { Button } from "@/components/ui/button";
import { Check, X, AlertTriangle } from "lucide-react";

export function SolutionsSummary() {
    return (
        <section className="w-full py-24 bg-neutral-50" id="solutions">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-neutral-900">
                        Uma força-tarefa completa para sua privacidade.
                    </h2>
                    <p className="text-xl text-neutral-600 max-w-[800px]">
                        Privacidade não é trabalho para uma pessoa sozinha. Seja você CEO sem estrutura, DPO sobrecarregado, ou time jurídico sem expertise técnica - você precisa de uma força-tarefa completa operando com você.
                    </p>
                </div>

                {/* Comparison Table */}
                <div className="overflow-x-auto rounded-2xl border border-neutral-200 shadow-sm bg-white mb-12">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-neutral-50 border-b border-neutral-200">
                                <th className="p-6 text-sm font-medium text-neutral-500 w-1/4">Critério</th>
                                <th className="p-6 text-lg font-bold text-neutral-400 w-1/4 text-center">Sem Estrutura <X className="inline w-5 h-5 ml-1 text-red-500" /></th>
                                <th className="p-6 text-lg font-bold text-yellow-600 w-1/4 text-center bg-yellow-50/50">DPO Solo <AlertTriangle className="inline w-5 h-5 ml-1" /></th>
                                <th className="p-6 text-lg font-bold text-brand-600 w-1/4 text-center bg-brand-50">DPO + TOGETHER <Check className="inline w-6 h-6 ml-1 bg-brand-400 rounded-full text-white p-1" /></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-100">
                            {[
                                { criterion: "Responsabilidade técnica", none: "Ninguém assume", solo: "1 pessoa (sobrecarga)", together: "Time sênior distribuído" },
                                { criterion: "Expertise jurídica", none: "Consultoria pontual", solo: "Depende do perfil", together: "Advogados especializados dedicados" },
                                { criterion: "Implementação técnica", none: "TI improvisando", solo: "DPO tentando sozinho", together: "Especialistas em tech privacy" },
                                { criterion: "Operação diária", none: "Caos reativo", solo: "DPO fazendo tudo", together: "Processos estruturados + automação" },
                                { criterion: "Configuração de plataforma", none: "Não tem ou mal feita", solo: "DPO aprendendo", together: "Implementação profissional" },
                                { criterion: "Quando ANPD bate", none: "Pânico", solo: "Pressão em 1 pessoa", together: "Time inteiro responde" },
                                { criterion: "Treinamentos contínuos", none: "Não acontecem", solo: "DPO tentando criar", together: "Programa estruturado pronto" },
                                { criterion: "Custo mensal", none: "Riscos incalculáveis", solo: "R$ 15k-25k + encargos", together: "Fração disso para time completo" },
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-neutral-50/50 transition-colors">
                                    <td className="p-6 font-medium text-neutral-900">{row.criterion}</td>
                                    <td className="p-6 text-center text-neutral-500">{row.none}</td>
                                    <td className="p-6 text-center text-neutral-700 font-medium bg-yellow-50/30">{row.solo}</td>
                                    <td className="p-6 text-center text-brand-900 font-bold bg-brand-50/50">{row.together}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Call-outs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
                    <div className="p-6 bg-brand-50 rounded-xl border border-brand-100 flex gap-4">
                        <div className="text-2xl">💡</div>
                        <div>
                            <p className="font-bold text-brand-900 mb-1">Você já tem DPO interno? Perfeito.</p>
                            <p className="text-brand-800 text-sm">Nós somos o time de apoio que ele precisa para não carregar o piano sozinho. Juntos, vocês escalam.</p>
                        </div>
                    </div>
                    <div className="p-6 bg-brand-50 rounded-xl border border-brand-100 flex gap-4">
                        <div className="text-2xl">💡</div>
                        <div>
                            <p className="font-bold text-brand-900 mb-1">Você não tem ninguém ainda?</p>
                            <p className="text-brand-800 text-sm">Você ganha um DPO certificado + time técnico + jurídico especializado operando desde o dia 1.</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <Button size="lg" className="font-bold px-8 shadow-lg">
                        Agendar Diagnóstico Gratuito
                    </Button>
                </div>

            </div>
        </section>
    );
}
