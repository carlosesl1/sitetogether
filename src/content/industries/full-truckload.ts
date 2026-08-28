import type { SectorIndustryContent } from "@/components/industry/industry-page-types";

const imageBase = "/images/industries/full-truckload";

export const fullTruckloadIndustryContent = {
  sector: "transporte-lotacao",
  visualFamily: "direct-route",
  metadata: { title: "Privacidade e LGPD para carga lotação", description: "LGPD para carga lotação: viagens dedicadas, embarcador, transportadora, motorista, telemetria, torre de controle e incidentes.", canonical: "/solucoes/privacidade-transporte-lotacao", socialAlt: "Caminhão dedicado em rota clara com sinais de telemetria" },
  hero: { pill: "LGPD para carga lotação", title: "Privacidade conectada à operação de carga lotação.", accent: "Do embarcador à entrega.", description: "Organize dados de embarcador, transportadora, motorista, veículo e gestores de risco em cada viagem dedicada.", cta: "Agende uma Conversa", image: { desktop: { avif: `${imageBase}/hero-desktop.avif`, webp: `${imageBase}/hero-desktop.webp`, png: `${imageBase}/hero-desktop.png`, width: 1672, height: 941 }, mobile: { avif: `${imageBase}/hero-mobile.avif`, webp: `${imageBase}/hero-mobile.webp`, png: `${imageBase}/hero-mobile.png`, width: 941, height: 1672 } } },
  context: { id: "viagem", pill: "Onde os dados circulam", title: "Uma viagem dedicada conecta", accent: "pessoas, veículo e decisão.", description: "Na carga lotação, um embarcador orienta uma operação com origem, destino e acompanhamento definidos.", nodes: [
    { icon: "building", label: "Embarcador", title: "Origem e destino", description: "Pedidos, contatos, endereços, carga e janelas de coleta e entrega." },
    { icon: "truck", label: "Transportadora", title: "Tripulação e veículo", description: "Escala, documentos operacionais, acessos e responsabilidades." },
    { icon: "users", label: "Motorista", title: "Contato em campo", description: "Identificação, comunicação, jornada e suporte à viagem." },
    { icon: "telemetry", label: "Torre de controle", title: "Telemetria e risco", description: "Localização, alertas, desvios e decisões de gestores de risco." },
    { icon: "check", label: "Entrega", title: "Confirmação do destino", description: "Comprovante, ocorrência, atendimento e registros da conclusão." },
  ] },
  journey: { id: "jornada", pill: "Do embarcador à entrega", title: "Uma rota dedicada pede", accent: "regras bem definidas.", description: "Defina propósito, acesso e retenção para que cada participante veja o necessário da viagem.", stages: [
    { icon: "building", label: "Embarque", title: "Definir a necessidade", description: "Origem, destino, carga, contatos e instruções com finalidade clara." },
    { icon: "file", label: "Contratação", title: "Combinar responsabilidades", description: "Transportadora, motorista, acessos, segurança e fornecedores." },
    { icon: "route", label: "Trânsito", title: "Acompanhar a rota", description: "Telemetria e alertas disponíveis para quem precisa decidir." },
    { icon: "shield", label: "Gestão de risco", title: "Tratar desvios", description: "Escalonamento, evidências e comunicação para incidentes." },
    { icon: "check", label: "Entrega", title: "Encerrar e guardar", description: "Comprovante, ocorrências e prazo de retenção documentado." },
  ] },
  priority: { id: "prioridades", pill: "Pontos de atenção", title: "Controle de dados sem perder", accent: "a visão da rota.", description: "Controles proporcionais protegem a operação e mantêm as decisões no tempo certo.", points: [
    { icon: "key", label: "Acesso", title: "Torre e parceiros com perfis", description: "Separe consultas de embarcador, transportadora, segurança e atendimento." },
    { icon: "file", label: "Regulação", title: "CIOT e MDF-e no contexto", description: "Registre sistemas, integrações e responsáveis sem substituir documentos fiscais." },
    { icon: "telemetry", label: "Telemetria", title: "Rota com visibilidade adequada", description: "Defina finalidade, granularidade, compartilhamento e prazo dos eventos." },
    { icon: "shield", label: "Prontidão", title: "Incidentes com procedimento", description: "Mantenha canais, papéis, evidências e workshops atualizados." },
  ] },
  support: { id: "apoio", pill: "Como a TOGETHER apoia", title: "Privacidade alinhada", accent: "à viagem dedicada.", description: "Apoiamos embarcador, transportadora e equipes de controle na construção de rotinas aplicáveis.", items: [
    { icon: "analytics", title: "Diagnóstico da operação", description: "Mapeamos pessoas, sistemas, dados e decisões da rota.", emphasis: true },
    { icon: "network", title: "Responsabilidades e contratos", description: "Organizamos papéis entre embarcador, transportadora, motorista e parceiros." },
    { icon: "telemetry", title: "Telemetria e torre", description: "Definimos acesso, finalidade, retenção e respostas para alertas." },
    { icon: "file", title: "Interfaces regulatórias", description: "Documentamos CIOT, MDF-e e demais sistemas no mapa de dados." },
    { icon: "shield", title: "Incidentes e workshops", description: "Preparamos resposta, simulações e treinamentos por equipe." },
    { icon: "server", title: "Processos contínuos", description: "Acompanhamos solicitações, fornecedores e evolução do programa." },
  ], ctaTitle: "Quer dar clareza à rota dedicada?", ctaText: "Ajudamos a definir o escopo e o próximo passo.", cta: "Agende uma Conversa" },
  proof: [{ value: "+5 anos", label: "atuando com privacidade e LGPD" }, { value: "+200", label: "atividades e entregas disponíveis" }, { value: "Multidisciplinar", label: "privacidade, tecnologia e processos" }, { value: "Prático", label: "controles conectados à operação" }],
  training: { id: "treinamentos", pill: "Treinamentos e workshops", title: "Cada papel entende sua responsabilidade.", description: "Conteúdo por função, com registro de participação e conclusão.", audiences: ["Embarcadores e atendimento", "Transportadoras e gestores de frota", "Motoristas e parceiros", "Torre de controle, risco e tecnologia"] },
  faq: { pill: "Perguntas frequentes", title: "LGPD na carga", accent: "lotação.", description: "Respostas diretas para avaliar o próximo passo.", items: [
    { question: "O que é carga lotação neste contexto?", answer: "É a operação de viagem dedicada a um embarcador, com origem e destino definidos. FTL pode ser usado como referência comercial, mas não é uma categoria regulatória da ANTT." },
    { question: "Quais dados aparecem em uma viagem dedicada?", answer: "Dados de embarcador, contatos, origem, destino, carga, transportadora, motorista, veículo, telemetria, alertas, ocorrências e comprovantes." },
    { question: "Quem deve acessar a telemetria?", answer: "O acesso deve seguir a finalidade e a função: torre, gestores de risco, atendimento e parceiros recebem apenas a visibilidade necessária." },
    { question: "CIOT e MDF-e entram no mapeamento?", answer: "Sim. Consideramos suas interfaces, sistemas e responsáveis no fluxo de dados, sem afirmar que um documento substitui outro." },
    { question: "Como preparar a equipe para incidentes?", answer: "Com papéis, canais, evidências, critérios de escalonamento e workshops que simulem desvios e indisponibilidades." },
    { question: "A atuação pode ser pontual ou contínua?", answer: "Pode ser pontual para uma prioridade, como telemetria, contratos ou incidentes, ou contínua para acompanhar fornecedores, solicitações e a evolução dos controles." },
  ] },
  finalCta: { pill: "LGPD para carga lotação", title: "Conecte privacidade à rota dedicada.", description: "Entendemos a operação e mostramos como apoiar o projeto ou a rotina.", cta: "Agende uma Conversa", nextStep: "Uma conversa sobre a demanda, as áreas envolvidas e o próximo passo." },
  campaignAnchors: [{ id: "viagem", sectionKey: "context" }, { id: "privacy-by-design", sectionKey: "journey" }, { id: "fornecedores", sectionKey: "priority" }, { id: "dpo", sectionKey: "support" }, { id: "incidentes", sectionKey: "support" }, { id: "telemetria", sectionKey: "priority" }],
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
