"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import {
    Activity,
    AlertCircle,
    AlertTriangle,
    Briefcase,
    Calendar,
    CheckCircle2,
    Clock,
    Cloud,
    Cpu,
    FileWarning,
    Globe,
    Layers,
    MinusCircle,
    Settings,
    ShieldCheck,
    Target,
    TrendingUp,
    Users,
    XOctagon,
    Zap,
    type LucideIcon
} from "lucide-react";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";
import { SectionPill } from "@/components/ui/site-primitives";

type ComparisonItem = {
    id: number;
    problem: {
        icon: LucideIcon;
        header: string;
        text: string;
        subIcon?: LucideIcon;
    };
    solution: {
        header: string;
        text: string;
        highlightText?: string;
        icons: LucideIcon[];
    };
};

type PairAnimation = {
    riskBlur: MotionValue<string>;
    overlayOpacity: MotionValue<number>;
    overlayY: MotionValue<number>;
};

const items: ComparisonItem[] = [
    {
        id: 1,
        problem: {
            icon: Users,
            header: "Equipe Inexperiente (Risco)",
            text: "Equipes sem experiência prática em projetos reais de privacidade.",
            subIcon: AlertTriangle
        },
        solution: {
            header: "Especialistas Certificados",
            text: "Nossa equipe possui ",
            highlightText: "certificações internacionais e experiência prática em projetos reais.",
            icons: [ShieldCheck]
        }
    },
    {
        id: 2,
        problem: {
            icon: FileWarning,
            header: "Processos Imaturos",
            text: "Processos complicados que não funcionam na rotina da empresa.",
            subIcon: Activity
        },
        solution: {
            header: "Processos que Funcionam na Prática",
            text: "Usamos métodos aplicados em ",
            highlightText: "projetos de LGPD, GDPR e PDPL.",
            icons: [CheckCircle2, Layers]
        }
    },
    {
        id: 3,
        problem: {
            icon: XOctagon,
            header: "Falta de Vivência Corporativa",
            text: "Pouca experiência para adaptar a privacidade à realidade de cada empresa."
        },
        solution: {
            header: "Experiência Corporativa",
            text: "Atuamos em projetos complexos e conseguimos ",
            highlightText: "antecipar desafios antes que eles travem sua operação.",
            icons: [Briefcase]
        }
    },
    {
        id: 4,
        problem: {
            icon: Clock,
            header: "Iniciantes no Mercado",
            text: "Fornecedores sem histórico consistente de entregas em privacidade e proteção de dados."
        },
        solution: {
            header: "+5 Anos com LGPD",
            text: "Trajetória marcada por ",
            highlightText: "entregas consistentes e evolução contínua em privacidade.",
            icons: [Calendar, TrendingUp]
        }
    },
    {
        id: 5,
        problem: {
            icon: Cpu,
            header: "Uso Inadequado de Tecnologia",
            text: "Pouca familiaridade com as ferramentas usadas na rotina da privacidade.",
            subIcon: AlertCircle
        },
        solution: {
            header: "Domínio das Principais Plataformas",
            text: "Configuramos e operamos ferramentas de privacidade. ",
            highlightText: "Integramos com a tecnologia que você já usa.",
            icons: [Cloud, Zap]
        }
    },
    {
        id: 6,
        problem: {
            icon: MinusCircle,
            header: "Escopo Limitado",
            text: "Atuação pontual, sem apoio para treinamentos, auditorias, due diligence ou incidentes."
        },
        solution: {
            header: "O Maior Catálogo de Serviços",
            text: "Mais de 200 atividades para manter sua empresa ",
            highlightText: "atualizada, organizada e protegida.",
            icons: [Layers, ShieldCheck]
        }
    },
    {
        id: 7,
        problem: {
            icon: Globe,
            header: "Visão Restrita à LGPD",
            text: "Dificuldade para apoiar expansão internacional e novas regras, como IA e proteção infantojuvenil.",
            subIcon: XOctagon
        },
        solution: {
            header: "Experiência Internacional",
            text: "Vivência em GDPR (Europa) e PDPL (Oriente Médio), com visão para ",
            highlightText: "novas exigências regulatórias.",
            icons: [Globe, Target]
        }
    },
    {
        id: 8,
        problem: {
            icon: Target,
            header: "Falta de Planejamento e Execução",
            text: "Projetos sem cronograma claro, prioridades definidas ou acompanhamento das entregas.",
            subIcon: Clock
        },
        solution: {
            header: "Time Orientado a Entregas",
            text: "Cronogramas claros e acompanhamento tarefa a tarefa para garantir ",
            highlightText: "entregas consistentes e rápidas.",
            icons: [CheckCircle2, Settings]
        }
    }
];

