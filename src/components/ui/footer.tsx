import Link from "next/link";
import { Button } from "./button";

export function Footer() {
    return (
        <footer className="w-full border-t border-neutral-100 bg-white py-12 md:py-16">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="flex flex-col gap-4">
                        <Link href="/" className="flex items-center space-x-2 group">
                            <div className="h-8 w-8 rounded-lg bg-brand-400 flex items-center justify-center text-white font-bold transition-colors">
                                T
                            </div>
                            <span className="text-xl font-bold text-neutral-900">TOGETHER</span>
                        </Link>
                        <p className="text-sm text-neutral-500 max-w-[200px]">
                            Estratégia, privacidade e tecnologia para o mundo real.
                        </p>
                        <div className="flex gap-4 mt-2">
                            {/* Social Placeholders */}
                            <div className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-brand-100 transition-colors cursor-pointer flex items-center justify-center text-neutral-400 hover:text-brand-600 font-bold text-xs">IN</div>
                            <div className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-brand-100 transition-colors cursor-pointer flex items-center justify-center text-neutral-400 hover:text-brand-600 font-bold text-xs">IG</div>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-900">Serviços</h4>
                        <Link href="#" className="text-sm text-neutral-500 hover:text-brand-600 transition-colors">DPO as a Service</Link>
                        <Link href="#" className="text-sm text-neutral-500 hover:text-brand-600 transition-colors">Consultoria LGPD</Link>
                        <Link href="#" className="text-sm text-neutral-500 hover:text-brand-600 transition-colors">Treinamento</Link>
                        <Link href="#" className="text-sm text-neutral-500 hover:text-brand-600 transition-colors">Software de Gestão</Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-900">Institucional</h4>
                        <Link href="#" className="text-sm text-neutral-500 hover:text-brand-600 transition-colors">Sobre nós</Link>
                        <Link href="#" className="text-sm text-neutral-500 hover:text-brand-600 transition-colors">Cases de Sucesso</Link>
                        <Link href="#" className="text-sm text-neutral-500 hover:text-brand-600 transition-colors">Blog</Link>
                        <Link href="#" className="text-sm text-neutral-500 hover:text-brand-600 transition-colors">Carreiras</Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-900">Contato</h4>
                        <p className="text-sm text-neutral-500">(11) 98952-6265</p>
                        <p className="text-sm text-neutral-500">contato@together.com</p>
                        <p className="text-sm text-neutral-500">Av. Eng Luiz Carlos Berrini, 1681<br />Salas 111 e 112, São Paulo - SP</p>
                        <Button size="sm" variant="outline" className="mt-2 w-fit">Fale Conosco</Button>
                    </div>
                </div>

                <div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-neutral-400 text-center md:text-left">
                        © 2026 TOGETHER Privacy & Tech. Todos os direitos reservados.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors">Política de Privacidade</Link>
                        <Link href="#" className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors">Termos de Uso</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
