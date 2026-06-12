"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Zap } from "lucide-react";
import { CTASection } from "@/components/ui/cta-section";
import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";
import { ActionLink, SectionPill } from "@/components/ui/site-primitives";
import { cn } from "@/lib/utils";

type HeroTone = "light" | "dark";

type ServiceAction = {
    href: string;
    label: string;
};

type ServiceMetric = {
    label: string;
    value: string;
};

type ServiceVisualItem = {
    label: string;
    value: string;
};

type ServiceVisual = {
    icon: LucideIcon;
    title: string;
    subtitle: string;
    items: ServiceVisualItem[];
};

type ServiceCard = {
    icon: LucideIcon;
    title: string;
    highlight?: string;
    text: string;
};

type ServiceStep = {
    icon: LucideIcon;
    title: string;
    label: string;
    text: string;
};

type ServiceHighlight = {
    icon?: LucideIcon;
    title: string;
    text: string;
    action: ServiceAction;
};

type ServiceSection = {
    pill: string;
    title: string;
    accent: string;
    text: string;
};

type ServicePageContent = {
    hero: ServiceSection & {
        tone?: HeroTone;
        titleClassName?: string;
        primary: ServiceAction;
        secondary: ServiceAction;
        metrics: ServiceMetric[];
        visual: ServiceVisual;
    };
    challenge: ServiceSection & {
        cards: ServiceCard[];
    };
    scope: ServiceSection & {
        items: ServiceCard[];
        action: ServiceAction;
        meta: ServiceMetric;
    };
    process: ServiceSection & {
        steps: ServiceStep[];
        highlight: ServiceHighlight;
    };
    value: ServiceSection & {
        cards: ServiceCard[];
    };
};

type ServicePageShellProps = {
    content: ServicePageContent;
};

const fadeUp = {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
} as const;

export function ServicePageShell({ content }: ServicePageShellProps) {
    const heroTone = content.hero.tone ?? "light";

    return (
        <main className="min-h-screen overflow-x-hidden bg-white selection:bg-brand-400/30">
            <Navbar />
            <ServiceHero content={content.hero} tone={heroTone} />
            <ChallengeSection section={content.challenge} />
            <ScopeSection section={content.scope} />
            <ProcessSection section={content.process} />
            <ValueSection section={content.value} />
            <CTASection />
            <Footer />
        </main>
    );
}

