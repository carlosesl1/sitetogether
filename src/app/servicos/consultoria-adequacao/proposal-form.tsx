import { ServiceProposalForm } from "@/components/contact/service-proposal-form";

export function ProposalForm() {
    return <ServiceProposalForm
        formId="adequacao-lgpd"
        formName="Proposta de adequação LGPD"
        formSource="Consultoria de adequação LGPD"
        title="Solicite sua proposta."
        help="Deixe seu contato. Vamos conversar sobre o escopo, o prazo e o investimento para sua empresa."
        messagePlaceholder="Ex.: exigência de um cliente, projeto em andamento ou prazo de auditoria."
        successMessage="Nosso time entrará em contato para entender sua empresa e alinhar a proposta de adequação à LGPD."
    />;
}
