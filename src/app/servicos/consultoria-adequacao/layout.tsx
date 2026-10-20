import type { Metadata } from "next";
import { socialImages } from "@/lib/social-images";
import type { ReactNode } from "react";

export const metadata: Metadata = {
    title: { absolute: "Consultoria de Adequação à LGPD para Empresas | TOGETHER" },
    description: "Adequação à LGPD com diagnóstico, mapeamento de dados, documentos, processos e treinamento. Conheça a consultoria da TOGETHER e solicite uma proposta.",
    alternates: { canonical: "/servicos/consultoria-adequacao" },
    openGraph: {
        type: "website",
        locale: "pt_BR",
        siteName: "TOGETHER Privacy & Tech",
        url: "/servicos/consultoria-adequacao",
        images: [socialImages.consultoria],
        title: "Consultoria de Adequação à LGPD | TOGETHER",
        description: "Do plano à prática: diagnóstico, documentos, processos e uma equipe especializada para conduzir a adequação da sua empresa.",
    },
    twitter: {
        card: "summary_large_image",
        images: [socialImages.consultoria],
        title: "Consultoria de Adequação à LGPD | TOGETHER",
        description: "Um projeto estruturado com entregas concretas para sua empresa. Conheça a consultoria e solicite uma proposta.",
    },
};

export default function ConsultoriaAdequacaoLayout({ children }: { children: ReactNode }) {
    return children;
}
