"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Activity, Lock } from "lucide-react";
import { Cubes } from "@/components/ui/backgrounds/cubes";

export function HeroV16() {
    return (
        <section className="w-full pt-12 pb-16 lg:pt-20 lg:pb-24 bg-white relative overflow-hidden">
            <Cubes />

            <div className="container px-4 md:px-6 relative z-10 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    <div className="flex flex-col space-y-8 max-w-2xl">
                        <div className="inline-flex items-center rounded-full border border-neutral-200 bg-white/80 backdrop-blur-sm px-3 py-1 text-sm font-medium text-neutral-600 shadow-sm w-fit">
                            <span className="flex h-2 w-2 rounded-full bg-brand-400 mr-2"></span>
                            DPO As A Service
                        </div>

                        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl xl:text-6xl text-neutral-900 leading-[1.1]">
                            Privacidade gerida por <span className="text-brand-500">quem entende de dados</span>.
                        </h1>

                        <p className="text-xl text-neutral-500 leading-relaxed max-w-[600px]">
                            Desenvolvemos o braço operacional e jurídico que sua empresa precisa para operar com segurança total em um mundo orientado a dados.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button size="lg" className="text-base font-bold shadow-xl shadow-brand-400/20">
                                Conhecer Soluções
                            </Button>
                            <Button size="lg" variant="outline" className="text-base font-medium bg-white/50 backdrop-blur-sm">
                                Ver Escopo de Atuação ↓
                            </Button>
                        </div>
                    </div>

                    <div className="relative h-[500px] hidden lg:block">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[90%] h-[400px] bg-white/90 rounded-2xl shadow-2xl border border-neutral-100 overflow-hidden flex flex-col z-10 backdrop-blur-md">
                            <div className="h-12 border-b border-neutral-100 flex items-center px-4 gap-2 bg-neutral-50/50">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col gap-4">
                                <Activity className="w-12 h-12 text-brand-400 opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                                <div className="flex justify-between items-center relative z-10">
                                    <div className="h-4 w-32 bg-neutral-100 rounded"></div>
                                    <div className="h-8 w-24 bg-brand-100 rounded flex items-center justify-center text-xs font-bold text-brand-600">Active</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
