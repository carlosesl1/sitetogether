import type { Metadata } from "next";
import type { ReactNode } from "react";
import { saasIndustryContent } from "@/content/industries/saas";

const { title, description, canonical, socialAlt } = saasIndustryContent.metadata;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: canonical,
    title: `${title} | TOGETHER`,
    description,
    images: [{ url: saasIndustryContent.hero.image.desktop.png, width: saasIndustryContent.hero.image.desktop.width, height: saasIndustryContent.hero.image.desktop.height, alt: socialAlt }],
  },
};

export default function PrivacidadeSaasLayout({ children }: Readonly<{ children: ReactNode }>) {
  return children;
}
