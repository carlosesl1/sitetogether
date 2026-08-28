import { SectorIndustryPage } from "@/components/industry/sector-industry-page";
import { higherEducationIndustryContent } from "@/content/industries/higher-education";

export const metadata = {
  title: higherEducationIndustryContent.metadata.title,
  description: higherEducationIndustryContent.metadata.description,
  alternates: { canonical: higherEducationIndustryContent.metadata.canonical },
  openGraph: { title: higherEducationIndustryContent.metadata.title, description: higherEducationIndustryContent.metadata.description, url: higherEducationIndustryContent.metadata.canonical, images: [{ url: higherEducationIndustryContent.hero.image.desktop.png, alt: higherEducationIndustryContent.metadata.socialAlt }] },
};

export default function PrivacidadeEnsinoSuperiorPage() {
  return <SectorIndustryPage content={higherEducationIndustryContent} />;
}
