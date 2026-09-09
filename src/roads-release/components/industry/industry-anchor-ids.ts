import type {
  IndustryCampaignAnchor,
  IndustrySectionKey,
} from "@/roads-release/components/industry/industry-page-types";

export function getIndustryAnchorIds(
  campaignAnchors: readonly IndustryCampaignAnchor[],
  sectionKey: IndustrySectionKey,
) {
  return campaignAnchors
    .filter((anchor) => anchor.sectionKey === sectionKey)
    .map((anchor) => anchor.id);
}
