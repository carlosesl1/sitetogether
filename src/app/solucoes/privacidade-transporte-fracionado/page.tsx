import { IndustryPageShell } from "@/components/industry/industry-page-shell";
import { IndustryFaqSection } from "@/components/industry/industry-faq-section";
import { AuthorityStrip } from "@/components/ui/authority-strip";
import { FractionalFreightHero } from "@/components/industry/fractional-freight/fractional-freight-hero";
import { IndustryContactSection } from "@/components/industry/industry-contact-section";
import { industryContactForms } from "@/content/industry-contact-forms";
import { FractionalFreightNarrative } from "@/components/industry/narratives/fractional-freight-narrative";
import { fractionalFreightIndustryContent } from "@/content/industries/fractional-freight";

export default function PrivacidadeTransporteFracionadoPage() {
  return (
    <IndustryPageShell
      content={fractionalFreightIndustryContent}
      hero={<FractionalFreightHero content={fractionalFreightIndustryContent} />}
      authority={<AuthorityStrip title={fractionalFreightIndustryContent.hero.trustLine} paperBackdrop />}
      faq={<IndustryFaqSection {...fractionalFreightIndustryContent.faq} variant="narrative" showPill />}
      finalCta={
        <IndustryContactSection
          content={fractionalFreightIndustryContent.finalCta}
          form={industryContactForms.fractionalFreight}
        />
      }
    >
      <FractionalFreightNarrative content={fractionalFreightIndustryContent} />
    </IndustryPageShell>
  );
}
