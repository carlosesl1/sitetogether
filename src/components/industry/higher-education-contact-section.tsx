"use client";

import Link from "next/link";
import type { FormEvent, ReactNode } from "react";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { IndustryFinalCtaContent } from "@/components/industry/industry-page-types";
import { IndustryReveal } from "@/components/industry/industry-reveal";
import { IndustrySectionHeading } from "@/components/industry/industry-section-heading";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitContact } from "@/lib/contact";

const conversationBenefits = [
  { icon: Search, title: "Prioridades bem definidas" },
  { icon: Users, title: "Áreas envolvidas" },
  { icon: FileCheck2, title: "Escopo de implantação" },
  { icon: ShieldCheck, title: "Próximos passos claros" },
] as const;

const privacyNoticeUrl =
  "https://demo.privacytools.com.br/policy-view/dq0owoEXY/1/poli%CC%81tica-de-privacidade-together-privacy-and-tech/pt_BR?s=1718983084115";

export function HigherEducationContactSection({
  content,
}: {
  readonly content: IndustryFinalCtaContent;
}) {
  return (
    <section
      id="cta"
      data-layout-family="eca-contact-cta"
      className="relative overflow-hidden bg-white py-24 md:py-32"
    >
      <PixelDecor placement="topRight" mask="topRight" opacity={0.18} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(245,192,0,0.12),transparent_28%),radial-gradient(circle_at_86%_20%,rgba(0,0,0,0.035),transparent_24%)]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid gap-10 xl:grid-cols-[minmax(0,0.82fr)_minmax(360px,0.78fr)] xl:items-start xl:gap-16">
          <IndustryReveal className="min-w-0">
            <IndustrySectionHeading
              pill={content.pill}
              title={content.title}
              accent={content.nextStep}
              description={content.description}
              variant="narrative"
            />

            <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-5 sm:gap-4">
              {conversationBenefits.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 border-b border-neutral-200/70 pb-4 sm:items-center sm:gap-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-400 text-neutral-950 shadow-lg shadow-brand-400/25">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="min-w-0 text-[0.92rem] font-bold leading-tight tracking-tight text-neutral-900 sm:text-base">
                      {item.title}
                    </h3>
                  </div>
                );
              })}
            </div>

            <p className="mt-10 max-w-2xl border-l-2 border-brand-400 pl-5 text-sm font-semibold leading-relaxed text-neutral-600 sm:text-base">
              A conversa inicial ajuda a organizar o ponto de partida. O escopo é
              definido depois de entendermos as necessidades da instituição.
            </p>
          </IndustryReveal>

          <HigherEducationContactForm cta={content.cta} />
        </div>
      </div>
    </section>
  );
}

function HigherEducationContactForm({ cta }: { readonly cta: string }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const message = String(formData.get("message") || "").trim();
    const composedMessage = [
      "Interesse: Programa de Privacidade para Ensino Superior",
      message ? `Contexto informado: ${message}` : null,
    ]
      .filter(Boolean)
      .join("\n\n");

    try {
      await submitContact({
        firstName: String(formData.get("firstName") || "").trim(),
        lastName: String(formData.get("lastName") || "").trim(),
        email: String(formData.get("email") || "").trim(),
        company: String(formData.get("company") || "").trim(),
        phone: String(formData.get("phone") || "").trim(),
        message: composedMessage,
        website: String(formData.get("website") || "").trim(),
        pageUrl: window.location.href,
        source: "Ensino Superior - Programa de Privacidade",
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
    <IndustryReveal className="relative w-full min-w-0 xl:max-w-[570px] xl:justify-self-end">
      <div className="absolute -inset-4 rounded-[3rem] bg-brand-400/10 blur-3xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-neutral-200/80 bg-white p-6 shadow-[0_32px_80px_rgba(15,23,42,0.10)] sm:p-8 md:p-10">
        {isSubmitted ? (
          <div
            data-form-status="success"
            className="flex min-h-[520px] flex-col items-center justify-center text-center"
          >
            <div className="mb-10 flex h-24 w-24 items-center justify-center rounded-full bg-brand-400/20">
              <CheckCircle2
                className="h-12 w-12 text-brand-600"
                aria-hidden="true"
              />
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-neutral-900">
              Solicitação recebida!
            </h2>
            <p className="mt-4 max-w-sm text-lg font-medium text-neutral-500">
              Um especialista entrará em contato para entender a realidade da
              sua instituição e organizar o próximo passo.
            </p>
            <Button
              type="button"
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="mt-12 h-14 rounded-2xl border-neutral-200 px-8 font-bold"
            >
              Enviar outra mensagem
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-brand-600">
                Formulário rápido
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-neutral-900">
                {cta}
              </h2>
            </div>

            <div className="hidden" aria-hidden="true">
              <label htmlFor="higher-education-website">Website</label>
              <Input
                id="higher-education-website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <FormField
                htmlFor="higher-education-first-name"
                label="Nome"
                required
              >
                <Input
                  id="higher-education-first-name"
                  name="firstName"
                  required
                  autoComplete="given-name"
                  placeholder="Ex: Carlos"
                  className="bg-neutral-50/70"
                />
              </FormField>
              <FormField
                htmlFor="higher-education-last-name"
                label="Sobrenome"
                required
              >
                <Input
                  id="higher-education-last-name"
                  name="lastName"
                  required
                  autoComplete="family-name"
                  placeholder="Ex: Santos"
                  className="bg-neutral-50/70"
                />
              </FormField>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <FormField
                htmlFor="higher-education-email"
                label="E-mail de trabalho"
                required
              >
                <Input
                  id="higher-education-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="nome@instituicao.edu.br"
                  className="bg-neutral-50/70"
                />
              </FormField>
              <FormField
                htmlFor="higher-education-company"
                label="Instituição"
                required
              >
                <Input
                  id="higher-education-company"
                  name="company"
                  required
                  autoComplete="organization"
                  placeholder="Nome da instituição"
                  className="bg-neutral-50/70"
                />
              </FormField>
            </div>

            <FormField htmlFor="higher-education-phone" label="Telefone">
              <Input
                id="higher-education-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="(00) 00000-0000"
                className="bg-neutral-50/70"
              />
            </FormField>

            <FormField
              htmlFor="higher-education-message"
              label="Conte sobre a necessidade da instituição"
            >
              <Textarea
                id="higher-education-message"
                name="message"
                placeholder="Conte quais frentes precisam avançar ou qual é a principal prioridade hoje."
                className="min-h-[150px] bg-neutral-50/70"
              />
            </FormField>

            <div className="pt-2">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="group h-auto min-h-16 w-full rounded-2xl px-6 py-5 text-sm font-bold shadow-2xl shadow-brand-400/30"
              >
                {isSubmitting ? "Enviando..." : cta}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
              </Button>
              {submitError ? (
                <p
                  role="alert"
                  className="mt-4 text-center text-xs font-bold text-red-500"
                >
                  {submitError}
                </p>
              ) : null}
              <p className="mt-6 text-center text-[10px] font-medium leading-relaxed text-neutral-400">
                Ao enviar, você concorda com nosso{" "}
                <Link
                  href={privacyNoticeUrl}
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
    </IndustryReveal>
  );
}

function FormField({
  htmlFor,
  label,
  required,
  children,
}: {
  readonly htmlFor: string;
  readonly label: string;
  readonly required?: boolean;
  readonly children: ReactNode;
}) {
  return (
    <div className="space-y-3">
      <label
        htmlFor={htmlFor}
        className="ml-1 text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500"
      >
        {label} {required ? <span className="text-red-500">*</span> : null}
      </label>
      {children}
    </div>
  );
}
