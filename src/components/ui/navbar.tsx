"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { StaggeredMenu } from "@/components/ui/staggered-menu";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";
import { useSmoothScroll } from "@/components/ui/smooth-scroll-provider";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";
import {
    ArrowRight,
    ArrowUpRight,
    BusFront,
    ChevronRight,
    FileText,
    NotepadText,
    GraduationCap,
    Landmark,
    Laptop,
    Route,
    Scale,
    ShieldCheck,
    Truck,
    UsersRound,
} from "lucide-react";

type NavbarProps = {
    includeAbout?: boolean;
    showCtaArrow?: boolean;
};

export function Navbar({ includeAbout = false, showCtaArrow = false }: NavbarProps) {
    const { getLenis } = useSmoothScroll();
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const headerRef = useRef<HTMLElement>(null);
    const servicesButtonRef = useRef<HTMLButtonElement>(null);
    const firstServiceLinkRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape" && isServicesOpen) {
                servicesButtonRef.current?.focus();
                setIsServicesOpen(false);
            }
        };

        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [isServicesOpen]);

    const navItems = [
        { label: "ECA Digital", href: "/eca-digital" },
        { label: "Metodologia", href: "/#methodology" },
        { label: "Conteúdos", href: "/blog" },
        ...(includeAbout ? [{ label: "Sobre", href: "/#sobre" }] : []),
    ];

    const menuItems = [
        { label: "Serviços", ariaLabel: "Ver serviços", link: "/#offers" },
        { label: "ECA Digital", ariaLabel: "Conhecer diagnóstico ECA Digital", link: "/eca-digital" },
        { label: "Metodologia", ariaLabel: "Nossa metodologia", link: "/#methodology" },
        { label: "Conteúdos", ariaLabel: "Ver conteúdos", link: "/blog" },
        ...(includeAbout ? [{ label: "Sobre", ariaLabel: "Sobre a TOGETHER", link: "/#sobre" }] : []),
    ];

    return (
        <header
            ref={headerRef}
            className="sticky top-0 z-50 w-full border-b border-neutral-100 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80"
            onMouseLeave={() => setIsServicesOpen(false)}
            onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                    setIsServicesOpen(false);
                }
            }}
        >
            <div className="mx-auto flex h-20 w-full max-w-[1856px] items-center justify-between px-4 md:px-6 xl:w-[89%] xl:px-0 2xl:h-[88px]">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="/logo-black.svg"
                        alt="TOGETHER Logo"
                        width={140}
                        height={40}
                        className="h-8 w-auto object-contain 2xl:h-9"
                        priority
                    />
                </Link>

                {/* Navigation Links - Desktop Only */}
                <nav className="hidden xl:flex items-center gap-5 2xl:gap-8">
                    <button
                        ref={servicesButtonRef}
                        type="button"
                        aria-expanded={isServicesOpen}
                        aria-controls="services-mega-menu"
                        className={`group relative inline-flex items-center px-3 py-2 font-sans text-sm font-medium leading-normal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-4 2xl:text-base ${
                            isServicesOpen ? "text-neutral-900" : "text-neutral-600 hover:text-brand-600"
                        }`}
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onFocus={() => setIsServicesOpen(true)}
                        onClick={() => setIsServicesOpen(true)}
                        onKeyDown={(event) => {
                            if (event.key === "ArrowDown") {
                                event.preventDefault();
                                setIsServicesOpen(true);
                                requestAnimationFrame(() => firstServiceLinkRef.current?.focus());
                            }
                        }}
                    >
                        <span className="relative">
                            Serviços
                            <span
                                className={`absolute left-0 top-[calc(100%+5px)] h-[3px] w-full origin-center bg-brand-500 transition-[opacity,transform] duration-200 motion-reduce:transition-none ${
                                    isServicesOpen
                                        ? "scale-x-100 opacity-100"
                                        : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                                }`}
                                aria-hidden="true"
                            />
                        </span>
                        <span
                            className={`pointer-events-none absolute left-1/2 top-[calc(100%+30px)] h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-neutral-200 bg-white transition-opacity motion-reduce:transition-none 2xl:top-[calc(100%+32px)] ${isServicesOpen ? "opacity-100" : "opacity-0"}`}
                            aria-hidden="true"
                        />
                    </button>
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-sm font-medium text-neutral-600 transition-colors hover:text-brand-600 hover:bg-brand-50 rounded-md px-3 py-2 2xl:text-base"
                            onFocus={() => setIsServicesOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Action Buttons - Desktop Only */}
                <div className="hidden xl:flex items-center gap-4">
                    <LanguageSwitcher />
                    <Button asChild size="default" className="text-xs font-bold shadow-md hover:shadow-lg transition-all 2xl:text-sm">
                        <Link href="/contato">
                            Agendar uma Conversa
                            {showCtaArrow ? <ArrowUpRight className="ml-1 h-4 w-4" /> : null}
                        </Link>
                    </Button>
                </div>

                {/* Mobile Menu Toggle + StaggeredMenu */}
                <div className="flex xl:hidden items-center gap-3">
                    <LanguageSwitcher compact />
                    <StaggeredMenu
                        items={menuItems}
                        displaySocials={false}
                        displayItemNumbering={true}
                        colors={["#FFF8DC", "#F5C518"]}
                        accentColor="#F5C518"
                        ctaLabel="Agendar uma Conversa"
                        ctaLink="/contato"
                        onMenuOpen={() => getLenis()?.stop()}
                        onMenuClose={() => getLenis()?.start()}
                    />
                </div>
            </div>

            <div
                id="services-mega-menu"
                aria-label="Serviços e soluções da TOGETHER"
                aria-hidden={!isServicesOpen}
                inert={!isServicesOpen}
                className={`absolute left-0 top-full hidden w-full origin-top transition-[opacity,transform,visibility] duration-200 ease-out motion-reduce:transition-none xl:block ${
                    isServicesOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-2 pointer-events-none opacity-0"
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
            >
                <div className="mx-auto w-[92%] max-w-[1920px] pb-5 pt-4">
                    <div className="relative rounded-2xl border border-neutral-200 border-t-4 border-t-brand-500 bg-white shadow-[0_16px_40px_rgba(18,18,18,0.09)]">
                        <div className="grid grid-cols-[minmax(0,1fr)_minmax(240px,23%)] gap-5 p-6 2xl:gap-6 2xl:p-8">
                            <div className="min-w-0">
                                <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-neutral-500 2xl:mb-4 2xl:text-sm">
                                    Serviços
                                </p>

                                <div className="grid grid-cols-3 gap-4">
                                    {[
                                        {
                                            label: "DPO as a Service",
                                            description: "Proteção de dados contínua com especialistas ao seu lado.",
                                            href: "/servicos/dpo-as-a-service",
                                            icon: FileText,
                                        },
                                        {
                                            label: "Consultoria de Adequação",
                                            description: "Diagnóstico, plano de ação e implementação.",
                                            href: "/servicos/consultoria-adequacao",
                                            icon: NotepadText,
                                        },
                                        {
                                            label: "Mentoria e Cultura",
                                            description: "Pessoas, processos e cultura de privacidade.",
                                            href: "/servicos/mentoria-e-cultura",
                                            icon: UsersRound,
                                        },
                                    ].map((item, index) => {
                                        const Icon = item.icon;

                                        return (
                                            <Link
                                                ref={index === 0 ? firstServiceLinkRef : undefined}
                                                key={item.label}
                                                href={item.href}
                                                className="group flex min-h-[104px] items-center gap-3 rounded-[12px] border border-neutral-200 bg-white p-3 transition-[border-color,box-shadow] duration-200 hover:border-brand-400 hover:shadow-[0_8px_20px_rgba(18,18,18,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 2xl:min-h-28 2xl:gap-4 2xl:p-4"
                                                onClick={() => setIsServicesOpen(false)}
                                            >
                                                <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-neutral-50 text-neutral-900 transition-colors group-hover:bg-brand-100 2xl:h-[72px] 2xl:w-[72px]">
                                                    <Icon className={`h-8 w-8 ${index === 1 ? "[&_path:nth-last-child(-n+2)]:stroke-brand-500" : index === 2 ? "[&_path:first-child]:stroke-brand-500" : ""}`} strokeWidth={1.8} aria-hidden="true" />
                                                    {index === 0 && <ShieldCheck className="absolute bottom-2 right-1 h-5 w-5 fill-neutral-50 stroke-brand-500 2xl:bottom-3 2xl:right-2" strokeWidth={2} aria-hidden="true" />}
                                                </span>
                                                <span className="min-w-0 flex-1">
                                                    <span className="block text-[13px] font-bold leading-snug text-neutral-900 2xl:text-base">
                                                        {item.label}
                                                    </span>
                                                    <span className="mt-1 block text-xs leading-[1.5] text-neutral-500 2xl:text-sm">
                                                        {item.description}
                                                    </span>
                                                </span>
                                                <ChevronRight className="h-5 w-5 shrink-0 text-neutral-700 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                                            </Link>
                                        );
                                    })}
                                </div>

                                <div className="my-6 h-px bg-neutral-200 2xl:my-7" aria-hidden="true" />

                                <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-neutral-500 2xl:mb-4 2xl:text-sm">
                                    Soluções por setor
                                </p>

                                <div className="grid grid-cols-4 gap-3 2xl:gap-4">
                                    {[
                                        { label: "SaaS e Tecnologia", href: "/solucoes/privacidade-saas", icon: Laptop },
                                        { label: "Escolas Particulares", href: "/solucoes/privacidade-escolas-particulares", icon: GraduationCap },
                                        { label: "Ensino Superior", href: "/solucoes/privacidade-ensino-superior", icon: Landmark },
                                        { label: "Transporte Fracionado", href: "/solucoes/privacidade-transporte-fracionado", icon: Truck },
                                        { label: "Transporte Lotação", href: "/solucoes/privacidade-transporte-lotacao", icon: BusFront },
                                        { label: "Gestão de Rodovias", href: "/solucoes/privacidade-gestao-de-rodovias", icon: Route },
                                        { label: "Escritórios de Advocacia", href: "/solucoes/escritorios-de-advocacia", icon: Scale },
                                    ].map((item) => {
                                        const Icon = item.icon;

                                        return (
                                            <Link
                                                key={item.label}
                                                href={item.href}
                                                className="group flex min-h-14 items-center gap-3 rounded-[10px] border border-neutral-200 bg-white px-3 py-3 text-xs font-medium text-neutral-800 transition-colors duration-200 hover:border-brand-400 hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 2xl:min-h-16 2xl:px-4 2xl:text-[15px]"
                                                onClick={() => setIsServicesOpen(false)}
                                            >
                                                <Icon className="h-5 w-5 shrink-0 2xl:h-6 2xl:w-6" strokeWidth={1.8} aria-hidden="true" />
                                                <span className="min-w-0 flex-1 leading-snug">{item.label}</span>
                                                <ChevronRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="border-l border-neutral-200 pl-5 2xl:pl-6">
                            <Link
                                href="/eca-digital"
                                className="group relative flex h-full min-h-[324px] overflow-hidden rounded-xl bg-[#080808] px-6 py-10 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 2xl:px-8 2xl:py-12"
                                onClick={() => setIsServicesOpen(false)}
                            >
                                <span
                                    className="absolute inset-0 opacity-35 [background-image:linear-gradient(135deg,transparent_0%,transparent_56%,rgba(245,192,0,0.13)_100%)]"
                                    aria-hidden="true"
                                />
                                <PixelDecor squareSize={11} gridGap={6} opacity={0.35} maskImage="linear-gradient(145deg, transparent 62%, black 100%)" />
                                <span className="relative z-10 flex w-full flex-col">
                                    <span className="text-xs font-bold uppercase tracking-[0.1em] text-brand-400">
                                        ECA Digital
                                    </span>
                                    <span className="mt-5 text-[24px] font-bold leading-[1.2] tracking-[-0.025em] 2xl:text-[28px]">
                                        Entenda as novas obrigações.
                                    </span>
                                    <span className="mt-6 inline-flex min-h-12 w-full items-center justify-between gap-2 rounded-2xl bg-brand-400 px-4 text-xs font-bold text-neutral-950 transition-colors group-hover:bg-brand-300 2xl:min-h-14 2xl:text-base">
                                        Conhecer ECA Digital
                                        <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                                    </span>
                                </span>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
