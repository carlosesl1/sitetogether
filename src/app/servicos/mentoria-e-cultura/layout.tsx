import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
    title: { absolute: "Treinamentos LGPD, Mentoria e Cultura de Privacidade | TOGETHER" },
    description: "Workshops, treinamentos LGPD por área, mentoria para DPOs e formação de Privacy Champions. Conheça os programas da TOGETHER e solicite uma proposta.",
    alternates: { canonical: "/servicos/mentoria-e-cultura" },
    openGraph: {
        type: "website",
        locale: "pt_BR",
        siteName: "TOGETHER Privacy & Tech",
        url: "/servicos/mentoria-e-cultura",
        title: "Treinamentos LGPD e Mentoria para Empresas | TOGETHER",
        description: "Conhecimento que vira prática. Capacitação por área, mentoria para equipes de privacidade e formação de multiplicadores.",
    },
    twitter: {
        card: "summary",
        title: "Treinamentos LGPD e Mentoria | TOGETHER",
        description: "Prepare seu time para aplicar a privacidade na rotina. Conheça os programas e solicite uma proposta.",
    },
};

export default function MentoriaECulturaLayout({ children }: { children: ReactNode }) {
    return children;
}
