import Image from "next/image";
import {
  BadgeCheck,
  ClipboardCheck,
  Clock3,
  Globe2,
  ListChecks,
  PanelsTopLeft,
} from "lucide-react";
import { SaasSectionHeading } from "@/components/industry/saas/saas-section-heading";
import { lawFirmLgpdContent } from "@/components/legal-partners/law-firm-lgpd-content";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";

const proofIcons = [
  ListChecks,
  Clock3,
  BadgeCheck,
  PanelsTopLeft,
  Globe2,
  ClipboardCheck,
] as const;

const platforms = [
  { label: "OneTrust", src: "/logos/onetrust.svg" },
  { label: "TrustWorks", src: "/logos/trustworks.png" },
  { label: "Securiti", src: "/logos/securiti.svg" },
  { label: "Privacy Tools", src: "/logos/privacy-tools.svg" },
  { label: "DPONet", src: "/logos/dponet.svg" },
  { label: "BeCompliance", src: "/logos/becompliance.svg" },
  { label: "Privally", src: "/logos/privally.png" },
] as const;

export function SaasCapacitySection() {
  const content = lawFirmLgpdContent.capacity;

  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-20 text-white md:py-28">
      <PixelDecor placement="topRight" mask="topRight" opacity={0.18} />
      <PixelDecor placement="bottomLeft" mask="bottomLeft" opacity={0.1} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,10,10,0.98)_0%,rgba(10,10,10,0.88)_40%,rgba(10,10,10,0.35)_72%,rgba(10,10,10,0)_100%)]" />
      <div className="container relative z-10 mx-auto px-6">
        <SaasSectionHeading
          pill={content.pill}
          title="Capacidade para sustentar"
          accent="seu projeto"
          description="A TOGETHER reúne pessoas, processos e tecnologia para colocar cada projeto em prática."
          inverse
          className="max-w-4xl [&>p]:max-w-3xl"
        />
        <div className="mt-9 grid gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-x-6">
          {content.proofs.map((proof, index) => {
            const Icon = proofIcons[index];
            const featured = index < 2;

            return (
              <article
                key={proof.value}
                className={`min-w-0 rounded-2xl border border-white/10 bg-white/[0.02] ${featured ? "p-7 xl:row-span-2 xl:p-8" : "p-6"}`}
              >
                <span className={`flex items-center justify-center rounded-2xl bg-white/[0.06] text-brand-400 ${featured ? "h-16 w-16" : "h-12 w-12"}`}>
                  <Icon className={featured ? "h-8 w-8" : "h-7 w-7"} aria-hidden="true" />
                </span>
                <strong className={`block font-bold tracking-tight text-brand-400 ${featured ? "mt-8 whitespace-nowrap text-7xl leading-[1.1] xl:text-[clamp(4rem,6vw,6rem)]" : "mt-4 text-2xl leading-tight"}`}>
                  {proof.value === "+5 anos" ? <>+5 <span className="text-[0.62em]">anos</span></> : proof.value}
                </strong>
                <p className={`leading-relaxed ${featured ? "mt-5 text-lg text-neutral-300 xl:text-xl" : "mt-2 text-base text-neutral-400"}`}>
                  {proof.label}
                </p>
              </article>
            );
          })}
        </div>
        <div className="mt-10 border-t border-white/10 pt-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
            Experiência prática com plataformas de privacidade
          </p>
          <div className="mt-7 grid grid-cols-2 items-center gap-6 sm:grid-cols-4 xl:grid-cols-7">
            {platforms.map((platform) => (
              <div key={platform.label} className="flex h-16 min-w-0 items-center justify-center last:col-span-2 sm:last:col-span-1">
                <Image
                  src={platform.src}
                  alt={platform.label}
                  width={120}
                  height={32}
                  className="max-h-8 w-auto max-w-full object-contain brightness-0 invert opacity-60"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
