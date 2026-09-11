import type { ReactNode } from "react";
import { SaasHero } from "@/components/industry/saas/saas-hero";
import { SaasFaqSection } from "@/components/industry/saas/saas-faq-section";
import type { SaasIndustryContent } from "@/components/industry/saas/saas-content-types";
import { IndustryStructuredData } from "@/components/industry/industry-structured-data";
import { AuthorityStrip } from "@/components/ui/authority-strip";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

export function SaasPageShell({ content, children, finalCta }: {
  readonly content: SaasIndustryContent;
  readonly children: ReactNode;
  readonly finalCta: ReactNode;
}) {
  const allowedAnchors = content.campaignAnchors.map(({ id }) => id);
  return (
    <div data-saas-page className="min-w-0 bg-white text-neutral-900">
      <IndustryStructuredData content={content} />
      <Navbar showCtaArrow />
      <main>
        <SaasHero sector={content.sector} content={content.hero} allowedAnchors={allowedAnchors} />
        <div data-layout-family="authority-transition">
          <AuthorityStrip title={content.hero.trustLine} paperBackdrop />
        </div>
        {children}
        <SaasFaqSection {...content.faq} />
        {finalCta}
      </main>
      <Footer />
    </div>
  );
}
