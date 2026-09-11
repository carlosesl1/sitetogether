import type {
  IndustryDiagnosticContent,
  IndustryIconKey,
  IndustrySectionIntro,
  IndustrySharedContent,
} from "@/components/industry/industry-page-types";

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
  readonly title: string;
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

export type PrivateSchoolsNarrative = {
  readonly schoolDay: NarrativeChapter;
  readonly minors: NarrativeChapter;
  readonly platforms: NarrativeChapter;
  readonly responsibilities: NarrativeChapter;
  readonly familyResponse: NarrativeChapter;
  readonly togetherSchool: NarrativeChapter;
  readonly diagnostic: NarrativeDiagnostic;
};

export type HigherEducationNarrative = {
  readonly problem: NarrativeChapter & {
    readonly note: string;
  };
  readonly context: IndustrySectionIntro & {
    readonly areas: readonly {
      readonly icon: IndustryIconKey;
      readonly label: string;
    }[];
    readonly actions: readonly string[];
    readonly note: string;
  };
  readonly sixFronts: IndustrySectionIntro & {
    readonly items: readonly HigherEducationFrontItem[];
  };
  readonly togetherApproach: NarrativeChapter & {
    readonly cta: {
      readonly eyebrow: string;
      readonly title: string;
      readonly description: string;
      readonly label: string;
      readonly href: string;
    };
  };
  readonly outcomes: NarrativeChapter;
};

export type FractionalFreightNarrative = {
  readonly pain: NarrativeChapter;
  readonly stage: NarrativeChapter & { readonly cta: string };
  readonly services: NarrativeChapter & { readonly cta: string };
  readonly process: NarrativeChapter;
  readonly teams: NarrativeChapter & { readonly cta: string };
  readonly capacity: {
    readonly pill: string;
    readonly title: string;
    readonly accent: string;
    readonly text: string;
    readonly proofs: readonly {
      readonly value: string;
      readonly label: string;
    }[];
  };
};

export type FullTruckloadNarrative = {
  readonly beforeTrip: NarrativeChapter;
  readonly duringTrip: NarrativeChapter;
  readonly delivery: NarrativeChapter;
  readonly retention: NarrativeChapter;
  readonly routeIncidents: NarrativeChapter;
  readonly togetherTruckload: NarrativeChapter;
  readonly diagnostic: NarrativeDiagnostic;
};

export type RoadsNarrative = {
  readonly dataRoute: NarrativeChapter;
  readonly freeFlowDecisions: NarrativeChapter;
  readonly dispute: NarrativeChapter;
  readonly roadResponsibilities: NarrativeChapter;
  readonly roadIncidents: NarrativeChapter;
  readonly integrations: NarrativeChapter;
  readonly togetherRoads: NarrativeChapter;
  readonly diagnostic: NarrativeDiagnostic;
};

export type SaasIndustryContent = IndustryNarrativeContent<SaasNarrative>;
export type PrivateSchoolsIndustryContent =
  IndustryNarrativeContent<PrivateSchoolsNarrative>;
export type HigherEducationIndustryContent =
  IndustryNarrativeContent<HigherEducationNarrative>;
export type FractionalFreightIndustryContent =
  IndustryNarrativeContent<FractionalFreightNarrative>;
export type FullTruckloadIndustryContent =
  IndustryNarrativeContent<FullTruckloadNarrative>;
export type RoadsNarrativeIndustryContent =
  IndustryNarrativeContent<RoadsNarrative>;
