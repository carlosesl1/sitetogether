import { PrivateSchoolsContactSection } from "@/components/industry/private-schools/private-schools-contact-section";
import { PrivateSchoolsFaqSection } from "@/components/industry/private-schools/private-schools-faq-section";
import { PrivateSchoolsHero } from "@/components/industry/private-schools/private-schools-hero";
import { PrivateSchoolsProofStrip } from "@/components/industry/private-schools/private-schools-proof-strip";
import { PrivateSchoolsStructuredData } from "@/components/industry/private-schools/private-schools-structured-data";
import type { PrivateSchoolsIndustryContent } from "@/components/industry/private-schools/private-schools-types";
import { PrivateSchoolsNarrative } from "@/components/industry/narratives/private-schools-narrative";
import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";

export function PrivateSchoolsLandingPage({
  content,
}: {
  readonly content: PrivateSchoolsIndustryContent;
}) {
  return (
    <div
      data-private-schools-page
      className="min-w-0 overflow-x-clip bg-white text-neutral-900"
    >
      <PrivateSchoolsStructuredData content={content} />
      <Navbar showCtaArrow />
      <main>
        <PrivateSchoolsHero content={content.hero} />
        <PrivateSchoolsProofStrip />
        <PrivateSchoolsNarrative content={content} />
        <PrivateSchoolsFaqSection content={content.faq} />
        <PrivateSchoolsContactSection content={content.finalCta} />
      </main>
      <Footer />
    </div>
  );
}
