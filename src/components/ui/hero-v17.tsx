"use client";

import { FlickeringGrid } from "@/components/ui/backgrounds/flickering-grid";
import { ActionLink, SectionPill } from "@/components/ui/site-primitives";

export function HeroV17() {
    return (
        <section className="w-full pt-12 pb-32 lg:pt-20 lg:pb-32 bg-[#fffdf8] relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] hidden w-1/2 overflow-hidden min-[1200px]:block">
                <FlickeringGrid
                    color="#F5C000"
                    squareSize={12}
                    gridGap={6}
                    maxOpacity={0.78}
                    flickerChance={0.005}
                    className="opacity-95 [mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.38)_10%,black_24%)]"
                />
            </div>
            <div className="pointer-events-none absolute right-[-190px] top-[-42px] z-[1] h-[360px] w-[350px] overflow-hidden min-[1200px]:hidden md:right-[-180px] md:top-[-170px] md:h-[680px] md:w-[660px]">
                <FlickeringGrid
                    color="#F5C000"
                    squareSize={8}
                    gridGap={6}
                    maxOpacity={0.78}
                    flickerChance={0.005}
                    className="opacity-95 md:[mask-image:radial-gradient(circle_at_100%_0%,black_0%,rgba(0,0,0,0.78)_36%,rgba(0,0,0,0.24)_64%,transparent_84%)] [mask-image:radial-gradient(circle_at_100%_0%,black_0%,rgba(0,0,0,0.86)_38%,rgba(0,0,0,0.28)_66%,transparent_86%)]"
                />
            </div>
            <div className="pointer-events-none absolute bottom-[-90px] right-[-190px] z-[1] h-[430px] w-[410px] overflow-hidden min-[1200px]:hidden md:bottom-[-220px] md:right-[-190px] md:h-[720px] md:w-[700px]">
                <FlickeringGrid
                    color="#F5C000"
                    squareSize={8}
                    gridGap={6}
                    maxOpacity={0.82}
                    flickerChance={0.005}
                    className="opacity-95 md:[mask-image:radial-gradient(circle_at_100%_100%,black_0%,rgba(0,0,0,0.8)_38%,rgba(0,0,0,0.24)_66%,transparent_86%)] [mask-image:radial-gradient(circle_at_100%_100%,black_0%,rgba(0,0,0,0.9)_38%,rgba(0,0,0,0.3)_68%,transparent_88%)]"
                />
            </div>
            <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_42%_48%,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.88)_38%,rgba(255,255,255,0.42)_66%,rgba(255,255,255,0)_100%)] min-[1200px]:bg-[linear-gradient(to_right,rgba(255,255,255,0.72)_0%,rgba(255,255,255,0.42)_32%,rgba(255,255,255,0.08)_56%,rgba(255,255,255,0)_74%)]" />

            <div className="container px-4 md:px-6 relative z-10 mx-auto">
                <div className="flex flex-col items-start text-left space-y-8 max-w-4xl">
                    <SectionPill className="mb-8">DPO as a Service</SectionPill>

                    <h1 className="max-w-[690px] text-5xl font-bold leading-[1] tracking-tight text-neutral-900 sm:text-6xl xl:max-w-[850px] xl:text-7xl">
                        Privacidade gerida por <span className="text-brand-500 italic font-light">quem domina processos e tecnologias</span>
                    </h1>

                    <p className="text-xl md:text-1xl text-neutral-500 leading-relaxed max-w-2xl">
                        Adequamos sua empresa à LGPD e implementamos práticas de gestão e proteção de dados. Garantindo segurança, conformidade e confiança em seus processos.
                    </p>

                    <div className="flex w-full flex-col gap-6 justify-start pt-8 sm:w-auto sm:flex-row">
                        <ActionLink href="/contato" size="xl" className="w-full px-6 shadow-2xl shadow-brand-400/30 sm:w-auto sm:px-12">
                            Solicitar Proposta
                        </ActionLink>
                    </div>
                </div>
            </div>
        </section>
    );
}
