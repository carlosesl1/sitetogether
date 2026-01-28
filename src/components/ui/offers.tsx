import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function Offers() {
    return (
        <section className="w-full py-24 bg-neutral-50" id="offers">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-neutral-900">
                        Escolha como começar:
                    </h2>
                    <p className="text-xl text-neutral-600">
                        Todas as soluções podem trabalhar juntas para criar seu programa completo
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

                    {/* Card 2: Adequação (Kick-off) */}
                    <div className="flex flex-col p-8 bg-white rounded-2xl shadow-sm border border-neutral-200 hover:shadow-md transition-all">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-neutral-900">Adequação Completa</h3>
                            <p className="text-brand-600 font-bold mt-1">"O Kick-off Estruturado"</p>
                        </div>
                        <div className="space-y-4 mb-8 flex-1">
                            <p className="text-sm font-semibold text-neutral-500 uppercase tracking-wide">O que está incluído:</p>
                            <ul className="space-y-3">
                                {["Diagnóstico + mapeamento completo", "Implementação técnica e jurídica", "Configuração de plataforma Privacy Tools", "Documentação completa", "Treinamento inicial do time"].map(item => (
                                    <li key={item} className="flex items-start gap-3 text-neutral-700">
                                        <Check className="w-5 h-5 text-brand-500 shrink-0" />
                                        <span className="text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="pt-6 border-t border-neutral-100 mb-6">
                            <p className="text-xs text-neutral-400 font-bold uppercase mb-2">Ideal para:</p>
                            <p className="text-sm text-neutral-600">Quem ainda não tem nada estruturado ou preparando para M&A.</p>
                        </div>
                        <Button variant="outline" className="w-full font-bold">Agendar Diagnóstico</Button>
                    </div>

                    {/* Card 1: DPO as a Service (Hero Style) */}
                    <div className="flex flex-col p-8 bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-800 scale-105 z-10 relative overflow-hidden text-white">
                        <div className="absolute top-0 right-0 bg-brand-400 text-neutral-900 text-xs font-bold px-3 py-1 rounded-bl-lg">MAIS PROCURADO</div>
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-white">DPO as a Service</h3>
                            <p className="text-brand-400 font-bold mt-1">"Time Completo de Privacidade"</p>
                        </div>
                        <div className="space-y-4 mb-8 flex-1">
                            <p className="text-sm font-semibold text-neutral-400 uppercase tracking-wide">O que está incluído:</p>
                            <ul className="space-y-3">
                                {["DPO certificado nomeado", "Time técnico + jurídico operando", "Gestão contínua do programa", "Atendimento a ANPD", "Operação de DSARs", "Você deixa de trabalhar sozinho"].map(item => (
                                    <li key={item} className="flex items-start gap-3 text-neutral-200">
                                        <Check className="w-5 h-5 text-brand-400 shrink-0" />
                                        <span className="text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="pt-6 border-t border-neutral-800 mb-6">
                            <p className="text-xs text-neutral-500 font-bold uppercase mb-2">Ideal para:</p>
                            <p className="text-sm text-neutral-300">Empresas sem DPO ou DPOs que precisam de força-tarefa.</p>
                        </div>
                        <Button className="w-full font-bold bg-brand-400 text-neutral-900 hover:bg-brand-500 border-none">Falar com Especialista</Button>
                    </div>

                    {/* Card 3: Capacitação */}
                    <div className="flex flex-col p-8 bg-white rounded-2xl shadow-sm border border-neutral-200 hover:shadow-md transition-all">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-neutral-900">Capacitação</h3>
                            <p className="text-brand-600 font-bold mt-1">"A Vacina Cultural"</p>
                        </div>
                        <div className="space-y-4 mb-8 flex-1">
                            <p className="text-sm font-semibold text-neutral-500 uppercase tracking-wide">O que está incluído:</p>
                            <ul className="space-y-3">
                                {["Treinamentos customizados", "Workshops ao vivo", "Certificados e materiais", "Cultura de privacidade", "Conscientização ponta a ponta"].map(item => (
                                    <li key={item} className="flex items-start gap-3 text-neutral-700">
                                        <Check className="w-5 h-5 text-brand-500 shrink-0" />
                                        <span className="text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="pt-6 border-t border-neutral-100 mb-6">
                            <p className="text-xs text-neutral-400 font-bold uppercase mb-2">Ideal para:</p>
                            <p className="text-sm text-neutral-600">Fortalecer o time interno e reduzir incidentes por erro humano.</p>
                        </div>
                        <Button variant="ghost" className="w-full font-bold hover:bg-neutral-100">Saber Mais</Button>
                    </div>

                </div>
            </div>
        </section>
    );
}
