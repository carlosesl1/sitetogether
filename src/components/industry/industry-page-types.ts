export type IndustryCtaPosition = "hero" | "capabilities" | "final";

export type IndustryProofItem = {
  readonly value: string;
  readonly label: string;
};

export type IndustryFaqItem = {
  readonly question: string;
  readonly answer: string;
};

export type IndustryCampaignAnchor = {
  readonly id:
    | "free-flow"
    | "privacy-by-design"
    | "fornecedores"
    | "dpo"
    | "incidentes"
    | "internacional";
  readonly sectionKey:
    | "freeFlow"
    | "lifecycle"
    | "capabilities"
    | "international";
};

export type IndustryContentSource = {
  readonly claim: string;
  readonly url: string;
  readonly reviewedAt: "2026-08-27";
};

export type IndustryHeroContent = {
  readonly pill: string;
  readonly title: string;
  readonly accent: string;
  readonly description: string;
  readonly cta: string;
  readonly image: {
    readonly desktop: {
      readonly avif: string;
      readonly webp: string;
      readonly png: string;
      readonly width: number;
      readonly height: number;
    };
    readonly mobile: {
      readonly avif: string;
      readonly webp: string;
      readonly png: string;
      readonly width: number;
      readonly height: number;
    };
  };
};

export type IndustryTextItem = {
  readonly label: string;
  readonly title: string;
  readonly description: string;
};

export type IndustryCapability = {
  readonly title: string;
  readonly description: string;
};

export type IndustryFinalCtaContent = {
  readonly pill: string;
  readonly title: string;
  readonly description: string;
  readonly cta: string;
  readonly nextStep: string;
};

export type SectorId =
  | "saas"
  | "escolas-particulares"
  | "ensino-superior"
  | "transporte-fracionado"
  | "transporte-lotacao";

export type SectorVisualFamily =
  | "product"
  | "school"
  | "campus"
  | "hub"
  | "direct-route";

export type IndustryIconKey =
  | "analytics"
  | "billing"
  | "book"
  | "building"
  | "camera"
  | "check"
  | "cloud"
  | "code"
  | "database"
  | "file"
  | "graduation"
  | "hub"
  | "key"
  | "map-pin"
  | "message"
  | "network"
  | "package"
  | "presentation"
  | "research"
  | "route"
  | "server"
  | "shield"
  | "telemetry"
  | "truck"
  | "users"
  | "warehouse";

export type SectorTextItem = IndustryTextItem & {
  readonly icon: IndustryIconKey;
};

export type SectorCapability = IndustryCapability & {
  readonly icon: IndustryIconKey;
  readonly emphasis?: boolean;
};

export type SectorCampaignAnchor = {
  readonly id: string;
  readonly sectionKey:
    | "context"
    | "journey"
    | "priority"
    | "support"
    | "training";
};

export type SectorIndustryContent = {
  readonly sector: SectorId;
  readonly visualFamily: SectorVisualFamily;
  readonly metadata: {
    readonly title: string;
    readonly description: string;
    readonly canonical: string;
    readonly socialAlt: string;
  };
  readonly hero: IndustryHeroContent;
  readonly context: {
    readonly id: string;
    readonly pill: string;
    readonly title: string;
    readonly accent: string;
    readonly description: string;
    readonly nodes: readonly SectorTextItem[];
  };
  readonly journey: {
    readonly id: string;
    readonly pill: string;
    readonly title: string;
    readonly accent: string;
    readonly description: string;
    readonly stages: readonly SectorTextItem[];
  };
  readonly priority: {
    readonly id: string;
    readonly pill: string;
    readonly title: string;
    readonly accent: string;
    readonly description: string;
    readonly points: readonly SectorTextItem[];
  };
  readonly support: {
    readonly id: string;
    readonly pill: string;
    readonly title: string;
    readonly accent: string;
    readonly description: string;
    readonly items: readonly SectorCapability[];
    readonly ctaTitle: string;
    readonly ctaText: string;
    readonly cta: string;
  };
  readonly proof: readonly IndustryProofItem[];
  readonly training: {
    readonly id: string;
    readonly pill: string;
    readonly title: string;
    readonly description: string;
    readonly audiences: readonly string[];
  };
  readonly faq: {
    readonly pill: string;
    readonly title: string;
    readonly accent: string;
    readonly description: string;
    readonly items: readonly IndustryFaqItem[];
  };
  readonly finalCta: IndustryFinalCtaContent;
  readonly campaignAnchors: readonly SectorCampaignAnchor[];
  readonly sources: readonly {
    readonly claim: string;
    readonly url: string;
    readonly reviewedAt: string;
  }[];
};

export type RoadsIndustryContent = {
  readonly sector: "gestao-de-rodovias";
  readonly metadata: {
    readonly title: string;
    readonly description: string;
    readonly canonical: "/solucoes/privacidade-gestao-de-rodovias";
  };
  readonly hero: IndustryHeroContent;
  readonly proof: readonly IndustryProofItem[];
  readonly context: {
    readonly pill: string;
    readonly title: string;
    readonly accent: string;
    readonly description: string;
    readonly emphasis: string;
    readonly emphasisAccent: string;
    readonly nodes: readonly IndustryTextItem[];
  };
  readonly lifecycle: {
    readonly pill: string;
    readonly title: string;
    readonly accent: string;
    readonly description: string;
    readonly stages: readonly IndustryTextItem[];
  };
  readonly freeFlow: {
    readonly pill: string;
    readonly title: string;
    readonly accent: string;
    readonly description: string;
    readonly controls: readonly IndustryTextItem[];
  };
  readonly capabilities: {
    readonly pill: string;
    readonly title: string;
    readonly accent: string;
    readonly description: string;
    readonly items: readonly IndustryCapability[];
    readonly ctaTitle: string;
    readonly ctaText: string;
    readonly cta: string;
  };
  readonly operations: {
    readonly pill: string;
    readonly title: string;
    readonly accent: string;
    readonly description: string;
    readonly routines: readonly IndustryTextItem[];
  };
  readonly training: {
    readonly pill: string;
    readonly title: string;
    readonly description: string;
    readonly audiences: readonly string[];
  };
  readonly international: {
    readonly pill: string;
    readonly title: string;
    readonly accent: string;
    readonly description: string;
    readonly illustration: {
      readonly src: "/images/industries/roads/international-data-routes-v3.png";
      readonly width: 1254;
      readonly height: 1254;
      readonly alt: string;
    };
  };
  readonly faq: {
    readonly pill: string;
    readonly title: string;
    readonly accent: string;
    readonly description: string;
    readonly items: readonly IndustryFaqItem[];
  };
  readonly finalCta: IndustryFinalCtaContent;
  readonly sources: readonly IndustryContentSource[];
  readonly campaignAnchors: readonly IndustryCampaignAnchor[];
};
