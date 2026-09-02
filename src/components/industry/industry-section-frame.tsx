import type { ReactNode } from "react";
import { IndustryAnchorTargets } from "@/components/industry/industry-anchor-targets";
import type { IndustryLayoutFamily } from "@/components/industry/industry-visual-system";
import { cn } from "@/lib/utils";

type IndustrySectionFrameProps = {
  readonly id: string;
  readonly anchorIds: readonly string[];
  readonly layoutFamily: IndustryLayoutFamily;
  readonly tone?: "paper" | "white" | "field" | "dark";
  readonly className?: string;
  readonly children: ReactNode;
};

const toneClasses = {
  paper: "bg-[#fffdf8] text-neutral-900",
  white: "bg-white text-neutral-900",
  field: "bg-neutral-50 text-neutral-900",
  dark: "bg-neutral-950 text-white",
} as const;

export function IndustrySectionFrame({
  id,
  anchorIds,
  layoutFamily,
  tone = "white",
  className,
  children,
}: IndustrySectionFrameProps) {
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
      <IndustryAnchorTargets ids={anchorIds} />
      {children}
    </section>
  );
}
