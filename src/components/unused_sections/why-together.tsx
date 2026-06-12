
export function WhyTogether() {
    return (
        <section className="w-full py-24 bg-neutral-900 text-white relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white max-w-4xl">
                        Por que empresas confiam na TOGETHER para operar seus programas de privacidade?
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-neutral-800">
                    {/* Stat 1 */}
                    <div className="flex flex-col items-center px-4 py-8 md:py-0">
                        <div className="text-5xl lg:text-6xl font-black text-brand-400 mb-2">150+</div>
                        <h3 className="text-lg font-bold text-white mb-2">Implementações Completas</h3>
                        <p className="text-neutral-400 max-w-xs">Programas de privacidade estruturados do zero ou potencializados.</p>
                    </div>

                    {/* Stat 2 */}
                    <div className="flex flex-col items-center px-4 py-8 md:py-0">
                        <div className="text-5xl lg:text-6xl font-black text-brand-400 mb-2">4-8</div>
                        <h3 className="text-lg font-bold text-white mb-2">Semanas de Adequação</h3>
                        <p className="text-neutral-400 max-w-xs">Da primeira conversa ao Compliance ativo e operacional.</p>
                    </div>

                    {/* Stat 3 */}
                    <div className="flex flex-col items-center px-4 py-8 md:py-0">
                        <div className="text-5xl lg:text-6xl font-black text-brand-400 mb-2">100%</div>
                        <h3 className="text-lg font-bold text-white mb-2">Aprovação em Auditorias</h3>
                        <p className="text-neutral-400 max-w-xs">Nossos clientes passam em vendor assessments na primeira tentativa.</p>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <p className="inline-block px-6 py-3 rounded-full bg-neutral-800 border border-neutral-700 text-neutral-300 font-medium">
                        Metodologia testada <span className="text-brand-400 mx-2">+</span> Time sênior <span className="text-brand-400 mx-2">+</span> Tecnologia nacional <span className="text-brand-400 mx-2">=</span> <span className="text-white font-bold">Resultado previsível</span>
                    </p>
                </div>

            </div>
        </section>
    );
}
