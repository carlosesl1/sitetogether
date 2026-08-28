import type { RoadsIndustryContent } from "@/components/industry/industry-page-types";

const imageBase = "/images/industries/roads";

export const roadsIndustryContent = {
  sector: "gestao-de-rodovias",
  metadata: {
    title: "Privacidade e LGPD para Gestão de Rodovias",
    description:
      "LGPD para concessionárias e operadoras rodoviárias: projetos, free flow, fornecedores, DPO, incidentes e treinamentos.",
    canonical: "/solucoes/privacidade-gestao-de-rodovias",
  },
  hero: {
    pill: "LGPD para operações rodoviárias",
    title: "Organize a privacidade da operação, do projeto ao",
    accent: "pedágio digital.",
    description:
      "A TOGETHER ajuda concessionárias e operadoras a organizar dados, sistemas, fornecedores, solicitações e incidentes, com responsabilidades e próximos passos claros.",
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
    { value: "+5 anos", label: "atuando com privacidade e LGPD" },
    { value: "+200", label: "atividades e entregas disponíveis" },
    {
      value: "Equipe multidisciplinar",
      label: "especialistas em privacidade, tecnologia e processos",
    },
    {
      value: "Tecnologia",
      label: "prática com as principais plataformas de privacidade",
    },
  ],
  context: {
    pill: "Onde os dados circulam",
    title: "Uma rodovia também é",
    accent: "uma operação de dados.",
    description:
      "Cadastros, placas, imagens, pagamentos, aplicativos e fornecedores fazem parte da rotina.",
    emphasis:
      "Identificamos onde os dados entram, quem os usa e os",
    emphasisAccent: "controles necessários em cada etapa.",
    nodes: [
      {
        label: "Entrada",
        title: "Usuários e veículos",
        description: "Cadastros, placas, TAGs, aplicativos e atendimento.",
      },
      {
        label: "Identificação",
        title: "Pórticos e sistemas",
        description: "Imagens, leitura de placas, sensores e registros.",
      },
      {
        label: "Transação",
        title: "Pagamento e contestação",
        description:
          "Cobrança, meios de pagamento, conciliação e correção de erros.",
      },
      {
        label: "Ecossistema",
        title: "Fornecedores e integrações",
        description: "Operadores, nuvem, suporte e outros acessos.",
      },
      {
        label: "Atendimento",
        title: "Pessoas e equipes",
        description: "Colaboradores, solicitações e registros de atendimento.",
      },
    ],
  },
  lifecycle: {
    pill: "Do projeto à operação",
    title: "A LGPD precisa entrar no projeto",
    accent: "antes do sistema entrar no ar.",
    description:
      "Definir os cuidados com os dados desde o início reduz retrabalho e evita ajustes de última hora.",
    stages: [
      {
        label: "Viabilidade",
        title: "Entender quais dados serão usados",
        description: "Objetivo, pessoas, riscos e necessidades do projeto.",
      },
      {
        label: "Contratação",
        title: "Definir exigências para fornecedores",
        description:
          "Responsabilidades, acessos, segurança, contratos e comprovações.",
      },
      {
        label: "Implantação",
        title: "Ajustar sistemas e processos",
        description: "Acessos, guarda, integrações, responsáveis e testes.",
      },
      {
        label: "Entrada em operação",
        title: "Confirmar se tudo está pronto",
        description: "Avisos, canais, responsáveis e plano de resposta.",
      },
      {
        label: "Rotina",
        title: "Acompanhar e melhorar",
        description: "Atendimento, incidentes, fornecedores e pendências.",
      },
    ],
  },
  freeFlow: {
    pill: "Free flow e pedágio digital",
    title: "Placas, imagens e pagamentos",
    accent: "precisam de regras claras.",
    description:
      "Definimos quais dados são necessários, quem acessa, por quanto tempo são guardados e como corrigir problemas.",
    controls: [
      {
        label: "Necessidade",
        title: "Coletar somente o necessário",
        description: "Cada dado precisa ter uma finalidade clara.",
      },
      {
        label: "Acesso",
        title: "Definir quem pode acessar",
        description:
          "Permissões e registros mostram quem consultou ou alterou dados.",
      },
      {
        label: "Armazenamento",
        title: "Definir por quanto tempo guardar",
        description:
          "Prazos legais, operacionais e de contestação precisam estar documentados.",
      },
      {
        label: "Atendimento",
        title: "Corrigir erros e responder solicitações",
        description: "Canais, prazos e responsáveis precisam funcionar.",
      },
    ],
  },
  capabilities: {
    pill: "Como a TOGETHER apoia",
    title: "Uma equipe para",
    accent: "colocar a LGPD em prática.",
    description: "O apoio pode ser pontual ou acompanhar a operação.",
    items: [
      {
        title: "Diagnóstico e plano de ação",
        description: "Identificamos problemas, prioridades e próximos passos.",
      },
      {
        title: "Mapeamento do uso de dados",
        description:
          "Mostramos onde os dados entram, circulam e são compartilhados.",
      },
      {
        title: "Privacidade desde o projeto",
        description: "Incluímos privacidade antes da entrada em operação.",
      },
      {
        title: "Processos e comprovações",
        description: "Criamos rotinas, controles e registros demonstráveis.",
      },
      {
        title: "Controle de fornecedores",
        description: "Revisamos contratos, acessos e empresas envolvidas.",
      },
      {
        title: "Ferramentas de privacidade",
        description: "Configuramos e operamos plataformas de privacidade.",
      },
    ],
    ctaTitle: "Quer avaliar uma necessidade da operação?",
    ctaText: "Ajudamos a definir o escopo e o próximo passo.",
    cta: "Agende uma Conversa",
  },
  operations: {
    pill: "Depois da implantação",
    title: "A privacidade precisa funcionar",
    accent: "todos os dias.",
    description:
      "Apoiamos atendimento, incidentes, fornecedores e evolução do programa.",
    routines: [
      {
        label: "Atendimento",
        title: "DPO e solicitações organizadas",
        description:
          "Canal, responsáveis, prazos e histórico de cada solicitação.",
      },
      {
        label: "Incidentes",
        title: "Resposta sem improviso",
        description: "Plano, responsáveis e ações ficam registrados.",
      },
      {
        label: "Continuidade",
        title: "Fornecedores e melhoria contínua",
        description:
          "Acessos, contratos, pendências e próximos passos são acompanhados.",
      },
    ],
  },
  training: {
    pill: "Treinamentos e workshops",
    title: "Cada equipe aprende o que precisa fazer.",
    description: "Treinamentos por área, com registro de participação e conclusão.",
    audiences: [
      "Projetos, engenharia e compras",
      "Operação, CCO e atendimento",
      "Tecnologia e segurança",
      "Lideranças e fornecedores",
    ],
  },
  international: {
    pill: "Brasil e atuação internacional",
    title: "Dados em outros países exigem",
    accent: "uma análise específica.",
    description:
      "Analisamos onde os dados ficam, quem acessa e quais regras se aplicam à nuvem, ao suporte ou a fornecedores no exterior. Consideramos LGPD e, quando necessário, GDPR.",
    illustration: {
      src: `${imageBase}/international-data-routes-v3.png`,
      width: 1254,
      height: 1254,
      alt: "Ilustração minimalista de rodovia, ponte e túnel conectados por pontos de dados internacionais",
    },
  },
  faq: {
    pill: "Perguntas frequentes",
    title: "LGPD em operações",
    accent: "rodoviárias.",
    description: "Respostas diretas para avaliar se a TOGETHER pode ajudar.",
    items: [
      {
        question: "Onde a LGPD aparece na operação?",
        answer:
          "Em cadastros, placas, imagens, pagamentos, aplicativos, equipes, fornecedores e sistemas. O escopo depende de como cada operação usa e compartilha esses dados.",
      },
      {
        question:
          "Como a TOGETHER apoia projetos de free flow e pedágio digital?",
        answer:
          "Mapeamos dados, finalidades, acessos, prazos e fornecedores. Também organizamos atendimento, correção de erros e resposta a incidentes.",
      },
      {
        question: "Podemos atuar antes da entrada em operação?",
        answer:
          "Sim. Regras de privacidade podem entrar em contratos, sistemas, integrações e testes, reduzindo ajustes posteriores.",
      },
      {
        question: "A TOGETHER apoia a operação contínua?",
        answer:
          "Sim. Organizamos DPO, titulares, incidentes, fornecedores, registros e treinamentos conforme o escopo.",
      },
      {
        question: "A TOGETHER já possui um case no setor rodoviário?",
        answer:
          "Ainda não temos experiência nem case específico no setor rodoviário. Nossa experiência está na implantação e operação de programas de privacidade, aplicada depois de entendermos contratos, sistemas, fornecedores e fluxos da concessionária.",
      },
    ],
  },
  finalCta: {
    pill: "LGPD para operações rodoviárias",
    title: "Coloque a LGPD em prática na operação rodoviária.",
    description:
      "Entendemos sua prioridade e mostramos como apoiar o projeto ou a rotina.",
    cta: "Agende uma Conversa",
    nextStep:
      "Uma conversa sobre a demanda, as áreas envolvidas e o próximo passo.",
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
    { id: "privacy-by-design", sectionKey: "lifecycle" },
    { id: "fornecedores", sectionKey: "lifecycle" },
    { id: "dpo", sectionKey: "capabilities" },
    { id: "incidentes", sectionKey: "capabilities" },
    { id: "internacional", sectionKey: "international" },
  ],
} as const satisfies RoadsIndustryContent;
