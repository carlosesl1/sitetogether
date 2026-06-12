"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";

export function Footer() {
    return (
        <footer className="w-full bg-[#0a0a0a] text-white relative overflow-hidden pt-32 min-h-[700px] flex flex-col justify-between" id="footer-v2">

            <div className="container px-6 mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 pb-24">
                    {/* Column 1: Brand & Contact */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <Image src="/logo-white.svg" alt="Together" width={140} height={40} className="h-8 w-auto opacity-100" />
                            <p className="text-neutral-500 max-w-xs leading-relaxed text-sm">
                                Excelência em governança de dados para empresas que buscam segurança jurídica e aceleração comercial.
                            </p>
                        </div>

                        {/* Arab-Brazilian Chamber of Commerce Badge - MOBILE ONLY */}
                        <div className="pt-2 md:hidden">
                            <div className="inline-flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/5 group hover:border-brand-400/20 transition-all duration-500 cursor-default">
                                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-white/10 group-hover:border-brand-400/40 transition-colors">
                                    <Image src="/CCAB.webp" alt="CCAB" width={40} height={40} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-[8px] font-black text-brand-400 uppercase tracking-[0.25em]">Associado</span>
                                        <div className="w-1 h-1 rounded-full bg-brand-400/30"></div>
                                        <span className="text-[8px] font-black text-neutral-600 uppercase tracking-[0.25em]">2025 // 2026</span>
                                    </div>
                                    <span className="text-[10px] font-bold text-neutral-500 group-hover:text-neutral-300 transition-colors leading-tight uppercase tracking-wider">
                                        Câmara de Comércio <br />
                                        Árabe-Brasileira
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {[
                                { icon: <Phone className="w-4 h-4" />, text: "(11) 98952-6265" },
                                { icon: <Mail className="w-4 h-4" />, text: "contato@togetherprivacy.com" },
                                { icon: <MapPin className="w-4 h-4" />, text: "São Paulo, Brasil" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 text-neutral-400 hover:text-white transition-colors cursor-pointer group">
                                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-brand-400 group-hover:text-black transition-all">
                                        {item.icon}
                                    </div>
                                    <span className="text-xs font-medium tracking-wide">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Columns 2-4: Links */}
                    <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                        <div className="space-y-8">
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-600">Serviços</h4>
                            <div className="flex flex-col gap-5">
                                {[
                                    { label: "DPO as a Service", href: "/servicos/dpo-as-a-service" },
                                    { label: "Consultoria de Adequação", href: "/servicos/consultoria-adequacao" },
                                    { label: "Mentoria e Cultura", href: "/servicos/mentoria-e-cultura" },
                                    { label: "Falar com Especialista", href: "/contato" }
                                ].map((item) => (
                                    <Link key={item.label} href={item.href} className="text-sm text-neutral-500 hover:text-white transition-all hover:translate-x-1">{item.label}</Link>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-8">
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-600">Empresa</h4>
                            <div className="flex flex-col gap-5">
                                {[
                                    { label: "Metodologia", href: "/#methodology" },
                                    { label: "Ofertas", href: "/#offers" },
                                    { label: "Blog Técnico", href: "/blog" },
                                    { label: "Contato", href: "/contato" }
                                ].map((item) => (
                                    <Link key={item.label} href={item.href} className="text-sm text-neutral-500 hover:text-white transition-all hover:translate-x-1">{item.label}</Link>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-8">
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-600">Acesso</h4>
                            <div className="flex flex-col gap-5">
                                <Link href="/contato" className="text-sm text-neutral-500 hover:text-white transition-all hover:translate-x-1">
                                    Falar com Especialista
                                </Link>
                                <Link href="/blog" className="text-sm text-neutral-500 hover:text-white transition-all hover:translate-x-1">
                                    Conteúdos
                                </Link>
                            </div>

                            <div className="pt-2">
                                <LanguageSwitcher variant="dark" />
                            </div>

                            {/* Arab-Brazilian Chamber of Commerce Badge - DESKTOP ONLY */}
                            <div className="pt-4 hidden md:block">
                                <div className="inline-flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/5 group hover:border-brand-400/20 transition-all duration-500 cursor-default">
                                    <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-white/10 group-hover:border-brand-400/40 transition-colors">
                                        <Image src="/CCAB.webp" alt="CCAB" width={40} height={40} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-[8px] font-black text-brand-400 uppercase tracking-[0.25em]">Associado</span>
                                            <div className="w-1 h-1 rounded-full bg-brand-400/30"></div>
                                            <span className="text-[8px] font-black text-neutral-600 uppercase tracking-[0.25em]">2025 // 2026</span>
                                        </div>
                                        <span className="text-[10px] font-bold text-neutral-500 group-hover:text-neutral-300 transition-colors leading-tight uppercase tracking-wider">
                                            Câmara de Comércio <br />
                                            Árabe-Brasileira
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom with MASSIVE "TOGETHER" Text Overlay and Backlight */}
            <div className="relative pt-32 pb-32 flex flex-col items-center">
                {/* concentrated 'Sunset' Backlight effect */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 0.25, scale: 1 }}
                    viewport={{ amount: 0.5 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute inset-x-0 bottom-[-65%] flex justify-center z-0 pointer-events-none"
                >
                    <div className="w-[100vw] h-[20vw] bg-brand-400 rounded-[100%] blur-[110px] opacity-100"></div>
                </motion.div>

                <div className="absolute inset-0 flex items-center justify-center px-8 opacity-[0.05] select-none pointer-events-none mb-[-5%] overflow-visible z-10 transition-opacity duration-1000">
                    <h2 className="text-[17.9vw] font-black tracking-normal uppercase italic leading-none whitespace-nowrap md:-translate-x-[30px]">
                        TOGETHER
                    </h2>
                </div>

                <div className="container px-6 mx-auto relative z-20 flex flex-col md:flex-row justify-between items-center w-full gap-8 mt-auto text-center md:text-left">
                    <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-neutral-700 sm:tracking-[0.5em]">© TOGETHER GOVERNANÇA ESTRATÉGICA // 2026</p>
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 md:justify-end md:gap-10">
                        <Link href="https://demo.privacytools.com.br/policy-view/dq0owoEXY/1/poli%CC%81tica-de-privacidade-together-privacy-and-tech/pt_BR?s=1718983084115" className="text-[9px] font-bold uppercase tracking-[0.24em] text-neutral-700 transition-colors hover:text-white sm:tracking-[0.5em]">Aviso de Privacidade</Link>
                        <Link href="https://demo.privacytools.com.br/public_api/dsar/l02awiWq97R5yhvt9kNG0uUKLiexLRG8kiL1mjkLolcsRU__bar__REBnXzvWUqXT17hFDXAATIvSnSuyl00dHmWei3w__equal____equal__/form.html" className="text-[9px] font-bold uppercase tracking-[0.24em] text-neutral-700 transition-colors hover:text-white sm:tracking-[0.5em]">Exerça Seus Direitos</Link>
                        <Link href="/contato" className="text-[9px] font-bold uppercase tracking-[0.24em] text-neutral-700 transition-colors hover:text-white sm:tracking-[0.5em]">Contato</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
