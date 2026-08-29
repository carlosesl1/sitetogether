import type { SectorIndustryContent } from "@/components/industry/industry-page-types";

const imageBase = "/images/industries/higher-education";

export const higherEducationIndustryContent = {
  sector: "ensino-superior",
  visualFamily: "campus",
  metadata: { title: "Privacidade e LGPD para instituições de ensino superior", description: "Privacidade e LGPD para admissão, vida acadêmica, pesquisa, campus, EAD, pagamentos e fornecedores.", canonical: "/solucoes/privacidade-ensino-superior", socialAlt: "Estudantes adultos e professor em operação acadêmica contemporânea" },
  hero: { pill: "LGPD para ensino superior", title: "Privacidade para admissão, EAD, pesquisa", accent: "e vida no campus.", description: "A TOGETHER estrutura processos e controles para dados, acessos, pesquisa, fornecedores e incidentes em toda a operação acadêmica.", cta: "Agende uma Conversa", image: { desktop: { avif: `${imageBase}/hero-desktop.avif`, webp: `${imageBase}/hero-desktop.webp`, png: `${imageBase}/hero-desktop.png`, width: 1672, height: 941 }, mobile: { avif: `${imageBase}/hero-mobile.avif`, webp: `${imageBase}/hero-mobile.webp`, png: `${imageBase}/hero-mobile.png`, width: 941, height: 1672 } } },
  context: { id: "contexto-academico", pill: "Onde os dados circulam", title: "Uma instituição de ensino superior é", accent: "um ecossistema conectado.", description: "Admissão, ensino, pesquisa, extensão e serviços compartilham dados em ritmos diferentes.", nodes: [
    { icon: "users", label: "Admissão", title: "Candidatos e estudantes", description: "Inscrição, matrícula, documentos, bolsas e vida acadêmica." },
    { icon: "book", label: "Ensino", title: "Portal e EAD", description: "Aulas, avaliações, frequência, tutoria e ambientes virtuais." },
    { icon: "research", label: "Pesquisa", title: "Projetos e participantes", description: "Dados de pesquisas, grupos, parceiros e resultados acadêmicos." },
    { icon: "building", label: "Campus", title: "Pessoas e espaços", description: "Acessos, biblioteca, laboratórios, eventos e segurança." },
    { icon: "network", label: "Ecossistema", title: "Parceiros e fornecedores", description: "Tecnologia, pagamentos, intercâmbios, convênios e transferências." },
  ] },
  journey: { id: "jornada-academica", pill: "Da admissão à extensão", title: "Privacidade acompanha", accent: "cada etapa acadêmica.", description: "Definimos cuidados para fluxos presenciais, digitais e de pesquisa sem perder agilidade institucional.", stages: [
    { icon: "file", label: "Admissão", title: "Organizar inscrições e matrículas", description: "Finalidades, documentos, comunicações e acessos necessários." },
    { icon: "graduation", label: "Vida acadêmica", title: "Proteger registros educacionais", description: "Perfis, portais, EAD, avaliações e histórico com governança." },
    { icon: "research", label: "Pesquisa", title: "Avaliar dados e projetos", description: "Necessidade, contexto, participantes, parceiros e transparência." },
    { icon: "hub", label: "Extensão", title: "Cuidar das relações externas", description: "Convênios, comunidade, eventos e compartilhamentos documentados." },
    { icon: "check", label: "Gestão", title: "Acompanhar e melhorar", description: "Solicitações, incidentes, contratos e pendências em rotina." },
  ] },
  priority: { id: "prioridades-superior", pill: "Pontos de atenção", title: "Decisões que conectam", accent: "campus e tecnologia.", description: "A complexidade acadêmica pede critérios claros para acesso, transferência e uso responsável.", points: [
    { icon: "key", label: "Acesso", title: "Perfis por responsabilidade", description: "Docentes, estudantes, pesquisadores e terceiros acessam o necessário." },
    { icon: "research", label: "Pesquisa", title: "Tratar dados com contexto", description: "Projetos acadêmicos precisam de avaliação compatível com sua finalidade." },
    { icon: "billing", label: "Pagamentos", title: "Integrar serviços com critério", description: "Mensalidades, bolsas e parceiros exigem fluxos e responsabilidades claros." },
    { icon: "network", label: "Transferências", title: "Mapear compartilhamentos", description: "Convênios, nuvem, intercâmbios e fornecedores precisam de limites definidos." },
  ] },
  support: { id: "apoio-superior", pill: "Como a TOGETHER apoia", title: "Governança para uma operação", accent: "acadêmica conectada.", description: "Atuamos em uma prioridade, projeto ou rotina contínua, conforme o escopo.", items: [
    { icon: "analytics", title: "Diagnóstico e plano de ação", description: "Priorizamos fluxos, riscos e próximos passos." },
    { icon: "database", title: "Mapeamento acadêmico", description: "Conectamos admissões, portais, pesquisa, campus e serviços." },
    { icon: "research", title: "Pesquisa e extensão", description: "Apoiamos critérios para dados, projetos, participantes e parceiros." },
    { icon: "network", title: "Fornecedores e transferências", description: "Organizamos contratos, acessos, integrações e compartilhamentos." },
    { icon: "shield", title: "Solicitações e incidentes", description: "Criamos processos com responsáveis, registros e respostas." },
    { icon: "presentation", title: "Workshops por área", description: "Encontros práticos para gestão, docentes, pesquisa e tecnologia." },
  ], ctaTitle: "Quer avaliar uma prioridade acadêmica?", ctaText: "Ajudamos a dimensionar o escopo inicial.", cta: "Agende uma Conversa" },
  proof: [
    { value: "+5 anos", label: "de atuação em privacidade e LGPD" },
    { value: "+200", label: "atividades e entregas disponíveis" },
    { value: "Equipe multidisciplinar", label: "privacidade, tecnologia, processos e operação" },
    { value: "Escopo flexível", label: "de um projeto prioritário à governança contínua" },
  ],
  training: { id: "treinamentos-superior", pill: "Treinamentos e workshops", title: "Conhecimento aplicado a cada área.", description: "Encontros objetivos, adaptados à rotina acadêmica e registrados.", audiences: ["Admissão, secretaria e atendimento", "Docentes, coordenação e EAD", "Pesquisa, extensão e comitês", "Tecnologia, financeiro e fornecedores"] },
  faq: { pill: "Perguntas frequentes", title: "LGPD no ensino", accent: "superior.", description: "Respostas diretas sobre privacidade na operação acadêmica.", items: [
    { question: "Quais áreas entram no escopo?", answer: "Admissão, secretaria, ensino, EAD, pesquisa, extensão, biblioteca, campus, pagamentos, tecnologia e fornecedores podem tratar dados pessoais." },
    { question: "Como organizar dados de pesquisa acadêmica?", answer: "É importante avaliar finalidade, necessidade, contexto do projeto, participantes, parceiros, transparência e medidas de proteção aplicáveis." },
    { question: "e-MEC e Censo Superior mudam a análise?", answer: "Sim. Obrigações institucionais e estatísticas entram no contexto dos fluxos de dados. Apoiamos o mapeamento das informações, acessos e responsabilidades envolvidos." },
    { question: "Apoiam operações EAD e portais?", answer: "Sim. Avaliamos ambientes virtuais, acessos, integrações, fornecedores, registros acadêmicos e responsabilidades." },
    { question: "Como tratar pagamentos e fornecedores?", answer: "Mapeamos o compartilhamento necessário, os contratos, os acessos e as responsabilidades de cada participante do fluxo." },
    { question: "O que acontece após um incidente?", answer: "Organizamos responsáveis, avaliação, contenção, registro e comunicação conforme o caso e as regras aplicáveis." },
  ] },
  finalCta: { pill: "LGPD para ensino superior", title: "Coloque a privacidade em prática no campus.", description: "Entendemos o contexto e indicamos como estruturar a primeira frente.", cta: "Agende uma Conversa", nextStep: "Uma conversa sobre a operação, as áreas envolvidas e o escopo inicial." },
  campaignAnchors: [{ id: "admissao", sectionKey: "context" }, { id: "ead", sectionKey: "journey" }, { id: "pesquisa", sectionKey: "priority" }, { id: "fornecedores", sectionKey: "support" }, { id: "incidentes", sectionKey: "support" }, { id: "workshops", sectionKey: "training" }],
  sources: [
    { claim: "Princípios, direitos, segurança e bases da LGPD", url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm", reviewedAt: "2026-08-27" },
    { claim: "Dados e metodologia do Censo da Educação Superior", url: "https://www.gov.br/inep/pt-br/areas-de-atuacao/pesquisas-estatisticas-e-indicadores/censo-da-educacao-superior", reviewedAt: "2026-08-27" },
    { claim: "Cadastro nacional e consulta e-MEC", url: "https://www.gov.br/mec/pt-br/politica-regulacao-supervisao-educacao-superior/cadastro-nacional-de-cursos-e-ies", reviewedAt: "2026-08-27" },
    { claim: "Tratamento de dados para fins acadêmicos e pesquisas", url: "https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia-orientativo-tratamento-de-dados-pessoais-para-fins-academicos-e-para-a-realizacao-de-estudos-e-pesquisas", reviewedAt: "2026-08-27" },
    { claim: "Comunicação de incidente de segurança", url: "https://www.gov.br/anpd/pt-br/canais_atendimento/agente-de-tratamento/comunicado-de-incidente-de-seguranca-cis", reviewedAt: "2026-08-27" },
  ],
} as const satisfies SectorIndustryContent;