function RiskCard({ item, blur }: { item: ComparisonItem; blur?: MotionValue<string> | string }) {
    const ProblemIcon = item.problem.icon;
    const SubIcon = item.problem.subIcon;

    return (
        <motion.div
            data-comparison-risk
            style={{ filter: blur }}
            className="relative flex w-full flex-col items-start gap-4 rounded-3xl border border-neutral-200 bg-neutral-100 p-5 sm:flex-row sm:items-center sm:gap-5 sm:p-6 lg:gap-8 lg:p-8"
        >
            <div className="absolute -top-3 left-5 flex items-center gap-1 rounded-full border border-red-200 bg-red-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-red-600 lg:left-6 lg:text-xs">
                <AlertCircle className="h-3 w-3" />
                Risco da Gestão Inexperiente
            </div>

            <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] border border-neutral-200 bg-white shadow-sm lg:h-16 lg:w-16 lg:rounded-[20px]">
                <ProblemIcon className="h-7 w-7 text-neutral-400 lg:h-8 lg:w-8" />
                {SubIcon && (
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border border-red-100 bg-white shadow-sm lg:h-6 lg:w-6">
                        <SubIcon className="h-3 w-3 animate-pulse text-red-400 lg:h-3.5 lg:w-3.5" />
                    </span>
                )}
            </div>

            <div className="min-w-0 flex-1">
                <h4 className="mb-1 text-base font-semibold text-neutral-600 lg:text-lg">{item.problem.header}</h4>
                <p className="text-[13px] leading-relaxed text-neutral-500 lg:text-sm">{item.problem.text}</p>
            </div>
        </motion.div>
    );
}

function SolutionCardContent({ item }: { item: ComparisonItem }) {
    return (
        <>
            <div className="absolute -top-3 right-4 flex items-center gap-1 rounded-full bg-brand-400 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-neutral-900 shadow-md lg:right-6 lg:text-xs">
                <CheckCircle2 className="h-3 w-3" />
                Diferencial TOGETHER
            </div>

            <div className="flex shrink-0 -space-x-1.5 lg:-space-x-2">
                {item.solution.icons.map((Icon, idx) => (
                    <div
                        key={idx}
                        className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/80 bg-neutral-900 shadow-[0_10px_24px_rgba(18,18,18,0.16)] ring-2 ring-white lg:h-16 lg:w-16 lg:rounded-[20px]"
                        style={{ zIndex: 10 - idx }}
                    >
                        <Icon className="h-6 w-6 text-brand-400 lg:h-8 lg:w-8" />
                    </div>
                ))}
            </div>

            <div className="min-w-0 flex-1 sm:ml-1 lg:ml-2">
                <h3 className="mb-1 text-base font-bold text-neutral-900 lg:text-xl">{item.solution.header}</h3>
                <p className="text-[13px] leading-relaxed text-neutral-600 lg:text-sm">
                    {item.solution.text}
                    <span className="rounded bg-brand-100 px-1 font-bold text-neutral-900">
                        {item.solution.highlightText}
                    </span>
                </p>
            </div>
        </>
    );
}

function usePairAnimation(scrollYProgress: MotionValue<number>, pairIndex: number): PairAnimation {
    const start = 0.05 + pairIndex * 0.22;
    const end = 0.15 + pairIndex * 0.22;
    const blurEnd = end + 0.03;

    return {
        riskBlur: useTransform(scrollYProgress, [end, blurEnd], ["blur(0px)", "blur(4px)"]),
        overlayOpacity: useTransform(scrollYProgress, [start, end], [0, 1]),
        overlayY: useTransform(scrollYProgress, [start, end], [-20, 0])
    };
}

