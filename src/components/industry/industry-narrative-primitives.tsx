import type { ComponentProps, ReactNode } from "react";
import { IndustryContactLink } from "@/components/industry/industry-contact-link";
import type {
  IndustryContentSource,
  IndustryDiagnosticContent,
  IndustrySectionIntro,
} from "@/components/industry/industry-page-types";
import { IndustryReveal } from "@/components/industry/industry-reveal";
import { IndustrySectionFrame } from "@/components/industry/industry-section-frame";
import { IndustrySectionHeading } from "@/components/industry/industry-section-heading";
import { SectorIcon } from "@/components/industry/sector/sector-icon";
import type { IndustryLayoutFamily } from "@/components/industry/industry-visual-system";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";
import { SectionPill } from "@/components/ui/site-primitives";
import { cn } from "@/lib/utils";

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
          variant="narrative"
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

export function IndustrySourcesDisclosure({
  sources,
  inverse = false,
  className,
}: {
  readonly sources: readonly IndustryContentSource[];
  readonly inverse?: boolean;
  readonly className?: string;
}) {
  return (
    <details
      className={cn(
        "border-t pt-5",
        inverse ? "border-white/15" : "border-neutral-200",
        className,
      )}
    >
      <summary
        className={cn(
          "min-h-11 cursor-pointer py-2 text-sm font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2",
          inverse ? "text-white" : "text-neutral-900",
        )}
      >
        Fontes setoriais consultadas
      </summary>
      <ul className="mt-3 space-y-3">
        {sources.map((source) => (
          <li key={source.url}>
            <a
              href={source.url}
              rel="noreferrer"
              className={cn(
                "inline-flex min-h-11 flex-col justify-center text-sm font-medium leading-relaxed underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400",
                inverse
                  ? "text-neutral-300 decoration-white/25"
                  : "text-neutral-700 decoration-neutral-300",
              )}
            >
              <span>{source.claim}</span>
              <span
                className={cn(
                  "mt-1 break-all text-xs font-medium no-underline",
                  inverse ? "text-neutral-500" : "text-neutral-400",
                )}
              >
                {new URL(source.url).hostname} · revisão {source.reviewedAt}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}

export function IndustryNarrativeDiagnostic({
  sector,
  content,
  allowedAnchors,
  anchorIds,
}: {
  readonly sector: string;
  readonly content: IndustryDiagnosticContent;
  readonly allowedAnchors: readonly string[];
  readonly anchorIds: readonly string[];
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
          <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
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
              <ul className="mt-9 border-t border-neutral-200">
                {content.points.map((point) => (
                  <li
                    key={point}
                    className="grid grid-cols-[2.5rem_1fr] items-center gap-4 border-b border-neutral-200 py-4 text-sm font-bold leading-relaxed text-neutral-800"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-400 text-neutral-950">
                      <SectorIcon name="check" className="h-4 w-4" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <aside
              data-industry-surface
              className="relative flex min-w-0 flex-col justify-between overflow-hidden rounded-[2rem] bg-neutral-950 p-7 text-white shadow-[0_32px_80px_rgba(15,23,42,0.18)] sm:p-10 lg:p-12"
            >
              <div className="absolute inset-y-0 right-0 w-48 opacity-[0.1] [background-image:radial-gradient(circle_at_1px_1px,#FFD637_2px,transparent_0)] [background-size:22px_22px]" />
              <div className="relative z-10">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-400 text-neutral-950">
                  <SectorIcon name="shield" className="h-6 w-6" />
                </span>
                <p className="mt-9 text-xs font-bold uppercase tracking-[0.16em] text-brand-400">
                  O que acontece em seguida
                </p>
                <h3 className="mt-3 text-2xl font-bold leading-tight tracking-normal sm:text-3xl">
                  {content.objection.title}
                </h3>
                <p className="mt-4 max-w-[48ch] text-sm font-medium leading-relaxed text-neutral-400 sm:text-base">
                  {content.objection.description}
                </p>
              </div>
              <div className="relative z-10 mt-10 border-t border-white/15 pt-7">
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
