import { SectionPill } from "@/components/ui/site-primitives";
import { cn } from "@/lib/utils";

type IndustrySectionHeadingProps = {
  pill: string;
  title: string;
  description: string;
  inverse?: boolean;
  className?: string;
};

export function IndustrySectionHeading({
  pill,
  title,
  description,
  inverse = false,
  className,
}: IndustrySectionHeadingProps) {
  return (
    <div className={cn("max-w-4xl", className)}>
      <SectionPill tone={inverse ? "dark" : "light"}>{pill}</SectionPill>
      <h2
        className={cn(
          "mt-8 break-words text-[clamp(2.35rem,9vw,3rem)] font-bold leading-[0.96] tracking-tight sm:text-5xl lg:text-6xl",
          inverse ? "text-white" : "text-neutral-900",
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "mt-7 max-w-3xl text-lg font-medium leading-relaxed",
          inverse ? "text-neutral-400" : "text-neutral-500",
        )}
      >
        {description}
      </p>
    </div>
  );
}
