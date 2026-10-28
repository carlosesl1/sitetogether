import { ServiceProposalForm } from "@/components/contact/service-proposal-form";
import { WhatsAppLink } from "@/components/contact/whatsapp-link";

export const whatsappMessage = "Olá! Vim pela página de DPO as a Service e quero agendar o diagnóstico inicial de 30 minutos.";

type DpoProposalFormProps = { placement?: "hero" | "final" };

export function DpoProposalForm({ placement = "final" }: DpoProposalFormProps) {
    const hero = placement === "hero";
    return <ServiceProposalForm
        formId="dpo-as-a-service"
        formName="Proposta de DPO as a Service"
        formSource="DPO as a Service"
        appearance={hero ? "hero" : "sector"}
        anchorId={hero ? "solicitar-proposta" : "proposta-final"}
        eyebrow="Gratuito e sem compromisso"
        title="Agende seu diagnóstico inicial de 30 minutos"
        help="Analisamos a operação de privacidade da sua empresa e indicamos o melhor modelo de apoio. Respondemos no mesmo dia, em até 24 horas."
        submitLabel="Agende uma conversa"
        secondaryAction={<WhatsAppLink message={whatsappMessage} label="Prefere WhatsApp? Fale com a gente" location={hero ? "hero" : "final"} />}
        messagePlaceholder="Ex.: contratar um DPO externo, apoiar o DPO interno ou atender uma demanda de auditoria."
        successMessage="Respondemos no mesmo dia, em até 24 horas, para agendar o seu diagnóstico inicial de 30 minutos."
    />;
}
