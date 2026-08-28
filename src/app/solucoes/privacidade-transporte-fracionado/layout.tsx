import type { Metadata } from "next";
import type { ReactNode } from "react";
import { fractionalFreightIndustryContent } from "@/content/industries/fractional-freight";

const { title, description, canonical, socialAlt } = fractionalFreightIndustryContent.metadata;
export const metadata: Metadata = { title, description, alternates: { canonical }, openGraph: { type: "website", locale: "pt_BR", url: canonical, title: `${title} | TOGETHER`, description, images: [{ url: fractionalFreightIndustryContent.hero.image.desktop.png, width: fractionalFreightIndustryContent.hero.image.desktop.width, height: fractionalFreightIndustryContent.hero.image.desktop.height, alt: socialAlt }] } };
export default function Layout({ children }: Readonly<{ children: ReactNode }>) { return children; }