function ServiceHero({
    content,
    tone,
}: {
    content: ServicePageContent["hero"];
    tone: HeroTone;
}) {
    const isDark = tone === "dark";

    return (
        <section
            className={cn(
                "relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32",
                isDark ? "bg-neutral-950 text-white" : "bg-white text-neutral-900"
            )}
        >
            {isDark ? (
                <>
                    <PixelDecor placement="topRight" mask="topRight" opacity={0.18} />
                    <PixelDecor placement="bottomLeft" mask="bottomLeft" opacity={0.14} />
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(245,192,0,0.16),transparent_26%),radial-gradient(circle_at_82%_18%,rgba(245,192,0,0.08),transparent_24%)]" />
                </>
            ) : (
                <>
                    <PixelDecor placement="topRight" mask="topRight" opacity={0.2} />
                    <PixelDecor placement="bottomLeft" mask="bottomLeft" opacity={0.12} />
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(245,192,0,0.14),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(0,0,0,0.035),transparent_24%)]" />
                </>
            )}
            <div
                className={cn(
                    "pointer-events-none absolute inset-0",
                    isDark ? "opacity-[0.04]" : "opacity-[0.025]"
                )}
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, ${isDark ? "#ffffff" : "#121212"} 1px, transparent 0)`,
                    backgroundSize: "28px 28px",
                }}
            />

            <div className="container relative z-10 mx-auto px-6">
                <div className="grid w-full gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.86fr)] lg:items-center xl:gap-16">
                    <div className="min-w-0">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-8"
                        >
                            <SectionPill tone={isDark ? "dark" : "light"}>{content.pill}</SectionPill>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                            className={cn(
                                "max-w-4xl text-[2.75rem] font-bold leading-[0.98] tracking-normal sm:text-6xl xl:text-[4rem]",
                                content.titleClassName,
                                isDark ? "text-white" : "text-neutral-900"
                            )}
                        >
                            {content.title}{" "}
                            <span className="font-light italic text-brand-500">{content.accent}</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.08, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                            className={cn(
                                "mt-8 max-w-2xl text-lg font-medium leading-relaxed sm:text-xl",
                                isDark ? "text-neutral-400" : "text-neutral-500"
                            )}
                        >
                            {content.text}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.16, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                            className="mt-10 flex flex-col gap-4 sm:flex-row"
                        >
                            <ActionLink href={content.primary.href} size="xl" fullWidth className="sm:w-auto">
                                {content.primary.label}
                            </ActionLink>
                            <ActionLink
                                href={content.secondary.href}
                                size="xl"
                                variant={isDark ? "light" : "dark"}
                                fullWidth
                                className="sm:w-auto"
                            >
                                {content.secondary.label}
                            </ActionLink>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.22, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                            className={cn(
                                "mt-12 grid gap-3 sm:grid-cols-3",
                                isDark ? "text-white" : "text-neutral-900"
                            )}
                        >
                            {content.metrics.map((metric) => (
                                <div
                                    key={metric.label}
                                    className={cn(
                                        "rounded-2xl border p-4",
                                        isDark
                                            ? "border-white/10 bg-white/[0.04]"
                                            : "border-neutral-100 bg-white/70 shadow-sm shadow-neutral-200/50"
                                    )}
                                >
                                    <p className="text-[9px] font-black uppercase leading-tight tracking-[0.22em] text-brand-500">
                                        {metric.label}
                                    </p>
                                    <p
                                        className={cn(
                                            "mt-2 text-sm font-bold leading-tight",
                                            isDark ? "text-white" : "text-neutral-900"
                                        )}
                                    >
                                        {metric.value}
                                    </p>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.12, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                        className="min-w-0 lg:flex lg:justify-end"
                    >
                        <ServiceVisual visual={content.visual} tone={tone} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function ServiceVisual({ visual, tone }: { visual: ServiceVisual; tone: HeroTone }) {
    const Icon = visual.icon;
    const isDark = tone === "dark";

    return (
        <div
            className={cn(
                "relative mx-auto w-full max-w-[520px] overflow-hidden rounded-[2.5rem] border p-5 shadow-2xl sm:p-7 lg:mx-0",
                isDark
                    ? "border-white/10 bg-white/[0.04] shadow-black/30"
                    : "border-neutral-200/80 bg-white shadow-neutral-900/10"
            )}
        >
            <PixelDecor placement="right" mask="right" opacity={isDark ? 0.18 : 0.14} />
            <div
                className={cn(
                    "relative z-10 rounded-[2rem] border p-5 sm:p-7",
                    isDark ? "border-white/10 bg-neutral-950" : "border-neutral-100 bg-neutral-50"
                )}
            >
                <div className="mb-8 flex items-center justify-between gap-4">
                    <div
                        className={cn(
                            "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl",
                            isDark ? "bg-white/10 text-brand-500" : "bg-neutral-950 text-brand-500"
                        )}
                    >
                        <Icon className="h-6 w-6" />
                    </div>
                    <div className="min-w-0 text-right">
                        <p
                            className={cn(
                                "text-[10px] font-black uppercase tracking-[0.22em]",
                                isDark ? "text-neutral-500" : "text-neutral-400"
                            )}
                        >
                            TOGETHER OPS
                        </p>
                        <p
                            className={cn(
                                "mt-1 text-xl font-bold leading-tight",
                                isDark ? "text-white" : "text-neutral-900"
                            )}
                        >
                            {visual.title}
                        </p>
                    </div>
                </div>

                <div className="rounded-[1.5rem] bg-neutral-950 p-5 text-white shadow-xl shadow-neutral-950/20">
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-brand-500">{visual.subtitle}</p>
                    <div className="mt-5 grid gap-3">
                        {visual.items.map((item) => (
                            <div key={item.label} className="flex items-center justify-between gap-4 border-b border-white/10 pb-3 last:border-b-0 last:pb-0">
                                <span className="text-xs font-bold uppercase tracking-[0.16em] text-neutral-500">{item.label}</span>
                                <span className="text-sm font-bold text-white">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-4 gap-3">
                    {[0, 1, 2, 3].map((item) => (
                        <div key={item} className="h-1.5 rounded-full bg-brand-400/70" />
                    ))}
                </div>
            </div>
        </div>
    );
}

function ChallengeSection({ section }: { section: ServicePageContent["challenge"] }) {
    return (
        <section className="relative overflow-hidden bg-white py-24 md:py-32">
            <PixelDecor placement="right" mask="right" opacity={0.12} />
            <div className="container relative z-10 mx-auto px-6">
                <SectionHeading section={section} align="left" />

                <div className="mt-14 grid gap-5 lg:grid-cols-3">
                    {section.cards.map((card, index) => (
                        <motion.div
                            key={card.title}
                            {...fadeUp}
                            transition={{ ...fadeUp.transition, delay: index * 0.06 }}
                            className="group rounded-[2rem] border border-neutral-100 bg-white p-6 shadow-sm shadow-neutral-200/60 transition-all hover:border-brand-400/40 hover:shadow-2xl hover:shadow-brand-400/10 md:p-8"
                        >
                            <CardIcon icon={card.icon} />
                            <p className="mt-8 text-[10px] font-black uppercase tracking-[0.22em] text-brand-600">
                                {String(index + 1).padStart(2, "0")} / Desafio
                            </p>
                            <h3 className="mt-4 text-2xl font-bold leading-tight text-neutral-900">{card.title}</h3>
                            {card.highlight ? (
                                <p className="mt-2 text-lg font-light italic leading-tight text-brand-500">{card.highlight}</p>
                            ) : null}
                            <p className="mt-6 text-sm font-medium leading-relaxed text-neutral-500">{card.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ScopeSection({ section }: { section: ServicePageContent["scope"] }) {
    return (
        <section id="escopo" className="relative overflow-hidden bg-neutral-950 py-24 text-white md:py-36">
            <PixelDecor placement="topRight" mask="topRight" opacity={0.16} />
            <PixelDecor placement="bottomLeft" mask="bottomLeft" opacity={0.12} />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,192,0,0.12),transparent_30%)]" />

            <div className="container relative z-10 mx-auto px-6">
                <SectionHeading section={section} align="center" tone="dark" />

                <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {section.items.map((item, index) => (
                        <motion.div
                            key={item.title}
                            {...fadeUp}
                            transition={{ ...fadeUp.transition, delay: index * 0.04 }}
                            className={cn(
                                "rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition-all hover:border-brand-400/40 hover:bg-white/[0.06] md:p-7",
                                index === 0 && "md:col-span-2 xl:col-span-1"
                            )}
                        >
                            <CardIcon icon={item.icon} tone={index === 0 ? "brand" : "dark"} />
                            <h3 className="mt-7 text-xl font-bold leading-tight text-white">{item.title}</h3>
                            {item.highlight ? (
                                <p className="mt-2 text-sm font-bold uppercase tracking-[0.16em] text-brand-500">{item.highlight}</p>
                            ) : null}
                            <p className="mt-5 text-sm font-medium leading-relaxed text-neutral-400">{item.text}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur md:flex-row md:items-center md:justify-between md:p-8">
                    <ActionLink href={section.action.href} size="xl" className="w-full md:w-auto">
                        {section.action.label}
                    </ActionLink>
                    <div className="text-left md:text-right">
                        <p className="text-[10px] font-black uppercase tracking-[0.24em] text-neutral-500">{section.meta.label}</p>
                        <p className="mt-2 text-xl font-bold text-white">{section.meta.value}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ProcessSection({ section }: { section: ServicePageContent["process"] }) {
    const gridClass = section.steps.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4";
    const HighlightIcon = section.highlight.icon ?? Zap;

    return (
        <section id="metodo" className="relative overflow-hidden bg-white py-24 md:py-36">
            <PixelDecor placement="left" mask="left" opacity={0.1} />
            <div className="container relative z-10 mx-auto px-6">
                <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(280px,0.38fr)] lg:items-end">
                    <SectionHeading section={section} align="left" />
                    <p className="border-l-2 border-brand-400 py-2 pl-6 text-base font-medium leading-relaxed text-neutral-500 md:text-lg">
                        {section.text}
                    </p>
                </div>

                <div className={cn("relative mt-16 grid gap-8 sm:grid-cols-2", gridClass)}>
                    <div className="absolute left-0 right-0 top-10 hidden h-px bg-neutral-100 lg:block" />
                    {section.steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <motion.div
                                key={step.title}
                                {...fadeUp}
                                transition={{ ...fadeUp.transition, delay: index * 0.08 }}
                                className="group relative rounded-[2rem] border border-neutral-100 bg-white p-6 shadow-sm shadow-neutral-200/60 md:p-7 lg:border-transparent lg:shadow-none"
                            >
                                <div className="relative z-10 mb-8">
                                    <div className="flex h-20 w-20 items-center justify-center rounded-[1.6rem] border border-neutral-100 bg-white text-neutral-500 shadow-xl shadow-neutral-900/5 transition-all group-hover:bg-brand-400">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full border border-neutral-100 bg-white text-[10px] font-black text-neutral-900 shadow-sm">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>
                                </div>
                                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-brand-600">{step.label}</p>
                                <h3 className="mt-4 text-2xl font-bold leading-tight text-neutral-900">{step.title}</h3>
                                <p className="mt-5 text-sm font-medium leading-relaxed text-neutral-500">{step.text}</p>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div {...fadeUp} className="mt-16 overflow-hidden rounded-[2rem] bg-neutral-950 p-1">
                    <div className="flex flex-col gap-8 rounded-[1.8rem] bg-neutral-950 p-6 text-white md:flex-row md:items-center md:justify-between md:p-10">
                        <div className="flex flex-col gap-5 md:flex-row md:items-center">
                            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-400 text-neutral-950 shadow-lg shadow-brand-400/20">
                                <HighlightIcon className="h-7 w-7" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold leading-tight text-white">{section.highlight.title}</h3>
                                <p className="mt-3 max-w-3xl text-sm font-medium leading-relaxed text-neutral-400 md:text-base">
                                    {section.highlight.text}
                                </p>
                            </div>
                        </div>
                        <ActionLink href={section.highlight.action.href} variant="light" size="lg" className="w-full md:w-auto">
                            {section.highlight.action.label}
                        </ActionLink>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function ValueSection({ section }: { section: ServicePageContent["value"] }) {
    return (
        <section className="relative overflow-hidden border-t border-neutral-100 bg-white py-24 md:py-32">
            <PixelDecor placement="bottomRight" mask="bottomRight" opacity={0.12} />
            <div className="container relative z-10 mx-auto px-6">
                <SectionHeading section={section} align="center" />

                <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {section.cards.map((card, index) => (
                        <motion.div
                            key={card.title}
                            {...fadeUp}
                            transition={{ ...fadeUp.transition, delay: index * 0.05 }}
                            className={cn(
                                "rounded-[2rem] border border-neutral-100 bg-white p-6 shadow-sm shadow-neutral-200/60 transition-all hover:border-brand-400/40 hover:shadow-2xl hover:shadow-brand-400/10 md:p-8",
                                section.cards.length === 4 && index > 1 && "xl:col-span-1"
                            )}
                        >
                            <CardIcon icon={card.icon} />
                            <p className="mt-8 text-[10px] font-black uppercase tracking-[0.22em] text-brand-600">
                                {String(index + 1).padStart(2, "0")} / Valor
                            </p>
                            <h3 className="mt-4 text-2xl font-bold leading-tight text-neutral-900">{card.title}</h3>
                            <p className="mt-5 text-sm font-medium leading-relaxed text-neutral-500">{card.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function SectionHeading({
    section,
    align,
    tone = "light",
}: {
    section: ServiceSection;
    align: "left" | "center";
    tone?: HeroTone;
}) {
    const isDark = tone === "dark";

    return (
        <div className={cn("max-w-4xl", align === "center" && "mx-auto text-center")}>
            <motion.div {...fadeUp} className="mb-8">
                <SectionPill tone={isDark ? "dark" : "light"}>{section.pill}</SectionPill>
            </motion.div>
            <motion.h2
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.04 }}
                className={cn(
                    "text-[2.55rem] font-bold leading-[1.02] tracking-normal sm:text-5xl md:text-6xl",
                    isDark ? "text-white" : "text-neutral-900"
                )}
            >
                {section.title}{" "}
                <span className="font-light italic text-brand-500">{section.accent}</span>
            </motion.h2>
            {align === "center" ? (
                <motion.p
                    {...fadeUp}
                    transition={{ ...fadeUp.transition, delay: 0.08 }}
                    className={cn(
                        "mx-auto mt-7 max-w-2xl text-base font-medium leading-relaxed md:text-lg",
                        isDark ? "text-neutral-400" : "text-neutral-500"
                    )}
                >
                    {section.text}
                </motion.p>
            ) : (
                <motion.p
                    {...fadeUp}
                    transition={{ ...fadeUp.transition, delay: 0.08 }}
                    className={cn(
                        "mt-7 max-w-2xl text-base font-medium leading-relaxed md:text-lg",
                        isDark ? "text-neutral-400" : "text-neutral-500"
                    )}
                >
                    {section.text}
                </motion.p>
            )}
        </div>
    );
}

function CardIcon({
    icon,
    tone = "light",
}: {
    icon: LucideIcon;
    tone?: "light" | "dark" | "brand";
}) {
    const Icon = icon;

    return (
        <div
            className={cn(
                "flex h-12 w-12 items-center justify-center rounded-2xl transition-transform group-hover:scale-105",
                tone === "light" && "bg-neutral-950 text-brand-500 shadow-lg shadow-neutral-950/10",
                tone === "dark" && "border border-white/10 bg-white/5 text-brand-500",
                tone === "brand" && "bg-brand-400 text-neutral-950 shadow-lg shadow-brand-400/20"
            )}
        >
            <Icon className="h-5 w-5" />
        </div>
    );
}
