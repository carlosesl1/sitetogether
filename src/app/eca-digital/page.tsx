import type { Metadata } from "next";
import { EcaDigitalPageClient } from "./eca-digital-client";

export const metadata: Metadata = {
  title: "ECA Digital | Adequação, Diagnóstico e Governança",
  description:
    "Ajudamos empresas a identificar riscos, avaliar aplicabilidade e implementar medidas de adequação ao ECA Digital com apoio jurídico, técnico e operacional.",
  alternates: {
    canonical: "/eca-digital",
  },
  openGraph: {
    title: "ECA Digital | Adequação, Diagnóstico e Governança | TOGETHER",
    description:
      "Diagnóstico de aplicabilidade, matriz de riscos e plano prático de adequação ao ECA Digital para produtos, aplicativos, plataformas e campanhas digitais.",
    url: "/eca-digital",
    siteName: "TOGETHER Privacy & Tech",
    locale: "pt_BR",
    type: "website",
  },
};

export default function EcaDigitalPage() {
  return <EcaDigitalPageClient />;
}
