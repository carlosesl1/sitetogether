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

export const industryContactForms = {
  saas: {
    id: "contato-saas",
    title: "Converse sobre LGPD no seu SaaS",
    source: "LP LGPD para SaaS",
    interest: "Serviços de privacidade para SaaS",
    toolName: "request_saas_privacy_consultation",
    companyLabel: "Empresa ou nome do SaaS",
    companyPlaceholder: "Nome do seu SaaS",
    emailPlaceholder: "nome@empresa.com.br",
    messageLabel: "Qual é a prioridade do seu SaaS?",
    messagePlaceholder:
      "Ex.: produto em construção, nova integração, exigência de cliente ou expansão.",
    successMessage:
      "Um especialista da TOGETHER entrará em contato para entender o momento do seu SaaS e indicar o próximo passo.",
  },
  fractionalFreight: {
    id: "contato-fracionado",
    title: "Converse sobre LGPD no transporte fracionado",
    source: "LP LGPD para transporte fracionado",
    interest: "Serviços de privacidade para transporte fracionado",
    toolName: "request_fractional_freight_privacy_consultation",
    companyLabel: "Transportadora",
    companyPlaceholder: "Nome da transportadora",
    emailPlaceholder: "nome@empresa.com.br",
    messageLabel: "Qual repasse de dados precisa de atenção?",
    messagePlaceholder:
      "Ex.: acessos de filiais, envio de comprovantes ou compartilhamento com parceiros.",
    successMessage:
      "Um especialista da TOGETHER entrará em contato para entender os repasses de dados na sua rede e indicar o próximo passo.",
  },
  fullTruckload: {
    id: "contato-lotacao",
    title: "Converse sobre LGPD na carga lotação",
    source: "LP LGPD para carga lotação",
    interest: "Serviços de privacidade para carga lotação",
    toolName: "request_full_truckload_privacy_consultation",
    companyLabel: "Transportadora",
    companyPlaceholder: "Nome da transportadora",
    emailPlaceholder: "nome@empresa.com.br",
    messageLabel: "Em qual etapa da viagem está a dúvida?",
    messagePlaceholder:
      "Ex.: cadastro de motoristas, acesso ao rastreamento ou guarda de comprovantes.",
    successMessage:
      "Um especialista da TOGETHER entrará em contato para entender o uso de dados nas etapas da viagem e indicar o próximo passo.",
  },
  roads: {
    id: "contato-rodovias",
    title: "Fale com um Especialista sobre LGPD na operação rodoviária",
    source: "LP LGPD para gestão de rodovias",
    interest: "Serviços de privacidade para gestão de rodovias",
    toolName: "request_road_privacy_consultation",
    companyLabel: "Empresa",
    companyPlaceholder: "Nome da empresa",
    emailPlaceholder: "nome@empresa.com.br",
    messageLabel: "Qual é a prioridade da operação?",
    messagePlaceholder:
      "Ex.: dados de pedágio, câmeras, atendimento ao usuário ou fornecedores.",
    successMessage:
      "Um especialista da TOGETHER entrará em contato para entender o cenário da sua operação rodoviária e indicar o próximo passo.",
  },
} as const satisfies Record<string, IndustryContactForm>;
