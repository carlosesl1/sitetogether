"use client";

import Image from "next/image";
import Link from "next/link";
import type { FormEvent, ReactNode } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    CheckCircle2,
    FileCheck2,
    Mail,
    MapPin,
    Phone,
    ShieldCheck,
    Zap,
} from "lucide-react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";
import { SectionPill } from "@/components/ui/site-primitives";
import { submitContact } from "@/lib/contact";

const contactHighlights = [
    {
        icon: ShieldCheck,
        title: "Diagnóstico objetivo",
    },
    {
        icon: Zap,
        title: "Resposta rápida",
    },
    {
        icon: FileCheck2,
        title: "Próxima etapa clara",
    },
];

const channels = [
    { icon: Phone, label: "WhatsApp", value: "(11) 5178-3235" },
    { icon: Mail, label: "E-mail", value: "contato@togetherprivacy.com" },
    { icon: MapPin, label: "Base", value: "São Paulo, Brasil" },
];

const clientLogos = [
    {
        name: "Axia Energia",
        src: "/logos/partners/pinheiro-guimaraes.svg",
        width: 595,
        height: 57,
        className: "h-5 w-[220px] md:h-6 md:w-[260px]",
    },
    {
        name: "Mercado Bitcoin",
        src: "/logos/partners/camara-comercio-arabe-brasileira.svg",
        width: 409,
        height: 142,
        className: "h-14 w-[180px] md:h-16 md:w-[220px]",
    },
    {
        name: "Tarea",
        src: "/logos/partners/governo-rio-de-janeiro.svg",
        width: 283,
        height: 82,
        className: "h-9 w-[170px] md:h-10 md:w-[210px]",
    },
    {
        name: "Eletrobras",
        src: "/logos/partners/eletrobras.svg",
        width: 538,
        height: 150,
        className: "h-10 w-[170px] md:h-12 md:w-[220px]",
    },
    {
        name: "Unimed",
        src: "/logos/partners/unimed.svg",
        width: 406,
        height: 150,
        className: "h-10 w-[150px] md:h-12 md:w-[200px]",
    },
    {
        name: "Bom Consorcio",
        src: "/logos/partners/bomconsorcio.png",
        width: 622,
        height: 137,
        className: "h-8 w-[170px] md:h-10 md:w-[220px]",
    },
    {
        name: "Inhire",
        src: "/logos/partners/idel.svg",
        width: 416,
        height: 94,
        className: "h-8 w-[130px] md:h-9 md:w-[170px]",
    },
    {
        name: "Ideal",
        src: "/logos/partners/ideal.png",
        width: 307,
        height: 88,
        className: "h-10 w-[140px] md:h-12 md:w-[180px]",
    },
];

