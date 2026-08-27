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
    title:
      "Organize a privacidade da operação — do projeto ao pedágio digital.",
    description:
      "A TOGETHER ajuda concessionárias e operadoras a definir como os dados serão usados, ajustar sistemas e fornecedores, atender solicitações e preparar a resposta a incidentes. Tudo com responsabilidades e próximos passos claros.",
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
    title: "Uma rodovia também é uma operação de dados.",
    description:
      "Cadastros, placas, imagens, pagamentos, aplicativos e fornecedores fazem parte da rotina. A TOGETHER mostra onde os dados entram, quem os utiliza e quais cuidados são necessários.",
    nodes: [
      {
        label: "Entrada",
        title: "Usuários e veículos",
        description: "Cadastros, placas, TAGs, aplicativos e atendimento.",
      },
      {
        label: "Identificação",
        title: "Pórticos e sistemas",
        description:
          "Imagens, leitura automática de placas, sensores e registros dos sistemas.",
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
        description:
          "Operadores, nuvem, suporte e empresas com acesso aos dados.",
      },
      {
        label: "Atendimento",
        title: "Pessoas e equipes",
        description:
          "Colaboradores, solicitações de pessoas e registros do atendimento.",
      },
    ],
  },
  lifecycle: {
    pill: "Do projeto à operação",
    title: "A LGPD precisa entrar no projeto antes do sistema entrar no ar.",
    description:
      "Definir os cuidados com os dados desde o início reduz retrabalho e evita ajustes de última hora.",
    stages: [
      {
        label: "Viabilidade",
        title: "Entender quais dados serão usados",
        description:
          "Objetivo, pessoas envolvidas, riscos e necessidades do projeto.",
      },
      {
        label: "Contratação",
        title: "Definir exigências para fornecedores",
        description: "Responsabilidades, acessos, segurança e comprovações.",
      },
      {
        label: "Implantação",
        title: "Ajustar sistemas e processos",
        description: "Acessos, prazos de guarda, responsáveis e testes.",
      },
      {
        label: "Entrada em operação",
        title: "Confirmar se tudo está pronto",
        description:
          "Avisos, canais, responsáveis e plano para situações críticas.",
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
    title: "Placas, imagens e pagamentos precisam de regras claras.",
    description:
      "A TOGETHER ajuda sua equipe a decidir quais dados são necessários, quem pode acessá-los, por quanto tempo serão guardados e como corrigir problemas.",
    controls: [
      {
        label: "Necessidade",
        title: "Coletar somente o necessário",
        description: "Cada dado precisa ter uma finalidade ligada ao serviço.",
      },
      {
        label: "Acesso",
        title: "Definir quem pode acessar",
        description:
          "Permissões e registros mostram quem consultou ou alterou informações.",
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
        description: "Canais, prazos e responsáveis precisam funcionar na prática.",
      },
    ],
  },
  capabilities: {
    pill: "Como a TOGETHER apoia",
    title: "Uma equipe para colocar a LGPD em prática.",
    description:
      "O apoio pode começar em uma demanda específica ou acompanhar toda a operação.",
    items: [
      {
        title: "Diagnóstico e plano de ação",
        description: "Identificamos problemas, prioridades e próximos passos.",
        tone: "light",
      },
      {
        title: "Mapeamento do uso de dados",
        description:
          "Mostramos onde os dados entram, circulam e são compartilhados.",
        tone: "light",
      },
      {
        title: "Privacidade desde o projeto",
        description:
          "Incluímos os cuidados com os dados antes da entrada em operação.",
        tone: "brand-compact",
      },
      {
        title: "Processos e comprovações",
        description:
          "Criamos rotinas, controles e registros que podem ser demonstrados.",
        tone: "dark",
      },
      {
        title: "Controle de fornecedores",
        description: "Revisamos contratos, acessos e empresas envolvidas.",
        tone: "light",
      },
      {
        title: "Ferramentas de privacidade",
        description:
          "Configuramos e apoiamos a operação das plataformas necessárias.",
        tone: "light",
      },
      {
        title: "Apoio ao DPO e às pessoas",
        description:
          "Organizamos canais, registros e acompanhamento das solicitações.",
        tone: "light",
      },
      {
        title: "Resposta a incidentes",
        description:
          "Preparamos o plano de resposta, testes e acompanhamento das ações.",
        tone: "light",
      },
    ],
    ctaTitle: "Quer avaliar uma necessidade da operação?",
    ctaText:
      "Conte o que está acontecendo. Ajudamos a definir o escopo e o próximo passo.",
    cta: "Agende uma Conversa",
  },
  privacyByDesign: {
    pill: "Privacidade desde o projeto",
    title: "Evite descobrir problemas quando a operação já estiver pronta.",
    description:
      "A TOGETHER ajuda engenharia, tecnologia, compras e jurídico a incluir regras de privacidade nas decisões do projeto.",
    steps: [
      {
        label: "Contratação",
        title: "Contratos e concorrências",
        description:
          "Responsabilidades, medidas de segurança e comprovações entram no escopo.",
      },
      {
        label: "Arquitetura",
        title: "Sistemas e integrações",
        description:
          "Definimos dados, acessos, prazos de guarda, localização e fornecedores.",
      },
      {
        label: "Validação",
        title: "Testes antes da operação",
        description:
          "Verificamos controles, avisos, canais e responsáveis antes da entrada em uso.",
      },
    ],
  },
  operations: {
    pill: "Depois da implantação",
    title: "A privacidade precisa funcionar todos os dias.",
    description:
      "Apoiamos a rotina de atendimento, incidentes, fornecedores, acessos e melhoria do programa.",
    routines: [
      {
        label: "Atendimento",
        title: "Solicitações organizadas",
        description:
          "Canal, responsáveis, prazos e histórico de cada solicitação.",
      },
      {
        label: "Incidentes",
        title: "Resposta sem improviso",
        description:
          "Plano, responsáveis, informações e ações ficam registrados.",
      },
      {
        label: "Fornecedores",
        title: "Acompanhamento contínuo",
        description:
          "Acessos, contratos e pendências são revisados periodicamente.",
      },
      {
        label: "Programa",
        title: "Melhoria acompanhada",
        description: "Indicadores, decisões e próximos passos ficam visíveis.",
      },
    ],
  },
  training: {
    pill: "Treinamentos e workshops",
    title: "Cada equipe aprende o que precisa fazer.",
    description:
      "Treinamentos adaptados à rotina de cada área, com registro de participação e conclusão.",
    audiences: [
      "Engenharia e projetos",
      "Operação de pórticos e CCO",
      "Tecnologia e segurança",
      "RH e compras",
      "Fornecedores",
      "Atendimento e incidentes",
      "Lideranças",
    ],
  },
  international: {
    pill: "Brasil e atuação internacional",
    title: "Dados em outros países exigem uma análise específica.",
    description:
      "Verificamos onde os dados ficam, quem pode acessá-los e quais regras se aplicam quando há nuvem, suporte ou fornecedores no exterior. Consideramos a LGPD e, quando necessário, o GDPR.",
  },
  method: {
    pill: "Como o trabalho começa",
    title: "Entendemos a demanda, definimos o plano e acompanhamos a execução.",
    description:
      "A TOGETHER pode apoiar uma frente específica ou assumir uma rotina contínua de privacidade.",
    stages: [
      {
        label: "Entender",
        title: "Entender a demanda",
        description:
          "Conhecemos a operação, o problema, os sistemas e as áreas envolvidas.",
      },
      {
        label: "Definir",
        title: "Definir o plano",
        description:
          "Organizamos atividades, responsáveis, prazos e aprovações.",
      },
      {
        label: "Implantar",
        title: "Colocar em prática",
        description:
          "Apoiamos processos, ferramentas, registros e correções.",
      },
      {
        label: "Sustentar",
        title: "Manter funcionando",
        description: "Treinamos as equipes e acompanhamos a evolução.",
      },
    ],
  },
  faq: {
    pill: "Perguntas frequentes",
    title: "LGPD em operações",
    accent: "rodoviárias.",
    description: "Respostas diretas para avaliar se a TOGETHER pode ajudar.",
    items: [
      {
        question: "Onde a LGPD aparece na operação de uma rodovia?",
        answer:
          "Em cadastros, placas, imagens, pagamentos, aplicativos, atendimento, colaboradores, fornecedores e sistemas. O trabalho necessário depende de como cada operação coleta, utiliza e compartilha esses dados.",
      },
      {
        question:
          "Como a TOGETHER apoia projetos de free flow e pedágio digital?",
        answer:
          "Mapeamos quais dados são usados, por que são necessários, quem pode acessá-los, por quanto tempo serão guardados e como fornecedores, atendimento e sistemas participam da operação.",
      },
      {
        question:
          "A atuação pode começar ainda na fase de projeto ou contratação?",
        answer:
          "Sim. Podemos incluir regras de privacidade em contratos, sistemas, integrações e testes antes da entrada em operação. Isso reduz retrabalho e ajustes de última hora.",
      },
      {
        question:
          "A TOGETHER pode apoiar DPO, titulares e incidentes depois da implantação?",
        answer:
          "Sim. Podemos organizar canais, registros, atividades do encarregado, atendimento a solicitações, planos de resposta a incidentes, testes e acompanhamento das ações.",
      },
      {
        question:
          "Como são tratados fornecedores e transferências internacionais?",
        answer:
          "Verificamos quais empresas acessam os dados, onde eles ficam armazenados e quais contratos e regras são necessários. A análise considera o funcionamento real de cada operação.",
      },
      {
        question:
          "A TOGETHER já possui um case específico no setor rodoviário?",
        answer:
          "Ainda não temos experiência nem case específico no setor rodoviário. Nossa experiência está em colocar programas de privacidade em prática, com processos, tecnologia, controles e registros. Aplicamos esse conhecimento ao contexto da concessionária depois de entender seus contratos, sistemas, fornecedores e uso de dados.",
      },
    ],
  },
  finalCta: {
    pill: "LGPD para operações rodoviárias",
    title: "Coloque a LGPD em prática na operação rodoviária.",
    description:
      "Em uma conversa inicial, entendemos sua prioridade e mostramos como a TOGETHER pode apoiar o projeto ou a rotina.",
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
    { id: "privacy-by-design", sectionKey: "privacyByDesign" },
    { id: "fornecedores", sectionKey: "privacyByDesign" },
    { id: "dpo", sectionKey: "operations" },
    { id: "incidentes", sectionKey: "operations" },
    { id: "internacional", sectionKey: "international" },
  ],
} as const satisfies RoadsIndustryContent;
