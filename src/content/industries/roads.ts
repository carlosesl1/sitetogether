import type { RoadsIndustryContent } from "@/components/industry/industry-page-types";

const imageBase = "/images/industries/roads";

export const roadsIndustryContent = {
  sector: "gestao-de-rodovias",
  metadata: {
    title: "Privacidade e LGPD para Gestão de Rodovias",
    description:
      "Privacidade para concessionárias e operadoras rodoviárias: projetos, free flow, fornecedores, DPO, incidentes, tecnologia e treinamentos.",
    canonical: "/solucoes/privacidade-gestao-de-rodovias",
  },
  hero: {
    pill: "Privacidade para gestão de rodovias",
    title:
      "Privacidade incorporada à operação rodoviária, do projeto ao free flow.",
    description:
      "A TOGETHER estrutura privacidade ao longo do ciclo da operação — projetos, sistemas, pórticos, fornecedores, equipes e atendimento — com processos, tecnologia e evidências adequados ao contexto da organização.",
    cta: "Agende uma Conversa",
    image: {
      desktop: {
        avif: `${imageBase}/hero-desktop.avif`,
        webp: `${imageBase}/hero-desktop.webp`,
        png: `${imageBase}/hero-desktop.png`,
        width: 1717,
        height: 916,
      },
      mobile: {
        avif: `${imageBase}/hero-mobile.avif`,
        webp: `${imageBase}/hero-mobile.webp`,
        png: `${imageBase}/hero-mobile.png`,
        width: 941,
        height: 1672,
      },
    },
  },
  proof: [
    { value: "+5 anos", label: "de atuação em privacidade e LGPD" },
    { value: "+200", label: "atividades e entregáveis no catálogo" },
    {
      value: "Equipe multidisciplinar",
      label: "privacidade, tecnologia e operação",
    },
    {
      value: "Tecnologia",
      label: "experiência prática com plataformas de privacidade",
    },
  ],
  context: {
    pill: "Dados em movimento",
    title: "A operação conecta pessoas, veículos, sistemas e parceiros.",
    description:
      "Privacidade atravessa a jornada do usuário e também os bastidores da concessão. O primeiro passo é entender onde os dados entram, circulam e sustentam decisões.",
    nodes: [
      {
        label: "Entrada",
        title: "Usuários, contas e veículos",
        description: "Cadastros, placas, TAGs, aplicativos e atendimento.",
      },
      {
        label: "Identificação",
        title: "Pórticos e sistemas",
        description: "Imagens, OCR/ANPR, sensores, classificação e logs.",
      },
      {
        label: "Transação",
        title: "Pagamento e contestação",
        description:
          "Meios de pagamento, conciliação, cobrança e correção de erros.",
      },
      {
        label: "Ecossistema",
        title: "Fornecedores e integrações",
        description: "Operadores, nuvem, suporte, subcontratados e acessos.",
      },
      {
        label: "Operação",
        title: "Equipes e titulares",
        description: "Colaboradores, canais, solicitações e evidências.",
      },
    ],
  },
  lifecycle: {
    pill: "Ciclo do ativo",
    title: "Privacidade começa antes do go-live e continua na rotina.",
    description:
      "Requisitos definidos cedo reduzem retrabalho e ajudam cada área a assumir sua responsabilidade.",
    stages: [
      {
        label: "Viabilidade",
        title: "Entender o uso dos dados",
        description: "Finalidades, atores, riscos e premissas do projeto.",
      },
      {
        label: "Contratação",
        title: "Levar requisitos aos fornecedores",
        description: "Escopo, papéis, acessos, segurança e evidências.",
      },
      {
        label: "Implantação",
        title: "Configurar processos e controles",
        description: "Arquitetura, retenção, perfis e testes.",
      },
      {
        label: "Go-live",
        title: "Validar antes da entrada em produção",
        description: "Avisos, canais, responsáveis e runbooks.",
      },
      {
        label: "Operação",
        title: "Acompanhar e evoluir",
        description: "Titulares, incidentes, terceiros e planos de ação.",
      },
    ],
  },
  freeFlow: {
    pill: "Free flow e identificação automática",
    title: "A tecnologia precisa operar com regras claras para os dados.",
    description:
      "A TOGETHER ajuda a organizar as decisões e os controles que envolvem placas, imagens, pagamentos, integrações e atendimento.",
    controls: [
      {
        label: "Finalidade",
        title: "Definir por que cada dado é necessário",
        description: "Relacionar o tratamento ao serviço e ao fluxo real.",
      },
      {
        label: "Acesso",
        title: "Controlar quem consulta e altera",
        description: "Perfis, logs, segregação e rastreabilidade.",
      },
      {
        label: "Retenção",
        title: "Aplicar prazos compatíveis",
        description:
          "Regras operacionais, legais e de contestação documentadas.",
      },
      {
        label: "Titulares",
        title: "Tratar erros e solicitações",
        description: "Canais, registros, responsáveis e resposta coordenada.",
      },
    ],
  },
  capabilities: {
    pill: "Capacidade TOGETHER",
    title: "Especialistas para transformar requisitos em operação.",
    description:
      "A atuação é dimensionada conforme o momento do projeto, os sistemas envolvidos e a capacidade necessária.",
    items: [
      {
        title: "Diagnóstico e priorização",
        description: "Cenário atual, lacunas, riscos e plano de ação.",
        tone: "light",
      },
      {
        title: "Mapeamento de dados e agentes",
        description: "Fluxos, finalidades, papéis, sistemas e compartilhamentos.",
        tone: "light",
      },
      {
        title: "Privacy by design",
        description: "Requisitos incorporados ao projeto e ao go-live.",
        tone: "brand-compact",
      },
      {
        title: "Processos, controles e evidências",
        description: "Rotinas verificáveis e responsáveis definidos.",
        tone: "dark",
      },
      {
        title: "Governança de fornecedores",
        description: "Due diligence, contratos, acessos e subprocessadores.",
        tone: "light",
      },
      {
        title: "Tecnologia de privacidade",
        description:
          "Configuração e operação de plataformas e ferramentas.",
        tone: "light",
      },
      {
        title: "DPO e titulares",
        description:
          "Canal, registros, acompanhamento e apoio ao encarregado.",
        tone: "light",
      },
      {
        title: "Incidentes e continuidade",
        description:
          "Runbooks, escalonamento, simulações e planos de ação.",
        tone: "light",
      },
    ],
    ctaTitle: "Quer avaliar uma frente da operação?",
    ctaText:
      "Uma conversa inicial ajuda a dimensionar o contexto e o próximo passo.",
    cta: "Agende uma Conversa",
  },
  privacyByDesign: {
    pill: "Privacidade desde o projeto",
    title: "Decisões melhores antes da operação entrar no ar.",
    description:
      "Engenharia, tecnologia, compras e jurídico recebem critérios objetivos para contratar, configurar, testar e aprovar.",
    steps: [
      {
        label: "Requisitos",
        title: "RFPs e contratos",
        description:
          "Papéis, medidas, evidências e obrigações definidos no escopo.",
      },
      {
        label: "Arquitetura",
        title: "Sistemas e integrações",
        description:
          "Dados, acessos, retenção, localização e subprocessadores.",
      },
      {
        label: "Validação",
        title: "Testes antes do go-live",
        description:
          "Controles, avisos, canais, logs e responsáveis verificados.",
      },
    ],
  },
  operations: {
    pill: "Operação contínua",
    title: "Privacidade precisa continuar funcionando depois da implantação.",
    description:
      "A rotina reúne atendimento, incidentes, terceiros, acessos e evolução do programa em uma cadência acompanhada.",
    routines: [
      {
        label: "DPO e titulares",
        title: "Canal e registros",
        description:
          "Triagem, responsáveis, prazos e histórico das solicitações.",
      },
      {
        label: "Incidentes",
        title: "Resposta coordenada",
        description:
          "Escalonamento, evidências, avaliação e ações registradas.",
      },
      {
        label: "Terceiros",
        title: "Revisão recorrente",
        description:
          "Acessos, contratos, subprocessadores e planos de ação.",
      },
      {
        label: "Programa",
        title: "Evolução acompanhada",
        description: "Indicadores, pendências, decisões e continuidade.",
      },
    ],
  },
  training: {
    pill: "Treinamentos e workshops",
    title: "Cada equipe entende o que precisa fazer na prática.",
    description:
      "Conteúdo adaptado às funções, com registro de participação e evidências de conclusão.",
    audiences: [
      "Engenharia e projetos",
      "Pórticos e CCO",
      "Tecnologia e segurança",
      "RH e compras",
      "Fornecedores",
      "Atendimento e incidentes",
      "Lideranças",
    ],
  },
  international: {
    pill: "Brasil e atuação internacional",
    title: "O fluxo real define quais requisitos entram no escopo.",
    description:
      "Analisamos LGPD, GDPR quando aplicável, nuvem, suporte estrangeiro, fornecedores e transferências internacionais a partir dos contratos, pessoas afetadas e localização dos dados.",
  },
  method: {
    pill: "Como começamos",
    title: "Da prioridade à execução, com responsabilidades visíveis.",
    description:
      "A TOGETHER pode entrar em uma frente específica ou acompanhar a operação continuamente.",
    stages: [
      {
        label: "Entender",
        title: "Mapear o contexto",
        description: "Operação, prioridade, sistemas, atores e restrições.",
      },
      {
        label: "Definir",
        title: "Dimensionar o trabalho",
        description:
          "Escopo, responsáveis, entregáveis e aprovações.",
      },
      {
        label: "Implantar",
        title: "Executar e acompanhar",
        description:
          "Processos, tecnologia, evidências e planos de ação.",
      },
      {
        label: "Sustentar",
        title: "Transferir e evoluir",
        description: "Treinamento, rotina, indicadores e continuidade.",
      },
    ],
  },
  faq: {
    pill: "Perguntas frequentes",
    title: "Privacidade na operação",
    accent: "rodoviária.",
    description: "Respostas para avaliar o primeiro passo com clareza.",
    items: [
      {
        question: "Onde a LGPD aparece na operação de uma rodovia?",
        answer:
          "Em cadastros, placas, imagens, pagamentos, aplicativos, atendimento, colaboradores, fornecedores, sistemas e integrações. O escopo concreto depende dos fluxos e papéis existentes em cada operação.",
      },
      {
        question:
          "Como a TOGETHER apoia projetos de free flow e pedágio digital?",
        answer:
          "Apoiamos o mapeamento de dados e agentes, a definição de finalidades, acessos, retenção, transparência, logs, fornecedores, atendimento e evidências necessárias ao projeto.",
      },
      {
        question:
          "A atuação pode começar ainda na fase de projeto ou contratação?",
        answer:
          "Sim. Requisitos de privacidade podem entrar em RFPs, contratos, arquitetura, integrações, testes e critérios de go-live, reduzindo retrabalho posterior.",
      },
      {
        question:
          "A TOGETHER pode apoiar DPO, titulares e incidentes depois do go-live?",
        answer:
          "Sim. A atuação pode incluir canais, registros, rotinas do encarregado, triagem de solicitações, runbooks, simulações e acompanhamento das ações definidas.",
      },
      {
        question:
          "Como são tratados fornecedores e transferências internacionais?",
        answer:
          "Mapeamos papéis, acessos, localização dos dados, subprocessadores e mecanismos aplicáveis. A conclusão depende do contrato e do fluxo real, não de uma regra genérica.",
      },
      {
        question:
          "A TOGETHER já possui um case específico no setor rodoviário?",
        answer:
          "Ainda não temos experiência nem case específico no setor rodoviário. Nossa experiência está na estruturação e operação de programas de privacidade, processos, tecnologia e evidências. Aplicamos essa metodologia ao contexto real da concessionária, com escopo definido a partir dos contratos, sistemas, fornecedores e fluxos de dados envolvidos.",
      },
    ],
  },
  finalCta: {
    pill: "Privacidade para gestão de rodovias",
    title: "Leve privacidade para dentro da operação rodoviária.",
    description:
      "Em uma conversa inicial, entendemos o momento da operação, os sistemas e a prioridade para definir onde a TOGETHER pode apoiar.",
    cta: "Agende uma Conversa",
    nextStep:
      "Uma conversa inicial sobre a operação, a prioridade e o escopo possível.",
  },
  sources: [
    {
      claim: "Ciclo de concessões, operação, manutenção e expansão",
      url: "https://www.gov.br/antt/pt-br/assuntos/rodovias/informacoes-gerais",
      reviewedAt: "2026-08-27",
    },
    {
      claim: "Estruturação e viabilidade de novos projetos rodoviários",
      url: "https://www.gov.br/antt/pt-br/assuntos/rodovias/novos-projetos-em-rodovias",
      reviewedAt: "2026-08-27",
    },
    {
      claim: "Funcionamento institucional do free flow",
      url: "https://www.gov.br/antt/pt-br/free-flow/o-que-e-o-free-flow",
      reviewedAt: "2026-08-27",
    },
    {
      claim:
        "Identificação automática, imagem, OCR e retenção aplicável",
      url: "https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucoes/Resolucao10132024.pdf/@@download/file",
      reviewedAt: "2026-08-27",
    },
    {
      claim: "Comunicação de incidente de segurança",
      url: "https://www.gov.br/anpd/pt-br/canais_atendimento/agente-de-tratamento/comunicado-de-incidente-de-seguranca-cis",
      reviewedAt: "2026-08-27",
    },
    {
      claim: "Transferência internacional de dados",
      url: "https://www.gov.br/anpd/pt-br/assuntos/assuntos-internacionais/transferencia-internacional-de-dados",
      reviewedAt: "2026-08-27",
    },
    {
      claim: "Aplicação da LGPD",
      url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm",
      reviewedAt: "2026-08-27",
    },
    {
      claim: "Aplicação territorial do GDPR",
      url: "https://eur-lex.europa.eu/legal-content/PT/TXT/?uri=CELEX:32016R0679",
      reviewedAt: "2026-08-27",
    },
  ],
  campaignAnchors: [
    { id: "free-flow", sectionKey: "freeFlow" },
    { id: "privacy-by-design", sectionKey: "privacyByDesign" },
    { id: "fornecedores", sectionKey: "privacyByDesign" },
    { id: "dpo", sectionKey: "operations" },
    { id: "incidentes", sectionKey: "operations" },
    { id: "internacional", sectionKey: "international" },
  ],
} as const satisfies RoadsIndustryContent;
