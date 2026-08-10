import Image from "next/image";
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

        <div className="mt-14 grid overflow-hidden border border-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {content.proofs.map((proof) => (
            <article
              key={proof.value}
              className="min-h-44 border-b border-white/10 p-6 sm:border-r lg:p-8"
            >
              <strong className="block text-3xl font-bold tracking-tight text-brand-400">
                {proof.value}
              </strong>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-400">
                {proof.label}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
            Experiência prática com plataformas de privacidade
          </p>
          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
            {platforms.map((platform) => (
              <div
                key={platform.label}
                className="flex h-20 items-center justify-center border border-white/10 bg-white/[0.03] px-4 transition-colors hover:border-brand-400/30 hover:bg-white/[0.06]"
              >
                <Image
                  src={platform.src}
                  alt={platform.label}
                  width={120}
                  height={32}
                  className="max-h-8 w-auto max-w-full object-contain brightness-0 invert opacity-65"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
