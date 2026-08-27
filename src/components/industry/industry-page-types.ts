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
  readonly description: string;
  readonly cta: string;
  readonly image: {
    readonly desktop: {
      readonly avif: string;
      readonly webp: string;
      readonly png: string;
      readonly width: 1717;
      readonly height: 916;
    };
    readonly mobile: {
      readonly avif: string;
      readonly webp: string;
      readonly png: string;
      readonly width: 941;
      readonly height: 1672;
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

export type RoadsIndustryContent = {
  readonly sector: "gestao-de-rodovias";
  readonly metadata: {
    readonly title: string;
    readonly description: string;
    readonly canonical: "/solucoes/privacidade-gestao-de-rodovias";
  };
  readonly hero: IndustryHeroContent;
  readonly proof: readonly IndustryProofItem[];
  readonly proofNote: string;
  readonly context: {
    readonly pill: string;
    readonly title: string;
    readonly description: string;
    readonly nodes: readonly IndustryTextItem[];
  };
  readonly lifecycle: {
    readonly pill: string;
    readonly title: string;
    readonly description: string;
    readonly stages: readonly IndustryTextItem[];
  };
  readonly freeFlow: {
    readonly pill: string;
    readonly title: string;
    readonly description: string;
    readonly controls: readonly IndustryTextItem[];
  };
  readonly capabilities: {
    readonly pill: string;
    readonly title: string;
    readonly description: string;
    readonly items: readonly IndustryCapability[];
    readonly ctaTitle: string;
    readonly ctaText: string;
    readonly cta: string;
  };
  readonly operations: {
    readonly pill: string;
    readonly title: string;
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
  readonly finalCta: {
    readonly pill: string;
    readonly title: string;
    readonly description: string;
    readonly cta: string;
    readonly nextStep: string;
  };
  readonly sources: readonly IndustryContentSource[];
  readonly campaignAnchors: readonly IndustryCampaignAnchor[];
};
