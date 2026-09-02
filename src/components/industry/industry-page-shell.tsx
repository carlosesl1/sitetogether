import type { ReactNode } from "react";
import { HigherEducationHero } from "@/components/industry/higher-education-hero";
import { IndustryFaqSection } from "@/components/industry/industry-faq-section";
import { IndustryFinalCta } from "@/components/industry/industry-final-cta";
import type { IndustrySharedContent } from "@/components/industry/industry-page-types";
import { IndustryStructuredData } from "@/components/industry/industry-structured-data";
import { AuthorityStrip } from "@/components/ui/authority-strip";
import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";

export function IndustryPageShell({
  content,
  children,
  authority,
  finalCta,
}: {
  readonly content: IndustrySharedContent;
  readonly children: ReactNode;
  readonly authority?: ReactNode;
  readonly finalCta?: ReactNode;
}) {
  const allowedAnchors = content.campaignAnchors.map(({ id }) => id);

  return (
    <div className="min-w-0 bg-white text-neutral-900">
      <IndustryStructuredData content={content} />
      <Navbar showCtaArrow />
      <main>
        <HigherEducationHero
          sector={content.sector}
          content={content.hero}
          allowedAnchors={allowedAnchors}
        />
        <div data-layout-family="authority-transition">
          {authority ?? <AuthorityStrip title={content.hero.trustLine} />}
        </div>
        {children}
        <IndustryFaqSection {...content.faq} variant="narrative" />
        {finalCta ?? (
          <IndustryFinalCta
            sector={content.sector}
            content={content.finalCta}
            allowedAnchors={allowedAnchors}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}
