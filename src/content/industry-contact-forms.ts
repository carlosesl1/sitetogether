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
  readonly messageHint?: string;
  readonly successTitle?: string;
  readonly successMessage: string;
};

export const industryContactForms = {
  fractionalFreight: {
    id: "contato-fracionado",
    title: "Solicite contato de um especialista",
    source: "LP LGPD para transporte fracionado",
    interest: "Serviços de privacidade para transporte fracionado",
    toolName: "request_fractional_freight_privacy_consultation",
    companyLabel: "Transportadora",
    companyPlaceholder: "Nome da transportadora",
    emailPlaceholder: "nome@empresa.com.br",
    messageLabel: "Como podemos ajudar?",
    messagePlaceholder:
      "Ex.: adequação à LGPD, apoio ao DPO, auditoria ou treinamento.",
    successTitle: "Recebemos sua solicitação.",
    successMessage:
      "Um especialista da TOGETHER entrará em contato para entender como podemos ajudar sua transportadora.",
  },
} as const satisfies Record<string, IndustryContactForm>;