function ComparisonCard({
    item,
    animation
}: {
    item: ComparisonItem;
    animation: PairAnimation;
}) {
    return (
        <div data-comparison-card className="relative">
            <RiskCard item={item} blur={animation.riskBlur} />
            <motion.div
                data-comparison-overlay
                style={{
                    opacity: animation.overlayOpacity,
                    y: animation.overlayY
                }}
                className="absolute inset-0 z-10 flex flex-col items-start gap-4 rounded-3xl border border-brand-400/50 bg-white p-5 shadow-lg shadow-brand-400/20 sm:flex-row sm:items-center sm:gap-5 sm:p-6 lg:gap-8 lg:p-8"
            >
                <SolutionCardContent item={item} />
            </motion.div>
        </div>
    );
}

function SummaryBanner({ opacity }: { opacity: MotionValue<number> | number }) {
    return (
        <motion.div style={{ opacity }} className="mt-8">
            <div className="relative overflow-hidden rounded-2xl border border-neutral-100 bg-gradient-to-r from-neutral-50 via-brand-100 to-neutral-50 p-6 text-center shadow-sm">
                <div className="absolute left-1/2 top-0 h-1 w-1/3 -translate-x-1/2 bg-brand-400 shadow-[0_0_15px_#FFD637]" />
                <p className="text-base font-light text-neutral-600 md:text-lg">
                    O Resultado: <span className="font-bold text-neutral-900">Segurança total e tranquilidade</span> com uma{" "}
                    <span className="font-bold text-neutral-900">equipe experiente e validada</span>.
                </p>
            </div>
        </motion.div>
    );
}

