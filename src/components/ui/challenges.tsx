import { Button } from "@/components/ui/button";
import { FileWarning, Flame, Clock } from "lucide-react";

export function Challenges() {
    return (
        <section className="w-full py-24 bg-neutral-50" id="challenges">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-neutral-900">
                        Reconhece algum desses cenários?
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="flex flex-col p-8 bg-white rounded-2xl shadow-sm border border-neutral-200 hover:shadow-md transition-shadow">
                        <div className="h-14 w-14 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 mb-6">
                            <FileWarning className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-neutral-900 mb-3">Contrato Travado</h3>
                        <p className="text-neutral-600 mb-6 leading-relaxed flex-grow">
                            Cliente Enterprise pediu evidências de Compliance LGPD. Você não tem. Venda parada há semanas enquanto concorrente já passou no vendor assessment.
                        </p>
                        <div className="pt-6 border-t border-neutral-100">
                            <p className="text-sm font-semibold text-orange-600">
                                ⚠️ 42% dos deals B2B Enterprise exigem Due Diligence de privacidade
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col p-8 bg-white rounded-2xl shadow-sm border border-neutral-200 hover:shadow-md transition-shadow">
                        <div className="h-14 w-14 rounded-xl bg-red-100 flex items-center justify-center text-red-600 mb-6">
                            <Flame className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-neutral-900 mb-3">Time Sobrecarregado</h3>
                        <p className="text-neutral-600 mb-6 leading-relaxed flex-grow">
                            Seu DPO/Jurídico/TI está tentando fazer sozinho o trabalho de um time inteiro. Virou gargalo. Projetos atrasam. Ninguém tem expertise real em privacidade.
                        </p>
                        <div className="pt-6 border-t border-neutral-100">
                            <p className="text-sm font-semibold text-red-600">
                                ⚠️ 1 pessoa não consegue cobrir as +30 atividades de um programa maduro
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col p-8 bg-white rounded-2xl shadow-sm border border-neutral-200 hover:shadow-md transition-shadow">
                        <div className="h-14 w-14 rounded-xl bg-yellow-100 flex items-center justify-center text-yellow-600 mb-6">
                            <Clock className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-neutral-900 mb-3">Bomba Relógio Ativa</h3>
                        <p className="text-neutral-600 mb-6 leading-relaxed flex-grow">
                            Você sabe que está exposto a incidentes de dados. Tratamento inadequado. Processos frágeis. Mas continua "torcendo para dar certo".
                        </p>
                        <div className="pt-6 border-t border-neutral-100">
                            <p className="text-sm font-semibold text-yellow-600">
                                ⚠️ Um incidente de dados custa em média R$ 1.8M + reputação
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-12">
                    <Button size="lg" className="font-bold text-base px-8 h-12">
                        Fazer Diagnóstico Gratuito
                    </Button>
                    <p className="text-sm text-neutral-500 self-center ml-4 hidden sm:block">
                        - Identifique o que está te travando agora
                    </p>
                </div>
            </div>
        </section>
    );
}
