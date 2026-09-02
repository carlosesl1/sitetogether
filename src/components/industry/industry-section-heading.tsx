import { SectionPill } from "@/components/ui/site-primitives";
import { cn } from "@/lib/utils";

type IndustrySectionHeadingProps = {
  pill: string;
  title: string;
  accent?: string;
  description: string;
  inverse?: boolean;
  className?: string;
  variant?: "default" | "narrative";
};

export function IndustrySectionHeading({
  pill,
  title,
  accent,
  description,
  inverse = false,
  className,
  variant = "default",
}: IndustrySectionHeadingProps) {
  const isNarrative = variant === "narrative";

  return (
    <div className={cn("max-w-4xl", className)}>
      <SectionPill tone={inverse ? "dark" : "light"}>{pill}</SectionPill>
      <h2
        className={cn(
          "mt-8 break-words font-bold",
          isNarrative
            ? "text-[2.55rem] leading-[1.02] tracking-normal sm:text-5xl md:text-6xl"
            : "text-[clamp(2rem,8vw,3rem)] leading-[0.96] tracking-tight sm:text-5xl lg:text-[3.5rem] xl:text-6xl",
          inverse ? "text-white" : "text-neutral-900",
        )}
      >
        {title}
        {accent ? (
          <>
            {" "}
            <span
              className={cn(
                "pb-1 font-light italic text-brand-500",
                isNarrative ? "leading-[1.1]" : "leading-[1.08]",
              )}
            >
              {accent}
            </span>
          </>
        ) : null}
      </h2>
      <p
        className={cn(
          "mt-7 font-medium leading-relaxed",
          isNarrative
            ? "max-w-2xl text-base md:text-lg"
            : "max-w-3xl text-lg",
          inverse ? "text-neutral-400" : "text-neutral-500",
        )}
      >
        {description}
      </p>
    </div>
  );
}
