import type { IndustryHeroContent } from "@/components/industry/industry-page-types";
import { IndustryContactLink } from "@/components/industry/industry-contact-link";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";
import { ActionLink, SectionPill } from "@/components/ui/site-primitives";

export function HigherEducationHero({
  sector,
  content,
  allowedAnchors,
}: {
  readonly sector: string;
  readonly content: IndustryHeroContent;
  readonly allowedAnchors: readonly string[];
}) {
  const { image } = content;

  return (
    <section
      data-layout-family="hero-image-field"
      className="relative min-h-[640px] overflow-hidden bg-[#fffdf8] sm:min-h-[680px] lg:min-h-[700px]"
    >
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

      <div className="absolute inset-0 bg-gradient-to-b from-[#fffdf8] via-[#fffdf8]/92 to-[#fffdf8]/30 sm:bg-gradient-to-r sm:from-[#fffdf8] sm:via-[#fffdf8]/90 sm:to-transparent" />
      <PixelDecor placement="topRight" mask="topRight" opacity={0.18} />
      <PixelDecor placement="bottomLeft" mask="bottomLeft" opacity={0.1} />

      <div className="container relative z-10 mx-auto flex min-h-[640px] items-center px-5 py-16 sm:min-h-[680px] sm:px-6 lg:min-h-[700px] lg:py-20">
        <div className="max-w-[860px]">
          <SectionPill>{content.pill}</SectionPill>
          <h1 className="mt-8 max-w-[860px] break-words text-[2.75rem] font-bold leading-[0.98] tracking-normal text-neutral-950 sm:text-6xl xl:text-[4rem] 2xl:text-[4rem]">
            {content.title}{" "}
            <span className="pb-1 font-light italic leading-[1.1] text-brand-500">
              {content.accent}
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-neutral-500 sm:text-xl">
            {content.description}
          </p>
          <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
            <IndustryContactLink
              sector={sector}
              position="hero"
              allowedAnchors={allowedAnchors}
              variant="primary"
              size="xl"
              fullWidth
              className="sm:w-auto"
            >
              {content.cta}
            </IndustryContactLink>
            {content.secondaryCta ? (
              <ActionLink
                href={content.secondaryCta.href}
                variant="dark"
                size="xl"
                fullWidth
                className="sm:w-auto"
              >
                {content.secondaryCta.label}
              </ActionLink>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
