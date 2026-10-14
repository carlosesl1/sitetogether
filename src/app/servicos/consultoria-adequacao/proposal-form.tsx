"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { submitContact } from "@/lib/contact";
import styles from "./adequacao-service.module.css";

const formSource = "Consultoria de adequação LGPD";

export function ProposalForm() {
    const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
    const [error, setError] = useState<string | null>(null);
    const sending = useRef(false);
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
                firstName: value("firstName"),
                lastName: value("lastName"),
                email: value("email"),
                company: value("company"),
                phone: value("phone"),
                message: value("message"),
                website: value("website"),
                source: formSource,
                pageUrl: window.location.href,
            }, {
                formId: "adequacao-lgpd",
                formName: "Proposta de adequação LGPD",
                formSource,
            });
            form.reset();
            setStatus("success");
        } catch (cause) {
            setError(cause instanceof Error ? cause.message : "Não foi possível enviar. Tente novamente.");
            setStatus("idle");
        } finally {
            sending.current = false;
        }
    }

    return (
        <div id="solicitar-proposta" className={styles.proposalForm} tabIndex={-1}>
            {status === "success" ? (
                <div className={styles.formSuccess} role="status">
                    <CheckCircle2 size={40} aria-hidden="true" />
                    <h3 ref={confirmation} tabIndex={-1}>Solicitação recebida.</h3>
                    <p>Nosso time entrará em contato para entender sua empresa e alinhar a proposta de adequação à LGPD.</p>
                    <a href="#escopo" className={styles.textLink}>Rever as entregas do projeto <ArrowRight size={17} aria-hidden="true" /></a>
                </div>
            ) : (
                <form method="post" onSubmit={handleSubmit} aria-labelledby="form-proposta-title" aria-describedby="form-proposta-help" aria-busy={status === "sending"}>
                    <h3 id="form-proposta-title">Solicite sua proposta.</h3>
                    <p id="form-proposta-help" className={styles.formHelp}>Deixe seu contato. Vamos conversar sobre o escopo, o prazo e o investimento para sua empresa.</p>
                    <fieldset disabled={status === "sending"}>
                        <legend className={styles.srOnly}>Seus dados de contato</legend>
                        <input name="website" type="hidden" tabIndex={-1} autoComplete="off" />
                        <div className={styles.formRow}>
                            <label>Nome <span aria-hidden="true">*</span><input name="firstName" autoComplete="given-name" required maxLength={100} /></label>
                            <label>Sobrenome <span aria-hidden="true">*</span><input name="lastName" autoComplete="family-name" required maxLength={100} /></label>
                        </div>
                        <label>E-mail de trabalho <span aria-hidden="true">*</span><input name="email" type="email" inputMode="email" autoComplete="email" required maxLength={254} /></label>
                        <label>Empresa <span aria-hidden="true">*</span><input name="company" autoComplete="organization" required maxLength={200} /></label>
                        <label>Telefone <span className={styles.optional}>(opcional)</span><input name="phone" type="tel" inputMode="tel" autoComplete="tel" maxLength={30} /></label>
                        <label>O que sua empresa precisa resolver? <span className={styles.optional}>(opcional)</span><textarea name="message" rows={3} maxLength={5000} placeholder="Ex.: exigência de um cliente, projeto em andamento ou prazo de auditoria." /></label>
                        <button type="submit" className={styles.submitButton}>{status === "sending" ? "Enviando solicitação…" : "Solicitar proposta"}<ArrowRight size={18} aria-hidden="true" /></button>
                    </fieldset>
                    {error && <p className={styles.formError} role="alert" ref={errorMessage} tabIndex={-1}>{error} Seus dados continuam no formulário para tentar novamente.</p>}
                    <p className={styles.formPrivacy}>Os campos com * são obrigatórios. Usaremos seus dados para responder à solicitação. <a href="https://demo.privacytools.com.br/policy-view/dq0owoEXY/1/poli%CC%81tica-de-privacidade-together-privacy-and-tech/pt_BR?s=1718983084115" target="_blank" rel="noopener noreferrer">Aviso de Privacidade<span className={styles.srOnly}> (abre em nova aba)</span></a>.</p>
                    <noscript><p>Ative o JavaScript para enviar ou escreva para <a href="mailto:contato@togetherprivacy.com">contato@togetherprivacy.com</a>.</p></noscript>
                </form>
            )}
        </div>
    );
}
