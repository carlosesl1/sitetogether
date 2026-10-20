import type { Metadata } from "next";
import type { ReactNode } from "react";
import { socialImages } from "@/lib/social-images";

const title = "Contato | Fale com a TOGETHER";
const description =
  "Converse com a TOGETHER sobre adequação à LGPD, DPO as a Service e cultura de privacidade. Conte o momento da sua empresa.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contato" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "TOGETHER Privacy & Tech",
    url: "/contato",
    title,
    description,
    images: [socialImages.contato],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImages.contato],
  },
};

export default function ContatoLayout({ children }: { children: ReactNode }) {
  return children;
}