function ClientLogoStrip({ className = "" }: { className?: string }) {
    return (
        <div className={`relative w-full max-w-full overflow-hidden py-2 ${className}`}>
            <style>{`
                @keyframes contact-logo-marquee {
                    from { transform: translate3d(0, 0, 0); }
                    to { transform: translate3d(-50%, 0, 0); }
                }

                .contact-logo-fade {
                    -webkit-mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
                    mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
                }

                @media (prefers-reduced-motion: reduce) {
                    .contact-logo-marquee {
                        animation: none !important;
                        transform: none !important;
                    }
                }
            `}</style>
            <p className="mb-3 text-[10px] font-black uppercase tracking-[0.22em] text-neutral-400">
                Empresas que confiam:
            </p>
            <div className="contact-logo-fade relative overflow-hidden">
                <div
                    className="contact-logo-marquee flex w-max items-center"
                    style={{ animation: "contact-logo-marquee 34s linear infinite" }}
                >
                    {[0, 1].map((groupIndex) => (
                        <div
                            key={groupIndex}
                            aria-hidden={groupIndex === 1}
                            className="flex shrink-0 items-center gap-8 pr-8"
                        >
                            {clientLogos.map((logo) => (
                                <div key={`${logo.name}-${groupIndex}`} className="flex h-12 w-[132px] shrink-0 items-center justify-center sm:w-[145px] xl:h-14 xl:w-[150px]">
                                    <Image
                                        src={logo.src}
                                        alt={groupIndex === 0 ? logo.name : ""}
                                        width={logo.width}
                                        height={logo.height}
                                        sizes="(min-width: 1280px) 150px, (min-width: 640px) 145px, 132px"
                                        className="h-8 w-full object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 xl:h-9"
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function ContactPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitError(null);
        setIsSubmitting(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            await submitContact({
                firstName: String(formData.get("firstName") || "").trim(),
                lastName: String(formData.get("lastName") || "").trim(),
                email: String(formData.get("email") || "").trim(),
                company: String(formData.get("company") || "").trim(),
                phone: String(formData.get("phone") || "").trim(),
                message: String(formData.get("message") || "").trim(),
                website: String(formData.get("website") || "").trim(),
                pageUrl: window.location.href,
                source: "Formulario de contato",
            });

            form.reset();
            setIsSubmitted(true);
        } catch (error) {
            setSubmitError(
                error instanceof Error
                    ? error.message
                    : "Não foi possível enviar sua solicitação. Tente novamente.",
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen overflow-x-hidden bg-white selection:bg-brand-400/30">
            <Navbar />

            <section className="relative overflow-hidden bg-white pt-20 pb-24 md:pt-20 md:pb-24 xl:pt-8 xl:pb-16">
                <PixelDecor placement="topRight" mask="topRight" opacity={0.18} />
                <PixelDecor placement="bottomLeft" mask="bottomLeft" opacity={0.12} />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(245,192,0,0.14),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(0,0,0,0.035),transparent_24%)]" />
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage: "radial-gradient(circle at 1px 1px, #121212 1px, transparent 0)",
                        backgroundSize: "28px 28px",
                    }}
                />

                <div className="container relative z-10 mx-auto px-6">
                    <div className="grid w-full gap-y-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start lg:gap-x-12 xl:gap-y-4 xl:gap-x-16">
                        <div className="flex min-w-0 flex-col lg:col-start-1 lg:row-start-1">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="mb-8 xl:mb-6"
                            >
                                <SectionPill>Contato estratégico</SectionPill>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 18 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                                className="max-w-3xl text-[3.1rem] font-bold leading-[1.02] tracking-tight text-neutral-900 sm:text-6xl xl:text-[3.65rem]"
                            >
                                Vamos estruturar sua próxima etapa de{" "}
                                <span className="font-light italic text-brand-500">privacidade.</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 18 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.08, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                                className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-neutral-500 sm:text-xl xl:mt-6 xl:text-lg"
                            >
                                Conte onde sua empresa está hoje. A TOGETHER ajuda a organizar riscos, processos,
                                tecnologia e rotina de DPO com previsibilidade.
                            </motion.p>

                            <div className="mt-10 flex max-w-md flex-col gap-4 xl:mt-9">
                                {contactHighlights.map((item, index) => (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, x: -12 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.12 + index * 0.08, duration: 0.5 }}
                                        className="group flex items-center gap-4 border-b border-neutral-200/70 pb-4 last:border-b-0"
                                    >
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-400 text-neutral-950 shadow-lg shadow-brand-400/25 transition-transform group-hover:scale-105">
                                            <item.icon className="h-5 w-5" />
                                        </div>
                                        <div className="min-w-0">
                                            <h2 className="text-base font-bold tracking-tight text-neutral-900">{item.title}</h2>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <ClientLogoStrip className="mt-8 max-w-2xl xl:mt-8" />

                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.12, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                            className="relative w-full min-w-0 lg:max-w-[550px] lg:justify-self-end"
                        >
                            <div className="absolute -inset-4 rounded-[3rem] bg-brand-400/10 blur-3xl" />
                            <div className="relative overflow-hidden rounded-[2rem] border border-neutral-200/80 bg-white p-6 shadow-[0_32px_80px_rgba(15,23,42,0.10)] sm:p-8 md:p-10 xl:min-h-[700px] xl:p-7">
                                {isSubmitted ? (
                                    <div className="flex min-h-[560px] flex-col items-center justify-center text-center">
                                        <div className="mb-10 flex h-24 w-24 items-center justify-center rounded-full bg-brand-400/20">
                                            <CheckCircle2 className="h-12 w-12 text-brand-600" />
                                        </div>
                                        <h2 className="text-4xl font-bold tracking-tight text-neutral-900">Dados recebidos!</h2>
                                        <p className="mt-4 max-w-sm text-lg font-medium text-neutral-500">
                                            Um especialista entrará em contato em breve no seu e-mail corporativo.
                                        </p>
                                        <Button
                                            onClick={() => setIsSubmitted(false)}
                                            variant="outline"
                                            className="mt-12 h-14 rounded-2xl border-neutral-200 px-8 font-bold"
                                        >
                                            Enviar outra mensagem
                                        </Button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="relative z-10 space-y-7 xl:space-y-5">
                                        <div className="hidden" aria-hidden="true">
                                            <label>
                                                Website
                                                <Input name="website" tabIndex={-1} autoComplete="off" />
                                            </label>
                                        </div>

                                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:gap-4">
                                            <FormField label="Nome" required>
                                                <Input name="firstName" required placeholder="Ex: Carlos" className="bg-neutral-50/70 xl:h-12" />
                                            </FormField>
                                            <FormField label="Sobrenome" required>
                                                <Input name="lastName" required placeholder="Ex: Santos" className="bg-neutral-50/70 xl:h-12" />
                                            </FormField>
                                        </div>

                                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:gap-4">
                                            <FormField label="E-mail de trabalho" required>
                                                <Input name="email" type="email" required placeholder="carlos@empresa.com.br" className="bg-neutral-50/70 xl:h-12" />
                                            </FormField>
                                            <FormField label="Empresa" required>
                                                <Input name="company" required placeholder="Nome da empresa" className="bg-neutral-50/70 xl:h-12" />
                                            </FormField>
                                        </div>

                                        <FormField label="Telefone">
                                            <Input name="phone" type="tel" placeholder="(00) 00000-0000" className="bg-neutral-50/70 xl:h-12" />
                                        </FormField>

                                        <FormField label="Como podemos ajudar?">
                                            <Textarea
                                                name="message"
                                                placeholder="Descreva brevemente sua necessidade, prazo ou desafio de privacidade..."
                                                className="min-h-[150px] bg-neutral-50/70 xl:min-h-[220px]"
                                            />
                                        </FormField>

                                        <div className="pt-4 xl:pt-2">
                                            <Button
                                                size="lg"
                                                disabled={isSubmitting}
                                                className="group h-auto min-h-16 w-full rounded-2xl px-6 py-5 text-sm font-bold shadow-2xl shadow-brand-400/30 xl:min-h-[52px] xl:py-3.5"
                                            >
                                                {isSubmitting ? "Enviando..." : "Agendar uma conversa"}
                                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                                            </Button>
                                            {submitError && (
                                                <p className="mt-4 text-center text-xs font-bold text-red-500">
                                                    {submitError}
                                                </p>
                                            )}
                                            <p className="mt-6 text-center text-[10px] font-medium leading-relaxed text-neutral-400 xl:mt-2">
                                                Ao enviar, você concorda com nosso{" "}
                                                <Link
                                                    href="https://demo.privacytools.com.br/policy-view/dq0owoEXY/1/poli%CC%81tica-de-privacidade-together-privacy-and-tech/pt_BR?s=1718983084115"
                                                    className="underline underline-offset-4 transition-colors hover:text-neutral-900"
                                                >
                                                    Aviso de Privacidade
                                                </Link>
                                                . Seus dados estão protegidos.
                                            </p>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-neutral-950 py-20 text-white">
                <div className="container relative z-10 mx-auto px-6">
                    <div className="grid w-full gap-6 md:grid-cols-3">
                        {channels.map((channel) => (
                            <div
                                key={channel.label}
                                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition-all hover:border-brand-400/40 hover:bg-white/[0.06]"
                            >
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-400 text-neutral-950">
                                    <channel.icon className="h-5 w-5" />
                                </div>
                                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-neutral-500">{channel.label}</p>
                                <p className="mt-2 break-words text-lg font-bold text-white">{channel.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function FormField({
    label,
    required,
    children,
}: {
    label: string;
    required?: boolean;
    children: ReactNode;
}) {
    return (
        <div className="space-y-3 xl:space-y-2">
            <label className="ml-1 text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500">
                {label} {required ? <span className="text-red-500">*</span> : null}
            </label>
            {children}
        </div>
    );
}
