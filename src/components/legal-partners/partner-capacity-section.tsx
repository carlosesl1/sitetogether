import Image from "next/image";
import {
  BadgeCheck,
  ClipboardCheck,
  Clock3,
  Globe2,
  ListChecks,
  PanelsTopLeft,
} from "lucide-react";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";
import { SectionPill } from "@/components/ui/site-primitives";

const platforms = [
  { label: "OneTrust", src: "/logos/onetrust.svg" },
  { label: "TrustWorks", src: "/logos/trustworks.png" },
  { label: "Securiti", src: "/logos/securiti.svg" },
  { label: "Privacy Tools", src: "/logos/privacy-tools.svg" },
  { label: "DPONet", src: "/logos/dponet.svg" },
  { label: "BeCompliance", src: "/logos/becompliance.svg" },
  { label: "Privally", src: "/logos/privally.png" },
] as const;

const proofIcons = [
  ListChecks,
  Clock3,
  BadgeCheck,
  PanelsTopLeft,
  Globe2,
  ClipboardCheck,
] as const;

type PartnerCapacitySectionProps = {
  content: {
    readonly pill: string;
    readonly title: string;
    readonly text: string;
    readonly proofs: readonly {
      readonly value: string;
      readonly label: string;
    }[];
  };
};

export function PartnerCapacitySection({ content }: PartnerCapacitySectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-24 text-white md:py-36">
      <PixelDecor placement="topRight" mask="topRight" opacity={0.18} />
      <PixelDecor placement="bottomLeft" mask="bottomLeft" opacity={0.1} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,10,10,0.98)_0%,rgba(10,10,10,0.88)_40%,rgba(10,10,10,0.35)_72%,rgba(10,10,10,0)_100%)]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-3xl">
          <SectionPill tone="dark">{content.pill}</SectionPill>
          <h2 className="mt-8 text-[2.65rem] font-bold leading-[0.98] tracking-tighter md:text-6xl">
            {content.title}
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-neutral-400">
            {content.text}
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {content.proofs.map((proof, index) => {
            const Icon = proofIcons[index];
            const featured = index < 2;

            return (
              <article
                key={proof.value}
                className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900/50 p-7 transition-all duration-300 hover:border-brand-400/30 hover:bg-neutral-900/70 ${
                  featured
                    ? "min-h-56 lg:col-span-6 lg:p-9"
                    : "min-h-48 lg:col-span-3"
                }`}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.06] text-brand-400 transition-colors group-hover:bg-brand-400 group-hover:text-neutral-950">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <strong
                  className={`mt-8 block font-bold tracking-tight text-brand-400 ${
                    featured ? "text-5xl" : "text-2xl"
                  }`}
                >
                  {proof.value}
                </strong>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-400">
                  {proof.label}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
            Experiência prática com plataformas de privacidade
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {platforms.map((platform) => (
              <div
                key={platform.label}
                className="group flex h-24 basis-[calc(50%-0.375rem)] items-center justify-center rounded-[24px] border border-white/5 bg-neutral-900/40 px-5 transition-all duration-300 hover:border-brand-400/30 hover:bg-neutral-900/60 sm:basis-[calc(33.333%-0.5rem)] lg:basis-[calc(25%-0.5625rem)] lg:px-6"
              >
                <Image
                  src={platform.src}
                  alt={platform.label}
                  width={120}
                  height={32}
                  className="max-h-8 w-auto max-w-full object-contain brightness-0 invert opacity-60 transition-opacity group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
