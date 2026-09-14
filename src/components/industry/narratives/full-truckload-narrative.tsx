import { PartnerCapacitySection } from "@/components/legal-partners/partner-capacity-section";
import privateSchoolsStyles from "@/components/industry/private-schools/private-schools-sections.module.css";
import { getIndustryAnchorIds } from "@/components/industry/industry-anchor-targets";
import { IndustryContactLink } from "@/components/industry/industry-contact-link";
import { IndustryNarrativeList, IndustryNarrativeSection } from "@/components/industry/industry-narrative-primitives";
import { IndustryReveal } from "@/components/industry/industry-reveal";
import { IndustrySectionFrame } from "@/components/industry/industry-section-frame";
import { IndustrySectionHeading } from "@/components/industry/industry-section-heading";
import type { FullTruckloadIndustryContent } from "@/components/industry/narratives/industry-narrative-types";
import { SectorIcon } from "@/components/industry/sector/sector-icon";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";
import styles from "./full-truckload-narrative.module.css";

function CornerPixels() {
  return (
    <>
      <svg aria-hidden="true" viewBox="0 0 64 76" className={styles.topPixels}>
        <path fill="currentColor" d="M38 0h26v26H38zM12 26h26v26H12zM38 52h18v18H38z" />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 76 76" className={styles.bottomPixels}>
        <path fill="currentColor" d="M0 0h26v26H0zM26 26h24v24H26zM50 50h18v18H50z" />
      </svg>
    </>
  );
}

