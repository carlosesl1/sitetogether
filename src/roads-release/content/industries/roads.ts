import type { RoadsNarrativeIndustryContent } from "@/roads-release/components/industry/narratives/industry-narrative-types";

const imageBase = "/images/industries/roads";

export const roadsIndustryContent = {
  sector: "gestao-de-rodovias",
  metadata: {
    title: "Serviços de Privacidade e LGPD para Gestão de Rodovias",
    description:
      "Serviços de LGPD para operações rodoviárias: pedágio, CCO, atendimento, fornecedores e DPO. Converse com a TOGETHER sobre sua operação.",
    canonical: "/solucoes/privacidade-gestao-de-rodovias",
    socialAlt:
      "Operação rodoviária com pórtico e sistemas de monitoramento",
  },
  hero: {
    pill: "Serviços de privacidade para gestão de rodovias",
    title: "Defina quem acessa e compartilha",
    accent: "os dados da sua rodovia.",
    description:
      "A TOGETHER aplica sua metodologia aos dados de pedágio, atendimento e fornecedores, conectando jurídico, tecnologia e operação.",
    cta: "Solicitar uma conversa",
    trustLine:
      "Empresas que confiam na TOGETHER.",
    secondaryCta: { label: "Veja como atuamos", href: "#como-atuamos" },
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
  narrative: {
    dataRoute: {
      id: "percurso-do-dado",
      pill: "Dados na rotina da rodovia",
      title: "Do pedágio à emergência,",
      accent: "cada uso pede atenção.",
      description:
        "Mapeamos os dados e orientamos seu uso nas frentes da operação.",
      items: [
        {
          icon: "camera",
          label: "01",
          title: "Pedágio",
          description:
            "Placas, imagens e registros de passagem: relacionar a coleta ao uso na arrecadação e no atendimento.",
        },
        {
          icon: "analytics",
          label: "02",
          title: "CCO e CFTV",
          description:
            "No Centro de Controle Operacional e no circuito fechado de TV, definir acesso às imagens e condições de compartilhamento.",
        },
        {
          icon: "network",
          label: "03",
          title: "Emergências",
          description:
            "Quando o socorro envolve dados de saúde, delimitar o acesso e o repasse entre as equipes envolvidas.",
        },
        {
          icon: "billing",
          label: "04",
          title: "Pagamentos",
          description:
            "Identificar quais dados seguem para cobrança, conciliação e reembolso, inclusive nos serviços terceirizados.",
        },
        {
          icon: "check",
          label: "05",
          title: "Fornecedores",
          description:
            "Verificar acessos e obrigações de quem opera sistemas, presta suporte ou trata dados em nome da concessionária.",
        },
        {
          icon: "message",
          label: "06",
          title: "Atendimento",
          description:
            "Organizar a consulta aos registros para responder ao usuário sem expor informações de outras pessoas.",
        },
        {
          icon: "file",
          label: "07",
          title: "Guarda de registros",
          description:
            "Relacionar prazos de guarda e descarte à finalidade, às obrigações aplicáveis e à necessidade de preservar evidências.",
        },
      ],
    },
    freeFlowDecisions: {
      id: "decisoes-no-free-flow",
      pill: "Free Flow na prática",
      title: "A passagem é automática.",
      accent: "O uso dos dados precisa ser explicado.",
      description:
        "Aplicamos requisitos de privacidade à captura, cobrança e atendimento no Free Flow.",
      items: [
        {
          icon: "camera",
          label: "Finalidade",
          title: "Associar dados a uma finalidade",
          description:
            "Identificar para que placas, imagens e cadastros são usados em cada etapa do serviço.",
        },
        {
          icon: "key",
          label: "Acesso",
          title: "Delimitar consultas e alterações",
          description:
            "Relacionar as tarefas de cada equipe às permissões e aos registros de acesso necessários.",
        },
        {
          icon: "database",
          label: "Retenção",
          title: "Estabelecer prazos de guarda",
          description:
            "Avaliar os registros e as obrigações da operação, sem aplicar o mesmo prazo a todos os dados.",
        },
        {
          icon: "check",
          label: "Correção",
          title: "Localizar a etapa a revisar",
          description:
            "Mapear onde leitura, associação e integrações podem exigir verificação pelo responsável técnico.",
        },
        {
          icon: "message",
          label: "Transparência",
          title: "Preparar a resposta ao usuário",
          description:
            "Alinhar o atendimento aos registros disponíveis, às correções confirmadas e ao que pode ser informado.",
        },
      ],
    },
    dispute: {
      id: "historia-da-contestacao",
      pill: "Um exemplo de aplicação",
      title: "Uma cobrança contestada",
      accent: "pede uma resposta verificável.",
      description:
        "Exemplo de aplicação: uma cobrança contestada exige localizar a passagem e conferir os registros. A TOGETHER conecta esse fluxo aos responsáveis e organiza um procedimento de apuração e resposta.",
      items: [
        {
          icon: "message",
          label: "Usuário",
          title: "Não reconheço esta cobrança",
          description:
            "O atendimento recebe a dúvida e reúne o contexto necessário para encaminhar a apuração.",
        },
        {
          icon: "camera",
          label: "Captura",
          title: "Localizar a passagem",
          description:
            "Identificar onde consultar placa, imagem, horário e local, com acesso limitado a quem participa da apuração.",
        },
        {
          icon: "analytics",
          label: "Regra",
          title: "Conferir a cobrança",
          description:
            "Acionar quem pode verificar a associação do veículo, a regra aplicada e os registros das integrações.",
        },
        {
          icon: "network",
          label: "Correção",
          title: "Encaminhar o ajuste",
          description:
            "Definir o contato e o escalonamento entre concessionária, integrador e prestador de pagamento.",
        },
        {
          icon: "file",
          label: "Resposta",
          title: "Documentar a resposta",
          description:
            "Registrar os fatos, quem confirmou cada informação e o encaminhamento adotado para orientar a resposta do atendimento.",
        },
      ],
    },
    roadResponsibilities: {
      id: "responsabilidades-na-rodovia",
      pill: "Equipes e fornecedores",
      title: "O contrato precisa fazer sentido",
      accent: "para quem executa o serviço.",
      description:
        "Alinhamos contratos, responsabilidades e rotinas com os participantes da operação.",
      items: [
        {
          icon: "building",
          label: "Concessionária",
          title: "Conduzir a operação",
          description:
            "Identificar quem aprova o uso dos dados, acompanha os serviços e recebe os escalonamentos.",
        },
        {
          icon: "server",
          label: "TI e integradores",
          title: "Manter sistemas e conexões",
          description:
            "Alinhar acessos, registros e pontos de contato para verificar falhas ou executar ajustes técnicos.",
        },
        {
          icon: "billing",
          label: "Prestadores de pagamento",
          title: "Tratar transações",
          description:
            "Combinar os dados necessários à conciliação, ao reembolso e à apuração de divergências.",
        },
        {
          icon: "message",
          label: "Atendimento",
          title: "Receber e encaminhar pedidos",
          description:
            "Definir o que a equipe pode consultar, informar e encaminhar ao DPO ou a outras áreas.",
        },
        {
          icon: "network",
          label: "Fornecedores",
          title: "Cumprir o escopo contratado",
          description:
            "Revisar o uso dos dados, os acessos e a comunicação de ocorrências, inclusive no suporte terceirizado.",
        },
      ],
    },
    roadIncidents: {
      id: "incidentes-na-cadeia",
      pill: "Incidentes e continuidade",
      title: "Prepare as equipes",
      accent: "para responder em conjunto.",
      description:
        "A TOGETHER apoia a organização da resposta a incidentes com dados pessoais. Segurança, operação e fornecedores executam as medidas técnicas e de continuidade.",
      items: [
        {
          icon: "analytics",
          label: "01",
          title: "Confirmar",
          description:
            "Reunir o que já se sabe sobre o ocorrido, o período e os ambientes afetados.",
        },
        {
          icon: "shield",
          label: "02",
          title: "Avaliar",
          description:
            "Identificar dados envolvidos e possíveis impactos sobre as pessoas e o serviço.",
        },
        {
          icon: "server",
          label: "03",
          title: "Coordenar",
          description:
            "Acionar as equipes técnicas para contenção, preservação de evidências e continuidade operacional.",
        },
        {
          icon: "message",
          label: "04",
          title: "Comunicar",
          description:
            "Apoiar a avaliação das obrigações e preparar comunicações com base nos fatos confirmados.",
        },
        {
          icon: "file",
          label: "05",
          title: "Revisar",
          description:
            "Registrar decisões e medidas para orientar os ajustes nos procedimentos e no programa de privacidade.",
        },
      ],
    },
    integrations: {
      id: "integracoes-e-transferencias",
      pill: "Integrações e serviços externos",
      title: "Saiba por onde os dados passam",
      accent: "quando saem de um sistema.",
      description:
        "Mapeamos com TI e fornecedores os fluxos entre sistemas, acessos e condições de uso.",
      items: [
        {
          icon: "cloud",
          label: "Infraestrutura",
          title: "Nuvem",
          description:
            "Identificar onde ficam os dados e backups e quem administra esses ambientes.",
        },
        {
          icon: "code",
          label: "Conexões",
          title: "Integrações",
          description:
            "Relacionar os dados enviados e recebidos ao serviço que cada conexão executa.",
        },
        {
          icon: "users",
          label: "Operação",
          title: "Suporte",
          description:
            "Revisar o acesso de equipes externas, sua finalidade e as condições de encerramento.",
        },
        {
          icon: "route",
          label: "Exterior",
          title: "Transferências",
          description:
            "Verificar se há fluxo internacional e quais requisitos se aplicam ao tratamento de dados.",
        },
      ],
    },
    togetherRoads: {
      id: "como-atuamos",
      pill: "Serviços da TOGETHER",
      title: "Como trabalhamos",
      accent: "com sua equipe.",
      description:
        "Definimos um fluxo prioritário e organizamos as ações com sua equipe. O apoio pode ser por projeto ou contínuo.",
      items: [
        {
          icon: "analytics",
          label: "Prioridades",
          title: "Diagnóstico e priorização",
          description:
            "Avaliamos lacunas e registramos prioridades para orientar os ajustes.",
        },
        {
          icon: "network",
          label: "Dados e projetos",
          title: "Mapeamento e privacy by design",
          description:
            "Relacionamos dados, sistemas e agentes para incorporar requisitos de privacidade a projetos e mudanças na operação.",
        },
        {
          icon: "file",
          label: "Terceiros",
          title: "Governança de fornecedores",
          description:
            "Revisamos papéis, contratos e acessos para que a equipe saiba o que acompanhar e cobrar de cada prestador.",
        },
        {
          icon: "shield",
          label: "Rotina",
          title: "DPO, incidentes e continuidade",
          description:
            "Apoiamos titulares, incidentes e treinamentos para manter o programa de privacidade acompanhado na rotina.",
        },
      ],
      note:
        "Aplicamos nossa metodologia ao fluxo escolhido: mapeamos os dados, definimos responsáveis e organizamos contratos e procedimentos. TI e fornecedores participam dos ajustes nos sistemas.",
    },
    diagnostic: {
      id: "diagnostico-inicial",
      pill: "Como começamos",
      title: "Conte o que precisa avançar",
      accent: "na sua operação.",
      description:
        "Conte a prioridade da operação para avaliarmos o apoio necessário.",
      points: [
        "A prioridade: um projeto, uma dúvida recorrente ou o programa de privacidade",
        "As áreas, os sistemas e os fornecedores relacionados à demanda",
        "O apoio esperado e a participação das equipes na definição do escopo",
      ],
      objection: {
        title: "Primeiro, a conversa",
        description:
          "O contato é sem compromisso. A proposta detalha serviços, participação das equipes e investimento.",
      },
      cta: "Solicitar uma conversa",
    },
  },
  faq: {
    pill: "Perguntas frequentes",
    title: "Antes de falar com a TOGETHER,",
    accent: "entenda como podemos apoiar.",
    description:
      "Metodologia, participação da equipe e serviços para a operação rodoviária.",
    items: [
      {
        question:
          "A atuação se limita ao Free Flow?",
        answer:
          "Não. Os serviços de privacidade podem abranger pedágio, CCO e CFTV, atendimento ao usuário, dados de emergências e fornecedores. O recorte considera os dados tratados e as necessidades da sua operação.",
      },
      {
        question: "Podemos começar durante um projeto?",
        answer:
          "Sim. O mapeamento e o privacy by design ajudam a incorporar requisitos de privacidade a sistemas, integrações e contratos antes do início da operação. Sua equipe e os fornecedores participam das decisões e da execução técnica.",
      },
      {
        question: "Como a TOGETHER trabalha com o DPO e as equipes existentes?",
        answer:
          "O apoio é definido conforme a estrutura da operação. Pode envolver atendimento a titulares, fornecedores, treinamentos e organização da resposta a incidentes. Na definição do escopo, alinhamos as atividades da TOGETHER, do DPO e das demais equipes.",
      },
      {
        question: "A TOGETHER corrige sistemas de pedágio ou cobrança?",
        answer:
          "Não substituímos integradores ou fornecedores de tecnologia. Podemos ajudar a mapear dados, acessos e pontos de decisão e a organizar o encaminhamento de dúvidas. A verificação e os ajustes técnicos cabem às equipes responsáveis pelos sistemas.",
      },
      {
        question: "Quanto a nossa equipe precisa participar?",
        answer:
          "A participação depende dos fluxos analisados e do apoio contratado. Alinhamos quais áreas e fornecedores devem contribuir com informações, validar o uso dos dados e executar ajustes. Esse envolvimento faz parte da definição do escopo.",
      },
      {
        question: "O que acontece depois de enviar o formulário?",
        answer:
          "Um especialista entrará em contato para entender a demanda e conversar sobre o apoio necessário. Depois, uma proposta pode detalhar serviços, entregas e investimento.",
      },
      {
        question: "Como a metodologia é aplicada à nossa operação?",
        answer:
          "Começamos pelo fluxo que precisa de atenção, como dados de pedágio, atendimento ou fornecedores. Mapeamos os dados e os participantes, avaliamos os usos e definimos com as equipes as responsabilidades, os ajustes e os procedimentos. A metodologia conecta jurídico, tecnologia e operação, considerando os sistemas e as rotinas da concessionária.",
      },
    ],
  },
  finalCta: {
    pill: "Converse com um especialista",
    title:
      "Evite problemas com privacidade na sua operação rodoviária.",
    description:
      "Envie seus dados para que um especialista entre em contato e entenda a prioridade da sua equipe, do pedágio ao atendimento.",
    cta: "Solicitar uma conversa",
    nextStep:
      "Sem compromisso. A conversa vem antes da definição de serviços e investimento.",
  },
  campaignAnchors: [
    { id: "free-flow", sectionKey: "free-flow-decisions" },
    { id: "privacy-by-design", sectionKey: "free-flow-decisions" },
    { id: "fornecedores", sectionKey: "road-responsibilities" },
    { id: "dpo", sectionKey: "together-roads" },
    { id: "incidentes", sectionKey: "road-incidents" },
    { id: "internacional", sectionKey: "integrations" },
  ],
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
      claim: "Identificação automática, imagem, OCR e retenção aplicável",
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
} as const satisfies RoadsNarrativeIndustryContent;
