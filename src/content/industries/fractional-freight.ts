import type { SectorIndustryContent } from "@/components/industry/industry-page-types";

const imageBase = "/images/industries/fractional-freight";

export const fractionalFreightIndustryContent = {
  sector: "transporte-fracionado",
  visualFamily: "hub",
  metadata: {
    title: "Privacidade e LGPD no transporte fracionado",
    description: "LGPD para transporte fracionado: coletas, hubs, roteirização, parceiros, rastreio, entregas e resposta a incidentes.",
    canonical: "/solucoes/privacidade-transporte-fracionado",
    socialAlt: "Hub de transporte fracionado com volumes, esteiras e rotas conectadas",
  },
  hero: {
    pill: "LGPD para transporte fracionado",
    title: "Privacidade em cada etapa da carga fracionada.",
    accent: "Da coleta à última entrega.",
    description: "A TOGETHER estrutura processos e controles para dados de embarcadores, destinatários, motoristas, parceiros e sistemas — da coleta ao comprovante de entrega.",
    cta: "Agende uma Conversa",
    image: { desktop: { avif: `${imageBase}/hero-desktop.avif`, webp: `${imageBase}/hero-desktop.webp`, png: `${imageBase}/hero-desktop.png`, width: 1672, height: 941 }, mobile: { avif: `${imageBase}/hero-mobile.avif`, webp: `${imageBase}/hero-mobile.webp`, png: `${imageBase}/hero-mobile.png`, width: 941, height: 1672 } },
  },
  context: { id: "fluxo", pill: "Onde os dados circulam", title: "Muitos volumes, muitos participantes.", accent: "Um fluxo que precisa de clareza.", description: "A carga fracionada passa por coleta, conferência, hubs, triagem, transferência e última entrega.", nodes: [
    { icon: "package", label: "Coleta", title: "Embarcadores e volumes", description: "Dados de remetentes, destinatários, notas, etiquetas e endereços." },
    { icon: "warehouse", label: "Hub", title: "Recebimento e triagem", description: "Conferência, separação, roteirização e movimentação entre unidades." },
    { icon: "route", label: "Rota", title: "Parceiros e motoristas", description: "Escalas, acessos, rastreio, contato e informações da viagem." },
    { icon: "telemetry", label: "Acompanhamento", title: "Status e ocorrências", description: "Eventos de transporte, desvios, alertas e tratativas." },
    { icon: "check", label: "Entrega", title: "Comprovante de recebimento", description: "Assinatura, imagem, geolocalização e atendimento ao destinatário." },
  ] },
  journey: { id: "jornada", pill: "Da coleta à entrega", title: "Cada passagem define", accent: "uma responsabilidade.", description: "Mapeie finalidade, acesso, compartilhamento e prazo antes que o volume avance para o próximo ponto.", stages: [
    { icon: "users", label: "Coleta", title: "Receber só o necessário", description: "Formulários, pedidos, endereços e contatos com finalidade definida." },
    { icon: "package", label: "Identificação", title: "Etiquetas e documentos", description: "Regras para impressão, conferência, visibilidade e descarte." },
    { icon: "hub", label: "Consolidação", title: "Separar e rotear", description: "Acessos por função nos hubs, sistemas e integrações." },
    { icon: "truck", label: "Transferência", title: "Compartilhar com controle", description: "Contratos, parceiros, motoristas e rastreio com papéis claros." },
    { icon: "check", label: "Última entrega", title: "Registrar o desfecho", description: "Comprovantes, tentativas, ocorrências e retenção documentada." },
  ] },
  priority: { id: "prioridades", pill: "Pontos de atenção", title: "Privacidade também é", accent: "disciplina operacional.", description: "Controles simples ajudam a reduzir exposição sem travar a movimentação da carga.", points: [
    { icon: "key", label: "Acessos", title: "Cada equipe vê o que precisa", description: "Perfis para atendimento, hub, roteirização, tecnologia e parceiros." },
    { icon: "file", label: "Documentos e integrações", title: "MDF-e, CIOT quando aplicável e sistemas da operação", description: "Mapeie onde há dados pessoais, quem acessa e quais responsabilidades existem." },
    { icon: "map-pin", label: "Rastreio", title: "Acompanhar sem expor", description: "Defina finalidade, visibilidade e prazo para telemetria e eventos." },
    { icon: "shield", label: "Incidentes", title: "Tratar ocorrências com método", description: "Canais, papéis, evidências e comunicação para cada cenário." },
  ] },
  support: { id: "apoio", pill: "Como a TOGETHER apoia", title: "Privacidade que acompanha", accent: "o ritmo do hub.", description: "Um apoio prático para organizar controles, contratos e rotinas com as áreas envolvidas.", items: [
    { icon: "analytics", title: "Diagnóstico do fluxo", description: "Mapeamos dados, sistemas, unidades, parceiros e prioridades.", emphasis: true },
    { icon: "network", title: "Mapa de compartilhamentos", description: "Visualizamos onde dados seguem entre embarcador, hub e entrega." },
    { icon: "file", title: "Contratos e fornecedores", description: "Revisamos responsabilidades, acessos e requisitos de privacidade." },
    { icon: "telemetry", title: "Rastreio e comprovantes", description: "Organizamos finalidade, acesso e retenção de eventos de rastreio e comprovantes de entrega." },
    { icon: "shield", title: "Incidentes e workshops", description: "Preparamos resposta, simulações e treinamentos por equipe." },
    { icon: "server", title: "Ferramentas e rotinas", description: "Apoiamos processos, registros e operação contínua." },
  ], ctaTitle: "Quer organizar a privacidade em um fluxo crítico da operação?", ctaText: "Avaliamos o contexto e dimensionamos o escopo inicial.", cta: "Agende uma Conversa" },
  proof: [{ value: "+5 anos", label: "atuando com privacidade e LGPD" }, { value: "+200", label: "atividades e entregas disponíveis" }, { value: "Multidisciplinar", label: "privacidade, tecnologia e processos" }, { value: "Prático", label: "controles que acompanham a operação" }],
  training: { id: "treinamentos", pill: "Treinamentos e workshops", title: "Cada equipe aprende o seu ponto do fluxo.", description: "Conteúdo por função, com registro de participação e conclusão.", audiences: ["Comercial, coleta e atendimento", "Hubs, triagem e roteirização", "Motoristas e parceiros", "Tecnologia, segurança e lideranças"] },
  faq: { pill: "Perguntas frequentes", title: "LGPD na carga", accent: "fracionada.", description: "Respostas diretas sobre privacidade no transporte fracionado.", items: [
    { question: "Quais dados aparecem no transporte fracionado?", answer: "Dados de embarcadores, destinatários, endereços, contatos, etiquetas, documentos, motoristas, rastreio, ocorrências e comprovantes de entrega." },
    { question: "Como organizar os dados que passam pelos hubs?", answer: "Mapeamos coleta, conferência, triagem, roteirização e transferência, definindo finalidade, acesso, compartilhamento e retenção em cada etapa." },
    { question: "Parceiros e motoristas entram no programa?", answer: "Sim. Contratos, perfis, instruções e registros ajudam a estabelecer responsabilidades para parceiros, agregados e equipes próprias." },
    { question: "CIOT e MDF-e fazem parte do mapeamento?", answer: "Sim. Consideramos as interfaces e os acessos aos sistemas usados na operação, sem confundir documentos regulatórios com controles de privacidade." },
    { question: "A TOGETHER apoia resposta a incidentes?", answer: "Sim. Organizamos papéis, canais, evidências, workshops e próximos passos para que a equipe responda com método." },
    { question: "O trabalho pode começar por um hub ou fluxo prioritário?", answer: "Sim. Podemos começar pela etapa com maior urgência, como coleta, triagem, rastreio, parceiros ou comprovantes, e ampliar o escopo conforme a necessidade da operação." },
  ] },
  finalCta: { pill: "LGPD para transporte fracionado", title: "Dê clareza ao uso de dados na carga fracionada.", description: "Avaliamos a demanda e indicamos como estruturar o projeto ou a rotina.", cta: "Agende uma Conversa", nextStep: "Uma conversa sobre a demanda, as áreas envolvidas e o escopo inicial." },
  campaignAnchors: [{ id: "fluxo", sectionKey: "context" }, { id: "privacy-by-design", sectionKey: "journey" }, { id: "fornecedores", sectionKey: "priority" }, { id: "dpo", sectionKey: "support" }, { id: "incidentes", sectionKey: "support" }, { id: "rastreio", sectionKey: "priority" }],
  sources: [
    { claim: "Registro e obrigações do transporte rodoviário de cargas (RNTRC)", url: "https://www.gov.br/antt/pt-br/assuntos/cargas/rntrc-1/perguntas-frequentes-rntrc", reviewedAt: "2026-08-27" },
    { claim: "CIOT para todos", url: "https://www.gov.br/antt/pt-br/assuntos/cargas/ciot-para-todos-1", reviewedAt: "2026-08-27" },
    { claim: "Perguntas frequentes sobre CIOT", url: "https://www.gov.br/antt/pt-br/assuntos/cargas/ciot-para-todos-1/perguntas-frequentes/perguntas-frequentes-ciot/", reviewedAt: "2026-08-27" },
    { claim: "Vale-Pedágio Obrigatório", url: "https://www.gov.br/antt/pt-br/assuntos/cargas/vale-pedagio-obrigatorio/perguntas-frequentes-vpo", reviewedAt: "2026-08-27" },
    { claim: "Transporte rodoviário de cargas", url: "https://www.gov.br/antt/pt-br/a-antt/o-transporte-de-cargas", reviewedAt: "2026-08-27" },
    { claim: "Lei Geral de Proteção de Dados", url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm", reviewedAt: "2026-08-27" },
    { claim: "Comunicação de incidente de segurança", url: "https://www.gov.br/anpd/pt-br/canais_atendimento/agente-de-tratamento/comunicado-de-incidente-de-seguranca-cis", reviewedAt: "2026-08-27" },
  ],
} as const satisfies SectorIndustryContent;