export function ProposalComparison() {
    const sectionScrollRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionScrollRef,
        offset: ["start start", "end end"]
    });
    const [isMobileViewport, setIsMobileViewport] = useState(false);

    const firstPair = usePairAnimation(scrollYProgress, 0);
    const secondPair = usePairAnimation(scrollYProgress, 1);
    const thirdPair = usePairAnimation(scrollYProgress, 2);
    const fourthPair = usePairAnimation(scrollYProgress, 3);
    const pairAnimations = [firstPair, secondPair, thirdPair, fourthPair];
    const summaryOpacity = useTransform(scrollYProgress, [0.71, 0.81], [0, 1]);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 767px)");
        const updateMobileViewport = () => setIsMobileViewport(mediaQuery.matches);

        updateMobileViewport();
        mediaQuery.addEventListener("change", updateMobileViewport);
        window.addEventListener("resize", updateMobileViewport);

        return () => {
            mediaQuery.removeEventListener("change", updateMobileViewport);
            window.removeEventListener("resize", updateMobileViewport);
        };
    }, []);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 767px)");
        const clamp = (value: number) => Math.max(0, Math.min(1, value));
        let cards: Array<{ card: HTMLElement; overlay: HTMLElement; risk: HTMLElement | null }> = [];
        let ticking = false;

        const collectCards = () => {
            const section = sectionScrollRef.current?.closest("[data-section='proposal-comparison']");
            if (!section) return;

            cards = Array.from(section.querySelectorAll<HTMLElement>("[data-comparison-card]"))
                .map((card) => ({
                    card,
                    overlay: card.querySelector<HTMLElement>("[data-comparison-overlay]"),
                    risk: card.querySelector<HTMLElement>("[data-comparison-risk]")
                }))
                .filter((entry): entry is { card: HTMLElement; overlay: HTMLElement; risk: HTMLElement | null } => Boolean(entry.overlay));
        };

        const resetDesktopStyles = () => {
            cards.forEach(({ overlay, risk }) => {
                overlay.style.removeProperty("--together-mobile-overlay-opacity");
                overlay.style.removeProperty("--together-mobile-overlay-y");
                risk?.style.removeProperty("--together-mobile-risk-blur");
            });
        };

        const updateMobileCards = () => {
            if (!cards.length) collectCards();
            if (!cards.length) return;

            if (!mediaQuery.matches) {
                resetDesktopStyles();
                return;
            }

            const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
            const start = viewportHeight * 0.78;
            const end = viewportHeight * 0.18;

            cards.forEach(({ card, overlay, risk }) => {
                const cardTop = card.getBoundingClientRect().top;
                const progress = clamp((start - cardTop) / (start - end));
                const overlayProgress = clamp((progress - 0.95) / 0.05);
                const riskBlur = 4 * clamp((progress - 0.98) / 0.02);

                overlay.style.setProperty("--together-mobile-overlay-opacity", overlayProgress.toFixed(3));
                overlay.style.setProperty("--together-mobile-overlay-y", `${(14 * (1 - overlayProgress)).toFixed(2)}px`);
                risk?.style.setProperty("--together-mobile-risk-blur", `${riskBlur.toFixed(2)}px`);
            });
        };

        const scheduleUpdate = () => {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(() => {
                ticking = false;
                updateMobileCards();
            });
        };

        collectCards();
        updateMobileCards();
        const firstSetupTimer = window.setTimeout(() => {
            collectCards();
            updateMobileCards();
        }, 400);
        const secondSetupTimer = window.setTimeout(() => {
            collectCards();
            updateMobileCards();
        }, 1200);

        window.addEventListener("scroll", scheduleUpdate, { passive: true });
        window.addEventListener("resize", scheduleUpdate);
        mediaQuery.addEventListener("change", scheduleUpdate);

        return () => {
            window.clearTimeout(firstSetupTimer);
            window.clearTimeout(secondSetupTimer);
            window.removeEventListener("scroll", scheduleUpdate);
            window.removeEventListener("resize", scheduleUpdate);
            mediaQuery.removeEventListener("change", scheduleUpdate);
        };
    }, []);

    return (
        <section data-section="proposal-comparison" className="relative w-full bg-white pb-32">
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                <PixelDecor
                    placement="custom"
                    maskImage="radial-gradient(circle at 50% 50%, black 0%, rgba(0,0,0,0.9) 26%, rgba(0,0,0,0.38) 52%, transparent 74%)"
                    opacity={0.16}
                    className="right-[-360px] top-[180px] h-[720px] w-[720px]"
                />
                <PixelDecor placement="bottomLeft" mask="bottomLeft" opacity={0.14} />
                <PixelDecor placement="bottomRight" mask="bottomRight" opacity={0.16} />
            </div>

            <div className="relative z-10 pt-24 pb-12">
                <div className="mx-auto max-w-[1135px] px-4 text-center">
                    <div className="mb-8">
                        <SectionPill>Nossa Proposta de Valor</SectionPill>
                    </div>
                    <h2 className="mb-12 text-4xl font-bold leading-[1.15] tracking-tight text-neutral-900 md:text-6xl">
                        Compare uma gestão inexperiente <br className="hidden md:block" />
                        <span className="font-light italic text-brand-500">com uma gestão de privacidade segura.</span>
                    </h2>
                    <p className="text-lg font-medium text-neutral-600 md:text-xl">
                        Veja por que a{" "}
                        <span className="relative ml-1 inline-block px-1 font-bold text-neutral-900">
                            <span className="absolute inset-0 rounded-sm bg-brand-400/30 -skew-x-6" />
                            <span className="relative">TOGETHER</span>
                        </span>{" "}
                        entrega mais segurança, experiência e previsibilidade para sua empresa.
                    </p>
                </div>
            </div>

            <div ref={sectionScrollRef} className="relative md:h-[250vh]">
                <div className="relative z-10 md:sticky md:top-32">
                    <div className="container mx-auto flex w-full flex-col gap-10 px-4 pt-16 md:px-6">
                        {[0, 1, 2, 3].map((pairIndex) => {
                            const firstItem = items[pairIndex * 2];
                            const secondItem = items[pairIndex * 2 + 1];
                            const animation = pairAnimations[pairIndex];

                            return (
                                <div key={pairIndex} className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    <ComparisonCard item={firstItem} animation={animation} />
                                    <ComparisonCard item={secondItem} animation={animation} />
                                </div>
                            );
                        })}
                        <SummaryBanner opacity={isMobileViewport ? 1 : summaryOpacity} />
                    </div>
                </div>
            </div>
        </section>
    );
}
