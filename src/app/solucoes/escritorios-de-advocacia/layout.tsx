import type { Metadata } from "next";
import type { ReactNode } from "react";

const title = "LGPD para Escritórios de Advocacia | Parceria TOGETHER";
const description =
  "Apoio técnico e operacional em LGPD para escritórios de advocacia. Seu escritório conduz a estratégia jurídica e a TOGETHER complementa a execução com equipe especializada.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/solucoes/escritorios-de-advocacia",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/solucoes/escritorios-de-advocacia",
    title,
    description,
  },
};

export default function EscritoriosDeAdvocaciaLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
