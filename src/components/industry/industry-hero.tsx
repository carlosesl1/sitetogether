import type { IndustryHeroContent } from "@/components/industry/industry-page-types";
import { IndustryContactLink } from "@/components/industry/industry-contact-link";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";
import { SectionPill } from "@/components/ui/site-primitives";

type IndustryHeroProps = {
  sector: string;
  content: IndustryHeroContent;
  allowedAnchors: readonly string[];
};

export function IndustryHero({
  sector,
  content,
  allowedAnchors,
}: IndustryHeroProps) {
  const { image } = content;

  return (
    <section className="relative min-h-[760px] overflow-hidden bg-[#fffdf8] sm:min-h-[720px] lg:min-h-[760px]">
      <picture className="absolute inset-0 block h-full w-full">
        <source
          media="(max-width: 767px)"
          srcSet={image.mobile.avif}
          type="image/avif"
        />
        <source
          media="(max-width: 767px)"
          srcSet={image.mobile.webp}
          type="image/webp"
        />
        <source
          media="(max-width: 767px)"
          srcSet={image.mobile.png}
          type="image/png"
        />
        <source srcSet={image.desktop.avif} type="image/avif" />
        <source srcSet={image.desktop.webp} type="image/webp" />
        <img
          src={image.desktop.png}
          alt=""
          width={image.desktop.width}
          height={image.desktop.height}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-[58%_bottom] sm:object-[62%_center] lg:object-center"
        />
      </picture>

      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white/5 sm:bg-gradient-to-r sm:from-white sm:via-white/90 sm:to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px] opacity-35" />
      <PixelDecor placement="topRight" mask="topRight" opacity={0.12} />

      <div className="container relative z-10 mx-auto flex min-h-[760px] items-start px-6 pb-28 pt-20 sm:min-h-[720px] sm:items-center sm:py-24 lg:min-h-[760px]">
        <div className="max-w-3xl">
          <SectionPill>{content.pill}</SectionPill>
          <h1 className="mt-8 max-w-3xl break-words text-[clamp(2.55rem,11vw,3.5rem)] font-bold leading-[0.94] tracking-tight text-neutral-950 sm:text-6xl lg:text-[4rem]">
            {content.title}
          </h1>
          <p className="mt-8 max-w-2xl text-base font-medium leading-relaxed text-neutral-700 sm:text-lg lg:text-xl">
            {content.description}
          </p>
          <div className="mt-10 w-full sm:w-auto">
            <IndustryContactLink
              sector={sector}
              position="hero"
              allowedAnchors={allowedAnchors}
              variant="dark"
              size="lg"
              fullWidth
              className="sm:w-auto"
            >
              {content.cta}
            </IndustryContactLink>
          </div>
        </div>
      </div>
    </section>
  );
}
