import type { PrivateSchoolsIndustryContent } from "@/components/industry/private-schools/private-schools-types";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";
import { ActionLink, SectionPill } from "@/components/ui/site-primitives";

export function PrivateSchoolsHero({
  content,
}: {
  readonly content: PrivateSchoolsIndustryContent["hero"];
}) {
  const { image } = content;

  return (
    <section className="relative min-h-[680px] overflow-hidden bg-[#fffdf8] sm:min-h-[700px] lg:min-h-[720px]">
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
          className="h-full w-full object-cover object-[60%_bottom] sm:object-[64%_center] lg:object-center"
        />
      </picture>

      <div className="absolute inset-0 bg-gradient-to-b from-[#fffdf8] via-[#fffdf8]/95 to-[#fffdf8]/45 sm:bg-gradient-to-r sm:from-[#fffdf8] sm:via-[#fffdf8]/92 sm:to-transparent" />
      <PixelDecor placement="topRight" mask="topRight" opacity={0.18} />
      <PixelDecor placement="bottomLeft" mask="bottomLeft" opacity={0.1} />

      <div className="container relative z-10 mx-auto flex min-h-[680px] items-center px-5 py-20 sm:min-h-[700px] sm:px-6 lg:min-h-[720px]">
        <div className="max-w-[830px]">
          <SectionPill>{content.pill}</SectionPill>
          <h1 className="mt-8 max-w-[830px] break-words text-[2.7rem] font-bold leading-[0.98] tracking-[-0.025em] text-neutral-950 sm:text-6xl xl:text-[4.35rem]">
            {content.title}{" "}
            <span className="pb-1 font-light italic leading-[1.1] text-brand-500">
              {content.accent}
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-neutral-600 sm:text-xl">
            {content.description}
          </p>
          <div className="mt-10 flex w-full sm:w-auto">
            <ActionLink
              href="#contato-escolas"
              variant="primary"
              size="xl"
              fullWidth
              className="sm:w-auto"
            >
              {content.cta}
            </ActionLink>
          </div>
          <p className="mt-6 max-w-2xl text-xs font-bold uppercase leading-relaxed tracking-[0.12em] text-neutral-600 sm:text-sm sm:tracking-[0.14em]">
            {content.supportLine}
          </p>
        </div>
      </div>
    </section>
  );
}
