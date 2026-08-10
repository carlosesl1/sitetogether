import { BadgeCheck } from "lucide-react";
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

export function PartnerPortfolioOffer({ content }: PartnerPortfolioOfferProps) {
  return (
    <section
      id="modelo-de-parceria"
      className="relative overflow-hidden border-t border-neutral-100 bg-white py-24 md:py-36"
    >
      <PixelDecor placement="topRight" mask="topRight" opacity={0.12} />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-start lg:gap-20">
          <div>
            <SectionPill>{content.pill}</SectionPill>
            <h2 className="mt-8 max-w-2xl text-[2.65rem] font-bold leading-[0.98] tracking-tighter text-neutral-900 md:text-6xl">
              {content.title}
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-neutral-500">
              {content.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-neutral-200 bg-neutral-50 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.06)] sm:p-7">
            <div className="grid gap-3 sm:grid-cols-2">
              {content.flow.map((step, index) => (
                <div
                  key={step}
                  className="relative min-h-32 overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5"
                >
                  <span className="text-[10px] font-bold tracking-[0.18em] text-brand-500">
                    0{index + 1}
                  </span>
                  <p className="mt-6 max-w-[15rem] font-bold leading-snug text-neutral-900">
                    {step}
                  </p>
                  <span className="absolute -bottom-5 -right-2 text-7xl font-black text-neutral-950/[0.035]">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>

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

        <ul className="mt-14 grid gap-3 rounded-[2rem] border border-neutral-200 bg-neutral-50 p-3 shadow-xl shadow-neutral-200/40 sm:grid-cols-2 lg:grid-cols-4">
          {content.benefits.map((benefit, index) => (
            <li
              key={benefit}
              className="flex min-h-40 flex-col justify-between rounded-[1.35rem] bg-white p-6 text-sm font-semibold leading-relaxed text-neutral-700 transition-colors hover:bg-brand-400/10"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-400 text-xs font-black text-neutral-950">
                0{index + 1}
              </span>
              <span className="mt-8 max-w-[16rem]">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
