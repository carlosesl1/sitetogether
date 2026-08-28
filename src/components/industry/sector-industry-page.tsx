import type { SectorIndustryContent } from "@/components/industry/industry-page-types";
import { IndustryFaqSection } from "@/components/industry/industry-faq-section";
import { IndustryFinalCta } from "@/components/industry/industry-final-cta";
import { IndustryHero } from "@/components/industry/industry-hero";
import { SectorJourneySection } from "@/components/industry/sector/sector-journey-section";
import { SectorOperationalSection } from "@/components/industry/sector/sector-operational-section";
import { SectorPrioritySection } from "@/components/industry/sector/sector-priority-section";
import { SectorSupportSection } from "@/components/industry/sector/sector-support-section";
import { AuthorityStrip } from "@/components/ui/authority-strip";
import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";

export function SectorIndustryPage({
  content,
}: {
  content: SectorIndustryContent;
}) {
  const allowedAnchors = content.campaignAnchors.map((anchor) => anchor.id);

  return (
    <div className="min-w-0 bg-white text-neutral-900">
      <Navbar showCtaArrow />
      <main>
        <IndustryHero
          sector={content.sector}
          content={content.hero}
          allowedAnchors={allowedAnchors}
        />
        <AuthorityStrip />
        <SectorOperationalSection
          content={content.context}
          visualFamily={content.visualFamily}
        />
        <SectorJourneySection
          content={content.journey}
          visualFamily={content.visualFamily}
        />
        <SectorPrioritySection
          content={content.priority}
          visualFamily={content.visualFamily}
        />
        <SectorSupportSection
          sector={content.sector}
          visualFamily={content.visualFamily}
          content={content.support}
          proof={content.proof}
          training={content.training}
          allowedAnchors={allowedAnchors}
        />
        <IndustryFaqSection {...content.faq} />
        <IndustryFinalCta
          sector={content.sector}
          content={content.finalCta}
          allowedAnchors={allowedAnchors}
        />
      </main>
      <Footer />
    </div>
  );
}
