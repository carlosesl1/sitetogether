import { cn } from "@/lib/utils";

export function AuthorityStrip() {
    const logos = [
        "Senac", "Eletrobras", "WEG", "Usiminas", "Unimed", "Dafiti", "Copel", "Pague Menos", "Grupo RBS"
    ];

    return (
        <section className="w-full py-8 border-y border-neutral-100 bg-neutral-50/50">
            <div className="container px-4 md:px-6">
                <p className="text-center text-sm font-semibold text-neutral-400 mb-6 uppercase tracking-wider">
                    A escolha de centenas de empresas inovadoras
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {logos.map((logo) => (
                        <div key={logo} className="text-xl font-bold text-neutral-400 hover:text-neutral-900 transition-colors cursor-default select-none">
                            {logo}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
