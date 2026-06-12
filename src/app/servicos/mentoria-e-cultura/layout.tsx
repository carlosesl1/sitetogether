import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cultura de Privacidade para Empresas | Treinamentos e Workshops LGPD",
    description:
        "Treinamentos e workshops práticos para ajudar sua equipe a reduzir erros, seguir boas práticas e aplicar a LGPD na rotina da empresa.",
};

export default function MentoriaECulturaLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}
