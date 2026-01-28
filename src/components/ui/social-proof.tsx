import { Trophy, Users, ShieldCheck, Clock } from "lucide-react";

export function SocialProof() {
    return (
        <section className="w-full py-20 bg-white border-b border-neutral-100">
            <div className="container px-4 md:px-6">

                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-neutral-900">
                        Autoridade reconhecida em Privacidade e Proteção de Dados
                    </h2>
                </div>

                {/* Badges/Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 border-b border-neutral-100 pb-12">
                    {[
                        { icon: Trophy, title: "Parceiro Platinum", desc: "Privacy Tools" },
                        { icon: ShieldCheck, title: "150+ Programas", desc: "Implementados" },
                        { icon: Users, title: "Time Certificado", desc: "DPOs especializados" },
                        { icon: Clock, title: "5+ Anos", desc: "De experiência" },
                    ].map((stat, i) => (
                        <div key={i} className="flex flex-col items-center text-center space-y-2">
                            <div className="mb-2 text-brand-600">
                                <stat.icon className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-lg text-neutral-900">{stat.title}</h3>
                            <p className="text-sm text-neutral-500 font-medium uppercase tracking-wide">{stat.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Logos */}
                <div className="space-y-8">
                    <h3 className="text-xl font-semibold text-center text-neutral-500">
                        Implementamos soluções para empresas líderes:
                    </h3>

                    <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholder Text Logos for now as we don't have SVGs */}
                        {["Senac", "Eletrobras", "WEG", "Usiminas", "Unimed", "Dafiti", "Copel", "Pague Menos", "Grupo RBS"].map((logo) => (
                            <span key={logo} className="text-2xl font-bold text-neutral-300 hover:text-neutral-800 cursor-default select-none transition-colors">
                                {logo}
                            </span>
                        ))}
                    </div>


                </div>

            </div>
        </section>
    );
}
