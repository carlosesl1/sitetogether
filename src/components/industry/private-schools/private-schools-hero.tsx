import type { PrivateSchoolsIndustryContent } from "@/components/industry/private-schools/private-schools-types";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";
import { ActionLink, SectionPill } from "@/components/ui/site-primitives";
import styles from "./private-schools-hero.module.css";

export function PrivateSchoolsHero({
  content,
}: {
  readonly content: PrivateSchoolsIndustryContent["hero"];
}) {
  const { image } = content;

  return (
    <section className={styles.hero}>
      <div className={styles.intro}>
        <PixelDecor placement="topRight" mask="topRight" opacity={0.15} squareSize={18} gridGap={9} />
        <PixelDecor placement="bottomLeft" mask="bottomLeft" opacity={0.1} />

        <div className={styles.copy}>
          <SectionPill>{content.pill}</SectionPill>
          <h1 className={styles.title}>
            {content.title}{" "}
            <span className={styles.accent}>{content.accent}</span>
          </h1>
          <p className={styles.description}>{content.description}</p>
          <div className={styles.action}>
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
        </div>
      </div>

      <div className={styles.media}>
        <picture className={styles.picture}>
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
        <source srcSet="/images/industries/private-schools/hero-wide.webp" type="image/webp" />
        <img
          src="/images/industries/private-schools/hero-wide.webp"
          alt=""
          width={1977}
          height={795}
          fetchPriority="high"
          decoding="async"
          className={styles.image}
        />
        </picture>

        <div className={styles.services}>
          <PixelDecor
            placement="custom"
            mask="none"
            opacity={0.17}
            squareSize={15}
            gridGap={8}
            className={styles.cardPixels}
          />
          <p>{content.supportLine}</p>
        </div>
      </div>
    </section>
  );
}
