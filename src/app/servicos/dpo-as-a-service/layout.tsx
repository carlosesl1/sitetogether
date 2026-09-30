import type { Metadata } from "next";

export const metadata: Metadata = {
    title: { absolute: "DPO as a Service: DPO Terceirizado para Empresas | TOGETHER" },
    description:
        "Contrate DPO as a Service com a TOGETHER. DPO externo ou apoio ao DPO interno, gestão de privacidade, plataformas e rotina LGPD. Solicite uma proposta.",
    alternates: { canonical: "/servicos/dpo-as-a-service" },
    openGraph: {
        type: "website",
        locale: "pt_BR",
        siteName: "TOGETHER Privacy & Tech",
        url: "/servicos/dpo-as-a-service",
        title: "DPO as a Service para Empresas | TOGETHER",
        description: "Jurídico, tecnologia e operação de privacidade na mesma equipe. Conheça as entregas, os modelos de atuação e solicite uma proposta.",
    },
    twitter: {
        card: "summary",
        title: "DPO as a Service para Empresas | TOGETHER",
        description: "DPO externo ou apoio ao DPO interno. Uma equipe para colocar a LGPD em prática.",
    },
};

export default function DpoAsAServiceLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}
