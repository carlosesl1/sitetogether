import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "DPO as a Service | Gestão completa de privacidade e LGPD",
    description:
        "Assumimos a gestão de privacidade e LGPD da sua empresa com uma equipe especializada em operação, suporte regulatório e resposta contínua às demandas do dia a dia.",
};

export default function DpoAsAServiceLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}
