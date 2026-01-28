import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Activity, Lock } from "lucide-react";

export function Hero() {
    return (
        <section className="w-full pt-12 pb-16 lg:pt-20 lg:pb-24 bg-white relative overflow-hidden">
            {/* Crisp Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Column: Content */}
                    <div className="flex flex-col space-y-8 max-w-2xl">
                        <div className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-sm font-medium text-neutral-600 shadow-sm w-fit">
                            <span className="flex h-2 w-2 rounded-full bg-brand-400 mr-2"></span>
                            DPO as a Service
                        </div>

                        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl xl:text-7xl text-neutral-900 leading-[1.1]">
                            Foque no seu <br />
                            <span className="relative inline-block">
                                negócio
                                <svg className="absolute w-full h-4 -bottom-1 left-0 text-brand-400/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                </svg>
                            </span> enquanto cuidamos da <span className="text-brand-500">conformidade.</span>
                        </h1>

                        <p className="text-xl text-neutral-500 leading-relaxed max-w-[600px]">
                            Tenha um time completo operando sua privacidade enquanto você escala vendas e conquista novos clientes.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button size="lg" className="text-base font-bold shadow-xl shadow-brand-400/20">
                                Falar com Especialista
                            </Button>
                            <Button size="lg" variant="outline" className="text-base font-medium">
                                Ver Como Funciona
                            </Button>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-neutral-400 pt-4">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-neutral-100" />
                                ))}
                            </div>
                            <p>Trusted by 500+ companies</p>
                        </div>
                    </div>

                    {/* Right Column: Visuals (Floating Cards) */}
                    <div className="relative h-[500px] hidden lg:block">
                        {/* Main Dashboard Card Mockup */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[90%] h-[400px] bg-white rounded-2xl shadow-2xl border border-neutral-100 overflow-hidden flex flex-col z-10">
                            <div className="h-12 border-b border-neutral-100 flex items-center px-4 gap-2 bg-neutral-50/50">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col gap-4">
                                <div className="flex justify-between items-center">
                                    <div className="h-4 w-32 bg-neutral-100 rounded"></div>
                                    <div className="h-8 w-24 bg-brand-100 rounded flex items-center justify-center text-xs font-bold text-brand-600">Active</div>
                                </div>
                                <div className="h-32 w-full bg-neutral-50 rounded-xl border border-neutral-100 flex items-center justify-center">
                                    <Activity className="w-12 h-12 text-neutral-300" />
                                </div>
                                <div className="space-y-2">
                                    <div className="h-3 w-full bg-neutral-100 rounded"></div>
                                    <div className="h-3 w-2/3 bg-neutral-100 rounded"></div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge 1 */}
                        <div className="absolute top-20 -left-12 bg-white p-4 rounded-xl shadow-xl border border-neutral-100 flex items-center gap-3 animate-bounce shadow-brand-400/10 z-20" style={{ animationDuration: '3s' }}>
                            <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-xs text-neutral-400 font-bold uppercase">Status</p>
                                <p className="text-sm font-bold text-neutral-900">100% Compliant</p>
                            </div>
                        </div>

                        {/* Floating Badge 2 */}
                        <div className="absolute bottom-20 -left-4 bg-white p-4 rounded-xl shadow-xl border border-neutral-100 flex items-center gap-3 animate-pulse z-20 shadow-brand-400/10">
                            <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
                                <Shield className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-xs text-neutral-400 font-bold uppercase">Protection</p>
                                <p className="text-sm font-bold text-neutral-900">Active Monitoring</p>
                            </div>
                        </div>

                        {/* Floating Badge 3 */}
                        <div className="absolute top-10 right-10 bg-white p-3 rounded-lg shadow-lg border border-neutral-100 z-0 opacity-80 blur-[1px]">
                            <Lock className="w-4 h-4 text-neutral-400" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
