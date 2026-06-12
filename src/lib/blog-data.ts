export interface WPPost {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  categories: number[];
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
      media_details?: {
        width: number;
        height: number;
      };
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
      slug: string;
      taxonomy: string;
    }>>;
    author?: Array<{
      name: string;
    }>;
  };
}

export const MOCK_POSTS: WPPost[] = [
  {
    id: 10198,
    date: "2025-12-11T15:41:01",
    slug: "dpo-as-a-service-guia-completo",
    title: {
      rendered: "DPO as a Service: O Guia Completo para sua Empresa"
    },
    excerpt: {
      rendered: "Entenda o que é DPO as a Service, quais as vantagens para sua empresa e como garantir a conformidade com a LGPD de forma estratégica e econômica."
    },
    content: {
      rendered: `<h2>O que é DPO as a Service?</h2>
<p>DPO as a Service é um modelo de contratação externa de um Data Protection Officer (Encarregado de Proteção de Dados) que atua como responsável pela gestão de privacidade e conformidade com a LGPD na sua empresa.</p>
<h3>Por que o DPO é obrigatório?</h3>
<p>De acordo com a LGPD, toda empresa que realiza tratamento de dados pessoais precisa indicar um Encarregado de Proteção de Dados. A ausência pode resultar em multas severas.</p>`
    },
    categories: [34],
    _embedded: {
      "wp:featuredmedia": [
        {
          source_url: "https://togetherprivacy.tech/wp-content/uploads/2025/11/DPO-as-a-Service.webp",
          alt_text: "DPO as a Service Guide"
        }
      ],
      "wp:term": [
        [
          {
            id: 34,
            name: "Privacidade",
            slug: "privacidade",
            taxonomy: "category"
          }
        ]
      ]
    }
  },
  {
    id: 10200,
    date: "2025-11-20T10:00:00",
    slug: "importancia-da-lgpd",
    title: {
      rendered: "A Importância da LGPD no Cenário Digital Atual"
    },
    excerpt: {
      rendered: "Descubra por que a proteção de dados tornou-se um pilar fundamental para a confiança do cliente e o crescimento sustentável dos negócios."
    },
    content: {
      rendered: "<p>A LGPD não é apenas uma obrigação legal, é uma vantagem competitiva...</p>"
    },
    categories: [34],
    _embedded: {
      "wp:featuredmedia": [
        {
          source_url: "https://togetherprivacy.tech/wp-content/uploads/2025/11/DPO-as-a-Service.webp",
          alt_text: "LGPD importance"
        }
      ],
      "wp:term": [
        [
          {
            id: 34,
            name: "Compliance",
            slug: "compliance",
            taxonomy: "category"
          }
        ]
      ]
    }
  },
  {
    id: 10205,
    date: "2025-11-05T14:30:00",
    slug: "seguranca-da-informacao-nas-pme",
    title: {
      rendered: "Segurança da Informação para Pequenas e Médias Empresas"
    },
    excerpt: {
      rendered: "Dicas práticas e acessíveis para proteger os dados da sua empresa contra as ameaças cibernéticas mais comuns."
    },
    content: {
      rendered: "<p>Segurança da informação não precisa ser complexa ou cara...</p>"
    },
    categories: [34],
    _embedded: {
      "wp:featuredmedia": [
        {
          source_url: "https://togetherprivacy.tech/wp-content/uploads/2025/11/DPO-as-a-Service.webp",
          alt_text: "Security for SMEs"
        }
      ],
      "wp:term": [
        [
          {
            id: 34,
            name: "Segurança",
            slug: "seguranca",
            taxonomy: "category"
          }
        ]
      ]
    }
  }
];
