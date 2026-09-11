export type IndustryContactForm = {
  readonly id: string;
  readonly title: string;
  readonly source: string;
  readonly interest: string;
  readonly toolName: string;
  readonly companyLabel: string;
  readonly companyPlaceholder: string;
  readonly emailPlaceholder: string;
  readonly messageLabel: string;
  readonly messagePlaceholder: string;
  readonly successMessage: string;
};

export const saasContactForm = {
    id: "contato-saas",
    title: "Solicite seu diagnóstico inicial",
    source: "LP LGPD para SaaS",
    interest: "Serviços de privacidade para SaaS",
    toolName: "request_saas_privacy_consultation",
    companyLabel: "Empresa ou nome do SaaS",
    companyPlaceholder: "Nome do seu SaaS",
    emailPlaceholder: "nome@empresa.com.br",
    messageLabel: "O que você precisa adequar no seu SaaS?",
    messagePlaceholder:
      "Ex.: produto, integração, contratos, fornecedores, pedidos de usuários ou ainda não sei por onde começar.",
    successMessage:
      "Um especialista da TOGETHER entrará em contato para entender o estágio do seu SaaS e delimitar um primeiro passo para a adequação.",
  } as const satisfies IndustryContactForm;
