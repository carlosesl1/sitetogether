import { SectorIndustryPage } from "@/components/industry/sector-industry-page";
import { privateSchoolsIndustryContent } from "@/content/industries/private-schools";

export const metadata = {
  title: privateSchoolsIndustryContent.metadata.title,
  description: privateSchoolsIndustryContent.metadata.description,
  alternates: { canonical: privateSchoolsIndustryContent.metadata.canonical },
  openGraph: { title: privateSchoolsIndustryContent.metadata.title, description: privateSchoolsIndustryContent.metadata.description, url: privateSchoolsIndustryContent.metadata.canonical, images: [{ url: privateSchoolsIndustryContent.hero.image.desktop.png, alt: privateSchoolsIndustryContent.metadata.socialAlt }] },
};

export default function PrivacidadeEscolasParticularesPage() {
  return <SectorIndustryPage content={privateSchoolsIndustryContent} />;
}
