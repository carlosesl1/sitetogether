"use client";

import { motion } from "framer-motion";
import { LockKeyhole } from "lucide-react";
import { CoDeliveryMap } from "@/components/legal-partners/co-delivery-map";
import { lawFirmLgpdContent } from "@/components/legal-partners/law-firm-lgpd-content";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";
import { ActionLink, SectionPill } from "@/components/ui/site-primitives";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
} as const;

type SectionHeadingProps = {
  pill: string;
  title: string;
  accent: string;
  text: string;
  tone?: "light" | "dark";
  centered?: boolean;
};

function SectionHeading({
  pill,
  title,
  accent,
  text,
  tone = "light",
  centered = false,
}: SectionHeadingProps) {
  const dark = tone === "dark";

  return (
    <div className={centered ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>
      <motion.div {...fadeUp} className="mb-8">
        <SectionPill tone={dark ? "dark" : "light"}>{pill}</SectionPill>
      </motion.div>
      <motion.h2
        {...fadeUp}
        className={`text-[2.55rem] font-bold leading-[1.02] tracking-normal sm:text-5xl md:text-6xl ${
          dark ? "text-white" : "text-neutral-900"
        }`}
      >
        {title}{" "}
        <span className="font-light italic text-brand-500">{accent}</span>
      </motion.h2>
      <motion.p
        {...fadeUp}
        className={`mt-7 max-w-2xl text-base font-medium leading-relaxed md:text-lg ${
          centered ? "mx-auto" : ""
        } ${dark ? "text-neutral-400" : "text-neutral-500"}`}
      >
        {text}
      </motion.p>
    </div>
  );
}

export function LawFirmLgpdPage() {
  const content = lawFirmLgpdContent;

  return (
    <>
      <Navbar showCtaArrow />
      <main className="min-h-screen overflow-x-hidden bg-white selection:bg-brand-400/30">
        <section className="relative overflow-hidden bg-white pb-24 pt-20 md:pb-32 md:pt-28">
          <PixelDecor placement="topRight" mask="topRight" opacity={0.2} />
          <PixelDecor placement="bottomLeft" mask="bottomLeft" opacity={0.1} />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(245,192,0,0.14),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(0,0,0,0.035),transparent_24%)]" />
          <div className="container relative z-10 mx-auto grid gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.86fr)] lg:items-center xl:gap-16">
            <div className="min-w-0">
              <motion.div {...fadeUp} className="mb-8">
                <SectionPill>{content.hero.pill}</SectionPill>
              </motion.div>
              <motion.h1
                {...fadeUp}
                className="max-w-4xl text-[2.75rem] font-bold leading-[0.98] tracking-normal text-neutral-900 sm:text-6xl xl:text-[4rem]"
              >
                {content.hero.title}{" "}
                <span className="font-light italic text-brand-500">
                  {content.hero.accent}
                </span>
              </motion.h1>
              <motion.p
                {...fadeUp}
                className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-neutral-500 sm:text-xl"
              >
                {content.hero.text}
              </motion.p>
              <motion.div
                {...fadeUp}
                className="mt-10 flex flex-col gap-4 sm:flex-row"
              >
                <ActionLink href={content.hero.primary.href} size="xl">
                  {content.hero.primary.label}
                </ActionLink>
                <ActionLink
                  href={content.hero.secondary.href}
                  variant="dark"
                  size="xl"
                >
                  {content.hero.secondary.label}
                </ActionLink>
              </motion.div>
            </div>
            <CoDeliveryMap
              officeItems={content.roles.office.items}
              togetherItems={content.roles.together.items}
            />
          </div>
        </section>

        <section className="relative overflow-hidden border-t border-neutral-100 bg-white py-24 md:py-36">
          <div className="container relative z-10 mx-auto px-6">
            <SectionHeading
              pill="Quando a demanda chega"
              title="A questão jurídica pode exigir"
              accent="uma operação inteira."
              text="Algumas demandas começam na interpretação da lei e avançam para processos, controles, tecnologia e evidências que precisam funcionar na prática."
            />
            <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-neutral-200 bg-neutral-200 md:grid-cols-2 xl:grid-cols-4">
              {content.scenarios.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    key={item.title}
                    {...fadeUp}
                    transition={{ ...fadeUp.transition, delay: index * 0.05 }}
                    className="bg-white p-7 transition-colors hover:bg-neutral-50"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-950 text-brand-400">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </div>
                    <p className="mt-8 text-[10px] font-black uppercase tracking-[0.22em] text-brand-600">
                      {String(index + 1).padStart(2, "0")} / Demanda
                    </p>
                    <h3 className="mt-4 text-xl font-bold text-neutral-900">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm font-medium leading-relaxed text-neutral-500">
                      {item.text}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="coentrega"
          className="relative overflow-hidden bg-[#0a0a0a] py-24 text-white md:py-40"
        >
          <PixelDecor placement="topRight" mask="topRight" opacity={0.14} />
          <div className="container relative z-10 mx-auto px-6">
            <SectionHeading
              pill="Papéis claros"
              title="Duas competências."
              accent="Uma entrega coordenada."
              text="O escritório preserva a liderança jurídica. A TOGETHER assume a frente técnica e operacional acordada para transformar decisões em execução."
              tone="dark"
            />
            <div className="mt-16 grid gap-6 lg:grid-cols-2">
              {[content.roles.office, content.roles.together].map((role, index) => (
                <motion.article
                  key={role.label}
                  {...fadeUp}
                  className={
                    index === 0
                      ? "rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 md:p-10"
                      : "rounded-[2rem] bg-brand-400 p-7 text-neutral-950 md:p-10"
                  }
                >
                  <p
                    className={`text-[10px] font-black uppercase tracking-[0.22em] ${
                      index === 0 ? "text-brand-400" : "text-neutral-700"
                    }`}
                  >
                    {role.label}
                  </p>
                  <h3 className="mt-5 text-3xl font-bold leading-tight">{role.title}</h3>
                  <ul className="mt-8 space-y-4">
                    {role.items.map((item) => (
                      <li
                        key={item}
                        className={`border-b pb-4 text-sm font-medium ${
                          index === 0
                            ? "border-white/10 text-neutral-300"
                            : "border-black/10 text-neutral-800"
                        }`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-white py-24 md:py-36">
          <PixelDecor placement="left" mask="left" opacity={0.08} />
          <div className="container relative z-10 mx-auto px-6">
            <SectionHeading
              pill="Capacidade especializada"
              title="Apoio técnico e operacional"
              accent="para a demanda real."
              text="O escopo é definido conforme o projeto, sem duplicar o papel jurídico do escritório."
              centered
            />
            <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {content.capabilities.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    key={item.title}
                    {...fadeUp}
                    transition={{ ...fadeUp.transition, delay: index * 0.04 }}
                    className="rounded-[2rem] border border-neutral-100 bg-white p-7 shadow-sm shadow-neutral-200/60 transition-all hover:border-brand-400/40 hover:shadow-2xl hover:shadow-brand-400/10"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-950 text-brand-400">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </div>
                    <h3 className="mt-7 text-xl font-bold text-neutral-900">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm font-medium leading-relaxed text-neutral-500">
                      {item.text}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-neutral-100 bg-neutral-50 py-24 md:py-32">
          <div className="container mx-auto px-6">
            <SectionHeading
              pill="Para escritórios de diferentes portes"
              title="Capacidade adequada"
              accent="ao tamanho da demanda."
              text="Do primeiro projeto de LGPD ao reforço de uma área de privacidade já estruturada."
              centered
            />
            <div className="mt-14 grid gap-5 lg:grid-cols-2">
              {content.audiences.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    key={item.label}
                    {...fadeUp}
                    className="rounded-[2rem] border border-neutral-100 bg-white p-7 md:p-10"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-400 text-neutral-950">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </div>
                    <p className="mt-7 text-[10px] font-black uppercase tracking-[0.22em] text-brand-600">
                      {item.label}
                    </p>
                    <h3 className="mt-4 text-2xl font-bold text-neutral-900">
                      {item.title}
                    </h3>
                    <p className="mt-5 text-sm font-medium leading-relaxed text-neutral-500">
                      {item.text}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-white py-24 md:py-36">
          <div className="container mx-auto px-6">
            <SectionHeading
              pill="Como a parceria começa"
              title="Uma entrada consultiva,"
              accent="com papéis definidos."
              text="A conversa inicial organiza contexto, responsabilidades e forma de trabalho antes de qualquer entrega."
            />
            <div className="relative mt-16 grid gap-8 lg:grid-cols-3">
              <div className="absolute left-0 right-0 top-10 hidden h-px bg-neutral-100 lg:block" />
              {content.process.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.article
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
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#0a0a0a] py-24 text-white md:py-32">
          <div className="container mx-auto px-6">
            <SectionHeading
              pill="Capacidade TOGETHER"
              title="Experiência que sustenta"
              accent="a execução."
              text="As provas abaixo reproduzem apenas credenciais que já fazem parte da comunicação atual da TOGETHER."
              tone="dark"
            />
            <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 sm:grid-cols-2 xl:grid-cols-4">
              {content.proofs.map((proof) => (
                <div key={proof.value} className="bg-[#0a0a0a] p-7">
                  <p className="text-3xl font-bold text-brand-400">{proof.value}</p>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-neutral-400">
                    {proof.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-6">
            <motion.div
              {...fadeUp}
              className="flex flex-col gap-8 rounded-[2rem] bg-brand-400 p-7 text-neutral-950 md:flex-row md:items-center md:justify-between md:p-10"
            >
              <div className="flex max-w-3xl flex-col gap-5 md:flex-row md:items-center">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-neutral-950 text-brand-400">
                  <LockKeyhole aria-hidden="true" className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-neutral-700">
                    Confidencialidade
                  </p>
                  <h2 className="mt-3 text-2xl font-bold">
                    Informações tratadas com discrição desde a primeira conversa.
                  </h2>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-neutral-800">
                    A formalização é adequada ao projeto e às partes envolvidas.
                  </p>
                </div>
              </div>
              <ActionLink
                href="/contato"
                variant="dark"
                size="lg"
                className="w-full md:w-auto"
              >
                Agendar conversa
              </ActionLink>
            </motion.div>
          </div>
        </section>

        <section className="border-t border-neutral-100 bg-white py-24 md:py-32">
          <div className="container mx-auto grid gap-14 px-6 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)]">
            <SectionHeading
              pill="Perguntas frequentes"
              title="Clareza antes"
              accent="da primeira entrega."
              text="Respostas objetivas sobre o papel de cada equipe e o início da parceria."
            />
            <Accordion type="single" collapsible className="w-full">
              {content.faqs.map((item, index) => (
                <AccordionItem key={item.question} value={`faq-${index + 1}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="relative overflow-hidden bg-brand-400 py-24 text-neutral-950 md:py-36">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="container relative z-10 mx-auto px-6 text-center">
            <SectionPill tone="brand">Parceria TOGETHER</SectionPill>
            <h2 className="mx-auto mt-8 max-w-4xl text-[2.75rem] font-bold leading-[0.98] tracking-normal sm:text-6xl">
              Amplie sua capacidade em LGPD com responsabilidades claras.
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-base font-medium leading-relaxed text-neutral-800 md:text-lg">
              Converse com nosso time sobre o perfil e as demandas do seu escritório.
            </p>
            <div className="mt-10">
              <ActionLink href="/contato" variant="dark" size="xl">
                Agendar conversa de parceria
              </ActionLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
