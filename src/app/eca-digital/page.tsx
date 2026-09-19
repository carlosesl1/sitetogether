import type { Metadata } from "next";
import { EcaDigitalPageClient } from "./eca-digital-client";

export const metadata: Metadata = {
  title: "Adequação ao ECA Digital",
  description:
    "Ajudamos empresas a identificar riscos, avaliar aplicabilidade e implementar medidas de adequação ao ECA Digital com apoio jurídico, técnico e operacional.",
  alternates: {
    canonical: "/eca-digital",
  },
  openGraph: {
    title: "Adequação ao ECA Digital | TOGETHER Privacy & Tech",
    description:
      "Diagnóstico de aplicabilidade, matriz de riscos e plano prático de adequação ao ECA Digital para produtos, aplicativos, plataformas e campanhas digitais.",
    url: "/eca-digital",
    siteName: "TOGETHER Privacy & Tech",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adequação ao ECA Digital | TOGETHER Privacy & Tech",
    description:
      "Diagnóstico de aplicabilidade, matriz de riscos e plano prático de adequação ao ECA Digital.",
  },
};

const ecaDigitalStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://togetherprivacy.tech/eca-digital#service",
  name: "Diagnóstico e adequação ao ECA Digital",
  description:
    "Diagnóstico de aplicabilidade, matriz de riscos e plano prático de adequação ao ECA Digital para produtos e operações digitais.",
  url: "https://togetherprivacy.tech/eca-digital",
  provider: {
    "@type": "Organization",
    name: "TOGETHER Privacy & Tech",
    url: "https://togetherprivacy.tech",
  },
};

export default function EcaDigitalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ecaDigitalStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <EcaDigitalPageClient />
    </>
  );
}
