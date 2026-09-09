import { SectionPill } from "@/roads-release/components/ui/site-primitives";
import { cn } from "@/lib/utils";

type IndustrySectionHeadingProps = {
  pill?: string;
  title: string;
  accent?: string;
  description?: string;
  inverse?: boolean;
  className?: string;
};

export function IndustrySectionHeading({
  pill,
  title,
  accent,
  description,
  inverse = false,
  className,
}: IndustrySectionHeadingProps) {
  return (
    <div className={cn("max-w-4xl", className)}>
      {pill ? (
        <SectionPill tone={inverse ? "dark" : "light"}>{pill}</SectionPill>
      ) : null}
      <h2
        className={cn(
          pill && "mt-8",
          "break-words text-[2.55rem] font-bold leading-[1.02] tracking-normal sm:text-5xl md:text-6xl",
          inverse ? "text-white" : "text-neutral-900",
        )}
      >
        {title}
        {accent ? (
          <>
            {" "}
            <span
              className="pb-1 font-light italic leading-[1.1] text-brand-500"
            >
              {accent}
            </span>
          </>
        ) : null}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-7 max-w-2xl text-base font-medium leading-relaxed md:text-lg",
            inverse ? "text-neutral-400" : "text-neutral-500",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
