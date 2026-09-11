import type {
  IndustryDiagnosticContent,
  IndustryIconKey,
  IndustrySectionIntro,
  IndustrySharedContent,
} from "@/components/industry/saas/saas-page-types";

export type NarrativeItem = {
  readonly icon: IndustryIconKey;
  readonly label: string;
  readonly title: string;
  readonly description: string;
};

export type HigherEducationFrontItem = NarrativeItem & {
  readonly togetherHelp: string;
};

export type NarrativeChapter = IndustrySectionIntro & {
  readonly items: readonly NarrativeItem[];
  readonly note?: string;
};

export type NarrativeDiagnostic = IndustryDiagnosticContent;

export type IndustryNarrativeContent<TNarrative> = IndustrySharedContent & {
  readonly narrative: TNarrative;
};

export type SaasClientName =
  | "Mercado Bitcoin"
  | "Tarea"
  | "InHire"
  | "Eletrobras"
  | "Unimed";

export type SaasSection = {
  readonly id: string;
  readonly pill: string;
  readonly title: string;
  readonly accent: string;
  readonly description?: string;
};

export type SaasNarrative = {
  readonly growth: SaasSection & {
    readonly question: string;
    readonly path: readonly string[];
  };
  readonly decisions: SaasSection & {
    readonly items: readonly NarrativeItem[];
    readonly cta: string;
  };
  readonly privacyByDesign: SaasSection & {
    readonly question: string;
    readonly closing: string;
  };
  readonly evolution: SaasSection & {
    readonly stages: readonly string[];
  };
  readonly method: SaasSection & {
    readonly items: readonly NarrativeItem[];
    readonly cta: string;
  };
  readonly situations: SaasSection & {
    readonly items: readonly string[];
    readonly question: string;
  };
  readonly capabilities: SaasSection & {
    readonly items: readonly NarrativeItem[];
  };
  readonly crossFunctional: SaasSection & {
    readonly areas: readonly string[];
    readonly closing: string;
  };
  readonly socialProof: SaasSection & {
    readonly clients: readonly SaasClientName[];
  };
  readonly stage: SaasSection & {
    readonly items: readonly NarrativeItem[];
    readonly cta: string;
  };
};


export type SaasIndustryContent = IndustryNarrativeContent<SaasNarrative>;
