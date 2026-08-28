import type {
  SectorIndustryContent,
  SectorVisualFamily,
} from "@/components/industry/industry-page-types";
import { IndustryContactLink } from "@/components/industry/industry-contact-link";
import { IndustrySectionHeading } from "@/components/industry/industry-section-heading";
import { SectorIcon } from "@/components/industry/sector/sector-icon";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";
import { SectionPill } from "@/components/ui/site-primitives";
import { cn } from "@/lib/utils";

type SectorSupportSectionProps = {
  sector: string;
  visualFamily: SectorVisualFamily;
  content: SectorIndustryContent["support"];
  proof: SectorIndustryContent["proof"];
  training: SectorIndustryContent["training"];
  allowedAnchors: readonly string[];
};

export function SectorSupportSection({
  sector,
  visualFamily,
  content,
  proof,
  training,
  allowedAnchors,
}: SectorSupportSectionProps) {
  return (
    <section
      id={content.id}
      data-support-family={visualFamily}
      className="relative scroll-mt-24 overflow-hidden bg-white py-20 sm:py-24 lg:py-32 xl:py-40"
    >
      <PixelDecor placement="topRight" mask="topRight" opacity={0.16} />
      <PixelDecor placement="bottomLeft" mask="bottomLeft" opacity={0.12} />
      <div className="container relative z-10 mx-auto px-6">
        <IndustrySectionHeading
          pill={content.pill}
          title={content.title}
          accent={content.accent}
          description={content.description}
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.items.map((item, index) => (
            <article
              key={item.title}
              className={cn(
                "min-w-0 rounded-[2rem] border p-6 sm:p-7",
                item.emphasis
                  ? "border-neutral-900 bg-neutral-950 text-white shadow-[0_24px_54px_rgba(0,0,0,0.14)]"
                  : "border-neutral-200 bg-neutral-50/75 text-neutral-900",
                index === 0 && "lg:col-span-2",
              )}
            >
              <span
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-2xl",
                  item.emphasis
                    ? "bg-brand-400 text-neutral-950"
                    : "border border-brand-400/35 bg-brand-400/10",
                )}
              >
                <SectorIcon name={item.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-7 text-2xl font-bold leading-tight tracking-tight">
                {item.title}
              </h3>
              <p
                className={cn(
                  "mt-4 text-base font-medium leading-relaxed",
                  item.emphasis ? "text-neutral-400" : "text-neutral-500",
                )}
              >
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-5 grid gap-3 rounded-[2rem] border border-neutral-200 bg-neutral-50/80 p-3 sm:grid-cols-2 sm:p-4 lg:grid-cols-4">
          {proof.map((item) => (
            <div key={item.value} className="min-w-0 rounded-[1.4rem] bg-white p-5">
              <span className="block h-2.5 w-2.5 rounded-[3px] bg-brand-400" />
              <strong className="mt-5 block break-words text-xl font-bold tracking-tight text-neutral-900">
                {item.value}
              </strong>
              <span className="mt-2 block text-sm font-medium leading-relaxed text-neutral-500">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <div
          id={training.id}
          className="mt-5 scroll-mt-24 overflow-hidden rounded-[2rem] bg-neutral-950 p-7 text-white sm:p-9 lg:grid lg:grid-cols-[0.82fr_1.18fr] lg:gap-14 lg:p-12"
        >
          <div>
            <SectionPill tone="dark">{training.pill}</SectionPill>
            <h3 className="mt-7 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              {training.title}
            </h3>
            <p className="mt-5 max-w-xl text-base font-medium leading-relaxed text-neutral-400 sm:text-lg">
              {training.description}
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:mt-0">
            {training.audiences.map((audience) => (
              <div
                key={audience}
                className="flex min-h-16 items-center gap-3 rounded-[1.25rem] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold leading-snug"
              >
                <span className="h-2.5 w-2.5 shrink-0 rounded-[3px] bg-brand-400" />
                {audience}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-6 rounded-[2rem] border border-neutral-900 bg-neutral-950 px-6 py-7 text-white sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <h3 className="text-2xl font-bold tracking-tight">{content.ctaTitle}</h3>
            <p className="mt-2 text-sm font-medium leading-relaxed text-neutral-400 sm:text-base">
              {content.ctaText}
            </p>
          </div>
          <IndustryContactLink
            sector={sector}
            position="capabilities"
            allowedAnchors={allowedAnchors}
            variant="primary"
            size="lg"
            fullWidth
            className="shrink-0 sm:w-auto"
          >
            {content.cta}
          </IndustryContactLink>
        </div>
      </div>
    </section>
  );
}
