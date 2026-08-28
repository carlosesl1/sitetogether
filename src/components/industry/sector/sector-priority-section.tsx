import type {
  SectorIndustryContent,
  SectorVisualFamily,
} from "@/components/industry/industry-page-types";
import { IndustrySectionHeading } from "@/components/industry/industry-section-heading";
import { SectorIcon } from "@/components/industry/sector/sector-icon";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";
import { cn } from "@/lib/utils";

type SectorPrioritySectionProps = {
  content: SectorIndustryContent["priority"];
  visualFamily: SectorVisualFamily;
};

export function SectorPrioritySection({
  content,
  visualFamily,
}: SectorPrioritySectionProps) {
  return (
    <section
      id={content.id}
      data-priority-family={visualFamily}
      className="relative scroll-mt-24 overflow-hidden bg-neutral-50 py-20 sm:py-24 lg:py-32 xl:py-40"
    >
      <PixelDecor
        placement="bottomRight"
        mask="bottomRight"
        opacity={0.16}
      />
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20 xl:gap-28">
          <IndustrySectionHeading
            pill={content.pill}
            title={content.title}
            accent={content.accent}
            description={content.description}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {content.points.map((point, index) => (
              <article
                key={point.title}
                className={cn(
                  "min-w-0 rounded-[2rem] border p-6 sm:p-7",
                  index === 1
                    ? "border-neutral-900 bg-neutral-950 text-white shadow-[0_24px_60px_rgba(0,0,0,0.16)]"
                    : "border-neutral-200 bg-white text-neutral-900",
                  index === content.points.length - 1 &&
                    content.points.length % 2 !== 0 &&
                    "sm:col-span-2",
                )}
              >
                <span
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-2xl",
                    index === 1
                      ? "bg-brand-400 text-neutral-950"
                      : "border border-brand-400/35 bg-brand-400/10 text-neutral-900",
                  )}
                >
                  <SectorIcon name={point.icon} className="h-5 w-5" />
                </span>
                <p
                  className={cn(
                    "mt-7 text-[11px] font-bold uppercase tracking-[0.18em]",
                    index === 1 ? "text-brand-400" : "text-neutral-500",
                  )}
                >
                  {point.label}
                </p>
                <h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight">
                  {point.title}
                </h3>
                <p
                  className={cn(
                    "mt-4 text-base font-medium leading-relaxed",
                    index === 1 ? "text-neutral-400" : "text-neutral-500",
                  )}
                >
                  {point.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
