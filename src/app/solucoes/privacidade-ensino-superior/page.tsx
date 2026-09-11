import { IndustryPageShell } from "@/components/industry/industry-page-shell";
import { HigherEducationContactSection } from "@/components/industry/higher-education-contact-section";
import { HigherEducationFaqSection } from "@/components/industry/higher-education-faq-section";
import { HigherEducationNarrative } from "@/components/industry/narratives/higher-education-narrative";
import { AuthorityStrip } from "@/components/ui/authority-strip";
import { higherEducationIndustryContent } from "@/content/industries/higher-education";

export const metadata = {
  title: higherEducationIndustryContent.metadata.title,
  description: higherEducationIndustryContent.metadata.description,
  alternates: { canonical: higherEducationIndustryContent.metadata.canonical },
  openGraph: { title: higherEducationIndustryContent.metadata.title, description: higherEducationIndustryContent.metadata.description, url: higherEducationIndustryContent.metadata.canonical, images: [{ url: higherEducationIndustryContent.hero.image.desktop.png, alt: higherEducationIndustryContent.metadata.socialAlt }] },
};

export default function PrivacidadeEnsinoSuperiorPage() {
  return (
    <IndustryPageShell
      content={higherEducationIndustryContent}
      authority={
        <AuthorityStrip
          title={higherEducationIndustryContent.hero.trustLine}
          paperBackdrop
        />
      }
      faq={<HigherEducationFaqSection {...higherEducationIndustryContent.faq} />}
      finalCta={
        <HigherEducationContactSection
          content={higherEducationIndustryContent.finalCta}
        />
      }
    >
      <HigherEducationNarrative content={higherEducationIndustryContent} />
    </IndustryPageShell>
  );
}
