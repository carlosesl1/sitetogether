import type { Metadata } from "next";
import type { ReactNode } from "react";
import { roadsIndustryContent } from "@/content/industries/roads";

const { title, description, canonical } = roadsIndustryContent.metadata;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: canonical,
    title,
    description,
    images: [
      {
        url: roadsIndustryContent.hero.image.desktop.png,
        width: roadsIndustryContent.hero.image.desktop.width,
        height: roadsIndustryContent.hero.image.desktop.height,
        alt: "Operação rodoviária e pórtico de identificação automática",
      },
    ],
  },
};

export default function PrivacidadeGestaoDeRodoviasLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
