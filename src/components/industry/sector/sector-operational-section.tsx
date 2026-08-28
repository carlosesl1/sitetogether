import type {
  SectorIndustryContent,
  SectorVisualFamily,
} from "@/components/industry/industry-page-types";
import { IndustrySectionHeading } from "@/components/industry/industry-section-heading";
import { SectorIcon } from "@/components/industry/sector/sector-icon";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";
import { cn } from "@/lib/utils";

type SectorOperationalSectionProps = {
  content: SectorIndustryContent["context"];
  visualFamily: SectorVisualFamily;
};

const familyGrid: Record<SectorVisualFamily, string> = {
  product: "sm:grid-cols-2",
  school: "sm:grid-cols-2",
  campus: "sm:grid-cols-2",
  hub: "sm:grid-cols-2",
  "direct-route": "sm:grid-cols-2",
};

export function SectorOperationalSection({
  content,
  visualFamily,
}: SectorOperationalSectionProps) {
  return (
    <section
      id={content.id}
      data-visual-family={visualFamily}
      className="relative scroll-mt-24 overflow-hidden bg-white py-20 sm:py-24 lg:py-32 xl:py-40"
    >
      <PixelDecor
        placement="topRight"
        mask="topRight"
        opacity={0.18}
        className="max-sm:w-3/4"
      />
      <PixelDecor
        placement="bottomLeft"
        mask="bottomLeft"
        opacity={0.1}
        className="hidden lg:block"
      />
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid items-start gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20 xl:gap-28">
          <IndustrySectionHeading
            pill={content.pill}
            title={content.title}
            accent={content.accent}
            description={content.description}
            className="lg:sticky lg:top-28"
          />

          <div className="relative rounded-[2rem] border border-neutral-200 bg-neutral-50/90 p-3 shadow-[0_28px_70px_rgba(15,23,42,0.06)] sm:p-5">
            <div className="absolute left-8 top-8 h-[calc(100%-4rem)] w-px bg-gradient-to-b from-brand-400 via-neutral-200 to-transparent sm:left-10" />
            <div className={cn("relative grid gap-3", familyGrid[visualFamily])}>
              {content.nodes.map((node, index) => (
                <article
                  key={node.title}
                  className={cn(
                    "group relative min-w-0 rounded-[1.5rem] border border-neutral-200 bg-white p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-6",
                    (visualFamily === "hub" || visualFamily === "campus") &&
                      index === 0 &&
                      "sm:col-span-2",
                    visualFamily === "product" &&
                      index === content.nodes.length - 1 &&
                      "sm:col-span-2",
                  )}
                >
                  <div className="flex items-start gap-4">
                    <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-brand-400/35 bg-brand-400/10 text-neutral-900 shadow-sm">
                      <SectorIcon name={node.icon} className="h-5 w-5" />
                      <span className="absolute -bottom-1 -right-1 h-2.5 w-2.5 rounded-[3px] bg-brand-400" />
                    </span>
                    <div className="min-w-0 pt-1">
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-500">
                        {node.label}
                      </p>
                      <h3 className="mt-2 break-words text-xl font-bold tracking-tight text-neutral-900">
                        {node.title}
                      </h3>
                      <p className="mt-2 text-sm font-medium leading-relaxed text-neutral-500 sm:text-base">
                        {node.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
