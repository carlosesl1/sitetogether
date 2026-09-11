import type { SaasIndustryContent } from "@/components/industry/saas/saas-content-types";

const imageBase = "/images/industries/saas";

export const saasIndustryContent = {
  sector: "saas",
  metadata: {
    title: "Adequação à LGPD para SaaS B2B | TOGETHER",
    description:
      "Consultoria para aplicar a LGPD no produto, nos processos, nos contratos e nos fornecedores do seu SaaS B2B.",
    canonical: "/solucoes/privacidade-saas",
    socialAlt: "Operação de produto SaaS com infraestrutura em nuvem",
  },
  hero: {
    pill: "Adequação à LGPD para empresas SaaS B2B",
    title: "Tenha um SaaS adequado à LGPD e às",
    accent: "normas de privacidade aplicáveis.",
    description:
      "A TOGETHER aplica a privacidade no produto, nos processos, nos contratos e nos fornecedores. Sua equipe evita atrasos em releases, contratos e respostas a clientes.",
    cta: "Solicite seu diagnóstico inicial",
    trustLine: "EMPRESAS QUE JÁ CONFIARAM NA TOGETHER",
    secondaryCta: {
      label: "Entenda como funciona",
      href: "#como-colocamos-em-pratica",
    },
    image: {
      desktop: {
        avif: `${imageBase}/hero-desktop.avif`,
        webp: `${imageBase}/hero-desktop.webp`,
        png: `${imageBase}/hero-desktop.png`,
        width: 1536,
        height: 1024,
      },
      mobile: {
        avif: `${imageBase}/hero-mobile.avif`,
        webp: `${imageBase}/hero-mobile.webp`,
        png: `${imageBase}/hero-mobile.png`,
        width: 1024,
        height: 1536,
      },
    },
  },
  narrative: {
    growth: {
      id: "crescimento-e-complexidade",
      pill: "Além da política",
      title: "Adequar seu SaaS exige mais do que",
      accent: "uma política de privacidade.",
      description:
        "A LGPD precisa ser aplicada em funcionalidades, acessos, integrações, contratos, suporte, fornecedores e incidentes.",
      question:
        "Hoje, sua empresa consegue explicar como cada dado entra, circula, é protegido e deixa o produto?",
      path: [
        "USUÁRIO",
        "PRODUTO",
        "API",
        "CLOUD",
        "CRM",
        "ANALYTICS",
        "FORNECEDORES",
      ],
    },
    decisions: {
      id: "politica-nao-resolve",
      pill: "Uma visão única",
      title: "Produto, contratos e operação precisam",
      accent: "contar a mesma história.",
      description:
        "Informações diferentes entre as áreas dificultam a adequação. Todas precisam saber como os dados são usados e protegidos.",
      cta: "Solicite seu diagnóstico inicial",
      items: [
        {
          icon: "code",
          label: "Produto",
          title: "Produto",
          description: "Explica por que cada dado é coletado e como será usado.",
        },
        {
          icon: "cloud",
          label: "Tecnologia",
          title: "Tecnologia",
          description: "Mostra onde os dados ficam, por onde passam e quem tem acesso.",
        },
        {
          icon: "network",
          label: "Fornecedores",
          title: "Fornecedores",
          description:
            "Mostra quais serviços recebem dados e por que participam da operação.",
        },
        {
          icon: "file",
          label: "Jurídico",
          title: "Jurídico",
          description:
            "Alinha contratos e documentos ao funcionamento real do produto.",
        },
        {
          icon: "users",
          label: "Operação",
          title: "Operação",
          description: "Define quem atende pedidos, registra decisões e chama as áreas responsáveis.",
        },
      ],
    },
    privacyByDesign: {
      id: "privacidade-desde-o-primeiro-usuario",
      pill: "Privacidade no dia a dia",
      title: "Privacidade que o time consegue",
      accent: "aplicar no dia a dia.",
      question:
        "A equipe resolve situações comuns sozinha e chama outras áreas só quando necessário.",
      description:
        "A TOGETHER cria regras claras para o time avançar sozinho nas situações comuns. Outras áreas entram quando necessário, sem criar uma aprovação para cada release.",
      closing:
        "As decisões ficam registradas para orientar novos releases, questionários de clientes e avaliações de fornecedores.",
    },
    evolution: {
      id: "evolucao-saas",
      pill: "Momento do SaaS",
      title: "A adequação acompanha",
      accent: "o momento do seu SaaS.",
      description:
        "O ponto de partida depende de onde seu produto está hoje: em construção, em operação ou em expansão.",
      stages: [
        "Em construção: incluir privacidade desde o início",
        "Em operação: corrigir o que falta",
        "Em expansão: manter a adequação",
      ],
    },
    method: {
      id: "como-colocamos-em-pratica",
      pill: "Como funciona",
      title: "Como adequamos",
      accent: "seu SaaS à LGPD.",
      description:
        "Partimos de uma situação real do produto e organizamos o que precisa ser analisado, decidido e registrado.",
      cta: "Solicite seu diagnóstico inicial",
      items: [
        {
          icon: "research",
          label: "01",
          title: "Escolher por onde começar",
          description:
            "Definir qual release, integração, contrato ou processo será analisado primeiro.",
        },
        {
          icon: "network",
          label: "02",
          title: "Entender os dados",
          description:
            "Identificar quais dados são usados, onde ficam, com quem são compartilhados e quem tem acesso.",
        },
        {
          icon: "analytics",
          label: "03",
          title: "Reunir as áreas",
          description: "Colocar produto, tecnologia, jurídico e operação diante do mesmo cenário.",
        },
        {
          icon: "file",
          label: "04",
          title: "Registrar o combinado",
          description:
            "Documentar a decisão, os responsáveis e as regras que o time deve seguir.",
        },
        {
          icon: "check",
          label: "05",
          title: "Colocar em prática",
          description:
            "Usar as regras no dia a dia e revisar quando o uso dos dados mudar.",
        },
      ],
    },
    situations: {
      id: "situacoes-reais",
      pill: "Na rotina",
      title: "Quando seu SaaS precisa",
      accent: "aplicar a LGPD.",
      description:
        "A adequação precisa funcionar sempre que o produto coleta, usa, armazena, compartilha ou elimina dados pessoais.",
      items: [
        "Um release muda os dados coletados, o motivo do uso ou quem pode acessar.",
        "Uma integração leva dados para outro serviço ou país.",
        "Um fornecedor passa a participar da entrega do produto.",
        "Um cliente B2B envia um questionário ou revisa o contrato.",
        "Um usuário pede acesso, correção ou exclusão dos dados.",
        "Um incidente exige resposta coordenada entre várias áreas.",
      ],
      question: "Qual dessas situações ainda gera dúvida na sua empresa?",
    },
    capabilities: {
      id: "capacidades",
      pill: "Frentes da adequação",
      title: "O que pode fazer parte",
      accent: "da adequação.",
      description:
        "Após o diagnóstico, definimos quais frentes precisam ser trabalhadas no produto e na operação.",
      items: [
        {
          icon: "network",
          label: "Dados",
          title: "Mapeamento de dados",
          description:
            "Mostra quais dados são usados, em quais sistemas e países, com quais fornecedores e quem tem acesso.",
        },
        {
          icon: "code",
          label: "Produto",
          title: "Privacy by Design",
          description:
            "Inclui requisitos de privacidade em funcionalidades, integrações e releases.",
        },
        {
          icon: "file",
          label: "Relações",
          title: "Contratos e fornecedores",
          description:
            "Reúne informações verificadas para reduzir a reconstrução de respostas em questionários, contratos e negociações.",
        },
        {
          icon: "users",
          label: "Titulares",
          title: "Direitos dos titulares",
          description:
            "Define como receber, encaminhar, responder e registrar cada pedido.",
        },
        {
          icon: "database",
          label: "Ciclo de vida",
          title: "Retenção e eliminação",
          description: "Define por quanto tempo cada dado fica guardado e como será eliminado.",
        },
        {
          icon: "shield",
          label: "Resposta",
          title: "Incidentes",
          description: "Define quem deve agir, comunicar e registrar cada etapa de um incidente.",
        },
        {
          icon: "key",
          label: "Controles",
          title: "Acessos e controles",
          description:
            "Define quem pode acessar os dados e quando as permissões devem ser revistas.",
        },
        {
          icon: "analytics",
          label: "Gestão",
          title: "Governança",
          description:
            "Acompanha pendências, responsáveis e mudanças que exigem nova análise.",
        },
      ],
    },
    crossFunctional: {
      id: "integracao-entre-areas",
      pill: "Exemplo prático",
      title: "Como a adequação funciona",
      accent: "na prática.",
      description:
        "Uma ferramenta de suporte recebe nome, e-mail e histórico. Produto explica o uso dos dados. Tecnologia mostra o caminho. Jurídico ajusta os contratos. Operação define acessos e respostas.",
      areas: ["JURÍDICO", "PRODUTO", "TECNOLOGIA", "OPERAÇÃO"],
      closing:
        "O time sabe quais dados pode usar, quem pode acessar e quem responde. Também sabe quando o fluxo precisa de nova análise.",
    },
    socialProof: {
      id: "empresas",
      pill: "Experiência",
      title: "Empresas que já confiaram",
      accent: "na TOGETHER.",
      description:
        "A TOGETHER já apoiou empresas em projetos de privacidade, proteção de dados e tecnologia.",
      clients: [
        "Mercado Bitcoin",
        "Tarea",
        "InHire",
        "Eletrobras",
        "Unimed",
      ],
    },
    stage: {
      id: "momento-saas",
      pill: "Diagnóstico inicial",
      title: "Por onde começar",
      accent: "a adequação do seu SaaS.",
      description:
        "O diagnóstico inicial mostra o momento do produto, o principal problema e o primeiro ponto a trabalhar.",
      cta: "Solicite seu diagnóstico inicial",
      items: [
        {
          icon: "code",
          label: "01",
          title: "Em construção",
          description:
            "Quais dados o produto vai usar e por quê?",
        },
        {
          icon: "server",
          label: "02",
          title: "Em operação",
          description:
            "Onde existem dúvidas, falhas ou retrabalho?",
        },
        {
          icon: "analytics",
          label: "03",
          title: "Em expansão",
          description:
            "O que deve ser revisto antes de integrar sistemas, atender novos clientes ou entrar em outros mercados?",
        },
      ],
    },
  },
  faq: {
    pill: "ANTES DE COMEÇAR",
    title: "Dúvidas sobre a",
    accent: "adequação à LGPD",
    items: [
      {
        question: "Por onde a adequação pode começar?",
        answer:
          "Começamos pelo ponto que mais precisa de atenção: release, questionário, contrato, fornecedor ou incidente. A primeira conversa define a prioridade.",
      },
      {
        question: "Já temos políticas e ferramentas. Ainda faz sentido?",
        answer:
          "Sim. Aproveitamos o que já existe. Depois, mostramos o que precisa ser ajustado no produto, nos processos, nos contratos e nos acessos.",
      },
      {
        question: "Nosso time terá que aprovar cada mudança?",
        answer:
          "Não. Criamos regras para o time resolver situações comuns. Uma nova análise só é feita quando muda o uso, o acesso ou o compartilhamento dos dados.",
      },
      {
        question: "Quem deve participar da primeira conversa?",
        answer:
          "As pessoas que conhecem o ponto a ser analisado. Podem participar produto, tecnologia, segurança, jurídico, operação, suporte ou vendas.",
      },
      {
        question: "Como são definidos o escopo e o investimento?",
        answer:
          "Depois de entender a situação, as áreas envolvidas e o apoio necessário. Essas informações definem o trabalho e o investimento.",
      },
    ],
  },
  finalCta: {
    pill: "ADEQUAÇÃO À LGPD PARA SAAS",
    title: "Comece a adequar seu SaaS",
    accent: "à LGPD.",
    description:
      "No diagnóstico inicial, identificamos o momento do seu SaaS, os pontos mais importantes e por onde começar.",
    cta: "Solicite seu diagnóstico inicial",
    nextStep:
      "A primeira conversa serve para entender a situação e definir um ponto de partida.",
  },
  campaignAnchors: [
    { id: "privacy-by-design", sectionKey: "privacy-by-design" },
    { id: "fornecedores", sectionKey: "capabilities" },
    { id: "dpo", sectionKey: "cross-functional" },
    { id: "incidentes", sectionKey: "real-situations" },
  ],
  sources: [
    {
      claim: "Fundamentos, direitos, tratamento, segurança e agentes",
      url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm",
      reviewedAt: "2026-08-27",
    },
    {
      claim: "Guia orientativo sobre agentes de tratamento",
      url: "https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia_agentes_de_tratamento_e_encarregado___defeso_eleitoral.pdf",
      reviewedAt: "2026-08-27",
    },
    {
      claim: "Transferência internacional de dados",
      url: "https://www.gov.br/anpd/pt-br/assuntos/assuntos-internacionais/transferencia-internacional-de-dados",
      reviewedAt: "2026-08-27",
    },
    {
      claim: "Comunicação de incidente de segurança",
      url: "https://www.gov.br/anpd/pt-br/canais_atendimento/agente-de-tratamento/comunicado-de-incidente-de-seguranca-cis",
      reviewedAt: "2026-08-27",
    },
    {
      claim: "Relatório de impacto à proteção de dados pessoais",
      url: "https://www.gov.br/anpd/pt-br/canais_atendimento/agente-de-tratamento/relatorio-de-impacto-a-protecao-de-dados-pessoais-ripd",
      reviewedAt: "2026-08-27",
    },
  ],
} as const satisfies SaasIndustryContent;
