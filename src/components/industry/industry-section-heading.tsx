import { SectionPill } from "@/components/ui/site-primitives";
import { cn } from "@/lib/utils";

type IndustrySectionHeadingProps = {
  pill: string;
  title: string;
  accent?: string;
  description: string;
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
      <SectionPill tone={inverse ? "dark" : "light"}>{pill}</SectionPill>
      <h2
        className={cn(
          "mt-8 break-words text-[clamp(2rem,8vw,3rem)] font-bold leading-[0.96] tracking-tight sm:text-5xl lg:text-[3.5rem] xl:text-6xl",
          inverse ? "text-white" : "text-neutral-900",
        )}
      >
        {title}
        {accent ? (
          <>
            {" "}
            <span className="font-light italic text-brand-500 leading-[1.08] pb-1">
              {accent}
            </span>
          </>
        ) : null}
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
