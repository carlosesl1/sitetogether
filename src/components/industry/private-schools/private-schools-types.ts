import type { IndustryIconKey } from "@/components/industry/industry-page-types";

export type PrivateSchoolsNarrativeIntro = {
  readonly id: string;
  readonly pill: string;
  readonly title: string;
  readonly accent: string;
  readonly description: string;
};

export type PrivateSchoolsNarrativeItem = {
  readonly icon: IndustryIconKey;
  readonly label: string;
  readonly title: string;
  readonly description: string;
};

export type PrivateSchoolsNarrativeChapter = PrivateSchoolsNarrativeIntro & {
  readonly items: readonly PrivateSchoolsNarrativeItem[];
};

export type PrivateSchoolsIndustryContent = {
  readonly sector: "escolas-particulares";
  readonly metadata: {
    readonly title: string;
    readonly description: string;
    readonly canonical: "/solucoes/privacidade-escolas-particulares";
    readonly socialAlt: string;
  };
  readonly hero: {
    readonly pill: string;
    readonly title: string;
    readonly accent: string;
    readonly description: string;
    readonly cta: string;
    readonly supportLine: string;
    readonly trustLine: string;
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
  readonly narrative: {
    readonly problem: PrivateSchoolsNarrativeChapter;
    readonly tension: PrivateSchoolsNarrativeIntro & {
      readonly body: string;
    };
    readonly integration: PrivateSchoolsNarrativeChapter;
    readonly solutions: PrivateSchoolsNarrativeChapter;
    readonly selfAssessment: PrivateSchoolsNarrativeIntro & {
      readonly items: readonly string[];
      readonly note: string;
      readonly cta: string;
    };
    readonly process: PrivateSchoolsNarrativeChapter;
    readonly positioning: PrivateSchoolsNarrativeIntro & {
      readonly body: string;
      readonly closing: string;
    };
  };
  readonly faq: {
    readonly pill: string;
    readonly title: string;
    readonly accent: string;
    readonly description: string;
    readonly items: readonly {
      readonly question: string;
      readonly answer: string;
    }[];
  };
  readonly finalCta: {
    readonly pill: string;
    readonly title: string;
    readonly description: string;
    readonly cta: string;
    readonly nextStep: string;
  };
  readonly campaignAnchors: readonly {
    readonly id: string;
    readonly sectionKey: string;
  }[];
  readonly sources: readonly {
    readonly claim: string;
    readonly url: string;
    readonly reviewedAt: string;
  }[];
};
