import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { LanguageProvider } from "@/components/i18n/language-provider";
import { SmoothScrollProvider } from "@/components/ui/smooth-scroll-provider";
import "lenis/dist/lenis.css";
import "./globals.css";

const siteDescription =
  "Privacidade, LGPD e DPO as a Service para empresas que precisam de governança, tecnologia e segurança operacional.";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://togetherprivacy.tech"),
  title: {
    default: "TOGETHER Privacy & Tech",
    template: "%s | TOGETHER Privacy & Tech",
  },
  description: siteDescription,
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: ["/favicon.svg"],
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "TOGETHER Privacy & Tech",
    title: "TOGETHER Privacy & Tech",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} antialiased`}
      >
        <SmoothScrollProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
