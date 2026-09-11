import { PartnerCapacitySection } from "@/components/legal-partners/partner-capacity-section";
import { getIndustryAnchorIds } from "@/components/industry/industry-anchor-targets";
import { IndustryContactLink } from "@/components/industry/industry-contact-link";
import privateSchoolsStyles from "@/components/industry/private-schools/private-schools-sections.module.css";
import { IndustryNarrativeList, IndustryNarrativeSection } from "@/components/industry/industry-narrative-primitives";
import type { FractionalFreightIndustryContent } from "@/components/industry/narratives/industry-narrative-types";
import { SectorIcon } from "@/components/industry/sector/sector-icon";
import { IndustrySectionFrame } from "@/components/industry/industry-section-frame";
import { IndustrySectionHeading } from "@/components/industry/industry-section-heading";
import styles from "@/components/industry/fractional-freight/fractional-freight-sections.module.css";
import { FractionalFreightDecor } from "@/components/industry/fractional-freight/fractional-freight-decor";

export function FractionalFreightNarrative({ content }: { readonly content: FractionalFreightIndustryContent }) {
  const { pain, stage, services, process, teams, capacity } = content.narrative;
  const allowedAnchors = content.campaignAnchors.map(({ id }) => id);
  const anchors = (key: Parameters<typeof getIndustryAnchorIds>[1]) =>
    getIndustryAnchorIds(content.campaignAnchors, key);

  return (
    <>
      <div data-chapter="freight-pain">
        <IndustrySectionFrame
          id={pain.id}
          anchorIds={[...anchors("freight-pain"), "cadeia-de-repasses", "rede-distribuida"]}
          layoutFamily="operational-field"
          tone="paper"
          className={styles.section}
        >
          <FractionalFreightDecor flip />
          <div className="container relative z-10 mx-auto px-6">
            <div className={styles.painGrid}>
              <IndustrySectionHeading {...pain} className={`${styles.heading} ${styles.painHeading}`} />
              <div>
                <IndustryNarrativeList as="ul" className={styles.painList} ariaLabel="Demandas de privacidade no transporte fracionado">
                  {pain.items.map((item) => (
                    <li key={item.title} className={styles.painItem}>
                      <span className={styles.iconCircle}><SectorIcon name={item.icon} /></span>
                      <div>
                        <h3 className={styles.itemTitle}>{item.title}</h3>
                        <p className={styles.itemDescription}>{item.description}</p>
                      </div>
                    </li>
                  ))}
                </IndustryNarrativeList>
              </div>
            </div>
            <p className={styles.painNote}>{pain.note}</p>
          </div>
        </IndustrySectionFrame>
      </div>

      <div data-chapter="freight-stage">
        <IndustryNarrativeSection
          chapter={stage}
          anchorIds={[...anchors("freight-stage"), "diagnostico-inicial"]}
          decoration={<FractionalFreightDecor />}
          layoutFamily="decision-chapter"
          className={styles.section}
          headingClassName={styles.heading}
        >
          <div className={styles.sectionBody}>
            <IndustryNarrativeList as="ul" className={styles.stageList} ariaLabel="Quando contar com a TOGETHER">
              {stage.items.map((item) => (
                <li key={item.title} className={styles.stageItem}>
                  <span className={styles.iconCircle}><SectorIcon name={item.icon} /></span>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemDescription}>{item.description}</p>
                </li>
              ))}
            </IndustryNarrativeList>
            <p className={styles.stageNote}>{stage.note}</p>
            <IndustryContactLink
              sector={content.sector}
              position="proof"
              allowedAnchors={allowedAnchors}
              size="lg"
              className={`${styles.sectionCta} ${styles.centeredCta}`}
            >
              {stage.cta}
            </IndustryContactLink>
          </div>
        </IndustryNarrativeSection>
      </div>

      <div data-chapter="freight-services">
        <IndustryNarrativeSection
          chapter={services}
          anchorIds={[...anchors("freight-services"), "regra-de-repasse", "reconstruir-o-caminho", "como-atuamos"]}
          layoutFamily="decision-chapter"
          tone="dark"
          inverse
          className={styles.section}
          headingClassName={`${styles.heading} ${styles.servicesHeading}`}
          decoration={<FractionalFreightDecor inverse />}
        >
          <div className={styles.sectionBody}>
            <IndustryNarrativeList as="ul" ariaLabel="Serviços de privacidade da TOGETHER">
              {services.items.map((item) => (
                <li key={item.title} className={styles.serviceRow}>
                  <span className={styles.serviceIcon}>
                    <SectorIcon name={item.icon} />
                  </span>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemDescription}>{item.description}</p>
                </li>
              ))}
            </IndustryNarrativeList>
            <p className={styles.servicesNote}>{services.note}</p>
            <IndustryContactLink
              sector={content.sector}
              position="proof"
              allowedAnchors={allowedAnchors}
              size="lg"
              className={`${styles.sectionCta} focus-visible:ring-brand-400 focus-visible:ring-offset-neutral-950`}
            >
              {services.cta}
            </IndustryContactLink>
          </div>
        </IndustryNarrativeSection>
      </div>

      <div data-chapter="freight-process">
        <IndustryNarrativeSection
          chapter={process}
          anchorIds={anchors("freight-process")}
          decoration={<FractionalFreightDecor flip />}
          layoutFamily="handoff-chain"
          className={styles.section}
          headingClassName={styles.heading}
        >
          <div className={styles.sectionBody}>
            <IndustryNarrativeList className={styles.processList} ariaLabel="Etapas do trabalho">
              {process.items.map((item, index) => (
                <li key={item.title}>
                  <div className={styles.stepTop} aria-hidden="true">
                    <span className={styles.iconCircle}><SectorIcon name={(["file", "check", "users"] as const)[index]} /></span>
                    <span className={styles.stepNumber}>{item.label}</span>
                    {index < process.items.length - 1 ? <span className={styles.stepLine} /> : null}
                  </div>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemDescription}>{item.description}</p>
                </li>
              ))}
            </IndustryNarrativeList>
            <p className={styles.processNote}>{process.note}</p>
          </div>
        </IndustryNarrativeSection>
      </div>

      <div data-chapter="freight-teams">
        <IndustryNarrativeSection
          chapter={teams}
          anchorIds={[...anchors("freight-teams"), "criterios-na-operacao"]}
          decoration={<FractionalFreightDecor />}
          layoutFamily="operational-field"
          className={styles.section}
          headingClassName={styles.heading}
        >
          <div className={styles.sectionBody}>
            <IndustryNarrativeList as="ul" className={styles.teamsList} ariaLabel="Apoio às equipes da transportadora">
              {teams.items.map((item) => (
                <li key={item.title} className={styles.teamItem}>
                  <SectorIcon name={item.icon} />
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemDescription}>{item.description}</p>
                </li>
              ))}
            </IndustryNarrativeList>
            <IndustryContactLink
              sector={content.sector}
              position="proof"
              allowedAnchors={allowedAnchors}
              size="lg"
              className={`${styles.teamsCta} ${styles.centeredCta}`}
            >
              {teams.cta}
            </IndustryContactLink>
          </div>
        </IndustryNarrativeSection>
      </div>

      <div data-chapter="capacity" id="capacidade-comprovada" className={privateSchoolsStyles.capacity}>
        <PartnerCapacitySection content={capacity} layout="open" />
      </div>
    </>
  );
}
