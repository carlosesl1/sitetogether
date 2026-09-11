import type { HigherEducationIndustryContent } from "@/components/industry/narratives/industry-narrative-types";

export const higherEducationIndustryContent = {
  sector: "ensino-superior",
  metadata: {
    title: "Privacidade para instituições de ensino superior | TOGETHER",
    description: "Consultoria em LGPD e privacidade para o ensino superior. Diagnóstico, documentos, contratos, treinamento e acompanhamento da adequação com a TOGETHER.",
    canonical: "/solucoes/privacidade-ensino-superior",
    socialAlt: "Estudantes adultos e professor em operação acadêmica contemporânea"
  },
  hero: {
    pill: "Consultoria em privacidade e LGPD",
    title: "Simplifique a LGPD e a privacidade",
    accent: "na sua instituição de ensino.",
    description: "A TOGETHER ajuda a entender o que precisa ser feito, organizar a adequação e manter o trabalho em dia, com apoio em documentos, contratos, processos e treinamento das equipes.",
    cta: "Conversar com a TOGETHER",
    trustLine: "Empresas que confiam na TOGETHER",
    secondaryCta: {
      label: "Ver como podemos ajudar",
      href: "#seis-frentes"
    },
    image: {
      desktop: {
        avif: "/images/industries/higher-education/hero-desktop.avif",
        webp: "/images/industries/higher-education/hero-desktop.webp",
        png: "/images/industries/higher-education/hero-desktop.png",
        width: 1672,
        height: 941
      },
      mobile: {
        avif: "/images/industries/higher-education/hero-mobile.avif",
        webp: "/images/industries/higher-education/hero-mobile.webp",
        png: "/images/industries/higher-education/hero-mobile.png",
        width: 941,
        height: 1672
      }
    }
  },
  narrative: {
    problem: {
      id: "desafio-da-privacidade",
      pill: "O desafio da instituição",
      title: "O desafio é saber o que falta fazer",
      accent: "e manter a privacidade em dia.",
      description: "Políticas, contratos, sistemas, treinamentos e solicitações de alunos precisam de atenção. Sem saber o que já foi feito e o que ainda falta, fica difícil priorizar as ações e acompanhar o trabalho.",
      items: [
        {
          icon: "file",
          label: "Prioridades",
          title: "Entender o que precisa ser feito",
          description: "Saber o que se aplica à instituição, o que já está resolvido e o que precisa de atenção."
        },
        {
          icon: "users",
          label: "Adequação",
          title: "Coordenar as adequações",
          description: "Revisar documentos, contratos e processos, com responsáveis e prazos definidos."
        },
        {
          icon: "route",
          label: "Continuidade",
          title: "Manter o trabalho atualizado",
          description: "Acompanhar mudanças, preparar novas equipes e lidar com solicitações, auditorias e incidentes."
        }
      ],
      note: "A TOGETHER ajuda a organizar esse trabalho, explicar as prioridades e apoiar a execução com as equipes."
    },
    context: {
      id: "programa-de-privacidade",
      pill: "Quando a adequação já começou",
      title: "Sua instituição já tem uma política de privacidade.",
      accent: "O que precisa ser feito depois?",
      description: "A política de privacidade é uma parte da adequação. O restante precisa estar organizado na rotina da instituição.",
      areas: [
        { icon: "file", label: "Contratos" },
        { icon: "route", label: "Processos" },
        { icon: "presentation", label: "Treinamento das equipes" },
        { icon: "message", label: "Atendimento às solicitações" }
      ],
      actions: [
        "Avaliar o que já foi feito",
        "Identificar o que ainda precisa de atenção",
        "Organizar ações, responsáveis e prazos"
      ],
      note: "Quando necessário, a TOGETHER também apoia ajustes em documentos e processos, capacitação e acompanhamento contínuo."
    },
    sixFronts: {
      id: "seis-frentes",
      pill: "Como podemos ajudar",
      title: "Apoio para organizar a adequação",
      accent: "e cuidar da privacidade ao longo do tempo.",
      description: "Você pode começar por uma demanda específica ou reunir os serviços em um projeto de adequação e acompanhamento. Definimos o trabalho conforme a situação da instituição.",
      items: [
        {
          icon: "route",
          label: "01",
          title: "Diagnóstico e plano de adequação",
          description: "Entenda a situação atual, as pendências e o que precisa ser feito primeiro.",
          togetherHelp: "Analisamos documentos, sistemas e práticas e organizamos as ações com prioridades, responsáveis e prazos."
        },
        {
          icon: "file",
          label: "02",
          title: "Políticas e documentos",
          description: "Tenha documentos e orientações que correspondam ao funcionamento da instituição.",
          togetherHelp: "Criamos ou revisamos políticas, avisos e registros, explicando como devem ser usados e mantidos."
        },
        {
          icon: "network",
          label: "03",
          title: "Contratos e fornecedores",
          description: "Inclua os cuidados com privacidade nas relações com plataformas, prestadores e parceiros de pesquisa.",
          togetherHelp: "Apoiamos a revisão de contratos, obrigações e procedimentos de contratação e acompanhamento."
        },
        {
          icon: "users",
          label: "04",
          title: "Acompanhamento da privacidade",
          description: "Conte com apoio para acompanhar pendências, novas demandas e mudanças na instituição.",
          togetherHelp: "Apoiamos o encarregado e as áreas responsáveis na organização das atividades e na revisão dos processos."
        },
        {
          icon: "presentation",
          label: "05",
          title: "Treinamentos e orientações",
          description: "Prepare professores, funcionários e gestores para compreender e aplicar os cuidados de privacidade.",
          togetherHelp: "Adaptamos os conteúdos às atividades das equipes, com exemplos e orientações para a rotina acadêmica e administrativa."
        },
        {
          icon: "shield",
          label: "06",
          title: "Solicitações, auditorias e incidentes",
          description: "Organize a preparação e o atendimento a pedidos sobre dados, auditorias e incidentes.",
          togetherHelp: "Definimos procedimentos e responsáveis e apoiamos a organização de registros e respostas, conforme o serviço contratado."
        }
      ]
    },
    togetherApproach: {
      id: "como-a-together-atua",
      pill: "Como trabalhamos com a instituição",
      title: "Da avaliação inicial",
      accent: "ao acompanhamento do trabalho.",
      description: "Consideramos o que a instituição já fez e combinamos as ações necessárias. Cada etapa deixa claro o que será entregue e como as equipes participarão.",
      items: [
        {
          icon: "analytics",
          label: "01",
          title: "Entender a situação",
          description: "Revisamos o que já existe, ouvimos as equipes e identificamos as necessidades de adequação e acompanhamento."
        },
        {
          icon: "route",
          label: "02",
          title: "Definir as prioridades",
          description: "Organizamos as ações, as entregas e os prazos, com a participação de cada área definida."
        },
        {
          icon: "check",
          label: "03",
          title: "Executar as adequações",
          description: "Preparamos ou revisamos documentos, contratos e processos e realizamos as capacitações previstas."
        },
        {
          icon: "users",
          label: "04",
          title: "Acompanhar a evolução",
          description: "Revisamos as pendências e apoiamos atualizações e novas demandas incluídas no acompanhamento contratado."
        }
      ],
      cta: {
        eyebrow: "Próximo passo",
        title: "Sua instituição precisa começar ou dar continuidade?",
        description: "Conte o que já foi feito e o que precisa de apoio. Ajudamos a definir os próximos passos.",
        label: "Conversar com a TOGETHER",
        href: "#cta"
      }
    },
    outcomes: {
      id: "resultados-na-pratica",
      pill: "O que o trabalho ajuda a organizar",
      title: "Clareza para acompanhar",
      accent: "a adequação da instituição.",
      description: "Exemplos de como as entregas e o acompanhamento podem apoiar a gestão da privacidade.",
      items: [
        {
          icon: "route",
          label: "Planejamento",
          title: "Prioridades definidas",
          description: "A gestão consulta o plano para saber o que já foi feito, o que falta e quem acompanha cada ação."
        },
        {
          icon: "file",
          label: "Documentação",
          title: "Documentos organizados",
          description: "Políticas, avisos e registros têm responsáveis pela revisão e podem ser localizados quando necessários."
        },
        {
          icon: "network",
          label: "Contratos",
          title: "Fornecedores acompanhados",
          description: "As áreas responsáveis consultam os cuidados de privacidade previstos nos contratos e nas avaliações dos parceiros."
        },
        {
          icon: "users",
          label: "Continuidade",
          title: "Pendências acompanhadas",
          description: "O encarregado e as equipes têm uma referência para acompanhar ajustes, novas demandas e mudanças."
        },
        {
          icon: "presentation",
          label: "Equipes",
          title: "Treinamentos ligados à rotina",
          description: "Professores, funcionários e gestores recebem orientações relacionadas às suas atividades."
        },
        {
          icon: "shield",
          label: "Atendimento",
          title: "Preparação para responder",
          description: "A instituição conta com procedimentos e registros para apoiar solicitações, auditorias e incidentes."
        }
      ]
    }
  },
  faq: {
    pill: "Perguntas frequentes",
    title: "Tire suas dúvidas",
    accent: "antes de começar.",
    description: "Entenda como o apoio pode começar e continuar na sua instituição.",
    items: [
      {
        question: "Já temos jurídico, TI e encarregado. Vocês podem ajudar?",
        answer: "Sim. Consideramos o trabalho existente e atuamos com os profissionais da instituição. A proposta define as adequações e o acompanhamento necessários, com a participação de cada equipe."
      },
      {
        question: "Precisamos contratar todos os serviços?",
        answer: "Não. Podemos começar por uma necessidade específica, por um projeto de adequação ou pelo acompanhamento da privacidade. Os serviços e as entregas são definidos conforme a situação da instituição."
      },
      {
        question: "Quanto trabalho ficará com nossas equipes?",
        answer: "As equipes explicam como trabalham, fornecem as informações necessárias e participam das decisões. Antes de começar, combinamos quem participa e o que ficará com a TOGETHER e com a instituição."
      },
      {
        question: "A TOGETHER pode atuar como encarregado ou apoiar nosso DPO?",
        answer: "Sim. Podemos atuar como encarregado externo, também chamado DPO, ou apoiar o profissional que já exerce essa função. O modelo e as atividades são definidos na proposta."
      },
      {
        question: "O apoio pode continuar depois da adequação inicial?",
        answer: "Sim. O acompanhamento pode incluir revisão de pendências, documentos e processos, além de novas demandas de privacidade. As atividades e a frequência são combinadas na contratação."
      },
      {
        question: "Os treinamentos são adaptados às equipes?",
        answer: "Sim. Usamos situações do trabalho de professores, funcionários e gestores. Combinamos o formato e a frequência com a instituição."
      },
      {
        question: "O que acontece depois de enviar o formulário?",
        answer: "Um especialista entra em contato para combinar a conversa. Você apresenta sua dúvida ou necessidade, e avaliamos como podemos ajudar. O diagnóstico e as entregas são definidos no projeto a ser contratado."
      },
      {
        question: "Como são definidos o preço e o que será entregue?",
        answer: "O valor depende do trabalho necessário e das áreas e unidades envolvidas. A proposta informa o que será entregue, quem participa e qual acompanhamento está incluído."
      }
    ]
  },
  finalCta: {
    pill: "Fale com a TOGETHER",
    title: "Converse sobre a privacidade",
    description: "Conte sua dúvida ou o que precisa avançar na adequação. Podemos ajudar a organizar as prioridades e definir o apoio necessário.",
    cta: "Solicitar contato",
    nextStep: "da sua instituição."
  },
  campaignAnchors: [
    {
      id: "admissao",
      sectionKey: "six-fronts"
    },
    {
      id: "ead",
      sectionKey: "six-fronts"
    },
    {
      id: "pesquisa",
      sectionKey: "six-fronts"
    },
    {
      id: "fornecedores",
      sectionKey: "six-fronts"
    },
    {
      id: "incidentes",
      sectionKey: "six-fronts"
    },
    {
      id: "workshops",
      sectionKey: "six-fronts"
    }
  ],
  sources: [
    {
      claim: "Princípios, direitos, segurança e bases da LGPD",
      url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm",
      reviewedAt: "2026-08-27"
    },
    {
      claim: "Dados e metodologia do Censo da Educação Superior",
      url: "https://www.gov.br/inep/pt-br/areas-de-atuacao/pesquisas-estatisticas-e-indicadores/censo-da-educacao-superior",
      reviewedAt: "2026-08-27"
    },
    {
      claim: "Cadastro nacional e consulta e-MEC",
      url: "https://www.gov.br/mec/pt-br/politica-regulacao-supervisao-educacao-superior/cadastro-nacional-de-cursos-e-ies",
      reviewedAt: "2026-08-27"
    },
    {
      claim: "Tratamento de dados para fins acadêmicos e pesquisas",
      url: "https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia-orientativo-tratamento-de-dados-pessoais-para-fins-academicos-e-para-a-realizacao-de-estudos-e-pesquisas",
      reviewedAt: "2026-08-27"
    },
    {
      claim: "Comunicação de incidente de segurança",
      url: "https://www.gov.br/anpd/pt-br/canais_atendimento/agente-de-tratamento/comunicado-de-incidente-de-seguranca-cis",
      reviewedAt: "2026-08-27"
    }
  ]
} as const satisfies HigherEducationIndustryContent;
