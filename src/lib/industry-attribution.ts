import type { IndustryCtaPosition } from "@/components/industry/industry-page-types";

const CAMPAIGN_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "gbraid",
  "wbraid",
] as const;

const CTA_EVENTS: Record<IndustryCtaPosition, string> = {
  hero: "cta_hero",
  capabilities: "cta_midpage",
  map: "cta_midpage",
  proof: "cta_midpage",
  final: "cta_final",
};

type BuildIndustryContactHrefInput = {
  sector: string;
  position: IndustryCtaPosition;
  entryUrl?: URL;
  allowedAnchors: readonly string[];
  localForm?: boolean;
};

export function getIndustryCtaEvent(position: IndustryCtaPosition) {
  return CTA_EVENTS[position];
}

export function readIndustryEntryAttribution(
  entryUrl: URL,
  allowedAnchors: readonly string[],
) {
  let hash = "";
  try {
    hash = decodeURIComponent(entryUrl.hash.replace(/^#/, ""));
  } catch {
    hash = "";
  }
  const entryAnchor = allowedAnchors.includes(hash) ? hash : undefined;
  const campaign: Record<string, string> = {};

  for (const key of CAMPAIGN_KEYS) {
    const value = entryUrl.searchParams.get(key);
    if (value) campaign[key] = value;
  }

  return { entryAnchor, campaign };
}

export function buildIndustryContactHref({
  sector,
  position,
  entryUrl,
  allowedAnchors,
  localForm = false,
}: BuildIndustryContactHrefInput) {
  const params = new URLSearchParams({
    sector,
    cta_position: position,
  });

  if (entryUrl) {
    const { entryAnchor, campaign } = readIndustryEntryAttribution(
      entryUrl,
      allowedAnchors,
    );

    if (entryAnchor) params.set("entry_anchor", entryAnchor);
    for (const [key, value] of Object.entries(campaign)) {
      params.set(key, value);
    }
  }

  if (localForm && (sector === "transporte-fracionado" || sector === "transporte-lotacao")) {
    const originalAnchor = entryUrl?.searchParams.get("entry_anchor");
    if (!params.has("entry_anchor") && originalAnchor && allowedAnchors.includes(originalAnchor)) {
      params.set("entry_anchor", originalAnchor);
    }
    const contactAnchor = sector === "transporte-lotacao" ? "contato-lotacao" : "contato-fracionado";
    return `/solucoes/privacidade-${sector}?${params.toString()}#${contactAnchor}`;
  }
  return `/contato?${params.toString()}`;
}
