import type { SectorIndustryContent } from "@/components/industry/industry-page-types";

const imageBase = "/images/industries/private-schools";

export const privateSchoolsIndustryContent = {
  sector: "escolas-particulares",
  visualFamily: "school",
  metadata: {
    title: "Privacidade e LGPD para escolas particulares",
    description: "Privacidade e LGPD para dados de alunos, responsáveis, equipes, plataformas e fornecedores na rotina escolar.",
    canonical: "/solucoes/privacidade-escolas-particulares",
    socialAlt: "Adultos e estudante em rotina administrativa de uma escola contemporânea",
  },
  hero: {
    pill: "LGPD para escolas particulares",
    title: "Coloque a proteção de dados de alunos e responsáveis",
    accent: "dentro da rotina escolar.",
    description: "A TOGETHER estrutura processos e controles para dados, acessos, plataformas, fornecedores e resposta a incidentes na rotina escolar.",
    cta: "Agende uma Conversa",
    image: {
      desktop: { avif: `${imageBase}/hero-desktop.avif`, webp: `${imageBase}/hero-desktop.webp`, png: `${imageBase}/hero-desktop.png`, width: 1672, height: 941 },
      mobile: { avif: `${imageBase}/hero-mobile.avif`, webp: `${imageBase}/hero-mobile.webp`, png: `${imageBase}/hero-mobile.png`, width: 941, height: 1672 },
    },
  },
  context: {
    id: "contexto-escolar", pill: "Onde os dados circulam", title: "A escola é uma rede de", accent: "pessoas, sistemas e decisões.",
    description: "Da matrícula à comunicação com a família, dados pessoais fazem parte de cada etapa da experiência escolar.",
    nodes: [
      { icon: "users", label: "Matrícula", title: "Alunos e responsáveis", description: "Cadastros, contatos, documentos, histórico e autorizações." },
      { icon: "database", label: "Aprendizagem", title: "Sistemas pedagógicos", description: "Plataformas, avaliações, frequência e registros de apoio." },
      { icon: "camera", label: "Ambiente", title: "Acesso e imagens", description: "Câmeras, portaria, eventos e circulação no espaço escolar." },
      { icon: "network", label: "Ecossistema", title: "Fornecedores e parceiros", description: "Tecnologia, transporte, alimentação, saúde e serviços terceirizados." },
      { icon: "message", label: "Relacionamento", title: "Famílias e equipes", description: "Canais de atendimento, comunicados e solicitações dos titulares." },
    ],
  },
  journey: {
    id: "jornada-escolar", pill: "Da matrícula à rotina", title: "Privacidade precisa acompanhar", accent: "a jornada do aluno.",
    description: "Mapeamos responsabilidades e cuidados antes que processos e ferramentas se tornem difíceis de ajustar.",
    stages: [
      { icon: "file", label: "Matrícula", title: "Entender o que é necessário", description: "Finalidades, bases legais, documentos e autorizações em cada fluxo." },
      { icon: "key", label: "Acesso", title: "Dar acesso a quem precisa", description: "Perfis, permissões e registros para reduzir exposição indevida." },
      { icon: "book", label: "Ensino", title: "Usar plataformas com critério", description: "Contratos, integrações e configurações alinhados à rotina pedagógica." },
      { icon: "shield", label: "Proteção", title: "Cuidar de dados sensíveis", description: "Saúde, necessidades educacionais e outros dados com atenção reforçada." },
      { icon: "check", label: "Continuidade", title: "Revisar e melhorar", description: "Registros, solicitações, incidentes e pendências acompanhados." },
    ],
  },
  priority: {
    id: "prioridades-escola", pill: "Pontos de atenção", title: "Cuidado reforçado com dados de", accent: "crianças e adolescentes.",
    description: "A proteção deve considerar o melhor interesse de crianças e adolescentes e a realidade das equipes escolares.",
    points: [
      { icon: "shield", label: "Melhor interesse", title: "Decidir com responsabilidade", description: "Avaliar necessidade, contexto e impacto para crianças e adolescentes." },
      { icon: "camera", label: "Imagem e acesso", title: "Controlar ambientes e registros", description: "Regras claras para câmeras, portaria, eventos e compartilhamentos." },
      { icon: "database", label: "Dados de saúde", title: "Restringir o que é sensível", description: "Cuidados adicionais para informações de saúde e apoio educacional." },
      { icon: "network", label: "Terceiros", title: "Organizar contratos e acessos", description: "Responsabilidades e limites para plataformas e fornecedores." },
    ],
  },
  support: {
    id: "apoio-escola", pill: "Como a TOGETHER apoia", title: "Privacidade aplicada à", accent: "vida escolar.",
    description: "O apoio pode começar por uma prioridade ou acompanhar a organização do programa.",
    items: [
      { icon: "analytics", title: "Diagnóstico e plano de ação", description: "Priorizamos riscos, fluxos e próximos passos." },
      { icon: "network", title: "Mapeamento de dados", description: "Mostramos onde os dados entram, circulam e são compartilhados." },
      { icon: "key", title: "Acessos e plataformas", description: "Organizamos perfis, contratos, integrações e responsabilidades." },
      { icon: "shield", title: "Dados sensíveis, crianças e adolescentes", description: "Apoiamos decisões considerando contexto, necessidade e melhor interesse." },
      { icon: "camera", title: "Incidentes e solicitações", description: "Criamos rotinas para responder, registrar e aprender." },
      { icon: "presentation", title: "Workshops por equipe", description: "Conteúdo prático para direção, secretaria, tecnologia e docentes." },
    ],
    ctaTitle: "Quer avaliar uma prioridade da escola?", ctaText: "Ajudamos a identificar o escopo inicial.", cta: "Agende uma Conversa",
  },
  proof: [
    { value: "+5 anos", label: "de atuação em privacidade e LGPD" },
    { value: "+200", label: "atividades e entregas disponíveis" },
    { value: "Equipe multidisciplinar", label: "privacidade, tecnologia, processos e operação" },
    { value: "Escopo flexível", label: "de uma prioridade específica à estrutura contínua de privacidade" },
  ],
  training: {
    id: "treinamentos-escola", pill: "Treinamentos e workshops", title: "Cada equipe aprende o que precisa fazer.",
    description: "Encontros objetivos, com exemplos da rotina e registro de participação.",
    audiences: ["Direção, coordenação e secretaria", "Docentes e atendimento às famílias", "Tecnologia, segurança e portaria", "Compras, parceiros e fornecedores"],
  },
  faq: {
    pill: "Perguntas frequentes", title: "LGPD em escolas", accent: "particulares.", description: "Respostas diretas para a rotina escolar.",
    items: [
      { question: "Quais dados uma escola precisa organizar?", answer: "Cadastros, documentos, contatos, registros pedagógicos, frequência, imagens, dados de saúde, acessos e informações compartilhadas com fornecedores." },
      { question: "Como tratar dados de crianças e adolescentes?", answer: "A análise deve considerar o melhor interesse e o contexto da criança ou do adolescente, com finalidade, necessidade, acesso e comunicação adequados." },
      { question: "Câmeras e controle de acesso entram no escopo?", answer: "Sim. É importante definir finalidade, acesso, guarda, sinalização, fornecedores e resposta a solicitações relacionadas a imagens e registros." },
      { question: "A TOGETHER ajuda a avaliar plataformas educacionais?", answer: "Sim. Podemos mapear dados, integrações, acessos, contratos e responsabilidades para apoiar decisões sobre plataformas e serviços." },
      { question: "O que fazer quando ocorre um incidente?", answer: "A escola precisa de uma rotina com responsáveis, avaliação, registro, comunicação e medidas de contenção, conforme o caso e as regras aplicáveis." },
      { question: "Como começar sem interromper as aulas?", answer: "Começamos pela prioridade mais relevante, ouvimos as áreas envolvidas e organizamos ações em etapas compatíveis com o calendário escolar." },
    ],
  },
  finalCta: { pill: "LGPD para escolas particulares", title: "Coloque a privacidade em prática na escola.", description: "Entendemos a rotina e indicamos como estruturar a primeira frente.", cta: "Agende uma Conversa", nextStep: "Uma conversa sobre a rotina, as áreas envolvidas e o escopo inicial." },
  campaignAnchors: [
    { id: "matricula", sectionKey: "context" }, { id: "plataformas", sectionKey: "journey" }, { id: "menores", sectionKey: "priority" }, { id: "fornecedores", sectionKey: "support" }, { id: "incidentes", sectionKey: "support" }, { id: "workshops", sectionKey: "training" },
  ],
  sources: [
    { claim: "Princípios, direitos, segurança e tratamento de dados de crianças e adolescentes", url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm", reviewedAt: "2026-08-27" },
    { claim: "Dados e orientações do Censo Escolar", url: "https://www.gov.br/inep/pt-br/areas-de-atuacao/pesquisas-estatisticas-e-indicadores/censo-escolar", reviewedAt: "2026-08-27" },
    { claim: "Perguntas frequentes do Censo Escolar", url: "https://www.gov.br/inep/pt-br/acesso-a-informacao/perguntas-frequentes/censo-escolar", reviewedAt: "2026-08-27" },
    { claim: "Comunicação de incidente de segurança", url: "https://www.gov.br/anpd/pt-br/canais_atendimento/agente-de-tratamento/comunicado-de-incidente-de-seguranca-cis", reviewedAt: "2026-08-27" },
  ],
} as const satisfies SectorIndustryContent;
