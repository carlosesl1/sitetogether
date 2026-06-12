"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FlickeringGrid } from "@/components/ui/backgrounds/flickering-grid";

export function HeroExperimentFresh() {
    return (
        <section className="w-full pt-12 pb-32 lg:pt-20 lg:pb-32 bg-white relative overflow-hidden">
            <div className="absolute inset-0 z-0 bg-[#fffdf8]">
                <FlickeringGrid
                    color="#ffd637"
                    squareSize={9}
                    gridGap={6}
                    maxOpacity={0.86}
                    flickerChance={0.005}
                    className="[mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.08)_28%,rgba(0,0,0,0.55)_48%,black_68%)]"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_45%,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.86)_28%,rgba(255,255,255,0.28)_58%,rgba(255,255,255,0)_82%)]" />
            </div>

            <div className="container px-4 md:px-6 relative z-10 mx-auto">
                <div className="flex flex-col items-start text-left space-y-8 max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-50 border border-neutral-100 mb-8 shadow-sm w-fit">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-400 shadow-[0_0_10px_rgba(255,214,55,0.8)]"></div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">DPO as a Service</span>
                    </div>

                    <h1 className="text-5xl font-bold tracking-tight sm:text-6xl xl:text-7xl text-neutral-900 leading-[1] max-w-[850px]">
                        Privacidade gerida por <span className="text-brand-500 italic font-light">quem domina processos e tecnologias</span>
                    </h1>

                    <p className="text-xl md:text-1xl text-neutral-500 leading-relaxed max-w-2xl">
                        Adequadmos sua empresa à LGPD e implementamos práticas de gestão e proteção de dados. Garantindo segurança, conformidade e confiança em seus processos.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-start pt-8">
                        <Link href="/contato">
                            <Button size="lg" className="h-16 px-12 text-lg font-bold shadow-2xl shadow-brand-400/30 rounded-2xl">
                                Solicitar Proposta
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
