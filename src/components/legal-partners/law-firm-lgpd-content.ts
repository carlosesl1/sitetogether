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
    title: "Amplie os serviços do seu escritório",
    accent: "com uma estrutura pronta para entregar LGPD.",
    paragraphs: [
      "Ofereça projetos de privacidade aos seus clientes com a metodologia e a capacidade especializada da TOGETHER.",
    ],
    image: {
      src: "/images/law-firm-lgpd-hero.webp",
    },
    primary: { href: "/contato", label: "Conversar sobre uma parceria" },
    secondary: { href: "#modelo-de-parceria", label: "Entender como funciona" },
  },
  portfolioOffer: {
    pill: "Nova frente de negócios",
    title: "Inclua serviços de privacidade e LGPD no portfólio do seu escritório.",
    paragraphs: [
      "Com a parceria, seu escritório pode oferecer projetos de adequação à LGPD sem manter internamente toda a estrutura necessária para a entrega.",
      "Seu escritório amplia o portfólio, mantém o relacionamento com o cliente e abre uma nova frente de faturamento. A TOGETHER disponibiliza a metodologia, os especialistas e a estrutura que sustentam a entrega.",
    ],
    flow: [
      "Portfólio do escritório",
      "Adequação TOGETHER",
      "Selo Escritório Parceiro TOGETHER",
      "Projeto entregue ao cliente",
    ],
    benefits: [
      "Uma solução de adequação pronta para oferecer",
      "Estrutura especializada disponível por projeto",
      "Novas oportunidades dentro da carteira de clientes",
      "Capacidade para atender projetos de maior complexidade",
    ],
  },
  scenariosIntro: {
    pill: "Demandas de LGPD",
    title: "Diferentes demandas podem se transformar em novos projetos para o escritório.",
    text: "A TOGETHER entra com a capacidade necessária para que cada oportunidade avance além da orientação jurídica.",
  },
  scenarios: [
    {
      icon: FileCheck2,
      label: "01 / Projeto",
      title: "Adequação à LGPD",
      outcome: "Conduzir um projeto completo",
      text: "Transformar a orientação jurídica em um programa estruturado, implantado e acompanhado.",
    },
    {
      icon: ShieldAlert,
      label: "02 / Urgência",
      title: "Incidente de dados",
      outcome: "Organizar a resposta",
      text: "Reunir informações, evidências e providências necessárias para o caso.",
    },
    {
      icon: ClipboardCheck,
      label: "03 / Exigência",
      title: "Auditoria e due diligence",
      outcome: "Preparar comprovações",
      text: "Organizar documentos, controles e evidências para responder à solicitação.",
    },
    {
      icon: UserCheck,
      label: "04 / Continuidade",
      title: "DPO e titulares",
      outcome: "Manter a privacidade funcionando",
      text: "Sustentar canais, registros, atendimentos e rotinas recorrentes.",
    },
  ],
  capacity: {
    pill: "Estrutura TOGETHER",
    title: "Uma estrutura pronta para apoiar o seu escritório.",
    text: "Especialistas, tecnologia e um catálogo amplo de atividades para sustentar projetos de diferentes portes e níveis de complexidade.",
    proofs: [
      { value: "+200", label: "atividades e entregáveis no catálogo de serviços" },
      { value: "+5 anos", label: "de atuação em privacidade e LGPD" },
      {
        value: "Especialistas",
        label: "com certificações internacionais e experiência prática",
      },
      {
        value: "Plataformas",
        label: "domínio das principais tecnologias de privacidade",
      },
      { value: "Internacional", label: "experiência com GDPR e PDPL" },
      {
        value: "Entregas",
        label: "cronogramas claros e acompanhamento por atividade",
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
      "Uma atuação coordenada, com responsabilidades definidas antes do início do projeto.",
  },
  partnerModels: [
    {
      icon: BriefcaseBusiness,
      label: "Projeto pontual",
      title: "Uma demanda específica",
      text: "Escopo, entregáveis e período de atuação definidos para o projeto.",
    },
    {
      icon: Users,
      label: "Reforço especializado",
      title: "Mais capacidade para a equipe",
      text: "Especialistas para frentes específicas, projetos simultâneos ou períodos de maior volume.",
    },
    {
      icon: BadgeCheck,
      label: "Operação contínua",
      title: "Privacidade no dia a dia",
      text: "DPO, titulares, rotinas recorrentes e evolução do programa de privacidade.",
    },
  ],
  process: [
    {
      icon: MessagesSquare,
      label: "01 / Entendimento",
      title: "Conhecemos a oportunidade",
      text: "Entendemos o escritório, o cliente e a capacidade necessária para a entrega.",
    },
    {
      icon: Split,
      label: "02 / Definição",
      title: "Organizamos a parceria",
      text: "Definimos escopo, responsáveis, entregáveis, comunicação e pontos de aprovação.",
    },
    {
      icon: Users,
      label: "03 / Trabalho conjunto",
      title: "Começamos o projeto",
      text: "Cada equipe assume sua parte e atua de forma coordenada até a conclusão.",
    },
  ],
  confidentiality: {
    title: "Confidencialidade desde o primeiro contato.",
    text: "Informações, documentos e clientes são tratados de forma confidencial, com formalização adequada às partes e ao projeto.",
  },
  faqs: [
    {
      question: "Como a Adequação TOGETHER é apresentada ao cliente?",
      answer:
        "O serviço pode fazer parte do portfólio do escritório como uma Adequação TOGETHER, acompanhado pelo selo de Escritório Parceiro TOGETHER. O escritório permanece à frente da condução jurídica e do relacionamento comercial com o cliente.",
    },
    {
      question: "Quem permanece responsável pela atuação jurídica?",
      answer:
        "O escritório. A TOGETHER não substitui a atuação jurídica: ela assume as atividades técnicas e operacionais definidas para o projeto, enquanto estratégia, interpretação legal, documentos jurídicos e aprovações permanecem com o escritório.",
    },
    {
      question: "A parceria pode atender apenas um projeto?",
      answer:
        "Sim. A parceria pode começar com uma demanda pontual, reforçar uma equipe em um projeto específico ou evoluir para uma operação contínua, conforme a necessidade do escritório.",
    },
    {
      question: "Como são definidos escopo, comunicação e aprovações?",
      answer:
        "Antes do início, as equipes alinham atividades, responsáveis, entregáveis, forma de comunicação e pontos de aprovação. Essa definição evita sobreposição e deixa claro como o projeto será conduzido.",
    },
    {
      question: "Como a TOGETHER protege o cliente e as informações do escritório?",
      answer:
        "As informações compartilhadas são tratadas de forma confidencial desde o primeiro contato, com formalização adequada ao projeto, ao escritório e às partes envolvidas.",
    },
  ],
  finalCta: {
    pill: "Parceria TOGETHER",
    title: "Leve uma nova solução de LGPD para os seus clientes.",
    text: "Inclua a Adequação TOGETHER no portfólio do seu escritório e conte com uma estrutura especializada para sustentar cada projeto.",
    primary: { href: "/contato", label: "Conversar sobre uma parceria" },
    nextStep:
      "Uma conversa inicial para entender o escritório, as oportunidades atuais e o modelo de parceria mais adequado.",
  },
} as const;
