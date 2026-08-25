import {
  BadgeCheck,
  BriefcaseBusiness,
  ClipboardCheck,
  FileCheck2,
  MessagesSquare,
  ShieldAlert,
  Split,
  UserCheck,
  Users,
} from "lucide-react";

export const lawFirmLgpdContent = {
  hero: {
    pill: "Parceria LGPD para escritórios de advocacia",
    pillShort: "Parceria LGPD",
    title: "Aumente o faturamento do seu escritório",
    accent: "com uma estrutura pronta para entregar LGPD.",
    paragraphs: [
      "Seu escritório mantém a condução jurídica e o relacionamento com o cliente. A TOGETHER entra com especialistas, metodologia, tecnologia e operação para viabilizar cada projeto.",
    ],
    image: {
      src: "/images/law-firm-lgpd-hero.webp",
    },
    primary: { href: "/contato", label: "Avaliar uma parceria" },
    secondary: { href: "#modelo-de-parceria", label: "Ver como funciona" },
  },
  portfolioOffer: {
    pill: "Novos projetos",
    title: "Transforme demandas de LGPD em novas entregas.",
    paragraphs: [
      "Seus clientes já podem precisar de adequação, auditoria, resposta a incidentes ou DPO.",
      "Com a TOGETHER, o escritório amplia o portfólio e abre uma nova frente de faturamento sem criar uma equipe interna para cada demanda.",
    ],
    flow: [
      "Demanda identificada pelo escritório",
      "Escopo técnico definido em conjunto",
      "Proposta apresentada ao cliente",
      "Projeto entregue pelas duas equipes",
    ],
    benefits: [
      "Novos serviços para oferecer",
      "Relacionamento comercial preservado",
      "Especialistas acionados sob demanda",
      "Mais capacidade para projetos complexos",
    ],
  },
  scenariosIntro: {
    pill: "Oportunidades na carteira",
    title: "Quatro portas de entrada.",
    text: "Uma demanda pontual pode se transformar em um projeto completo ou em uma operação recorrente.",
  },
  scenarios: [
    {
      icon: FileCheck2,
      label: "01 / Adequação",
      title: "Adequação à LGPD",
      outcome: "Implantar o programa",
      text: "Diagnóstico, mapeamento, plano de ação, controles e acompanhamento da implantação.",
    },
    {
      icon: ShieldAlert,
      label: "02 / Incidente",
      title: "Incidente de dados",
      outcome: "Organizar a resposta",
      text: "Levantar informações, organizar evidências e apoiar as providências definidas para o caso.",
    },
    {
      icon: ClipboardCheck,
      label: "03 / Auditoria",
      title: "Auditoria e due diligence",
      outcome: "Preparar comprovações",
      text: "Organizar questionários, documentos, controles e evidências para responder à demanda.",
    },
    {
      icon: UserCheck,
      label: "04 / DPO",
      title: "DPO e titulares",
      outcome: "Manter a privacidade funcionando",
      text: "Operar canais, registros, atendimentos e rotinas recorrentes.",
    },
  ],
  capacity: {
    pill: "Capacidade comprovada",
    title: "Capacidade para sustentar sua entrega.",
    text: "Pessoas, processos e tecnologia reunidos para colocar cada projeto em prática.",
    proofs: [
      { value: "+200", label: "atividades e entregáveis disponíveis no catálogo de serviços" },
      { value: "+5 anos", label: "de atuação em privacidade e LGPD" },
      {
        value: "Especialistas",
        label: "com certificações internacionais e experiência prática",
      },
      {
        value: "Plataformas",
        label: "experiência prática com tecnologias de privacidade",
      },
      { value: "Internacional", label: "experiência com GDPR e PDPL" },
      {
        value: "Entregas",
        label: "cronogramas, responsáveis e acompanhamento por atividade",
      },
    ],
  },
  roles: {
    office: {
      label: "Escritório",
      title: "Condução jurídica",
      summary: "Estratégia jurídica e relacionamento com o cliente.",
      items: [
        "Estratégia e interpretação jurídica",
        "Pareceres, contratos e documentos legais",
        "Relacionamento com o cliente",
        "Aprovação das decisões jurídicas",
      ],
    },
    together: {
      label: "TOGETHER",
      title: "Implementação e operação",
      summary: "Processos, tecnologia e operação de privacidade.",
      items: [
        "Diagnóstico e mapeamento de dados",
        "Implantação de processos e controles",
        "Organização de registros e evidências",
        "Tecnologia e ferramentas de privacidade",
        "DPO, titulares, treinamentos e suporte operacional",
      ],
    },
    result:
      "Uma entrega conjunta, sem sobreposição de papéis.",
  },
  partnerModels: [
    {
      icon: BriefcaseBusiness,
      label: "Projeto pontual",
      title: "Uma demanda definida",
      text: "Escopo, prazo e entregáveis definidos para uma oportunidade específica.",
    },
    {
      icon: Users,
      label: "Reforço especializado",
      title: "Capacidade adicional",
      text: "Especialistas para projetos simultâneos, atividades específicas ou períodos de maior volume.",
    },
    {
      icon: BadgeCheck,
      label: "Operação contínua",
      title: "Privacidade no dia a dia",
      text: "DPO, titulares, controles e evolução contínua do programa de privacidade.",
    },
  ],
  process: [
    {
      icon: MessagesSquare,
      label: "Contexto",
      title: "Você apresenta a demanda",
      text: "Entendemos o cliente, o objetivo e o apoio necessário.",
    },
    {
      icon: Split,
      label: "Escopo",
      title: "Dimensionamos o projeto",
      text: "Definimos atividades, responsáveis, entregáveis, comunicação e aprovações.",
    },
    {
      icon: Users,
      label: "Execução",
      title: "As equipes entram em campo",
      text: "O escritório conduz o jurídico. A TOGETHER executa as frentes combinadas.",
    },
  ],
  confidentiality: {
    title: "Sigilo desde a primeira conversa.",
    text: "Clientes, documentos e informações do projeto são tratados de forma confidencial. Acessos e interlocução são definidos antes da execução.",
  },
  faqs: [
    {
      question: "Meu escritório continua à frente do cliente?",
      answer:
        "Sim. O escritório mantém a condução jurídica e o relacionamento comercial. A participação da TOGETHER é definida para cada projeto.",
    },
    {
      question: "A TOGETHER participa das reuniões com o cliente?",
      answer:
        "Pode participar quando isso contribuir para a oportunidade ou para a execução. Os participantes e os canais de comunicação são alinhados previamente.",
    },
    {
      question: "Como a solução é apresentada?",
      answer:
        "A participação de cada marca é combinada com o escritório. Quando fizer sentido, o projeto pode utilizar a marca Adequação TOGETHER e o selo de Escritório Parceiro TOGETHER.",
    },
    {
      question: "A TOGETHER ajuda a definir o escopo?",
      answer:
        "Sim. Apoiamos o dimensionamento das atividades técnicas e operacionais, dos entregáveis e do cronograma necessário.",
    },
    {
      question: "Como o escritório gera receita com a parceria?",
      answer:
        "O escritório inclui serviços de LGPD em seu portfólio e mantém a relação comercial com o cliente. As condições de cada projeto são definidas conforme a oportunidade.",
    },
    {
      question: "Podemos começar com apenas um projeto?",
      answer:
        "Sim. A parceria pode começar com uma demanda pontual e evoluir conforme a necessidade do escritório.",
    },
    {
      question: "Como as informações do cliente são protegidas?",
      answer:
        "Informações, acessos e interlocução são definidos desde o início e formalizados conforme o projeto.",
    },
  ],
  finalCta: {
    pill: "Parceria TOGETHER",
    title: "Aumente o faturamento com novos projetos de LGPD.",
    text: "Transforme oportunidades da sua carteira em projetos que o escritório consegue oferecer e a TOGETHER ajuda a viabilizar.",
    primary: { href: "/contato", label: "Avaliar uma oportunidade" },
    nextStep:
      "Uma conversa inicial sobre a demanda, o escopo e o modelo de parceria.",
  },
} as const;
