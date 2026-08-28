import type { Metadata } from "next";
import type { ReactNode } from "react";
import { fullTruckloadIndustryContent } from "@/content/industries/full-truckload";

const { title, description, canonical, socialAlt } = fullTruckloadIndustryContent.metadata;
export const metadata: Metadata = { title, description, alternates: { canonical }, openGraph: { type: "website", locale: "pt_BR", url: canonical, title: `${title} | TOGETHER`, description, images: [{ url: fullTruckloadIndustryContent.hero.image.desktop.png, width: fullTruckloadIndustryContent.hero.image.desktop.width, height: fullTruckloadIndustryContent.hero.image.desktop.height, alt: socialAlt }] } };
export default function Layout({ children }: Readonly<{ children: ReactNode }>) { return children; }
