import { Button } from "@/components/ui/button";
import { CalendarRange, Clock, Lightbulb, Target, Phone, Mail, MapPin } from "lucide-react";

export function CTASection() {
    return (
        <section className="w-full py-24 bg-brand-400 relative overflow-hidden text-neutral-900">

            {/* Background Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e6c200_1px,transparent_1px),linear-gradient(to_bottom,#e6c200_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20"></div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">

                    <div>
                        <h2 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl mb-4 text-neutral-900">
                            Pare de perder contratos enquanto você decide.
                        </h2>
                        <p className="text-xl md:text-2xl font-medium text-neutral-800">
                            Cada semana que passa é uma oportunidade de negócio que você deixa na mesa.
                        </p>
                    </div>

                    <p className="text-lg text-neutral-800 max-w-2xl leading-relaxed">
                        Faça um diagnóstico gratuito de 20 minutos com nossos especialistas. <br className="hidden md:block" />
                        Sem compromisso. Sem proposta comercial agressiva. <br className="hidden md:block" />
                        Você sai com um mapa claro do que está te travando.
                    </p>

                    <div className="flex flex-col items-center w-full space-y-4">
                        <Button size="lg" className="h-16 px-12 text-xl font-bold bg-neutral-900 text-white hover:bg-neutral-800 shadow-2xl hover:scale-105 transition-all w-full sm:w-auto">
                            Agendar Diagnóstico Gratuito Agora
                        </Button>

                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold text-neutral-800 opacity-80">
                            <span className="flex items-center gap-1"><CalendarRange className="w-4 h-4" /> Agenda em 2 cliques</span>
                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 20 minutos call</span>
                            <span className="flex items-center gap-1"><Lightbulb className="w-4 h-4" /> Clareza, não venda forçada</span>
                            <span className="flex items-center gap-1"><Target className="w-4 h-4" /> Identifica gaps reais</span>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 mt-12 border-t border-neutral-900/10 w-full text-left md:text-center text-sm font-medium">
                        <div className="flex flex-col items-center justify-center p-4 bg-white/20 rounded-xl backdrop-blur-sm gap-2">
                            <Phone className="w-6 h-6 mb-1" />
                            <span>(11) 98952-6265</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 bg-white/20 rounded-xl backdrop-blur-sm gap-2">
                            <Mail className="w-6 h-6 mb-1" />
                            <span>[email protected]</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 bg-white/20 rounded-xl backdrop-blur-sm gap-2">
                            <MapPin className="w-6 h-6 mb-1" />
                            <span>Av. Eng Luiz Carlos Berrini, 1681<br />SP - Brasil</span>
                        </div>
                    </div>

                    {/* Footer Logos */}
                    <div className="pt-8 text-neutral-800 font-bold opacity-70 text-sm">
                        Confiança de empresas como: Senac • WEG • Usiminas • Unimed • Dafiti
                    </div>

                </div>
            </div>
        </section>
    );
}
