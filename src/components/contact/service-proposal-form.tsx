"use client";

import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { submitContact } from "@/lib/contact";
import { pushAnalyticsEvent, pushFormErrorEvent } from "@/lib/analytics";
import styles from "./service-proposal-form.module.css";

type ServiceProposalFormProps = {
    formId: string;
    formName: string;
    formSource: string;
    title: string;
    help: string;
    messagePlaceholder: string;
    successMessage: string;
    /** "hero" is the sector look, tightened to sit beside a page headline. */
    appearance?: "default" | "sector" | "hero";
    eyebrow?: string;
    /** Anchor for in-page links; pass a different one when a page renders the form twice. */
    anchorId?: string;
    submitLabel?: string;
    /** Another way to get in touch, shown right under the submit button (e.g. WhatsApp). */
    secondaryAction?: ReactNode;
};

// The contact endpoint requires first and last name, so one "full name" field is split on the first space.
function splitFullName(fullName: string) {
    const [firstName = "", ...rest] = fullName.split(/\s+/).filter(Boolean);
    return { firstName, lastName: rest.join(" ") };
}

export function ServiceProposalForm({ formId, formName, formSource, title, help, messagePlaceholder, successMessage, appearance = "default", eyebrow, anchorId = "solicitar-proposta", submitLabel = "Solicitar proposta", secondaryAction }: ServiceProposalFormProps) {
    const sector = appearance !== "default";
    const titleId = useId();
    const helpId = useId();
    const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
    const [error, setError] = useState<string | null>(null);
    const sending = useRef(false);
    const started = useRef(false);
    const confirmation = useRef<HTMLHeadingElement>(null);
    const errorMessage = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (status === "success") confirmation.current?.focus();
        else if (error) errorMessage.current?.focus();
    }, [status, error]);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (sending.current) return;
        sending.current = true;
        setStatus("sending");
        setError(null);
        const form = event.currentTarget;
        const fields = new FormData(form);
        const value = (name: string) => String(fields.get(name) || "").trim();

        try {
            await submitContact({
                ...splitFullName(value("fullName")),
                email: value("email"),
                company: value("company"),
                phone: value("phone"),
                message: value("message"),
                website: value("website"),
                source: formSource,
                pageUrl: window.location.href,
            }, {
                formId,
                formName,
                formSource,
            });
            form.reset();
            setStatus("success");
        } catch (cause) {
            try { pushFormErrorEvent({ formId, formName, formSource, errorType: 'submission_failed' }); } catch { /* Telemetry must not block retry. */ }
            setError(cause instanceof Error ? cause.message : "Não foi possível enviar. Tente novamente.");
            setStatus("idle");
        } finally {
            sending.current = false;
        }
    }

    return (
        <div id={anchorId} data-proposal-form="" className={`${styles.proposalForm}${sector ? ` ${styles.sector}` : ""}${appearance === "hero" ? ` ${styles.hero}` : ""}`} tabIndex={-1}>
            {status === "success" ? (
                <div className={styles.formSuccess} role="status">
                    <CheckCircle2 size={40} aria-hidden="true" />
                    <h3 ref={confirmation} tabIndex={-1}>Solicitação recebida.</h3>
                    <p>{successMessage}</p>
                    <a href="#escopo" className={styles.textLink}>Rever as entregas do serviço <ArrowRight size={17} aria-hidden="true" /></a>
                </div>
            ) : (
                <form method="post" onSubmit={handleSubmit} onFocusCapture={() => {
                    if (started.current) return;
                    started.current = true;
                    try { pushAnalyticsEvent('form_start', { form_id: formId, form_name: formName, form_source: formSource, page_path: window.location.pathname }); } catch { /* Telemetry is optional. */ }
                }} onInvalidCapture={() => {
                    try { pushFormErrorEvent({ formId, formName, formSource, errorType: 'validation' }); } catch { /* Keep native validation. */ }
                }} aria-labelledby={titleId} aria-describedby={helpId} aria-busy={status === "sending"}>
                    {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
                    <h3 id={titleId}>{title}</h3>
                    <p id={helpId} className={styles.formHelp}>{help}</p>
                    <fieldset disabled={status === "sending"}>
                        <legend className={styles.srOnly}>Seus dados de contato</legend>
                        <input name="website" type="hidden" tabIndex={-1} autoComplete="off" />
                        <label>Nome completo <span aria-hidden="true">*</span><input name="fullName" autoComplete="name" required maxLength={200} pattern="\s*\S+(\s+\S+)+\s*" title="Informe nome e sobrenome." placeholder={sector ? "Ex.: Carlos Santos" : undefined} /></label>
                        <label>E-mail de trabalho <span aria-hidden="true">*</span><input name="email" type="email" inputMode="email" autoComplete="email" required maxLength={254} placeholder={sector ? "voce@empresa.com.br" : undefined} /></label>
                        <label>Empresa <span aria-hidden="true">*</span><input name="company" autoComplete="organization" required maxLength={200} placeholder={sector ? "Nome da sua empresa" : undefined} /></label>
                        <label>WhatsApp ou telefone <span className={styles.optional}>(opcional)</span><input name="phone" type="tel" inputMode="tel" autoComplete="tel" maxLength={30} placeholder={sector ? "(00) 00000-0000" : undefined} /></label>
                        <label>O que sua empresa precisa resolver? <span className={styles.optional}>(opcional)</span><textarea name="message" rows={appearance === "hero" ? 2 : 3} maxLength={5000} placeholder={messagePlaceholder} /></label>
                        <button type="submit" className={styles.submitButton}>{status === "sending" ? "Enviando solicitação…" : submitLabel}<ArrowRight size={18} aria-hidden="true" /></button>
                    </fieldset>
                    {secondaryAction && <div className={styles.secondaryAction}>{secondaryAction}</div>}
                    {error && <p className={styles.formError} role="alert" ref={errorMessage} tabIndex={-1}>{error} Seus dados continuam no formulário para tentar novamente.</p>}
                    <p className={styles.formPrivacy}>Os campos com * são obrigatórios. Usaremos seus dados para responder à solicitação. <a href="https://demo.privacytools.com.br/policy-view/dq0owoEXY/1/poli%CC%81tica-de-privacidade-together-privacy-and-tech/pt_BR?s=1718983084115" target="_blank" rel="noopener noreferrer">Aviso de Privacidade<span className={styles.srOnly}> (abre em nova aba)</span></a>.</p>
                    <noscript><p>Ative o JavaScript para enviar ou escreva para <a href="mailto:contato@togetherprivacy.com">contato@togetherprivacy.com</a>.</p></noscript>
                </form>
            )}
        </div>
    );
}
