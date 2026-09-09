import type { ComponentProps, ReactNode } from "react";
import { IndustryContactLink } from "@/roads-release/components/industry/industry-contact-link";
import type {
  IndustryDiagnosticContent,
  IndustrySectionIntro,
} from "@/roads-release/components/industry/industry-page-types";
import { IndustryReveal } from "@/roads-release/components/industry/industry-reveal";
import { IndustrySectionFrame } from "@/roads-release/components/industry/industry-section-frame";
import { IndustrySectionHeading } from "@/roads-release/components/industry/industry-section-heading";
import { SectorIcon } from "@/roads-release/components/industry/sector/sector-icon";
import type { IndustryLayoutFamily } from "@/components/industry/industry-visual-system";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";
import { SectionPill } from "@/roads-release/components/ui/site-primitives";

type IndustryNarrativeSectionProps = {
  readonly chapter: IndustrySectionIntro;
  readonly anchorIds: readonly string[];
  readonly layoutFamily: IndustryLayoutFamily;
  readonly tone?: ComponentProps<typeof IndustrySectionFrame>["tone"];
  readonly inverse?: boolean;
  readonly className?: string;
  readonly headingClassName?: string;
  readonly children: ReactNode;
};

export function IndustryNarrativeSection({
  chapter,
  anchorIds,
  layoutFamily,
  tone = "white",
  inverse = false,
  className,
  headingClassName,
  children,
}: IndustryNarrativeSectionProps) {
  return (
    <IndustrySectionFrame
      id={chapter.id}
      anchorIds={anchorIds}
      layoutFamily={layoutFamily}
      tone={tone}
      className={className}
    >
      <div className="container relative z-10 mx-auto px-6">
        <IndustrySectionHeading
          pill={chapter.pill}
          title={chapter.title}
          accent={chapter.accent}
          description={chapter.description}
          inverse={inverse}
          className={headingClassName}
        />
        {children}
      </div>
    </IndustrySectionFrame>
  );
}

export function IndustryNarrativeList({
  as = "ol",
  className,
  children,
  ariaLabel,
}: {
  readonly as?: "ol" | "ul";
  readonly className?: string;
  readonly children: ReactNode;
  readonly ariaLabel?: string;
}) {
  const Component = as;
  return (
    <Component className={className} aria-label={ariaLabel}>
      {children}
    </Component>
  );
}

export function IndustryNarrativeDiagnostic({
  sector,
  content,
  allowedAnchors,
  anchorIds,
  layout = "split",
}: {
  readonly sector: string;
  readonly content: IndustryDiagnosticContent;
  readonly allowedAnchors: readonly string[];
  readonly anchorIds: readonly string[];
  readonly layout?: "split" | "horizontal";
}) {
  return (
    <IndustrySectionFrame
      id={content.id}
      anchorIds={anchorIds}
      layoutFamily="narrative-diagnostic"
      tone="paper"
    >
      <PixelDecor placement="right" mask="right" opacity={0.09} />
      <PixelDecor placement="bottomLeft" mask="bottomLeft" opacity={0.06} />
      <div className="container relative z-10 mx-auto px-6">
        <IndustryReveal>
          <div className={layout === "horizontal" ? "grid items-start gap-10" : "grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"}>
            <div className="py-3 lg:py-8">
              <SectionPill>{content.pill}</SectionPill>
              <h2 className="mt-7 max-w-3xl text-[2.55rem] font-bold leading-[1.02] tracking-normal text-neutral-950 sm:text-5xl md:text-6xl">
                {content.title}{" "}
                <span className="pb-1 font-light italic leading-[1.1] text-brand-500">
                  {content.accent}
                </span>
              </h2>
              <p className="mt-6 max-w-[62ch] text-base font-medium leading-relaxed text-neutral-500 md:text-lg">
                {content.description}
              </p>
              <ul className={layout === "horizontal" ? "mt-10 grid gap-y-7 md:mt-12 md:grid-cols-3" : "mt-9 border-t border-neutral-200"}>
                {content.points.map((point) => (
                  <li
                    key={point}
                    className={layout === "horizontal" ? "grid grid-cols-[2.5rem_minmax(0,1fr)] items-start gap-4 text-base font-medium leading-relaxed text-neutral-800 md:block md:border-l md:border-neutral-200 md:px-8 md:first:border-l-0 md:first:pl-0 md:last:pr-0" : "grid grid-cols-[2.5rem_1fr] items-center gap-4 border-b border-neutral-200 py-4 text-sm font-bold leading-relaxed text-neutral-800"}
                  >
                    <span className={`flex h-10 w-10 items-center justify-center rounded-xl bg-brand-400 text-neutral-950 ${layout === "horizontal" ? "md:mb-5 md:h-14 md:w-14 md:rounded-2xl" : ""}`}>
                      <SectorIcon name="check" className={layout === "horizontal" ? "h-6 w-6 md:h-8 md:w-8" : "h-4 w-4"} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <aside
              data-industry-surface
              className={`relative min-w-0 overflow-hidden rounded-[2rem] bg-neutral-950 p-7 text-white shadow-[0_32px_80px_rgba(15,23,42,0.18)] sm:p-10 lg:p-12 ${layout === "horizontal" ? "grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12" : "flex flex-col justify-between"}`}
            >
              <div className="absolute inset-y-0 right-0 w-48 opacity-[0.1] [background-image:radial-gradient(circle_at_1px_1px,#FFD637_2px,transparent_0)] [background-size:22px_22px]" />
              <div className={`relative z-10 ${layout === "horizontal" ? "sm:pl-20" : ""}`}>
                <span className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-400 text-neutral-950 ${layout === "horizontal" ? "mb-6 sm:absolute sm:left-0 sm:top-0 sm:mb-0" : ""}`}>
                  <SectorIcon name="shield" className="h-6 w-6" />
                </span>
                <p className={`${layout === "horizontal" ? "" : "mt-9"} text-xs font-bold uppercase tracking-[0.16em] text-brand-400`}>
                  O que acontece em seguida
                </p>
                <h3 className="mt-3 text-2xl font-bold leading-tight tracking-normal sm:text-3xl">
                  {content.objection.title}
                </h3>
                <p className="mt-4 max-w-[48ch] text-sm font-medium leading-relaxed text-neutral-400 sm:text-base">
                  {content.objection.description}
                </p>
              </div>
              <div className={`relative z-10 border-white/15 ${layout === "horizontal" ? "border-t pt-7 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0" : "mt-10 border-t pt-7"}`}>
                <p className="text-sm font-medium leading-relaxed text-neutral-400">
                  A conversa identifica prioridades e próximos passos. Relatório,
                  parecer ou plano completo dependem do escopo contratado.
                </p>
                <IndustryContactLink
                  sector={sector}
                  position="proof"
                  allowedAnchors={allowedAnchors}
                  size="lg"
                  fullWidth
                  className="mt-6 whitespace-normal text-center sm:w-auto sm:whitespace-nowrap"
                >
                  {content.cta}
                </IndustryContactLink>
              </div>
            </aside>
          </div>
        </IndustryReveal>
      </div>
    </IndustrySectionFrame>
  );
}
