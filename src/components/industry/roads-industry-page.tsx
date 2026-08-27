import { IndustryFaqSection } from "@/components/industry/industry-faq-section";
import { IndustryFinalCta } from "@/components/industry/industry-final-cta";
import { IndustryHero } from "@/components/industry/industry-hero";
import { IndustryProofStrip } from "@/components/industry/industry-proof-strip";
import {
  RoadsCapabilitiesSection,
  RoadsInternationalMethodSection,
  RoadsOperationsSection,
  RoadsPrivacyByDesignSection,
} from "@/components/industry/roads/roads-capability-sections";
import {
  RoadsFreeFlowSection,
  RoadsLifecycleSection,
  RoadsOperationalContextSection,
} from "@/components/industry/roads/roads-context-sections";
import { Footer } from "@/components/ui/footer";
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
        <IndustryProofStrip items={content.proof} />
        <RoadsOperationalContextSection content={content.context} />
        <RoadsLifecycleSection content={content.lifecycle} />
        <RoadsFreeFlowSection content={content.freeFlow} />
        <RoadsCapabilitiesSection
          sector={content.sector}
          allowedAnchors={roadAnchorIds}
          content={content.capabilities}
        />
        <RoadsPrivacyByDesignSection content={content.privacyByDesign} />
        <RoadsOperationsSection
          content={content.operations}
          training={content.training}
        />
        <RoadsInternationalMethodSection
          international={content.international}
          method={content.method}
        />
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
