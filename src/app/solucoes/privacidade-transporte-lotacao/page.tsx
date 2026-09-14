import { IndustryPageShell } from "@/components/industry/industry-page-shell";
import { IndustryContactSection } from "@/components/industry/industry-contact-section";
import { industryContactForms } from "@/content/industry-contact-forms";
import { FullTruckloadNarrative } from "@/components/industry/narratives/full-truckload-narrative";
import { FullTruckloadHero } from "@/components/industry/full-truckload/full-truckload-hero";
import { fullTruckloadIndustryContent } from "@/content/industries/full-truckload";
import { AuthorityStrip } from "@/components/ui/authority-strip";

export default function PrivacidadeTransporteLotacaoPage() {
  return (
    <IndustryPageShell
      content={fullTruckloadIndustryContent}
      hero={
        <FullTruckloadHero
          sector={fullTruckloadIndustryContent.sector}
          content={fullTruckloadIndustryContent.hero}
          allowedAnchors={fullTruckloadIndustryContent.campaignAnchors.map(({ id }) => id)}
          titleSize="compact"
        />
      }
      authority={<AuthorityStrip title={fullTruckloadIndustryContent.hero.trustLine} paperBackdrop />}
      finalCta={
        <IndustryContactSection
          content={fullTruckloadIndustryContent.finalCta}
          form={industryContactForms.fullTruckload}
        />
      }
    >
      <FullTruckloadNarrative content={fullTruckloadIndustryContent} />
    </IndustryPageShell>
  );
}
