import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { DeferredThirdParties } from "@/components/analytics/deferred-third-parties";
import { WebMcpProvider } from "@/components/ai/webmcp-provider";
import { LanguageProvider } from "@/components/i18n/language-provider";
import { AnimationVisibilityProvider } from "@/components/ui/animation-visibility-provider";
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
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NRXBFNQN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <DeferredThirdParties />
        <WebMcpProvider />
        <AnimationVisibilityProvider />
        <SmoothScrollProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
