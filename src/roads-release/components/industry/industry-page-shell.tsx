import type { ReactNode } from "react";
import { IndustryFaqSection } from "@/roads-release/components/industry/industry-faq-section";
import { IndustryFinalCta } from "@/roads-release/components/industry/industry-final-cta";
import { IndustryHero } from "@/roads-release/components/industry/industry-hero";
import type { IndustrySharedContent } from "@/roads-release/components/industry/industry-page-types";
import { IndustryStructuredData } from "@/roads-release/components/industry/industry-structured-data";
import { AuthorityStrip } from "@/roads-release/components/ui/authority-strip";
import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";

export function IndustryPageShell({
  content,
  children,
  authority,
  finalCta,
  heroTitleSize,
}: {
  readonly content: IndustrySharedContent;
  readonly children: ReactNode;
  readonly authority?: ReactNode;
  readonly finalCta?: ReactNode;
  readonly heroTitleSize?: "default" | "compact";
}) {
  const allowedAnchors = content.campaignAnchors.map(({ id }) => id);

  return (
    <div className="min-w-0 bg-white text-neutral-900">
      <IndustryStructuredData content={content} />
      <Navbar showCtaArrow />
      <main>
        <IndustryHero
          sector={content.sector}
          content={content.hero}
          allowedAnchors={allowedAnchors}
          titleSize={heroTitleSize}
        />
        <div data-layout-family="authority-transition">
          {authority ?? <AuthorityStrip title={content.hero.trustLine} paperBackdrop />}
        </div>
        {children}
        <IndustryFaqSection {...content.faq} wideHeading={content.sector === "gestao-de-rodovias"} />
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
