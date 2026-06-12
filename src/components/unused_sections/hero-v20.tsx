"use client";

import { Button } from "@/components/ui/button";
import { FluidAurora } from "@/components/ui/backgrounds/golden-nodes";

export function HeroV20() {
    return (
        <section className="w-full pt-12 pb-32 lg:pt-20 lg:pb-32 bg-white relative overflow-hidden">
            <FluidAurora />

            <div className="container px-4 md:px-6 relative z-10 mx-auto pointer-events-none">
                <div className="flex flex-col items-start text-left space-y-8 max-w-4xl pointer-events-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur-md border border-neutral-100 mb-8 shadow-sm w-fit">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-400 shadow-[0_0_10px_rgba(255,214,55,0.8)]"></div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600">DPO as a Service</span>
                    </div>

                    <h1 className="text-5xl font-bold tracking-tight sm:text-6xl xl:text-7xl text-neutral-900 leading-[1] max-w-2xl">
                        Privacidade gerida por <span className="text-brand-500 italic font-light drop-shadow-sm">quem entende de dados.</span>
                    </h1>

                    <p className="text-xl md:text-1xl text-neutral-600 leading-relaxed max-w-2xl">
                        Desenvolvemos o braço operacional e jurídico que sua empresa precisa para operar com segurança total em um mundo orientado a dados.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-start pt-8">
                        <Button size="lg" className="h-16 px-12 text-lg font-bold shadow-2xl shadow-brand-400/40 rounded-2xl hover:scale-105 transition-transform">
                            Solicitar Proposta
                        </Button>
                        <Button size="lg" variant="outline" className="h-16 px-12 text-lg font-medium bg-white/70 hover:bg-white backdrop-blur-md rounded-2xl border-neutral-200 hover:scale-105 transition-transform">
                            Ver Metodologia
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
