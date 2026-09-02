import type { ReactNode } from "react";
import type { PrivateSchoolsNarrativeIntro } from "@/components/industry/private-schools/private-schools-types";
import { SectionPill } from "@/components/ui/site-primitives";
import { cn } from "@/lib/utils";

type PrivateSchoolsSectionTone = "paper" | "white" | "field" | "dark";

type PrivateSchoolsLayoutFamily =
  | "editorial-rail"
  | "evidence-dossier"
  | "operational-field"
  | "release-cycle"
  | "school-day";

const toneClasses: Record<PrivateSchoolsSectionTone, string> = {
  paper: "bg-[#fffdf8] text-neutral-900",
  white: "bg-white text-neutral-900",
  field: "bg-neutral-50 text-neutral-900",
  dark: "bg-neutral-950 text-white",
};

export function PrivateSchoolsSectionFrame({
  id,
  layoutFamily,
  tone = "white",
  className,
  children,
}: {
  readonly id: string;
  readonly layoutFamily: PrivateSchoolsLayoutFamily;
  readonly tone?: PrivateSchoolsSectionTone;
  readonly className?: string;
  readonly children: ReactNode;
}) {
  return (
    <section
      id={id}
      data-layout-family={layoutFamily}
      className={cn(
        "relative scroll-mt-24 overflow-hidden py-20 sm:py-24 lg:py-32",
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </section>
  );
}

export function PrivateSchoolsNarrativeSection({
  chapter,
  layoutFamily,
  tone = "white",
  inverse = false,
  className,
  headingClassName,
  children,
}: {
  readonly chapter: PrivateSchoolsNarrativeIntro;
  readonly layoutFamily: PrivateSchoolsLayoutFamily;
  readonly tone?: PrivateSchoolsSectionTone;
  readonly inverse?: boolean;
  readonly className?: string;
  readonly headingClassName?: string;
  readonly children: ReactNode;
}) {
  return (
    <PrivateSchoolsSectionFrame
      id={chapter.id}
      layoutFamily={layoutFamily}
      tone={tone}
      className={className}
    >
      <div className="container relative z-10 mx-auto px-6">
        <div className={cn("max-w-4xl", headingClassName)}>
          <SectionPill tone={inverse ? "dark" : "light"}>
            {chapter.pill}
          </SectionPill>
          <h2
            className={cn(
              "mt-8 break-words text-[2.55rem] font-bold leading-[1.02] tracking-normal sm:text-5xl md:text-6xl",
              inverse ? "text-white" : "text-neutral-900",
            )}
          >
            {chapter.title}{" "}
            {chapter.accent ? (
              <span className="pb-1 font-light italic leading-[1.1] text-brand-500">
                {chapter.accent}
              </span>
            ) : null}
          </h2>
          {chapter.description ? (
            <p
              className={cn(
                "mt-7 max-w-2xl text-base font-medium leading-relaxed md:text-lg",
                inverse ? "text-neutral-400" : "text-neutral-500",
              )}
            >
              {chapter.description}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </PrivateSchoolsSectionFrame>
  );
}

export function PrivateSchoolsNarrativeList({
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
