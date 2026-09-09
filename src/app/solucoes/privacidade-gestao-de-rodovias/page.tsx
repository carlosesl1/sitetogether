import { IndustryPageShell } from "@/roads-release/components/industry/industry-page-shell";
import { RoadsNarrative } from "@/roads-release/components/industry/narratives/roads-narrative";
import { RoadsContactSection } from "@/roads-release/components/industry/roads/roads-contact-section";
import { roadsIndustryContent } from "@/roads-release/content/industries/roads";

export default function PrivacidadeGestaoDeRodoviasPage() {
  return (
    <IndustryPageShell
      content={roadsIndustryContent}
      finalCta={
        <RoadsContactSection content={roadsIndustryContent.finalCta} />
      }
    >
      <RoadsNarrative content={roadsIndustryContent} />
    </IndustryPageShell>
  );
}
