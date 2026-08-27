import type { RoadsIndustryContent } from "@/components/industry/industry-page-types";
import { IndustryContactLink } from "@/components/industry/industry-contact-link";
import { SectionPill } from "@/components/ui/site-primitives";

type IndustryFinalCtaProps = {
  sector: string;
  content: RoadsIndustryContent["finalCta"];
  allowedAnchors: readonly string[];
};

export function IndustryFinalCta({
  sector,
  content,
  allowedAnchors,
}: IndustryFinalCtaProps) {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-brand-400 py-24 text-neutral-950 md:py-36"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-white/30 blur-[120px]" />
      <div className="container relative z-10 mx-auto px-6">
        <SectionPill tone="brand">{content.pill}</SectionPill>
        <div className="mt-8 grid items-end gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <div>
            <h2 className="max-w-4xl break-words text-[clamp(2.7rem,10vw,3.5rem)] font-bold leading-[0.94] tracking-tight sm:text-6xl lg:text-7xl">
              {content.title}
            </h2>
            <p className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-neutral-800">
              {content.description}
            </p>
          </div>
          <div className="min-w-0 rounded-[28px] border border-black/10 bg-white/30 p-6 backdrop-blur-sm sm:p-8">
            <IndustryContactLink
              sector={sector}
              position="final"
              allowedAnchors={allowedAnchors}
              variant="dark"
              size="xl"
              fullWidth
            >
              {content.cta}
            </IndustryContactLink>
            <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-700">
              Próximo passo
            </p>
            <p className="mt-3 text-base font-bold leading-relaxed text-neutral-900">
              {content.nextStep}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
