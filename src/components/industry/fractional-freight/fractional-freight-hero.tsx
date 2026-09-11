import { IndustryContactLink } from "@/components/industry/industry-contact-link";
import type { FractionalFreightIndustryContent } from "@/components/industry/narratives/industry-narrative-types";
import { ActionLink, SectionPill } from "@/components/ui/site-primitives";
import { FractionalFreightDecor } from "./fractional-freight-decor";
import styles from "./fractional-freight-sections.module.css";

export function FractionalFreightHero({ content }: { readonly content: FractionalFreightIndustryContent }) {
  const { hero, sector, campaignAnchors } = content;
  const image = hero.image.desktop;

  return (
    <section data-layout-family="hero-panorama" className={styles.hero}>
      <FractionalFreightDecor />
      <div className={`container mx-auto px-6 ${styles.heroContent}`}>
        <SectionPill>{hero.pill}</SectionPill>
        <h1 className={styles.heroTitle}>
          {hero.title}{" "}<span>{hero.accent}</span>
        </h1>
        <p className={styles.heroDescription}>{hero.description}</p>
        <p className={styles.heroSupporting}>{hero.supportingText}</p>
        <div className={styles.heroActions}>
          <IndustryContactLink
            sector={sector}
            position="hero"
            allowedAnchors={campaignAnchors.map(({ id }) => id)}
            size="xl"
          >
            {hero.cta}
          </IndustryContactLink>
          {hero.secondaryCta ? (
            <ActionLink href={hero.secondaryCta.href} variant="dark" size="xl">
              {hero.secondaryCta.label}
            </ActionLink>
          ) : null}
        </div>
      </div>
      <div className={styles.heroPhoto}>
        <picture>
          <source srcSet={image.avif} type="image/avif" />
          <source srcSet={image.webp} type="image/webp" />
          <img
            src={image.png}
            alt=""
            width={image.width}
            height={image.height}
            fetchPriority="high"
            decoding="async"
          />
        </picture>
      </div>
    </section>
  );
}
