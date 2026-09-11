import type { IndustryCtaPosition } from "@/components/industry/saas/saas-page-types";

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

const LOCAL_CONTACT_ANCHORS: Record<string, string> = {
  saas: "contato-saas",
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
  const originalAnchor = entryUrl.searchParams.get("entry_anchor") || "";
  const entryAnchor = allowedAnchors.includes(hash)
    ? hash
    : allowedAnchors.includes(originalAnchor) ? originalAnchor : undefined;
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

  const localAnchor = localForm ? LOCAL_CONTACT_ANCHORS[sector] : undefined;
  return localAnchor
    ? `/solucoes/privacidade-${sector}?${params.toString()}#${localAnchor}`
    : `/contato?${params.toString()}`;
}
