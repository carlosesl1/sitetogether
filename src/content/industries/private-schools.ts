import type { PrivateSchoolsIndustryContent } from "@/components/industry/private-schools/private-schools-types";

const imageBase = "/images/industries/private-schools";

export const privateSchoolsIndustryContent = {
  sector: "escolas-particulares",
  metadata: {
    title: "LGPD para escolas particulares | TOGETHER",
    description:
      "A TOGETHER ajuda escolas particulares a organizar a privacidade, mapear o uso de dados e orientar a equipe na aplicação da LGPD.",
    canonical: "/solucoes/privacidade-escolas-particulares",
    socialAlt:
      "Adultos e estudante em rotina administrativa de uma escola contemporânea",
  },
  hero: {
    pill: "LGPD para escolas particulares",
    title: "Organize a LGPD da sua escola",
    accent: "sem complicar a rotina.",
    description:
      "A TOGETHER ajuda sua escola a organizar a privacidade, mapear onde os dados são usados e orientar a equipe sobre como agir em cada situação.",
    cta: "Conversar sobre minha escola",
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
      pill: "Onde a escola usa dados",
      title: "A escola usa dados o dia inteiro.",
      accent: "Cada uso precisa ser organizado.",
      description:
        "Veja onde aparecem dados de alunos, responsáveis e colaboradores e o que precisa ficar claro em cada atividade.",
      items: [
        {
          icon: "file",
          label: "01",
          title: "Matrículas",
          description: "Quais dados pedir, por que são necessários e quem pode consultar documentos de alunos e responsáveis.",
        },
        {
          icon: "shield",
          label: "02",
          title: "Saúde",
          description: "Quem precisa conhecer laudos, alergias e medicações — e como evitar acesso além do necessário.",
        },
        {
          icon: "camera",
          label: "03",
          title: "Fotos e vídeos",
          description: "Quando a imagem pode ser usada em registros pedagógicos, eventos, grupos e redes sociais.",
        },
        {
          icon: "server",
          label: "04",
          title: "Sistemas",
          description: "Quais dados entram em cada plataforma, quem acessa e o que acontece quando o serviço termina.",
        },
        {
          icon: "users",
          label: "05",
          title: "Equipe",
          description: "Como secretaria, professores e gestores devem agir sem interpretar a LGPD sozinhos.",
        },
        {
          icon: "network",
          label: "06",
          title: "Fornecedores",
          description: "Quais dados a escola envia a cada fornecedor, por que envia e o que fazer quando houver um problema.",
        },
      ],
    },
    tension: {
      id: "documentos-nao-bastam",
      pill: "Documentos não resolvem tudo",
      title: "A escola pode ter os documentos.",
      accent: "A equipe ainda precisa saber o que fazer.",
      description:
        "A TOGETHER transforma as exigências da LGPD em instruções simples para cada pessoa saber o que pode fazer e quando pedir ajuda.",
      body:
        "Sem instruções claras, secretaria, professores e tecnologia podem agir de formas diferentes diante do mesmo problema.",
    },
    integration: {
      id: "juridico-tecnologia-operacao",
      pill: "Um exemplo simples",
      title: "Para organizar o uso de uma foto,",
      accent: "quatro respostas precisam estar claras.",
      description:
        "Por que a foto será usada? Onde ficará salva? Quem poderá publicá-la? Quem responde se surgir uma dúvida? A TOGETHER ajuda a escola a definir essas respostas.",
      items: [
        {
          icon: "file",
          label: "01",
          title: "Jurídico",
          description: "Explica em quais casos a imagem pode ser usada e quais cuidados precisam ser seguidos.",
        },
        {
          icon: "server",
          label: "02",
          title: "Tecnologia",
          description: "Confirma onde as imagens ficam, quem pode acessá-las e como os acessos são controlados.",
        },
        {
          icon: "users",
          label: "03",
          title: "Operação",
          description: "Mostra para professores, secretaria e comunicação o que fazer antes de publicar ou compartilhar.",
        },
      ],
    },
    solutions: {
      id: "solucoes",
      pill: "Serviços para a sua escola",
      title: "Escolha o serviço que",
      accent: "resolve a necessidade da sua escola.",
      description:
        "A TOGETHER pode organizar a LGPD do começo, atuar como DPO ou treinar a equipe. Sua escola contrata apenas o que precisa.",
      items: [
        {
          icon: "analytics",
          label: "Solução 01",
          title: "Adequação à LGPD",
          description:
            "Listamos os dados usados pela escola, mostramos onde há pontos de atenção e organizamos as mudanças em documentos, sistemas e rotinas.",
        },
        {
          icon: "shield",
          label: "Solução 02",
          title: "DPO as a Service",
          description:
            "Um especialista da TOGETHER atua como DPO externo, responde às dúvidas da equipe e acompanha os assuntos de privacidade combinados com a escola.",
        },
        {
          icon: "presentation",
          label: "Solução 03",
          title: "Treinamentos e Workshops",
          description:
            "Professores, secretaria e gestores aprendem o que fazer ao acessar dados, compartilhar informações ou usar imagens de alunos.",
        },
      ],
    },
    capacity: {
      pill: "Capacidade comprovada",
      title: "Experiência para simplificar a LGPD",
      accent: "e colocar as mudanças em prática.",
      text:
        "A TOGETHER reúne especialistas, processos e tecnologia para organizar o trabalho desde o mapeamento dos dados até o acompanhamento das mudanças.",
      proofs: [
        {
          value: "+200",
          label: "tipos de atividade e entrega que podem fazer parte do projeto",
        },
        {
          value: "+5 anos",
          label: "de atuação em privacidade e LGPD",
        },
        {
          value: "Especialistas",
          label: "com certificações internacionais e experiência prática",
        },
        {
          value: "Plataformas",
          label: "experiência prática com tecnologias de privacidade",
        },
        {
          value: "Internacional",
          label: "experiência com GDPR e PDPL",
        },
        {
          value: "Execução",
          label: "trabalho dividido em etapas, com responsáveis e acompanhamento",
        },
      ],
    },
    selfAssessment: {
      id: "autodiagnostico",
      pill: "O que sua escola precisa hoje",
      title: "Qual situação mais precisa",
      accent: "de uma resposta clara?",
      description: "",
      items: [
        "Já organizamos a LGPD, mas sistemas, fornecedores ou rotinas mudaram.",
        "Temos políticas, mas a equipe ainda não sabe o que fazer no dia a dia.",
        "Não sabemos quem deve responder às dúvidas de privacidade.",
        "Temos dúvidas sobre como usar dados de crianças e adolescentes.",
        "Precisamos revisar quem acessa as plataformas e o que os fornecedores recebem.",
        "Não sabemos se precisamos de DPO, treinamento ou adequação à LGPD.",
      ],
      note:
        "Escolha a frase que mais representa sua escola e conte para a TOGETHER na primeira conversa.",
      cta: "Conversar sobre minha escola",
    },
    process: {
      id: "como-funciona",
      pill: "Depois do formulário",
      title: "Depois que você envia o formulário,",
      accent: "acontecem três passos.",
      description:
        "A conversa inicial serve para entender o que sua escola precisa antes de qualquer proposta.",
      items: [
        {
          icon: "message",
          label: "1",
          title: "Você conta o problema",
          description:
            "Diga o que acontece hoje, quem está envolvido e o que a escola já tentou organizar.",
        },
        {
          icon: "analytics",
          label: "2",
          title: "A TOGETHER faz as perguntas necessárias",
          description:
            "Entendemos quais dados são usados, quem acessa, quais sistemas participam e onde está a principal dificuldade.",
        },
        {
          icon: "route",
          label: "3",
          title: "Você recebe uma proposta clara",
          description:
            "A proposta mostra o serviço indicado, o que será feito, quem precisa participar e o investimento.",
        },
      ],
    },
    positioning: {
      id: "mais-clareza-mais-seguranca",
      pill: "LGPD sem confusão",
      title: "Sua equipe para de adivinhar",
      accent: "e passa a saber o que fazer.",
      description: "",
      body:
        "A secretaria sabe quais dados pedir. Os professores sabem quando podem usar uma imagem. A tecnologia sabe quem pode acessar cada sistema. A direção sabe quem procurar quando surge uma dúvida.",
      closing: "LGPD simples para quem aplica no dia a dia.",
    },
  },
  faq: {
    pill: "Dúvidas antes de conversar",
    title: "O que sua escola precisa",
    accent: "saber antes de conversar.",
    description:
      "Veja o que acontece se a escola já tem documentos, ainda não começou ou precisa de um DPO.",
    items: [
      {
        question:
          "Nossa escola já tem políticas e documentos. O que a TOGETHER faria?",
        answer:
          "Primeiro, entendemos o que já foi feito e o que mudou na rotina. O trabalho pode se concentrar em sistemas, fornecedores, treinamento da equipe ou decisões que ainda geram dúvida.",
      },
      {
        question: "Vocês atendem escolas que ainda não começaram a adequação?",
        answer:
          "Sim. Começamos entendendo como os dados circulam, quais situações merecem prioridade e quem precisa participar. O escopo é definido antes da contratação.",
      },
      {
        question: "O DPO precisa ser funcionário da escola?",
        answer:
          "Não. O encarregado pode ser interno ou externo. A TOGETHER oferece esse apoio com escopo definido, e a escola continua participando das decisões sobre o uso dos dados.",
      },
      {
        question: "Consentimento é sempre necessário para usar dados de alunos?",
        answer:
          "Não. A base legal depende da situação. Em qualquer caso, a escola precisa avaliar a finalidade, a necessidade dos dados e o melhor interesse da criança ou do adolescente.",
      },
      {
        question: "Precisamos contratar adequação, DPO e treinamento juntos?",
        answer:
          "Não. O apoio depende do que a escola já estruturou e do problema que precisa resolver. A proposta pode considerar um serviço ou combinar frentes quando isso fizer sentido.",
      },
      {
        question: "Como são definidos o apoio e o investimento?",
        answer:
          "Antes da contratação, a proposta informa qual serviço será prestado, o que será feito, quem precisa participar e quanto será investido.",
      },
    ],
  },
  finalCta: {
    pill: "Converse sobre a sua escola",
    title: "Conte qual assunto de privacidade precisa ficar mais claro.",
    description:
      "Pode ser matrícula, dados de saúde, imagens, uma plataforma, um fornecedor ou uma dúvida da equipe. Um especialista da TOGETHER entra em contato para entender o problema.",
    cta: "Conversar sobre minha escola",
    nextStep:
      "Primeiro, entendemos o que sua escola precisa. Depois, a proposta informa o serviço indicado, o que será feito e o investimento.",
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
      reviewedAt: "2026-09-10",
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
      reviewedAt: "2026-09-10",
    },
  ],
} as const satisfies PrivateSchoolsIndustryContent;
