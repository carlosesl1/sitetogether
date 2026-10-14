import { ServiceProposalForm } from "@/components/contact/service-proposal-form";

export function DpoProposalForm() {
    return <ServiceProposalForm
        formId="dpo-as-a-service"
        formName="Proposta de DPO as a Service"
        formSource="DPO as a Service"
        title="Solicite sua proposta de DPO."
        help="Deixe seu contato para alinharmos o modelo de atuação, o escopo e o investimento."
        messagePlaceholder="Ex.: contratar um DPO externo, apoiar o DPO interno ou atender uma demanda de auditoria."
        successMessage="Nosso time entrará em contato para entender sua operação e alinhar a proposta de DPO externo ou apoio ao seu DPO interno."
    />;
}
