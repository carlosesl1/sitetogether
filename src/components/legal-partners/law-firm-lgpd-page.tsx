"use client";

import Image from "next/image";
import { motion, MotionConfig } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { CoDeliveryMap } from "@/components/legal-partners/co-delivery-map";
import { lawFirmLgpdContent } from "@/components/legal-partners/law-firm-lgpd-content";
import { PartnerCapacitySection } from "@/components/legal-partners/partner-capacity-section";
import { PartnerFaqSection } from "@/components/legal-partners/partner-faq-section";
import { PartnerPortfolioOffer } from "@/components/legal-partners/partner-portfolio-offer";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";
import { AuthorityStrip } from "@/components/ui/authority-strip";
import { EcaDigitalAnnouncement } from "@/components/ui/eca-digital-announcement";
import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";
import { ActionLink, SectionPill } from "@/components/ui/site-primitives";

const fadeUp = {
  initial: false,
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
} as const;

type SectionHeadingProps = {
  pill: string;
  pillShort?: string;
  title: string;
  accent?: string;
  text?: string | readonly string[];
  tone?: "light" | "dark";
  centered?: boolean;
};

function SectionHeading({
  pill,
  pillShort,
  title,
  accent,
  text,
  tone = "light",
  centered = false,
}: SectionHeadingProps) {
  const dark = tone === "dark";

  return (
    <div className={centered ? "mx-auto min-w-0 max-w-4xl text-center" : "min-w-0 max-w-4xl"}>
      <motion.div {...fadeUp} className="mb-8">
        <SectionPill tone={dark ? "dark" : "light"}>
          {pillShort ? (
            <>
              <span className="sm:hidden">{pillShort}</span>
              <span className="hidden sm:inline">{pill}</span>
            </>
          ) : (
            pill
          )}
        </SectionPill>
      </motion.div>
      <motion.h2
        {...fadeUp}
        className={`break-words text-[clamp(2.15rem,10vw,2.55rem)] font-bold leading-[1.02] tracking-tight sm:text-5xl lg:text-[3.35rem] xl:text-6xl ${dark ? "text-white" : "text-neutral-900"}`}
      >
        {title}
        {accent ? (
          <>
            {" "}
            <span className="font-light italic text-brand-500">{accent}</span>
          </>
        ) : null}
      </motion.h2>
      {text ? (
        <motion.div
          {...fadeUp}
          className={`mt-7 max-w-2xl space-y-4 text-base font-medium leading-relaxed md:text-lg ${centered ? "mx-auto" : ""} ${dark ? "text-neutral-400" : "text-neutral-500"}`}
        >
          {(Array.isArray(text) ? text : [text]).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </motion.div>
      ) : null}
    </div>
  );
}

const partnershipContacts = [
  {
    label: "WhatsApp",
    value: "(11) 5178-3235",
    href: "https://wa.me/551151783235",
    icon: Phone,
  },
  {
    label: "WhatsApp",
    value: "(11) 92642-0123",
    href: "https://wa.me/5511926420123",
    icon: Phone,
  },
  {
    label: "E-mail",
    value: "contato@togetherprivacy.com",
    href: "mailto:contato@togetherprivacy.com",
    icon: Mail,
  },
  {
    label: "Endereço",
    value: "Berrini, 1681 — São Paulo",
    href: "https://maps.google.com/?q=Berrini%201681%20S%C3%A3o%20Paulo",
    icon: MapPin,
  },
] as const;

export function LawFirmLgpdPage() {
  const content = lawFirmLgpdContent;
  const [primaryScenario, ...secondaryScenarios] = content.scenarios;
  const PrimaryScenarioIcon = primaryScenario.icon;

  return (
    <MotionConfig reducedMotion="user">
      <EcaDigitalAnnouncement />
      <Navbar showCtaArrow />

      <main className="min-h-screen overflow-x-hidden bg-white selection:bg-brand-400/30">
        <section className="relative isolate flex min-h-[760px] items-center overflow-hidden bg-white pb-24 pt-16 sm:min-h-[800px] sm:pt-24 md:pb-28 xl:min-h-[840px]">
          <div className="absolute inset-0 -z-20">
            <Image
              src={content.hero.image.src}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-[45%_center] sm:object-[72%_center] lg:object-right"
            />
          </div>
          <div className="absolute inset-0 -z-10 bg-white/55 sm:bg-white/35" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/95 to-white/35 sm:via-white/90 sm:to-white/15 lg:via-white/80 lg:to-transparent" />
          <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-white to-transparent" />
          <PixelDecor placement="topRight" mask="topRight" opacity={0.12} />

          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="min-w-0 max-w-3xl">
              <motion.div {...fadeUp} className="mb-5 sm:mb-8">
                <SectionPill>
                  <span className="sm:hidden">{content.hero.pillShort}</span>
                  <span className="hidden sm:inline">{content.hero.pill}</span>
                </SectionPill>
              </motion.div>

              <motion.h1
                {...fadeUp}
                className="max-w-4xl break-words text-[clamp(2.15rem,10vw,2.55rem)] font-bold leading-[0.98] tracking-tight text-neutral-900 sm:text-[3.5rem]"
              >
                {content.hero.title}{" "}
                <span className="font-light italic text-brand-500">
                  {content.hero.accent}
                </span>
              </motion.h1>

              <motion.div
                {...fadeUp}
                className="mt-7 max-w-2xl space-y-4 text-base font-medium leading-relaxed text-neutral-600 sm:text-lg md:text-xl"
              >
                {content.hero.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </motion.div>

              <motion.div
                {...fadeUp}
                className="mt-6 grid max-w-2xl gap-3 sm:grid-cols-2 sm:gap-4"
              >
                <ActionLink
                  href={content.hero.primary.href}
                  size="xl"
                  className="min-h-14 w-full min-w-0 sm:min-h-16 sm:whitespace-normal"
                >
                  {content.hero.primary.label}
                </ActionLink>
                <ActionLink
                  href={content.hero.secondary.href}
                  variant="dark"
                  size="xl"
                  className="min-h-14 w-full min-w-0 sm:min-h-16 sm:whitespace-normal"
                >
                  {content.hero.secondary.label}
                </ActionLink>
              </motion.div>
            </div>
          </div>
        </section>

        <AuthorityStrip title="Empresas que já confiaram na execução da TOGETHER." />

        <PartnerPortfolioOffer content={content.portfolioOffer} />

        <section className="relative overflow-hidden border-t border-neutral-100 bg-neutral-50 py-24 md:py-36">
          <PixelDecor placement="left" mask="left" opacity={0.08} />
          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <SectionHeading
              pill={content.scenariosIntro.pill}
              title={content.scenariosIntro.title}
              text={content.scenariosIntro.text}
            />

            <div className="mt-14 grid gap-4 lg:grid-cols-[1.12fr_0.88fr] lg:grid-rows-3">
              <motion.article
                {...fadeUp}
                className="relative overflow-hidden rounded-[2rem] bg-brand-400 p-8 text-neutral-950 lg:row-span-3 lg:p-10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-950 text-brand-400">
                  <PrimaryScenarioIcon aria-hidden="true" className="h-6 w-6" />
                </div>
                <p className="mt-10 text-[10px] font-black uppercase tracking-[0.22em] text-neutral-700">
                  {primaryScenario.label}
                </p>
                <h3 className="mt-5 max-w-lg text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                  {primaryScenario.title}
                </h3>
                <p className="mt-8 text-xl font-bold">{primaryScenario.outcome}</p>
                <p className="mt-4 max-w-xl text-base font-medium leading-relaxed text-neutral-800 md:text-lg">
                  {primaryScenario.text}
                </p>
                <div className="relative z-10 mt-9">
                  <ActionLink
                    href="/contato"
                    variant="dark"
                    size="md"
                    className="w-full min-w-0 sm:w-auto"
                  >
                    Avaliar uma oportunidade
                  </ActionLink>
                </div>
                <span className="pointer-events-none absolute -bottom-10 -right-5 text-[13rem] font-black leading-none text-neutral-950/[0.05]">
                  01
                </span>
              </motion.article>

              {secondaryScenarios.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    key={item.title}
                    {...fadeUp}
                    transition={{ ...fadeUp.transition, delay: index * 0.05 }}
                    className="grid gap-5 rounded-[2rem] border border-neutral-200 bg-white p-6 sm:grid-cols-[auto_1fr] sm:items-start md:p-7"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-950 text-brand-400">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.22em] text-brand-600">
                        {item.label}
                      </p>
                      <h3 className="mt-3 text-2xl font-bold text-neutral-900">
                        {item.title}
                      </h3>
                      <p className="mt-4 font-bold text-neutral-800">{item.outcome}</p>
                      <p className="mt-2 text-sm font-medium leading-relaxed text-neutral-500">
                        {item.text}
                      </p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <PartnerCapacitySection content={content.capacity} />

        <section
          id="coentrega"
          className="relative overflow-hidden bg-white py-24 md:py-36"
        >
          <PixelDecor placement="topRight" mask="topRight" opacity={0.1} />
          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <SectionHeading
              pill="Papéis definidos"
              title="O jurídico fica com o escritório."
              accent="A implementação, com a TOGETHER."
              text="Antes de começar, definimos responsabilidades, interlocutores, entregáveis e aprovações."
            />
            <div className="mt-14">
              <CoDeliveryMap roles={content.roles} />
            </div>
          </div>
        </section>

        <section className="border-y border-neutral-100 bg-neutral-50 py-24 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading
              pill="Capacidade sob demanda"
              pillShort="Modelos de parceria"
              title="Comece"
              accent="no formato certo."
              text="A parceria pode atender uma oportunidade pontual ou acompanhar o escritório continuamente."
            />

            <div className="mt-14 grid gap-4 rounded-[2rem] border border-neutral-200 bg-neutral-100/70 p-4 shadow-xl shadow-neutral-200/40 md:grid-cols-2 lg:grid-cols-3">
              {content.partnerModels.map((model, index) => {
                const Icon = model.icon;
                return (
                  <motion.article
                    key={model.label}
                    {...fadeUp}
                    transition={{ ...fadeUp.transition, delay: index * 0.06 }}
                    className={`group min-w-0 rounded-[1.5rem] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-200/60 ${index === 2 ? "md:col-span-2 lg:col-span-1" : ""}`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-950 text-brand-400">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </div>
                    <p className="mt-8 text-[10px] font-black uppercase tracking-[0.22em] text-neutral-400">
                      {model.label}
                    </p>
                    <h3 className="mt-3 text-2xl font-bold tracking-tight text-neutral-900">
                      {model.title}
                    </h3>
                    <p className="mt-4 leading-relaxed text-neutral-500">
                      {model.text}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-white py-24 md:py-36">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading
              pill="Da oportunidade ao projeto"
              title="Uma oportunidade."
              accent="Três passos para começar."
              text="Alinhamos o contexto, o escopo e a participação de cada equipe antes da execução."
            />

            <div className="mt-12 flex items-center gap-4">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-400" />
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-neutral-500">
                Fluxo da parceria
              </p>
              <span className="h-px flex-1 bg-neutral-100" />
            </div>

            <ol
              aria-label="Fluxo da parceria"
              className="relative mt-8 grid gap-10 lg:grid-cols-3 lg:gap-8"
            >
              {content.process.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.li
                    key={item.label}
                    {...fadeUp}
                    transition={{ ...fadeUp.transition, delay: index * 0.08 }}
                    className="relative rounded-[2rem] border border-neutral-100 bg-white p-7 lg:border-transparent"
                  >
                    <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-[1.6rem] border border-neutral-100 bg-white text-neutral-500 shadow-xl shadow-neutral-900/5">
                      <Icon aria-hidden="true" className="h-6 w-6" />
                    </div>
                    <p className="mt-8 text-[10px] font-black uppercase tracking-[0.22em] text-brand-600">
                      {item.label}
                    </p>
                    <h3 className="mt-4 text-2xl font-bold text-neutral-900">
                      {item.title}
                    </h3>
                    <p className="mt-5 text-sm font-medium leading-relaxed text-neutral-500">
                      {item.text}
                    </p>
                    {index < content.process.length - 1 ? (
                      <span className="absolute -bottom-9 left-1/2 z-20 flex h-8 w-8 -translate-x-1/2 rotate-90 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-400 shadow-sm lg:-right-8 lg:bottom-auto lg:left-auto lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 lg:rotate-0">
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    ) : null}
                  </motion.li>
                );
              })}
            </ol>

            <motion.aside
              {...fadeUp}
              className="mt-12 grid gap-4 rounded-3xl border border-brand-500/30 bg-brand-400/15 p-7 sm:grid-cols-[auto_1fr] sm:items-center md:p-9"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-400 text-neutral-950">
                <ShieldCheck className="h-7 w-7" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl font-bold text-neutral-900">
                  {content.confidentiality.title}
                </h3>
                <p className="mt-2 max-w-3xl leading-relaxed text-neutral-600">
                  {content.confidentiality.text}
                </p>
              </div>
            </motion.aside>
          </div>
        </section>

        <PartnerFaqSection faqs={content.faqs} />

        <section className="relative overflow-hidden bg-brand-400 pb-20 pt-24 text-neutral-950 md:pb-24 md:pt-36">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-white opacity-20 blur-[120px]" />

          <div className="container relative z-10 mx-auto w-full px-4 sm:px-6">
            <div className="flex w-full min-w-0 flex-col items-stretch gap-14 lg:grid lg:grid-cols-12 lg:items-center lg:gap-20">
              <motion.div
                {...fadeUp}
                className="w-full min-w-0 max-w-full space-y-9 text-left lg:col-span-7"
              >
                <SectionPill tone="brand">{content.finalCta.pill}</SectionPill>
                <div>
                  <h2 className="w-full max-w-full break-words [overflow-wrap:anywhere] text-[clamp(2.15rem,10vw,2.55rem)] font-bold leading-[0.96] tracking-tight sm:text-5xl lg:text-6xl xl:text-[4.75rem]">
                    {content.finalCta.title}
                  </h2>
                  <p className="mt-7 w-full max-w-2xl break-words [overflow-wrap:anywhere] text-base font-medium leading-relaxed text-neutral-800 md:text-lg">
                    {content.finalCta.text}
                  </p>
                </div>

                <div className="flex w-full min-w-0 flex-col items-stretch gap-6 sm:flex-row sm:items-center sm:gap-8">
                  <ActionLink
                    href={content.finalCta.primary.href}
                    variant="dark"
                    size="xl"
                    className="w-full min-w-0 max-w-full sm:w-auto"
                  >
                    {content.finalCta.primary.label}
                  </ActionLink>
                  <div className="flex w-full min-w-0 max-w-full flex-col sm:w-auto sm:flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-600">
                      Próximo passo
                    </span>
                    <span className="mt-1 break-words [overflow-wrap:anywhere] text-lg font-bold text-neutral-900">
                      {content.finalCta.nextStep}
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div {...fadeUp} className="w-full min-w-0 max-w-full lg:col-span-5">
                <div className="w-full min-w-0 max-w-full space-y-8 rounded-[2.25rem] border border-black/5 bg-white p-5 shadow-[0_40px_80px_rgba(0,0,0,0.06)] sm:p-8 md:rounded-[3rem] md:p-10">
                  <div className="w-full min-w-0 max-w-full space-y-3">
                    <h3 className="text-3xl font-bold tracking-tight text-neutral-900">
                      Contato
                    </h3>
                    <p className="text-sm font-medium text-neutral-500">
                      Fale diretamente com nosso time.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {partnershipContacts.map((item) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={item.href}
                          href={item.href}
                          className="group flex min-h-20 w-full min-w-0 max-w-full items-center justify-between gap-3 rounded-3xl border border-neutral-100 bg-neutral-50/50 p-4 transition-all hover:border-brand-400/30 hover:bg-white hover:shadow-xl hover:shadow-brand-400/10 sm:gap-4 sm:p-5"
                        >
                          <span className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-400 text-neutral-900 transition-transform group-hover:scale-105">
                              <Icon aria-hidden="true" className="h-5 w-5" />
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="block text-[9px] font-bold uppercase tracking-widest text-neutral-400">
                                {item.label}
                              </span>
                              <span className="mt-1 block max-w-full break-words [overflow-wrap:anywhere] text-sm font-bold leading-tight text-neutral-900 sm:text-base">
                                {item.value}
                              </span>
                            </span>
                          </span>
                          <ArrowUpRight
                            aria-hidden="true"
                            className="hidden h-4 w-4 shrink-0 text-neutral-300 transition-colors group-hover:text-brand-500 sm:block"
                          />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-black/5 pt-10 opacity-45 sm:flex-row sm:items-center">
              <span className="text-[9px] font-bold uppercase tracking-[0.24em] sm:tracking-[0.45em]">
                Confidencialidade desde o primeiro contato
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.24em] sm:tracking-[0.45em]">
                TOGETHER // Parcerias LGPD
              </span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </MotionConfig>
  );
}
