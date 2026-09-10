import { PartnerCapacitySection } from "@/components/legal-partners/partner-capacity-section";
import { Check } from "lucide-react";
import {
  PrivateSchoolsNarrativeList,
  PrivateSchoolsNarrativeSection,
  PrivateSchoolsSectionFrame,
} from "@/components/industry/private-schools/private-schools-section-primitives";
import type { PrivateSchoolsIndustryContent } from "@/components/industry/private-schools/private-schools-types";
import { IndustryReveal } from "@/components/industry/private-schools/private-schools-reveal";
import { SectorIcon } from "@/components/industry/sector/sector-icon";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";
import { ActionLink, SectionPill } from "@/components/ui/site-primitives";
import styles from "@/components/industry/private-schools/private-schools-sections.module.css";

export function PrivateSchoolsNarrative({
  content,
}: {
  readonly content: PrivateSchoolsIndustryContent;
}) {
  const { problem, tension, integration, solutions, capacity, selfAssessment, process, positioning } = content.narrative;

  return (
    <>
      <div data-chapter="problem">
        <PrivateSchoolsNarrativeSection
          chapter={problem}
          layoutFamily="school-day"
          tone="paper"
          className={styles.section}
          headingClassName={`${styles.heading} ${styles.centered}`}
        >
          <IndustryReveal className={styles.sectionContent}>
            <PrivateSchoolsNarrativeList
              as="ul"
              ariaLabel="Pontos da rotina escolar em que dados pessoais circulam"
              className={styles.problemGrid}
            >
              {problem.items.map((item, index) => (
                <li key={item.title} className={`${styles.problemCard} ${index < 2 ? styles.featuredProblem : ""}`}>
                  <div className={styles.cardTop}>
                    <span className={styles.yellowIcon}>
                      <SectorIcon name={item.icon} />
                    </span>
                    <span className={styles.cardNumber}>{item.label}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className={styles.cardPixels} aria-hidden="true"><i /><i /><i /></span>
                </li>
              ))}
            </PrivateSchoolsNarrativeList>
          </IndustryReveal>
        </PrivateSchoolsNarrativeSection>
      </div>

      <div data-chapter="tension">
        <PrivateSchoolsSectionFrame
          id={tension.id}
          layoutFamily="editorial-rail"
          tone="dark"
        >
          <PixelDecor placement="right" mask="right" opacity={0.08} />
          <div className="container relative z-10 mx-auto px-6">
            <IndustryReveal>
              <div className="grid items-end gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
                <div>
                  <SectionPill tone="dark">{tension.pill}</SectionPill>
                  <h2 className="mt-8 max-w-4xl text-[2.6rem] font-bold leading-[0.98] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
                    {tension.title}{" "}
                    <span className="pb-1 font-light italic leading-[1.1] text-brand-400">
                      {tension.accent}
                    </span>
                  </h2>
                </div>
                <div className="border-l border-white/15 pl-6 sm:pl-9">
                  <p className="text-lg font-medium leading-relaxed text-neutral-300 sm:text-xl">
                    {tension.body}
                  </p>
                  <p className="mt-8 text-2xl font-bold leading-tight text-brand-400 sm:text-3xl">
                    {tension.description}
                  </p>
                </div>
              </div>
            </IndustryReveal>
          </div>
        </PrivateSchoolsSectionFrame>
      </div>

      <div data-chapter="integration">
        <PrivateSchoolsNarrativeSection
          chapter={integration}
          layoutFamily="operational-field"
          tone="paper"
          className={styles.section}
          headingClassName={`${styles.heading} ${styles.centered}`}
        >
          <IndustryReveal className={styles.sectionContent}>
            <div className={styles.integrationGrid}>
              {integration.items.map((item) => (
                <article key={item.title} className={styles.integrationCard}>
                  <span className={styles.darkIcon}><SectorIcon name={item.icon} /></span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
            <svg className={styles.connectors} viewBox="0 0 1200 86" preserveAspectRatio="none" aria-hidden="true">
              <path d="M200 0 V20 Q200 42 224 42 H555 Q600 42 600 84 M600 0 V84 M1000 0 V20 Q1000 42 976 42 H645 Q600 42 600 84" />
            </svg>
            <div className={styles.schoolOutcome}>
              <span className={styles.connectionDot} aria-hidden="true" />
              <span className={styles.outcomeLabel}>Orientações para a</span>
              <strong>Escola</strong>
              <span className={styles.outcomeCaption}>aplicação no dia a dia</span>
            </div>
          </IndustryReveal>
        </PrivateSchoolsNarrativeSection>
      </div>

      <div data-chapter="solutions">
        <PrivateSchoolsNarrativeSection
          chapter={solutions}
          layoutFamily="evidence-dossier"
          tone="paper"
          className={styles.section}
          headingClassName={styles.heading}
        >
          <IndustryReveal className={styles.sectionContent}>
            <PrivateSchoolsNarrativeList as="ul" ariaLabel="Soluções de privacidade para escolas" className={styles.solutionList}>
              {solutions.items.map((item) => (
                <li key={item.title} className={styles.solutionRow}>
                  <div className={styles.solutionMeta}>
                    <span className={styles.yellowIcon}><SectorIcon name={item.icon} /></span>
                    <span className={styles.solutionLabel}>{item.label}</span>
                  </div>
                  <div className={styles.solutionCopy}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <ActionLink href="#contato-escolas" variant="dark" size="lg" fullWidth className={styles.solutionAction}>
                    {content.finalCta.cta}
                  </ActionLink>
                </li>
              ))}
            </PrivateSchoolsNarrativeList>
          </IndustryReveal>
        </PrivateSchoolsNarrativeSection>
      </div>

      <div data-chapter="capacity" id="capacidade-comprovada" className={styles.capacity}>
        <PartnerCapacitySection content={capacity} layout="open" />
      </div>

      <div data-chapter="self-assessment">
        <PrivateSchoolsNarrativeSection
          chapter={selfAssessment}
          layoutFamily="school-day"
          tone="paper"
          className={styles.section}
          headingClassName={styles.heading}
        >
          <IndustryReveal className={styles.sectionContent}>
            <ul className={styles.assessmentGrid} aria-label="Situações de privacidade para conversar">
              {selfAssessment.items.map((item) => (
                <li key={item}>
                  <span className={styles.checkIcon}><Check aria-hidden="true" /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className={styles.assessmentAction}>
              <p>{selfAssessment.note}</p>
              <ActionLink href="#contato-escolas" variant="primary" size="xl" fullWidth className={styles.assessmentButton}>
                {selfAssessment.cta}
              </ActionLink>
            </div>
          </IndustryReveal>
        </PrivateSchoolsNarrativeSection>
      </div>

      <div data-chapter="process">
        <PrivateSchoolsNarrativeSection
          chapter={process}
          layoutFamily="release-cycle"
          tone="paper"
          className={styles.section}
          headingClassName={styles.heading}
        >
          <IndustryReveal className={styles.sectionContent}>
            <ol className={styles.timeline}>
              {process.items.map((item) => (
                <li key={item.title}>
                  <span className={styles.stepNumber}>{item.label}.</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              ))}
            </ol>
            <div className={styles.processAction}>
              <ActionLink href="#contato-escolas" variant="dark" size="xl" fullWidth className="sm:w-auto">
                {content.finalCta.cta}
              </ActionLink>
            </div>
          </IndustryReveal>
        </PrivateSchoolsNarrativeSection>
      </div>

      <div data-chapter="positioning">
        <PrivateSchoolsSectionFrame id={positioning.id} layoutFamily="editorial-rail" tone="dark" className={styles.positioning}>
          <PixelDecor placement="custom" mask="none" opacity={0.1} squareSize={17} gridGap={7} className={styles.positioningPixelsTop} />
          <PixelDecor placement="bottomRight" mask="bottomRight" opacity={0.15} squareSize={17} gridGap={7} />
          <div className="container relative z-10 mx-auto px-6">
            <IndustryReveal className={styles.positioningGrid}>
              <div>
                <SectionPill tone="dark">{positioning.pill}</SectionPill>
                <h2>{positioning.title}{" "}<span>{positioning.accent}</span></h2>
              </div>
              <div className={styles.positioningCopy}>
                <p>{positioning.body}</p>
                <p className={styles.positioningClosing}>{positioning.closing}</p>
              </div>
            </IndustryReveal>
          </div>
        </PrivateSchoolsSectionFrame>
      </div>
    </>
  );
}
