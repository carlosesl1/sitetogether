import type { ReactNode } from "react";
import {
    CircleCheck,
    ClipboardList,
    Search,
    Shield,
    Target,
    Trophy,
    Users,
    Wrench,
    Zap
} from "lucide-react";
import { ActionLink, SectionPill } from "@/components/ui/site-primitives";
import { cn } from "@/lib/utils";

function SectionBadge() {
    return <SectionPill>Para quem é a Together</SectionPill>;
}

function YellowButton({ href, children }: { href: string; children: ReactNode }) {
    return (
        <ActionLink
            href={href}
            size="sm"
            fullWidth
            className="justify-center tracking-[0.08em] sm:w-full sm:whitespace-normal sm:tracking-[0.08em] xl:w-fit xl:whitespace-nowrap xl:tracking-[0.16em]"
        >
            {children}
        </ActionLink>
    );
}

function DpoOpsFlow() {
    return (
        <div className="relative mx-auto flex h-full min-h-[330px] w-full max-w-[410px] flex-col items-center justify-center">
            <div className="absolute inset-0 rounded-[2rem] bg-neutral-50/80" />
            <div
                className="absolute inset-0 rounded-[2rem] opacity-[0.08]"
                style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "22px 22px" }}
            />

            <div className="relative z-10 rounded-2xl border border-neutral-200 bg-white px-6 py-5 shadow-xl shadow-neutral-200/70">
                <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-900 text-brand-400 shadow-lg">
                        <Users className="h-5 w-5" />
                    </div>
                    <div>
                        <p className="text-sm font-black uppercase leading-none text-neutral-900">DPO Interno</p>
                        <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-400">
                            Liderança
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative z-10 h-16 w-px bg-neutral-200">
                <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-brand-400 text-neutral-900 shadow-xl shadow-brand-400/30">
                    <Zap className="h-4 w-4 fill-current" />
                </div>
            </div>

            <div className="relative z-10 w-full max-w-[320px] rounded-2xl bg-[#0a0a0a] p-7 text-white shadow-2xl shadow-neutral-900/20">
                <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-brand-400">
                        <Shield className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                        <p className="text-sm font-black uppercase leading-none">Together Ops</p>
                        <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-brand-400">
                            Base operacional
                        </p>
                    </div>
                </div>
                <div className="mt-6 flex gap-3">
                    {[58, 72, 44, 84].map((width) => (
                        <div key={width} className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
                            <div className="h-full rounded-full bg-brand-400/70" style={{ width: `${width}%` }} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function DpoServiceFlow() {
    return (
        <div className="relative mx-auto mt-8 flex w-full max-w-[360px] flex-col items-center 2xl:max-w-none 2xl:flex-row 2xl:justify-center">
            <div className="absolute inset-x-6 top-8 bottom-8 rounded-[1.75rem] bg-neutral-50/80 2xl:inset-x-4 2xl:inset-y-6" />
            <div
                className="absolute inset-x-6 top-8 bottom-8 rounded-[1.75rem] opacity-[0.08] 2xl:inset-x-4 2xl:inset-y-6"
                style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "18px 18px" }}
            />

            <div className="relative z-10 w-full rounded-2xl border border-neutral-200 bg-white p-4 shadow-lg shadow-neutral-200/60 2xl:w-[145px] 2xl:p-3.5">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neutral-900 text-brand-400 2xl:h-9 2xl:w-9">
                        <Users className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                        <p className="text-xs font-black uppercase leading-tight text-neutral-900">Sua empresa</p>
                        <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.22em] text-neutral-400">Gestão</p>
                    </div>
                </div>
            </div>

            <div className="relative z-20 flex h-14 w-px items-center justify-center bg-neutral-200 2xl:h-px 2xl:w-10">
                <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-brand-400 text-neutral-900 shadow-xl shadow-brand-400/30">
                    <Zap className="h-4 w-4 fill-current" />
                </div>
            </div>

            <div className="relative z-10 w-full rounded-2xl border border-neutral-200 bg-white p-4 shadow-xl shadow-neutral-200/70 2xl:w-[185px] 2xl:p-3.5">
                <div className="mb-3 rounded-xl bg-neutral-900 px-4 py-3 text-white 2xl:px-3 2xl:py-2.5">
                    <p className="text-[10px] font-black uppercase leading-tight">DPO as a Service</p>
                    <p className="mt-1 text-[10px] font-black uppercase tracking-widest text-brand-400">Together</p>
                </div>
                <div className="grid gap-2 sm:grid-cols-2 2xl:grid-cols-1 2xl:gap-1.5">
                    {["Governança", "Documentação", "Treinamentos", "Relatórios"].map((item) => (
                        <div key={item} className="flex items-center gap-2 text-[9px] font-bold uppercase text-neutral-600">
                            <CircleCheck className="h-3.5 w-3.5 shrink-0 text-neutral-300" />
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function AuditTimeline() {
    const steps = [
        { label: "Diagnóstico", detail: "Mapeamento de riscos e gaps", icon: Search },
        { label: "Plano de ação", detail: "Prioridades e roadmap", icon: ClipboardList },
        { label: "Evidências", detail: "Controle e documentação", icon: CircleCheck },
        { label: "Prontidão", detail: "Auditoria e Due diligence", icon: Shield }
    ];

    return (
        <div className="mt-8 grid grid-cols-2 gap-5 xl:grid-cols-4 xl:gap-3">
            {steps.map(({ label, detail, icon: Icon }) => (
                <div key={label} className="relative text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-brand-400 shadow-lg">
                        <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-4 break-words text-[9px] font-black uppercase tracking-widest text-white">{label}</p>
                    <p className="mt-1 break-words text-xs leading-relaxed text-neutral-400">{detail}</p>
                </div>
            ))}
        </div>
    );
}

function LgpdStageGrid() {
    const steps = [
        { label: "Diagnóstico inicial", icon: Target, active: true },
        { label: "Plano de adequação", icon: Trophy },
        { label: "Implementação assistida", icon: Wrench },
        { label: "Operação e melhoria", icon: Shield }
    ];

    return (
        <div className="grid grid-cols-2 gap-2 sm:gap-3 2xl:gap-2">
            {steps.map(({ label, icon: Icon, active }, index) => (
                <div
                    key={label}
                    className={cn(
                        "rounded-2xl border bg-white p-3 shadow-sm shadow-neutral-200/50 sm:p-4 2xl:p-2.5",
                        active
                            ? "border-brand-400/50 bg-brand-400/[0.08]"
                            : "border-neutral-200"
                    )}
                >
                    <div className="flex items-center justify-between gap-3">
                        <span
                            className={cn(
                                "flex h-9 w-9 items-center justify-center rounded-full border text-sm font-bold sm:h-10 sm:w-10 2xl:h-7 2xl:w-7",
                                active
                                    ? "border-brand-400 bg-white text-brand-500 shadow-[0_0_0_8px_rgba(255,214,55,0.12)]"
                                    : "border-neutral-200 bg-neutral-50 text-neutral-300"
                            )}
                        >
                            <Icon className="h-4 w-4 2xl:h-3.5 2xl:w-3.5" />
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-[0.18em] text-neutral-300 2xl:text-[9px]">
                            0{index + 1}
                        </span>
                    </div>
                    <p className="mt-4 text-[11px] font-semibold leading-snug text-neutral-700 sm:mt-5 sm:text-[12px] 2xl:mt-2 2xl:text-[10px] 2xl:leading-tight">{label}</p>
                </div>
            ))}
        </div>
    );
}

export function SegmentationExperiment() {
    return (
        <section className="relative w-full overflow-hidden bg-white py-24 lg:py-32">
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "28px 28px" }}
            />

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="grid gap-8 xl:grid-cols-12 xl:items-stretch">
                    <div className="xl:col-span-6">
                        <SectionBadge />
                        <h2 className="mt-12 max-w-4xl break-words text-[2.75rem] font-bold leading-[0.96] tracking-tight text-neutral-900 sm:mt-14 sm:text-[3.25rem] lg:text-[clamp(3.25rem,3vw,3.5rem)] lg:leading-[0.92]">
                            Um modelo de privacidade
                            <span className="mt-2 block font-light italic text-brand-500">
                                para cada momento da sua empresa
                                <span className="text-brand-400">.</span>
                            </span>
                        </h2>
                        <p className="mt-10 max-w-2xl text-[18px] font-medium leading-relaxed text-neutral-500">
                            Da adequação inicial à operação contínua, a TOGETHER oferece estratégia, tecnologia e
                            especialistas para transformar privacidade em confiança, eficiência e vantagem competitiva.
                        </p>
                    </div>

                    <div className="xl:col-span-6">
                        <div className="flex min-h-[520px] rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-xl shadow-neutral-200/50 sm:p-8 md:p-12">
                            <div className="grid w-full gap-8 min-[960px]:grid-cols-[0.9fr_1.1fr] min-[960px]:items-stretch">
                                <div className="flex h-full flex-col">
                                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-brand-500">
                                        01 / DPO interno
                                    </p>
                                    <h3 className="mt-10 max-w-xs text-[2rem] font-bold leading-[1.05] tracking-tight text-neutral-900">
                                        Já tenho DPO interno
                                    </h3>
                                    <p className="mt-8 text-base font-medium leading-relaxed text-neutral-500">
                                        Apoiamos seu DPO com inteligência, processos e tecnologia para elevar sua operação
                                        de privacidade a outro nível.
                                    </p>
                                    <div className="mt-auto hidden pt-10 min-[960px]:block">
                                        <YellowButton href="/contato">Ver apoio operacional</YellowButton>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-6">
                                    <DpoOpsFlow />
                                    <div className="w-full min-[960px]:hidden">
                                        <YellowButton href="/contato">Ver apoio operacional</YellowButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 grid gap-8 min-[960px]:grid-cols-2 2xl:grid-cols-3">
                    <div className="flex min-h-[570px] flex-col rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-xl shadow-neutral-200/40 sm:p-8 md:p-10 2xl:h-[590px] 2xl:min-h-[590px]">
                        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-brand-500">
                            02 / DPO as a Service
                        </p>
                        <h3 className="mt-8 max-w-[225px] text-[1.9rem] font-bold leading-[1.05] tracking-tight text-neutral-900">
                            Ainda não tenho DPO
                        </h3>
                        <p className="mt-6 text-base font-medium leading-relaxed text-neutral-500">
                            Assumimos toda a operação de privacidade da sua empresa, desde a adequação à LGPD até o
                            atendimento contínuo das demandas do dia a dia.
                        </p>
                        <DpoServiceFlow />
                        <div className="mt-auto pt-6">
                            <YellowButton href="/servicos/dpo-as-a-service">Conhecer DPO as a Service</YellowButton>
                        </div>
                    </div>

                    <div className="relative flex min-h-[570px] flex-col overflow-hidden rounded-[2rem] bg-[#0a0a0a] p-6 text-white shadow-2xl shadow-neutral-900/25 sm:p-8 md:p-10 2xl:h-[590px] 2xl:min-h-[590px]">
                        <div className="pointer-events-none absolute -bottom-24 -right-16 text-[22rem] font-black leading-none text-white/[0.035]">
                            4
                        </div>
                        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-brand-400">
                            03 / Preparação para auditorias
                        </p>
                        <h3 className="mt-8 max-w-sm text-[1.9rem] font-bold leading-[1.05] tracking-tight">
                            Estou preparando a empresa para auditorias
                        </h3>
                        <p className="mt-6 max-w-[342px] text-base font-medium leading-relaxed text-neutral-400">
                            Fortalecemos sua governança e evidências para auditorias, due diligence e demandas de
                            clientes com confiança e agilidade.
                        </p>
                        <AuditTimeline />
                        <div className="mt-auto pt-6">
                            <YellowButton href="/contato">Preparar minha empresa</YellowButton>
                        </div>
                    </div>

                    <div className="flex min-h-[570px] flex-col rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-xl shadow-neutral-200/40 sm:p-8 md:p-10 min-[960px]:col-span-2 min-[960px]:min-h-[420px] 2xl:col-span-1 2xl:h-[590px] 2xl:min-h-[590px] 2xl:p-10">
                        <div className="flex h-full flex-col gap-8 min-[960px]:grid min-[960px]:grid-cols-[minmax(260px,0.78fr)_minmax(430px,1.22fr)] min-[960px]:items-center min-[960px]:gap-12 2xl:flex 2xl:flex-col 2xl:items-stretch 2xl:gap-0">
                            <div className="flex h-full flex-col min-[960px]:justify-center 2xl:h-auto 2xl:justify-start">
                                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-brand-500">
                                    04 / Adequação à LGPD
                                </p>
                                <h3 className="mt-8 max-w-[357px] text-[1.9rem] font-bold leading-[1.05] tracking-tight text-neutral-900">
                                    Ainda preciso me adequar à LGPD
                                </h3>
                                <p className="mt-6 max-w-[317px] text-base font-medium leading-relaxed text-neutral-500">
                                    Conduzimos sua adequação de ponta a ponta, com metodologia própria e foco em resultados
                                    sustentáveis.
                                </p>
                                <div className="mt-10 hidden min-[960px]:block 2xl:hidden">
                                    <YellowButton href="/servicos/consultoria-adequacao">Iniciar adequação</YellowButton>
                                </div>
                            </div>

                            <div className="rounded-[1.75rem] border border-neutral-100 bg-neutral-50/70 p-4 shadow-inner shadow-neutral-200/50 sm:p-5 min-[960px]:p-6 2xl:mt-8 2xl:p-3">
                                <LgpdStageGrid />
                            </div>

                            <div className="mt-auto pt-6 min-[960px]:hidden 2xl:block">
                                <YellowButton href="/servicos/consultoria-adequacao">Iniciar adequação</YellowButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
