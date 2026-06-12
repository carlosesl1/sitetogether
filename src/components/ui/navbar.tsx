"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { StaggeredMenu } from "@/components/ui/staggered-menu";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";
import { useSmoothScroll } from "@/components/ui/smooth-scroll-provider";
import { ArrowUpRight } from "lucide-react";

type NavbarProps = {
    includeAbout?: boolean;
    showCtaArrow?: boolean;
};

export function Navbar({ includeAbout = false, showCtaArrow = false }: NavbarProps) {
    const { getLenis } = useSmoothScroll();
    const navItems = [
        { label: "Soluções", href: "/#offers" },
        { label: "ECA Digital", href: "/eca-digital" },
        { label: "Metodologia", href: "/#methodology" },
        { label: "Conteúdos", href: "/blog" },
        ...(includeAbout ? [{ label: "Sobre", href: "/#sobre" }] : []),
    ];

    const menuItems = [
        { label: "Soluções", ariaLabel: "Ver soluções", link: "/#offers" },
        { label: "ECA Digital", ariaLabel: "Conhecer diagnóstico ECA Digital", link: "/eca-digital" },
        { label: "Metodologia", ariaLabel: "Nossa metodologia", link: "/#methodology" },
        { label: "Conteúdos", ariaLabel: "Ver conteúdos", link: "/blog" },
        ...(includeAbout ? [{ label: "Sobre", ariaLabel: "Sobre a TOGETHER", link: "/#sobre" }] : []),
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-neutral-100 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
            <div className="container flex h-20 items-center justify-between px-4 md:px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="/logo-black.svg"
                        alt="TOGETHER Logo"
                        width={140}
                        height={40}
                        className="h-8 w-auto object-contain"
                        priority
                    />
                </Link>

                {/* Navigation Links - Desktop Only */}
                <nav className="hidden xl:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-sm font-medium text-neutral-600 transition-colors hover:text-brand-600 hover:bg-brand-50 rounded-md px-3 py-2"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Action Buttons - Desktop Only */}
                <div className="hidden xl:flex items-center gap-4">
                    <LanguageSwitcher />
                    <Link href="/contato">
                        <Button size="default" className="text-xs font-bold shadow-md hover:shadow-lg transition-all">
                            Agendar uma Conversa
                            {showCtaArrow ? <ArrowUpRight className="ml-1 h-4 w-4" /> : null}
                        </Button>
                    </Link>
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
        </header>
    );
}