export function FullTruckloadNarrative({ content }: { readonly content: FullTruckloadIndustryContent }) {
  const { pain, approach, changes, services, process, capacity } = content.narrative;
  const allowedAnchors = content.campaignAnchors.map(({ id }) => id);
  const serviceAnchors = getIndustryAnchorIds(content.campaignAnchors, "together-truckload");

  return (
    <>
      <div data-chapter="truckload-pain">
        <IndustrySectionFrame
          id={pain.id}
          anchorIds={["antes-da-viagem"]}
          layoutFamily="decision-chapter"
          tone="paper"
          className={styles.section}
        >
          <CornerPixels />
          <div className={`container relative z-10 mx-auto px-6 ${styles.painLayout}`}>
            <IndustrySectionHeading {...pain} variant="narrative" className={`${styles.heading} ${styles.splitHeading}`} />
            <IndustryReveal>
              <IndustryNarrativeList as="ul" ariaLabel="Desafios de privacidade na carga lotação" className={styles.painList}>
                {pain.items.map((item) => (
                  <li key={item.title} className={styles.iconArticle}>
                    <span aria-hidden="true" className={`${styles.iconTile} ${styles.darkTile}`}>
                      <SectorIcon name={item.icon} className="h-8 w-8" />
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </li>
                ))}
              </IndustryNarrativeList>
            </IndustryReveal>
          </div>
        </IndustrySectionFrame>
      </div>

      <div data-chapter="truckload-approach">
        <IndustryNarrativeSection
          chapter={approach}
          anchorIds={[]}
          layoutFamily="decision-chapter"
          tone="dark"
          inverse
          className={`${styles.section} ${styles.approach}`}
          headingClassName={styles.heading}
          decoration={<CornerPixels />}
        >
          <IndustryReveal className={styles.approachLayout}>
            <div className={styles.example}>
              <span aria-hidden="true" className={styles.documentTile}>
                <SectorIcon name="file" className="h-9 w-9" />
              </span>
              <h3>{approach.example.title}</h3>
              <p>{approach.example.description}</p>
            </div>
            <div className={styles.participation}>
              <div className={styles.participationHeading}>
                <span aria-hidden="true" className={`${styles.iconTile} ${styles.teamTile}`}>
                  <SectorIcon name="users" className="h-9 w-9" />
                </span>
                <h3>{approach.participation.title}</h3>
              </div>
              <p>{approach.participation.description}</p>
            </div>
          </IndustryReveal>
        </IndustryNarrativeSection>
      </div>

      <div data-chapter="truckload-changes">
        <IndustryNarrativeSection
          chapter={changes}
          anchorIds={[]}
          layoutFamily="decision-chapter"
          tone="paper"
          className={styles.section}
          headingClassName={styles.heading}
          decoration={<CornerPixels />}
        >
          <IndustryReveal className={styles.changesContent}>
            <IndustryNarrativeList as="ul" ariaLabel="Mudanças na transportadora e cuidados de privacidade" className={styles.changesList}>
              {changes.items.map((item) => (
                <li key={item.title}>
                  <h3>
                    <SectorIcon name={item.icon} className={styles.changeIcon} />
                    {item.title}
                  </h3>
                  <p>{item.description}</p>
                </li>
              ))}
            </IndustryNarrativeList>
            <p className={styles.changesClosing}>{changes.closing}</p>
          </IndustryReveal>
        </IndustryNarrativeSection>
      </div>

      <div data-chapter="together-truckload">
        <IndustrySectionFrame
          id={services.id}
          anchorIds={[...serviceAnchors, "necessidades-da-transportadora", "durante-a-viagem", "entrega-e-comprovantes", "depois-da-viagem", "incidentes-na-rota"]}
          layoutFamily="evidence-dossier"
          tone="white"
          className={styles.section}
        >
          <CornerPixels />
          <div className="container relative z-10 mx-auto px-6">
            <div className={styles.servicesLayout}>
              <IndustrySectionHeading {...services} variant="narrative" className={`${styles.heading} ${styles.splitHeading}`} />
              <IndustryReveal className={styles.serviceColumn}>
                <IndustryNarrativeList as="ul" ariaLabel="Serviços da TOGETHER" className={styles.serviceList}>
                  {services.items.map((item) => (
                    <li key={item.title} className={styles.iconArticle}>
                      <span aria-hidden="true" className={`${styles.iconTile} ${styles.yellowTile}`}>
                        <SectorIcon name={item.icon} className="h-8 w-8" />
                      </span>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </li>
                  ))}
                </IndustryNarrativeList>
              </IndustryReveal>
            </div>
            <IndustryReveal className={styles.servicesFooter}>
              <aside className={styles.servicesContext}>
                <h3>{services.context.title}</h3>
                <p>{services.context.description}</p>
              </aside>
              <IndustryContactLink
                sector={content.sector}
                position="proof"
                allowedAnchors={allowedAnchors}
                size="lg"
                className="mt-10 w-full whitespace-normal text-center sm:w-auto"
              >
                {services.cta}
              </IndustryContactLink>
            </IndustryReveal>
          </div>
        </IndustrySectionFrame>
      </div>

      <div data-chapter="truckload-process">
        <IndustryNarrativeSection
          chapter={process}
          anchorIds={[]}
          layoutFamily="narrative-diagnostic"
          tone="paper"
          className={styles.section}
          headingClassName={styles.heading}
          decoration={
            <>
              <PixelDecor placement="topRight" mask="topRight" className="max-h-64 max-w-64" opacity={0.5} squareSize={14} />
              <PixelDecor placement="bottomLeft" mask="bottomLeft" className="max-h-56 max-w-56" opacity={0.35} squareSize={14} />
            </>
          }
        >
          <IndustryReveal className={styles.processContent}>
            <IndustryNarrativeList ariaLabel="Etapas da contratação" className={styles.processList}>
              {process.items.map((item, index) => (
                <li key={item.title}>
                  <span aria-hidden="true" className={styles.stepMarker}>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              ))}
            </IndustryNarrativeList>
          </IndustryReveal>
        </IndustryNarrativeSection>
      </div>

      <div data-chapter="capacity" id="capacidade-comprovada" className={privateSchoolsStyles.capacity}>
        <PartnerCapacitySection content={capacity} layout="open" />
      </div>
    </>
  );
}
