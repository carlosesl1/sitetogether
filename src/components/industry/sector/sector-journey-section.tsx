import type {
  SectorIndustryContent,
  SectorVisualFamily,
} from "@/components/industry/industry-page-types";
import { IndustrySectionHeading } from "@/components/industry/industry-section-heading";
import { SectorIcon } from "@/components/industry/sector/sector-icon";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";

type SectorJourneySectionProps = {
  content: SectorIndustryContent["journey"];
  visualFamily: SectorVisualFamily;
};

export function SectorJourneySection({
  content,
  visualFamily,
}: SectorJourneySectionProps) {
  return (
    <section
      id={content.id}
      data-journey-family={visualFamily}
      className="relative scroll-mt-24 overflow-hidden bg-neutral-950 py-20 text-white sm:py-24 lg:py-32 xl:py-40"
    >
      <PixelDecor
        placement="topRight"
        mask="topRight"
        color="#FFD637"
        opacity={0.14}
      />
      <PixelDecor
        placement="bottomLeft"
        mask="bottomLeft"
        color="#FFD637"
        opacity={0.1}
      />
      <div className="container relative z-10 mx-auto px-6">
        <IndustrySectionHeading
          pill={content.pill}
          title={content.title}
          accent={content.accent}
          description={content.description}
          inverse
        />

        <div className="relative mt-14 lg:mt-20">
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-brand-400 via-white/15 to-transparent lg:left-0 lg:right-0 lg:top-7 lg:h-px lg:w-auto" />
          <ol className="relative grid gap-6 pl-4 lg:grid-cols-5 lg:gap-5 lg:pl-0">
            {content.stages.map((stage) => (
              <li key={stage.title} className="relative min-w-0 pl-12 lg:pl-0 lg:pt-16">
                <span className="absolute left-0 top-1 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-neutral-900 text-brand-400 shadow-[0_12px_28px_rgba(0,0,0,0.3)] lg:top-0">
                  <SectorIcon name={stage.icon} className="h-5 w-5" />
                </span>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-400">
                  {stage.label}
                </p>
                <h3 className="mt-3 text-xl font-bold leading-tight tracking-tight text-white">
                  {stage.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-neutral-400 sm:text-base">
                  {stage.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
