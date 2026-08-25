import {
  BadgeCheck,
  BriefcaseBusiness,
  Handshake,
  TrendingUp,
  Users,
} from "lucide-react";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";
import { SectionPill } from "@/components/ui/site-primitives";

type PartnerPortfolioOfferProps = {
  content: {
    readonly pill: string;
    readonly title: string;
    readonly paragraphs: readonly string[];
    readonly flow: readonly string[];
    readonly benefits: readonly string[];
  };
};

const benefitIcons = [
  BriefcaseBusiness,
  Handshake,
  Users,
  TrendingUp,
] as const;

export function PartnerPortfolioOffer({ content }: PartnerPortfolioOfferProps) {
  return (
    <section
      id="modelo-de-parceria"
      className="relative overflow-hidden border-t border-neutral-100 bg-white py-24 md:py-36"
    >
      <PixelDecor placement="topRight" mask="topRight" opacity={0.12} />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-start lg:gap-20">
          <div className="min-w-0">
            <SectionPill>{content.pill}</SectionPill>
            <h2 className="mt-8 max-w-2xl break-words text-[clamp(2.15rem,10vw,2.55rem)] font-bold leading-[0.98] tracking-tighter text-neutral-900 sm:text-5xl xl:text-6xl">
              {content.title}
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-neutral-500">
              {content.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="min-w-0 rounded-[2rem] border border-neutral-200 bg-neutral-50 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.06)] sm:p-7">
            <ol className="overflow-hidden rounded-[1.5rem] border border-neutral-200 bg-white">
              {content.flow.map((step, index) => (
                <li
                  key={step}
                  className="group grid min-h-24 grid-cols-[auto_1fr] items-center gap-5 border-b border-neutral-100 p-5 last:border-b-0 sm:min-h-28 sm:gap-6 sm:p-6"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-400/20 text-[10px] font-black tracking-[0.12em] text-neutral-900 transition-colors group-hover:bg-brand-400">
                    0{index + 1}
                  </span>
                  <p className="max-w-md font-bold leading-snug text-neutral-900">
                    {step}
                  </p>
                </li>
              ))}
            </ol>

            <div className="mt-4 flex items-center justify-between gap-5 rounded-2xl bg-brand-400 p-5 sm:p-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-700">
                  Selo
                </span>
                <p className="mt-1 font-bold text-neutral-950">
                  Escritório Parceiro TOGETHER
                </p>
              </div>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-neutral-950/15 bg-white/35">
                <BadgeCheck className="h-7 w-7" aria-hidden="true" />
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-[10px] font-black uppercase tracking-[0.22em] text-neutral-400">
            O que muda para o escritório
          </p>
          <ul className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {content.benefits.map((benefit, index) => {
              const Icon = benefitIcons[index];

              return (
                <li
                  key={benefit}
                  className="group min-h-36 border-t border-neutral-200 pt-6"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-950 text-brand-400 transition-transform duration-300 group-hover:-translate-y-1">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="mt-7 max-w-[16rem] text-base font-bold leading-snug text-neutral-800">
                    {benefit}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
