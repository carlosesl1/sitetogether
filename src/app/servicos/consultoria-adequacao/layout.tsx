import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Consultoria LGPD para empresas que precisam operar com segurança",
  description:
    "Adequação completa à LGPD com diagnóstico, mapeamento de dados, documentação e suporte especializado para sua empresa operar com mais segurança e organização.",
};

export default function ConsultoriaAdequacaoLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
