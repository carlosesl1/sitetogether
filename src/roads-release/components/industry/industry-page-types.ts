export type IndustryCtaPosition = "hero" | "map" | "proof" | "final";

export type IndustryFaqItem = {
  readonly question: string;
  readonly answer: string;
};

export type IndustryNarrativeChapterKey =
  | "growth-complexity"
  | "policy-decisions"
  | "privacy-by-design"
  | "evolution"
  | "method"
  | "real-situations"
  | "capabilities"
  | "cross-functional"
  | "social-proof"
  | "saas-stage"
  | "school-day"
  | "minors"
  | "platforms"
  | "responsibilities"
  | "family-response"
  | "together-school"
  | "privacy-program"
  | "six-fronts"
  | "together-approach"
  | "outcomes"
  | "handoffs"
  | "network"
  | "sharing-rules"
  | "reconstruction"
  | "traveling-criteria"
  | "together-freight"
  | "before-trip"
  | "during-trip"
  | "delivery"
  | "retention"
  | "route-incidents"
  | "together-truckload"
  | "data-route"
  | "free-flow-decisions"
  | "dispute"
  | "road-responsibilities"
  | "road-incidents"
  | "integrations"
  | "together-roads"
  | "diagnostic";

export type IndustrySectionKey = IndustryNarrativeChapterKey;

export type IndustryCampaignAnchor = {
  readonly id: string;
  readonly sectionKey: IndustrySectionKey;
};

export type IndustryContentSource = {
  readonly claim: string;
  readonly url: string;
  readonly reviewedAt: string;
};

export type IndustryHeroContent = {
  readonly pill?: string;
  readonly title: string;
  readonly accent: string;
  readonly description: string;
  readonly cta: string;
  readonly trustLine: string;
  readonly secondaryCta?: {
    readonly label: string;
    readonly href: `#${string}`;
  };
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

export type IndustryFinalCtaContent = {
  readonly pill?: string;
  readonly title: string;
  readonly description: string;
  readonly cta: string;
  readonly nextStep?: string;
};

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

export type IndustryObjectionContent = {
  readonly title: string;
  readonly description: string;
};

export type IndustrySectionIntro = {
  readonly id: string;
  readonly pill: string;
  readonly title: string;
  readonly accent: string;
  readonly description: string;
};

export type IndustryDiagnosticContent = IndustrySectionIntro & {
  readonly points: readonly string[];
  readonly objection: IndustryObjectionContent;
  readonly cta: string;
};

export type IndustryMetadata = {
  readonly title: string;
  readonly description: string;
  readonly canonical: `/solucoes/${string}`;
  readonly socialAlt: string;
};

export type IndustrySharedContent = {
  readonly sector: string;
  readonly metadata: IndustryMetadata;
  readonly hero: IndustryHeroContent;
  readonly faq: {
    readonly pill: string;
    readonly title: string;
    readonly accent: string;
    readonly description?: string;
    readonly items: readonly IndustryFaqItem[];
  };
  readonly finalCta: IndustryFinalCtaContent;
  readonly campaignAnchors: readonly IndustryCampaignAnchor[];
  readonly sources: readonly IndustryContentSource[];
};
