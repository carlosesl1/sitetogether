import { IndustryFaqSection } from "@/components/industry/industry-faq-section";
import { IndustryFinalCta } from "@/components/industry/industry-final-cta";
import { IndustryHero } from "@/components/industry/industry-hero";
import {
  RoadsDeliverySection,
  RoadsInternationalSection,
} from "@/components/industry/roads/roads-capability-sections";
import {
  RoadsFreeFlowSection,
  RoadsLifecycleSection,
  RoadsOperationalContextSection,
} from "@/components/industry/roads/roads-context-sections";
import { Footer } from "@/components/ui/footer";
import { AuthorityStrip } from "@/components/ui/authority-strip";
import { Navbar } from "@/components/ui/navbar";
import { roadsIndustryContent as content } from "@/content/industries/roads";

const roadAnchorIds = content.campaignAnchors.map((anchor) => anchor.id);

export function RoadsIndustryPage() {
  return (
    <div className="min-w-0 bg-white text-neutral-900">
      <Navbar showCtaArrow />
      <main>
        <IndustryHero
          sector={content.sector}
          content={content.hero}
          allowedAnchors={roadAnchorIds}
        />
        <AuthorityStrip />
        <RoadsOperationalContextSection content={content.context} />
        <RoadsLifecycleSection content={content.lifecycle} />
        <RoadsFreeFlowSection content={content.freeFlow} />
        <RoadsDeliverySection
          sector={content.sector}
          allowedAnchors={roadAnchorIds}
          proof={content.proof}
          capabilities={content.capabilities}
          operations={content.operations}
          training={content.training}
        />
        <RoadsInternationalSection content={content.international} />
        <IndustryFaqSection {...content.faq} />
        <IndustryFinalCta
          sector={content.sector}
          content={content.finalCta}
          allowedAnchors={roadAnchorIds}
        />
      </main>
      <Footer />
    </div>
  );
}
