import {
  BadgeCheck,
  Building2,
  ClipboardCheck,
  Database,
  FileCheck2,
  GraduationCap,
  MessagesSquare,
  Settings2,
  ShieldAlert,
  Split,
  UserCheck,
  Users,
  Workflow,
} from "lucide-react";

export const lawFirmLgpdContent = {
  hero: {
    pill: "Parceria para escritórios de advocacia",
    title: "Seu escritório conduz o jurídico.",
    accent: "A TOGETHER sustenta a execução da LGPD.",
    text: "Quando a demanda exige diagnóstico, processos, tecnologia e operação, uma equipe especializada trabalha ao lado do seu escritório — com responsabilidades claras e confidencialidade.",
    primary: { href: "/contato", label: "Agendar conversa de parceria" },
    secondary: { href: "#coentrega", label: "Entender a coentrega" },
  },
  scenarios: [
    {
      icon: FileCheck2,
      title: "Adequação LGPD",
      text: "Mapeamento, políticas, controles, responsáveis e implantação.",
    },
    {
      icon: ShieldAlert,
      title: "Incidente de dados",
      text: "Avaliação, evidências, comunicação e coordenação da resposta.",
    },
    {
      icon: ClipboardCheck,
      title: "Auditoria ou contrato",
      text: "Questionários, documentos e comprovação operacional.",
    },
    {
      icon: UserCheck,
      title: "DPO e titulares",
      text: "Canal, rotina, registros e acompanhamento contínuo.",
    },
  ],
  roles: {
    office: {
      label: "Liderança jurídica",
      title: "O escritório permanece no comando.",
      items: [
        "Estratégia e interpretação jurídica",
        "Pareceres, contratos e instrumentos legais",
        "Relação com o cliente",
        "Aprovação das decisões jurídicas",
      ],
    },
    together: {
      label: "Execução especializada",
      title: "A TOGETHER transforma decisões em operação.",
      items: [
        "Diagnóstico e data mapping",
        "Processos, controles e evidências",
        "Ferramentas e rotinas de privacidade",
        "DPO, treinamento e suporte operacional",
      ],
    },
  },
  capabilities: [
    {
      icon: BadgeCheck,
      title: "Diagnóstico e adequação",
      text: "Levantamos maturidade, riscos, prioridades e o plano de execução do projeto.",
    },
    {
      icon: Database,
      title: "Mapeamento de dados",
      text: "Organizamos fluxos, agentes, finalidades e pontos de risco da operação.",
    },
    {
      icon: Workflow,
      title: "Processos e evidências",
      text: "Transformamos decisões em rotinas, controles, registros e entregáveis verificáveis.",
    },
    {
      icon: Settings2,
      title: "Tecnologia de privacidade",
      text: "Configuramos e operamos plataformas, canais e ferramentas usadas no programa.",
    },
    {
      icon: Users,
      title: "DPO e titulares",
      text: "Apoiamos o encarregado, os canais e o acompanhamento das demandas do dia a dia.",
    },
    {
      icon: GraduationCap,
      title: "Treinamento e continuidade",
      text: "Preparamos equipes e responsáveis para manter os processos funcionando.",
    },
  ],
  audiences: [
    {
      icon: Building2,
      label: "Escritórios pequenos e médios",
      title: "Atenda a demanda sem montar um núcleo interno.",
      text: "Especialistas entram quando a execução ultrapassa o escopo jurídico habitual.",
    },
    {
      icon: Users,
      label: "Estruturas maiores",
      title: "Amplie capacidade sem sobrecarregar sua equipe.",
      text: "Apoio para projetos simultâneos, frentes técnicas e continuidade operacional.",
    },
  ],
  process: [
    {
      icon: MessagesSquare,
      label: "01 / Conversa inicial",
      title: "Entender o contexto",
      text: "Conhecemos o perfil, as demandas e a forma de atuação do escritório.",
    },
    {
      icon: Split,
      label: "02 / Definição de papéis",
      title: "Organizar a coentrega",
      text: "Escopo, responsáveis, comunicação e entregáveis ficam claros antes do início.",
    },
    {
      icon: Users,
      label: "03 / Coentrega",
      title: "Executar em conjunto",
      text: "As equipes atuam de forma coordenada conforme a necessidade do projeto.",
    },
  ],
  proofs: [
    { value: "+5 anos", label: "de atuação apresentada em LGPD" },
    { value: "+200", label: "atividades e entregáveis" },
    { value: "Equipe", label: "jurídico, privacidade, tecnologia e operação" },
    { value: "Plataformas", label: "experiência operacional já exibida no site" },
  ],
  faqs: [
    {
      question: "A TOGETHER substitui a atuação jurídica do escritório?",
      answer: "Não. O escritório permanece responsável pela estratégia, interpretação jurídica, pareceres e relação com o cliente. A TOGETHER complementa a entrega com a frente técnica e operacional definida no projeto.",
    },
    {
      question: "Quais demandas podem ser atendidas em conjunto?",
      answer: "Projetos de adequação, data mapping, incidentes, auditorias, due diligence, operação de DPO, demandas de titulares, implantação de processos, tecnologia e treinamentos.",
    },
    {
      question: "A parceria atende projetos pontuais e demandas recorrentes?",
      answer: "Sim. O formato pode atender um projeto específico ou uma necessidade contínua de capacidade, sempre com escopo e responsabilidades definidos antes do início.",
    },
    {
      question: "Como são definidas as responsabilidades de cada equipe?",
      answer: "A conversa inicial identifica o contexto da demanda. Em seguida, o escopo registra responsáveis, entregáveis, comunicação e pontos de aprovação de cada equipe.",
    },
    {
      question: "Como funciona a confidencialidade das informações?",
      answer: "As informações compartilhadas são tratadas de forma confidencial, com a formalização adequada ao projeto e às partes envolvidas.",
    },
  ],
} as const;
