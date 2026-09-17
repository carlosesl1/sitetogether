"use client";

import Link from "next/link";
import type { FormEvent, ReactNode } from "react";
import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { IndustryFinalCtaContent } from "@/components/industry/saas/saas-page-types";
import { IndustryContactLogoStrip } from "@/components/industry/industry-contact-logo-strip";
import type { IndustryContactForm } from "@/content/saas-contact-form";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { pushLeadConversionEvent } from "@/lib/analytics";
import { pushFormErrorEvent } from "@/lib/analytics";
import { submitContact } from "@/lib/contact";
import { cn } from "@/lib/utils";
import { SectionPill } from "@/components/ui/site-primitives";

export function SaasContactSection({
  content,
  form: formContent,
}: {
  readonly content: IndustryFinalCtaContent;
  readonly form: IndustryContactForm;
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
    const operationContext = String(formData.get("message") || "").trim();
    const message = [
      `Interesse: ${formContent.interest}`,
      operationContext ? `${formContent.messageLabel}: ${operationContext}` : null,
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
        source: formContent.source,
        message,
      });

      pushLeadConversionEvent({
        formId: formContent.id,
        formName: formContent.toolName,
        formSource: formContent.source,
      });
      form.reset();
      setIsSubmitted(true);
    } catch (error) {
      pushFormErrorEvent({
        formId: formContent.id,
        formName: formContent.toolName,
        formSource: formContent.source,
        errorType: "submission_failed",
      });
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
      id={formContent.id}
      aria-labelledby={`${formContent.id}-title`}
      data-layout-family="final-cta"
      className="relative scroll-mt-20 overflow-hidden bg-white py-20 text-neutral-950 sm:py-24 lg:py-32"
    >
      <PixelDecor placement="topRight" mask="topRight" opacity={0.18} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(245,192,0,0.12),transparent_28%),radial-gradient(circle_at_86%_20%,rgba(0,0,0,0.035),transparent_24%)]" />

      <span id="cta" className="absolute top-0 scroll-mt-20" aria-hidden="true" />
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,0.8fr)] lg:gap-16">
          <div className="min-w-0">
            {content.pill ? (
              content.accent ? (
                <SectionPill>{content.pill}</SectionPill>
              ) : (
                <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-600">
                  {content.pill}
                </p>
              )
            ) : null}
            <h2
              id={`${formContent.id}-title`}
              className={cn(
                "mt-7 max-w-3xl",
                content.accent
                  ? "break-words text-[2.55rem] font-bold leading-[1.02] tracking-normal sm:text-5xl md:text-6xl"
                  : "text-[2.6rem] font-bold leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-6xl",
              )}
            >
              {content.title}
              {content.accent ? (
                <>
                  {" "}
                  <span className="pb-1 font-light italic leading-[1.1] text-brand-500">
                    {content.accent}
                  </span>
                </>
              ) : null}
            </h2>
            <p className="mt-7 max-w-xl text-lg font-medium leading-relaxed text-neutral-600 sm:text-xl">
              {content.description}
            </p>
            {content.nextStep ? (
              <p className="mt-9 max-w-lg border-l-2 border-brand-400 pl-5 text-sm font-bold leading-relaxed text-neutral-900 sm:text-base">
                {content.nextStep}
              </p>
            ) : null}
            <IndustryContactLogoStrip />
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
                    {formContent.successMessage}
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
                  data-analytics-form-id={formContent.id}
                  data-analytics-form-name={formContent.toolName}
                  data-analytics-form-source={formContent.source}
                  {...{
                    toolname: formContent.toolName,
                    tooldescription:
                      `Preenche uma solicitação sobre ${formContent.interest}. O usuário revisa e envia o formulário.`,
                  }}
                  onSubmit={handleSubmit}
                  aria-labelledby={`${formContent.id}-form-title`}
                  aria-busy={isSubmitting}
                  className="relative z-10 space-y-6"
                >
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-brand-600">
                      Formulário rápido
                    </p>
                    <h3 id={`${formContent.id}-form-title`} className="mt-3 text-2xl font-bold tracking-tight text-neutral-900">
                      {formContent.title}
                    </h3>
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
                    <FormField htmlFor={`${formContent.id}-name`} label="Nome" required>
                      <Input
                        id={`${formContent.id}-name`}
                        name="firstName"
                        required
                        autoComplete="given-name"
                        placeholder="Ex: Carlos"
                        className="bg-neutral-50/70"
                      />
                    </FormField>
                    <FormField
                      htmlFor={`${formContent.id}-last-name`}
                      label="Sobrenome"
                      required
                    >
                      <Input
                        id={`${formContent.id}-last-name`}
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
                      htmlFor={`${formContent.id}-email`}
                      label="E-mail corporativo"
                      required
                    >
                      <Input
                        id={`${formContent.id}-email`}
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder={formContent.emailPlaceholder}
                        className="bg-neutral-50/70"
                      />
                    </FormField>
                    <FormField
                      htmlFor={`${formContent.id}-company`}
                      label={formContent.companyLabel}
                      required
                    >
                      <Input
                        id={`${formContent.id}-company`}
                        name="company"
                        required
                        autoComplete="organization"
                        placeholder={formContent.companyPlaceholder}
                        className="bg-neutral-50/70"
                      />
                    </FormField>
                  </div>

                  <FormField htmlFor={`${formContent.id}-phone`} label="Telefone">
                    <Input
                      id={`${formContent.id}-phone`}
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="(00) 00000-0000"
                      className="bg-neutral-50/70"
                    />
                  </FormField>

                  <FormField
                    htmlFor={`${formContent.id}-message`}
                    label={formContent.messageLabel}
                  >
                    <Textarea
                      id={`${formContent.id}-message`}
                      name="message"
                      placeholder={formContent.messagePlaceholder}
                      className="min-h-[150px] bg-neutral-50/70"
                    />
                  </FormField>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="group h-auto min-h-16 w-full gap-2 whitespace-normal rounded-2xl px-3 py-5 text-xs font-bold leading-relaxed tracking-[0.08em] shadow-2xl shadow-brand-400/30 sm:px-6 sm:text-sm sm:tracking-[0.1em]"
                    >
                      {isSubmitting
                        ? "Enviando..."
                        : content.cta}
                      <ArrowRight
                        className="hidden h-5 w-5 transition-transform motion-safe:group-hover:translate-x-2 sm:block"
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
                    <p className="mt-6 text-center text-xs font-medium leading-relaxed text-neutral-400">
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
