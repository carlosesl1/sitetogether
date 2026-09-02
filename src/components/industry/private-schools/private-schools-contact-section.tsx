"use client";

import Link from "next/link";
import type { FormEvent, ReactNode } from "react";
import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { PrivateSchoolsIndustryContent } from "@/components/industry/private-schools/private-schools-types";
import { PrivateSchoolsContactLogoStrip } from "@/components/industry/private-schools/private-schools-contact-logo-strip";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitContact } from "@/lib/contact";

export function PrivateSchoolsContactSection({
  content,
}: {
  readonly content: PrivateSchoolsIndustryContent["finalCta"];
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const schoolContext = String(formData.get("message") || "").trim();
    const message = [
      "Interesse: Avaliação LGPD para escola particular",
      schoolContext ? `Conte sobre sua escola: ${schoolContext}` : null,
    ]
      .filter(Boolean)
      .join("\n\n");

    try {
      await submitContact({
        firstName: String(formData.get("firstName") || "").trim(),
        lastName: String(formData.get("lastName") || "").trim(),
        company: String(formData.get("company") || "").trim(),
        email: String(formData.get("email") || "").trim(),
        phone: String(formData.get("phone") || "").trim(),
        website: String(formData.get("website") || "").trim(),
        pageUrl: window.location.href,
        source: "LP LGPD para escolas particulares",
        message,
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
    <section
      id="contato-escolas"
      data-layout-family="final-cta"
      className="relative scroll-mt-20 overflow-hidden bg-white py-20 text-neutral-950 sm:py-24 lg:py-32"
    >
      <PixelDecor placement="topRight" mask="topRight" opacity={0.18} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(245,192,0,0.12),transparent_28%),radial-gradient(circle_at_86%_20%,rgba(0,0,0,0.035),transparent_24%)]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,0.8fr)] lg:gap-16">
          <div className="min-w-0">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-600">
              {content.pill}
            </p>
            <h2 className="mt-7 max-w-3xl text-[2.6rem] font-bold leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              {content.title}
            </h2>
            <p className="mt-7 max-w-xl text-lg font-medium leading-relaxed text-neutral-600 sm:text-xl">
              {content.description}
            </p>
            {content.nextStep ? (
              <p className="mt-9 max-w-lg border-l-2 border-brand-400 pl-5 text-sm font-bold leading-relaxed text-neutral-900 sm:text-base">
                {content.nextStep}
              </p>
            ) : null}
            <PrivateSchoolsContactLogoStrip />
          </div>

          <div className="relative w-full min-w-0 lg:max-w-[570px] lg:justify-self-end">
            <div className="absolute -inset-4 rounded-[3rem] bg-brand-400/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-neutral-200/80 bg-white p-6 shadow-[0_32px_80px_rgba(15,23,42,0.10)] sm:p-8 lg:p-10">
              {isSubmitted ? (
                <div
                  role="status"
                  className="flex min-h-[32rem] flex-col items-center justify-center text-center"
                >
                  <span className="flex h-24 w-24 items-center justify-center rounded-full bg-brand-400/20 text-brand-600">
                    <CheckCircle2 className="h-12 w-12" aria-hidden="true" />
                  </span>
                  <h3 className="mt-8 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
                    Recebemos seus dados.
                  </h3>
                  <p className="mt-4 max-w-sm text-base font-medium leading-relaxed text-neutral-500 sm:text-lg">
                    Um especialista da TOGETHER entrará em contato para entender o cenário da sua escola.
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-10 min-h-14 rounded-2xl border-neutral-200 px-8 font-bold"
                  >
                    Enviar outra solicitação
                  </Button>
                </div>
              ) : (
                <form
                  {...{
                    toolname: "request_school_privacy_assessment",
                    tooldescription:
                      "Preenche uma solicitação de avaliação sobre LGPD para escolas particulares. O usuário revisa e envia o formulário.",
                  }}
                  onSubmit={handleSubmit}
                  className="relative z-10 space-y-6"
                >
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-brand-600">
                      Formulário rápido
                    </p>
                    <h2 className="mt-3 text-2xl font-bold tracking-tight text-neutral-900">
                      Solicitar avaliação de LGPD
                    </h2>
                  </div>

                  <div className="hidden" aria-hidden="true">
                    <label>
                      Website
                      <Input
                        name="website"
                        type="hidden"
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </label>
                  </div>

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    <FormField htmlFor="school-contact-name" label="Nome" required>
                      <Input
                        id="school-contact-name"
                        name="firstName"
                        required
                        autoComplete="given-name"
                        placeholder="Ex: Carlos"
                        className="bg-neutral-50/70"
                      />
                    </FormField>
                    <FormField
                      htmlFor="school-contact-last-name"
                      label="Sobrenome"
                      required
                    >
                      <Input
                        id="school-contact-last-name"
                        name="lastName"
                        required
                        autoComplete="family-name"
                        placeholder="Ex: Santos"
                        className="bg-neutral-50/70"
                      />
                    </FormField>
                  </div>

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    <FormField
                      htmlFor="school-contact-email"
                      label="E-mail corporativo"
                      required
                    >
                      <Input
                        id="school-contact-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="nome@escola.com.br"
                        className="bg-neutral-50/70"
                      />
                    </FormField>
                    <FormField
                      htmlFor="school-contact-company"
                      label="Escola"
                      required
                    >
                      <Input
                        id="school-contact-company"
                        name="company"
                        required
                        autoComplete="organization"
                        placeholder="Nome da escola"
                        className="bg-neutral-50/70"
                      />
                    </FormField>
                  </div>

                  <FormField htmlFor="school-contact-phone" label="Telefone">
                    <Input
                      id="school-contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="(00) 00000-0000"
                      className="bg-neutral-50/70"
                    />
                  </FormField>

                  <FormField
                    htmlFor="school-contact-message"
                    label="Conte sobre sua escola"
                  >
                    <Textarea
                      id="school-contact-message"
                      name="message"
                      placeholder="Conte se a escola já realizou uma adequação, possui DPO, usa muitos sistemas ou fornecedores ou tem alguma urgência."
                      className="min-h-[150px] bg-neutral-50/70"
                    />
                  </FormField>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="group h-auto min-h-16 w-full gap-1 rounded-2xl px-3 py-5 text-[10px] font-bold tracking-[0.1em] shadow-2xl shadow-brand-400/30 sm:gap-2 sm:px-6 sm:text-sm sm:tracking-[0.16em]"
                    >
                      {isSubmitting ? "Enviando..." : "Quero avaliar minha escola"}
                      <ArrowRight
                        className="hidden h-5 w-5 transition-transform group-hover:translate-x-2 sm:block"
                        aria-hidden="true"
                      />
                    </Button>
                    {submitError ? (
                      <p
                        role="alert"
                        className="mt-4 text-center text-xs font-bold text-red-600"
                      >
                        {submitError}
                      </p>
                    ) : null}
                    <p className="mt-6 text-center text-[10px] font-medium leading-relaxed text-neutral-400">
                      Saiba como a TOGETHER trata seus dados em nosso{" "}
                      <Link
                        href="https://demo.privacytools.com.br/policy-view/dq0owoEXY/1/poli%CC%81tica-de-privacidade-together-privacy-and-tech/pt_BR?s=1718983084115"
                        className="underline underline-offset-4 transition-colors hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                      >
                        Aviso de Privacidade
                      </Link>
                      .
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
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
    <div className="space-y-2">
      <label
        htmlFor={htmlFor}
        className="ml-1 block text-[11px] font-bold uppercase tracking-[0.16em] text-neutral-500"
      >
        {label} {required ? <span className="text-red-500">*</span> : null}
      </label>
      {children}
    </div>
  );
}
