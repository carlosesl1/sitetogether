import { ServiceProposalForm } from "@/components/contact/service-proposal-form";
import { WhatsAppLink } from "@/components/contact/whatsapp-link";

export const whatsappMessage = "Olá! Vim pela página de adequação à LGPD e quero agendar o diagnóstico inicial de 30 minutos.";

type ProposalFormProps = { placement?: "hero" | "final" };

export function ProposalForm({ placement = "final" }: ProposalFormProps) {
    const hero = placement === "hero";
    return <ServiceProposalForm
        formId="adequacao-lgpd"
        formName="Proposta de adequação LGPD"
        formSource="Consultoria de adequação LGPD"
        appearance={hero ? "hero" : "sector"}
        anchorId={hero ? "solicitar-proposta" : "proposta-final"}
        eyebrow="Gratuito e sem compromisso"
        title="Agende seu diagnóstico inicial de 30 minutos"
        help="Analisamos a situação da sua empresa e indicamos por onde começar. Respondemos no mesmo dia, em até 24 horas."
        submitLabel="Agende uma conversa"
        secondaryAction={<WhatsAppLink message={whatsappMessage} label="Prefere WhatsApp? Fale com a gente" location={hero ? "hero" : "final"} />}
        messagePlaceholder="Ex.: exigência de um cliente, projeto em andamento ou prazo de auditoria."
        successMessage="Respondemos no mesmo dia, em até 24 horas, para agendar o seu diagnóstico inicial de 30 minutos."
    />;
}
