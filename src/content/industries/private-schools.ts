import type { PrivateSchoolsIndustryContent } from "@/components/industry/private-schools/private-schools-types";

const imageBase = "/images/industries/private-schools";

export const privateSchoolsIndustryContent = {
  sector: "escolas-particulares",
  metadata: {
    title: "LGPD para escolas particulares, na prática",
    description:
      "Organize acessos, processos e responsabilidades para proteger os dados de alunos, responsáveis e colaboradores no dia a dia da escola.",
    canonical: "/solucoes/privacidade-escolas-particulares",
    socialAlt:
      "Adultos e estudante em rotina administrativa de uma escola contemporânea",
  },
  hero: {
    pill: "LGPD para escolas particulares",
    title: "LGPD para escolas particulares,",
    accent: "na prática.",
    description:
      "Organize acessos, processos e responsabilidades para proteger dados de alunos, responsáveis e colaboradores. Leve a LGPD para a rotina real da sua escola.",
    cta: "Quero avaliar minha escola",
    supportLine:
      "Adequação à LGPD • DPO as a Service • Treinamentos e Workshops",
    trustLine: "Empresas que confiam na TOGETHER",
    image: {
      desktop: {
        avif: `${imageBase}/hero-desktop.avif`,
        webp: `${imageBase}/hero-desktop.webp`,
        png: `${imageBase}/hero-desktop.png`,
        width: 1672,
        height: 941,
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
  narrative: {
    problem: {
      id: "riscos-na-escola",
      pill: "Onde os dados circulam",
      title: "Os dados circulam por toda a escola.",
      accent: "Os riscos também.",
      description:
        "Da matrícula às plataformas digitais, você sabe quem acessa, compartilha e armazena cada informação?",
      items: [
        {
          icon: "file",
          label: "01",
          title: "Matrículas",
          description: "Dados de alunos, responsáveis, documentos e contratos.",
        },
        {
          icon: "shield",
          label: "02",
          title: "Saúde",
          description: "Laudos, alergias e informações sensíveis.",
        },
        {
          icon: "camera",
          label: "03",
          title: "Fotos e vídeos",
          description: "Imagens de eventos, redes sociais e câmeras de segurança.",
        },
        {
          icon: "server",
          label: "04",
          title: "Sistemas",
          description: "Plataformas educacionais, aplicativos e armazenamento em nuvem.",
        },
        {
          icon: "users",
          label: "05",
          title: "Equipe",
          description: "Professores, colaboradores e gestores com diferentes níveis de acesso.",
        },
        {
          icon: "network",
          label: "06",
          title: "Fornecedores",
          description: "Terceiros que recebem, armazenam ou processam dados da escola.",
        },
      ],
    },
    tension: {
      id: "documentos-nao-bastam",
      pill: "Da política à prática",
      title: "Ter documentos não significa que a escola",
      accent: "está preparada.",
      description: "A LGPD só funciona quando orienta decisões reais.",
      body:
        "O risco aparece quando a equipe não sabe quem pode acessar cada dado, por que ele é usado, quando pode ser compartilhado ou como agir diante de um incidente.",
    },
    integration: {
      id: "juridico-tecnologia-operacao",
      pill: "Uma estrutura conectada",
      title: "Jurídico, tecnologia e operação precisam",
      accent: "agir em conjunto.",
      description:
        "A TOGETHER integra essas frentes para transformar as exigências da LGPD em decisões claras e aplicáveis no dia a dia.",
      items: [
        {
          icon: "file",
          label: "01",
          title: "Jurídico",
          description: "Define bases legais, contratos, políticas e responsabilidades.",
        },
        {
          icon: "server",
          label: "02",
          title: "Tecnologia",
          description: "Organiza sistemas, acessos, armazenamento e controles.",
        },
        {
          icon: "users",
          label: "03",
          title: "Operação",
          description: "Leva a privacidade para pessoas, processos, fornecedores e rotina escolar.",
        },
      ],
    },
    solutions: {
      id: "solucoes",
      pill: "Como podemos apoiar",
      title: "Três formas de fazer a LGPD funcionar",
      accent: "na rotina da sua escola.",
      description: "",
      items: [
        {
          icon: "analytics",
          label: "Solução 01",
          title: "Adequação à LGPD",
          description:
            "Mapeamos como os dados circulam, identificamos riscos e definimos o que precisa ser estruturado ou corrigido.",
        },
        {
          icon: "shield",
          label: "Solução 02",
          title: "DPO as a Service",
          description:
            "Um especialista conduz as demandas de privacidade, orienta a equipe e apoia as decisões da escola.",
        },
        {
          icon: "presentation",
          label: "Solução 03",
          title: "Treinamentos e Workshops",
          description:
            "Professores, colaboradores e lideranças aprendem a lidar com dados pessoais com mais segurança no dia a dia.",
        },
      ],
    },
    selfAssessment: {
      id: "autodiagnostico",
      pill: "Autodiagnóstico",
      title: "Alguma destas situações acontece",
      accent: "hoje na sua escola?",
      description: "",
      items: [
        "A adequação já foi feita, mas ninguém sabe se continua funcionando.",
        "Existem políticas e documentos, mas a equipe não sabe como aplicá-los.",
        "Não há um responsável claro pelas demandas de privacidade.",
        "Ainda existem dúvidas sobre dados de crianças e adolescentes.",
        "Vários sistemas e fornecedores acessam dados pessoais da escola.",
        "A escola precisa estruturar ou terceirizar a atuação do DPO.",
      ],
      note:
        "Se uma dessas situações parece familiar, já existe um ponto que merece atenção.",
      cta: "Quero avaliar minha escola",
    },
    process: {
      id: "como-funciona",
      pill: "Como funciona",
      title: "Do primeiro diagnóstico ao próximo passo,",
      accent: "sem complicar a rotina.",
      description: "",
      items: [
        {
          icon: "message",
          label: "1",
          title: "Entendemos sua realidade",
          description:
            "Conversamos sobre a rotina, a estrutura e as necessidades da escola.",
        },
        {
          icon: "analytics",
          label: "2",
          title: "Priorizamos os riscos",
          description: "Identificamos o que exige atenção agora e o que pode ser tratado depois.",
        },
        {
          icon: "route",
          label: "3",
          title: "Definimos o próximo passo",
          description:
            "Recomendamos a atuação mais adequada para o momento da escola.",
        },
      ],
    },
    positioning: {
      id: "mais-clareza-mais-seguranca",
      pill: "Privacidade organizada",
      title: "A LGPD não precisa ser mais uma preocupação solta",
      accent: "na mesa da direção.",
      description: "",
      body:
        "A TOGETHER organiza dados, acessos e responsabilidades para que direção, equipe e fornecedores saibam como agir diante de uma questão de privacidade.",
      closing: "Mais clareza para a gestão. Mais segurança para a operação.",
    },
  },
  faq: {
    pill: "Dúvidas frequentes",
    title: "Dúvidas",
    accent: "frequentes",
    description: "",
    items: [
      {
        question:
          "Minha escola já se adequou à LGPD. Ainda precisa de suporte?",
        answer:
          "Pode precisar. Novos sistemas, fornecedores, colaboradores e processos mudam o cenário. A conversa inicial mostra se a estrutura atual ainda funciona na prática.",
      },
      {
        question: "O DPO precisa ser funcionário da escola?",
        answer:
          "Não necessariamente. O encarregado pode ser interno ou externo à instituição, conforme a estrutura da escola. A TOGETHER pode apoiar essa função como serviço especializado.",
      },
      {
        question: "Vocês atendem escolas que ainda não começaram a adequação?",
        answer:
          "Sim. Começamos pelo diagnóstico do cenário, identificamos as prioridades e recomendamos o próximo passo.",
      },
      {
        question: "Vocês treinam professores e colaboradores?",
        answer:
          "Sim. Os treinamentos e workshops mostram como aplicar a privacidade em situações reais da rotina escolar.",
      },
      {
        question: "Precisamos envolver jurídico e TI?",
        answer:
          "Depende do cenário. Quando necessário, a TOGETHER conecta jurídico, TI e operação para que as decisões funcionem em toda a escola.",
      },
    ],
  },
  finalCta: {
    pill: "Converse com um especialista",
    title: "Descubra onde a LGPD precisa de atenção na sua escola.",
    description:
      "Preencha seus dados para que um especialista da TOGETHER entenda o momento da sua escola e indique o próximo passo.",
    cta: "Quero conversar com um especialista",
    nextStep:
      "Sem compromisso. Primeiro entendemos o cenário da sua escola.",
  },
  campaignAnchors: [
    { id: "matricula", sectionKey: "school-day" },
    { id: "plataformas", sectionKey: "platforms" },
    { id: "menores", sectionKey: "minors" },
    { id: "fornecedores", sectionKey: "platforms" },
    { id: "incidentes", sectionKey: "family-response" },
    { id: "workshops", sectionKey: "together-school" },
  ],
  sources: [
    {
      claim:
        "Princípios, direitos, segurança e tratamento de dados de crianças e adolescentes",
      url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm",
      reviewedAt: "2026-08-27",
    },
    {
      claim: "Dados e orientações do Censo Escolar",
      url: "https://www.gov.br/inep/pt-br/areas-de-atuacao/pesquisas-estatisticas-e-indicadores/censo-escolar",
      reviewedAt: "2026-08-27",
    },
    {
      claim: "Perguntas frequentes do Censo Escolar",
      url: "https://www.gov.br/inep/pt-br/acesso-a-informacao/perguntas-frequentes/censo-escolar",
      reviewedAt: "2026-08-27",
    },
    {
      claim: "Comunicação de incidente de segurança",
      url: "https://www.gov.br/anpd/pt-br/canais_atendimento/agente-de-tratamento/comunicado-de-incidente-de-seguranca-cis",
      reviewedAt: "2026-08-27",
    },
    {
      claim: "Atuação de encarregado interno, externo ou pessoa jurídica",
      url: "https://www.gov.br/anpd/pt-br/acesso-a-informacao/institucional/atos-normativos/regulamentacoes_anpd/encarregado-completo_ocultado.pdf",
      reviewedAt: "2026-09-01",
    },
  ],
} as const satisfies PrivateSchoolsIndustryContent;
