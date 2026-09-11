import { HigherEducationCapacitySection } from "@/components/industry/higher-education-capacity-section";
import { getIndustryAnchorIds } from "@/components/industry/industry-anchor-targets";
import privateSchoolsStyles from "@/components/industry/private-schools/private-schools-sections.module.css";
import {
  IndustryNarrativeList,
  IndustryNarrativeSection,
} from "@/components/industry/industry-narrative-primitives";
import { IndustryReveal } from "@/components/industry/industry-reveal";
import type { HigherEducationIndustryContent } from "@/components/industry/narratives/industry-narrative-types";
import { SectorIcon } from "@/components/industry/sector/sector-icon";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";
import { ActionLink } from "@/components/ui/site-primitives";

export function HigherEducationNarrative({
  content,
}: {
  readonly content: HigherEducationIndustryContent;
}) {
  const anchors = (key: Parameters<typeof getIndustryAnchorIds>[1]) =>
    getIndustryAnchorIds(content.campaignAnchors, key);

  return (
    <>
      <div data-chapter="privacy-problem">
        <IndustryNarrativeSection
          chapter={content.narrative.problem}
          anchorIds={[]}
          layoutFamily="editorial-rail"
          tone="field"
          headingVariant="default"
          headingClassName="mx-auto text-center [&>p]:mx-auto"
          decoration={
            <>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-44 -top-44 h-96 w-96 rounded-full bg-brand-100/90"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-28 top-[36%] hidden h-64 w-64 rounded-full bg-brand-100/80 lg:block"
              />
              <PixelDecor
                placement="topRight"
                mask="topRight"
                opacity={0.08}
                squareSize={10}
                gridGap={8}
              />
            </>
          }
        >
          <IndustryReveal className="mt-12 sm:mt-14">
            <IndustryNarrativeList
              as="ul"
              ariaLabel="Desafios de adequação e gestão da privacidade"
              className="grid gap-4 sm:gap-5"
            >
              {content.narrative.problem.items.map((item) => (
                <li
                  key={item.title}
                  className="grid min-w-0 items-center gap-5 rounded-[1.5rem] border border-neutral-200 bg-white p-5 shadow-[0_12px_36px_rgba(15,23,42,0.04)] sm:p-6 md:grid-cols-[7rem_minmax(0,0.78fr)_minmax(0,1.42fr)] md:gap-7 lg:px-10"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-neutral-950 sm:h-20 sm:w-20">
                    <SectorIcon name={item.icon} className="h-7 w-7 sm:h-8 sm:w-8" />
                  </span>
                  <h3 className="text-xl font-bold leading-tight tracking-tight text-neutral-950 sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-neutral-500 md:border-l md:border-neutral-200 md:py-2 md:pl-8 lg:text-lg">
                    {item.description}
                  </p>
                </li>
              ))}
            </IndustryNarrativeList>
            <div className="mt-5 rounded-[1.5rem] bg-brand-100/65 px-6 py-6 sm:px-8">
              <p className="border-l-2 border-brand-500 pl-5 text-base font-semibold leading-relaxed text-neutral-800 sm:text-lg">
                {content.narrative.problem.note}
              </p>
            </div>
          </IndustryReveal>
        </IndustryNarrativeSection>
      </div>

      <div data-chapter="privacy-program">
        <IndustryNarrativeSection
          chapter={content.narrative.context}
          anchorIds={anchors("privacy-program")}
          layoutFamily="decision-chapter"
          tone="paper"
          headingVariant="default"
        >
          <IndustryReveal className="mt-10 sm:mt-12">
            <div className="grid gap-5">
              <article className="rounded-[2rem] border border-neutral-200 bg-white p-6 sm:p-8">
                <h3 className="text-xl font-bold tracking-tight text-neutral-950 sm:text-2xl">
                  O trabalho também envolve
                </h3>
                <ul
                  className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-neutral-200"
                  aria-label="Áreas que também fazem parte da adequação"
                >
                  {content.narrative.context.areas.map((area) => (
                    <li
                      key={area.label}
                      className="flex min-h-20 items-center gap-4 rounded-2xl bg-neutral-50 px-4 py-4 lg:min-h-16 lg:rounded-none lg:bg-transparent lg:px-6 lg:first:pl-0 lg:last:pr-0"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-400 text-neutral-950">
                        <SectorIcon name={area.icon} className="h-6 w-6" />
                      </span>
                      <span className="text-sm font-bold leading-snug text-neutral-800 sm:text-base">
                        {area.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>

              <aside className="rounded-[2rem] bg-neutral-950 p-6 text-white sm:p-8">
                <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                  Como a TOGETHER organiza esse trabalho
                </h3>
                <ol className="mt-6 grid gap-5 lg:grid-cols-[repeat(3,minmax(0,1fr))] lg:gap-7">
                  {content.narrative.context.actions.map((action, index) => (
                    <li
                      key={action}
                      className="flex min-w-0 items-center gap-4"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-400 text-neutral-950">
                        <SectorIcon name="check" className="h-5 w-5" />
                      </span>
                      <span className="text-base font-semibold leading-snug text-white">
                        {action}
                      </span>
                      {index < content.narrative.context.actions.length - 1 ? (
                        <span
                          aria-hidden="true"
                          className="ml-auto hidden h-px min-w-8 flex-1 bg-white/35 lg:block"
                        />
                      ) : null}
                    </li>
                  ))}
                </ol>
                <p className="mt-7 border-t border-white/15 pt-6 text-sm font-medium leading-relaxed text-neutral-300 sm:text-base">
                  {content.narrative.context.note}
                </p>
              </aside>
            </div>
          </IndustryReveal>
        </IndustryNarrativeSection>
      </div>

      <div data-chapter="six-fronts">
        <IndustryNarrativeSection
          chapter={content.narrative.sixFronts}
          anchorIds={anchors("six-fronts")}
          layoutFamily="evidence-dossier"
          tone="field"
          headingVariant="default"
          decoration={
            <PixelDecor
              placement="topRight"
              mask="topRight"
              opacity={0.055}
              squareSize={9}
              gridGap={9}
            />
          }
        >
          <IndustryReveal className="mt-12 sm:mt-14">
            <IndustryNarrativeList
              ariaLabel="Seis frentes de um programa de privacidade"
              className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
            >
              {content.narrative.sixFronts.items.map((item) => (
                <li
                  key={item.title}
                  className="flex min-w-0 flex-col rounded-[1.5rem] border border-neutral-200 bg-white p-6 shadow-[0_12px_36px_rgba(15,23,42,0.035)] sm:p-7"
                >
                  <span
                    data-front-index={item.label}
                    className="inline-flex h-12 w-fit overflow-hidden rounded-xl border border-neutral-200 bg-white"
                  >
                    <span className="flex h-full min-w-12 items-center justify-center bg-brand-400 px-3 text-xs font-black tracking-[0.08em] text-neutral-950">
                      {item.label}
                    </span>
                    <span className="flex h-full w-12 items-center justify-center text-neutral-950">
                      <SectorIcon name={item.icon} className="h-5 w-5" />
                    </span>
                  </span>
                  <h3 className="mt-6 text-xl font-bold leading-tight tracking-tight text-neutral-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-neutral-500 sm:text-base">
                    {item.description}
                  </p>
                  <div className="mt-6">
                    <span aria-hidden="true" className="block h-0.5 w-14 bg-brand-400" />
                    <p className="mt-5 text-[11px] font-black uppercase tracking-[0.14em] text-neutral-500">
                      Como a TOGETHER ajuda
                    </p>
                    <p className="mt-3 text-sm font-semibold leading-relaxed text-neutral-700 sm:text-base">
                      {item.togetherHelp}
                    </p>
                  </div>
                </li>
              ))}
            </IndustryNarrativeList>
          </IndustryReveal>
        </IndustryNarrativeSection>
      </div>

      <div
        data-chapter="capacity"
        id="capacidade-comprovada"
        className={privateSchoolsStyles.capacity}
      >
        <HigherEducationCapacitySection />
      </div>
      <div data-chapter="together-approach">
        <IndustryNarrativeSection
          chapter={content.narrative.togetherApproach}
          anchorIds={anchors("together-approach")}
          layoutFamily="editorial-rail"
          tone="paper"
          headingVariant="default"
          headingClassName="[&_h2]:text-[2.25rem] sm:[&_h2]:text-5xl md:[&_h2]:text-6xl"
          decoration={
            <PixelDecor
              placement="topRight"
              mask="topRight"
              opacity={0.065}
              squareSize={10}
              gridGap={8}
            />
          }
        >
          <IndustryReveal className="mt-12 sm:mt-14">
            <IndustryNarrativeList className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {content.narrative.togetherApproach.items.map((item) => (
                <li
                  key={item.title}
                  className="flex min-w-0 flex-col rounded-[1.5rem] border border-neutral-200 bg-white p-6 shadow-[0_12px_36px_rgba(15,23,42,0.035)] sm:p-7"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-neutral-950">
                    <SectorIcon name={item.icon} className="h-7 w-7" />
                  </span>
                  <span className="mt-6 text-sm font-black tracking-[0.1em] text-brand-500">
                    {item.label}
                  </span>
                  <h3 className="mt-3 text-xl font-bold leading-tight text-neutral-950">
                    {item.title}
                  </h3>
                  <span aria-hidden="true" className="mt-5 h-0.5 w-12 bg-brand-400" />
                  <p className="mt-5 text-sm font-medium leading-relaxed text-neutral-500 sm:text-base">
                    {item.description}
                  </p>
                </li>
              ))}
            </IndustryNarrativeList>
          </IndustryReveal>
          <IndustryReveal className="mt-10">
            <div className="relative grid overflow-hidden gap-6 rounded-[2rem] bg-neutral-950 p-6 text-white shadow-[0_24px_60px_rgba(0,0,0,0.14)] sm:p-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-10">
              <PixelDecor
                placement="bottomRight"
                mask="bottomRight"
                opacity={0.13}
                squareSize={9}
                gridGap={8}
              />
              <div className="relative z-10 max-w-2xl">
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-brand-400">
                  {content.narrative.togetherApproach.cta.eyebrow}
                </p>
                <h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                  {content.narrative.togetherApproach.cta.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-neutral-300 sm:text-base">
                  {content.narrative.togetherApproach.cta.description}
                </p>
              </div>
              <ActionLink
                href={content.narrative.togetherApproach.cta.href}
                size="lg"
                fullWidth
                className="relative z-10 sm:w-auto"
              >
                {content.narrative.togetherApproach.cta.label}
              </ActionLink>
            </div>
          </IndustryReveal>
        </IndustryNarrativeSection>
      </div>

      <div data-chapter="outcomes">
        <IndustryNarrativeSection
          chapter={content.narrative.outcomes}
          anchorIds={anchors("outcomes")}
          layoutFamily="decision-chapter"
          tone="dark"
          inverse
          headingVariant="default"
          decoration={
            <>
              <PixelDecor
                placement="topRight"
                mask="topRight"
                opacity={0.12}
                squareSize={11}
                gridGap={8}
              />
              <PixelDecor
                placement="bottomLeft"
                mask="bottomLeft"
                opacity={0.07}
                squareSize={9}
                gridGap={9}
              />
            </>
          }
        >
          <IndustryReveal className="mt-14">
            <IndustryNarrativeList
              as="ul"
              ariaLabel="Entregas e acompanhamento da privacidade"
              className="grid gap-4 sm:grid-cols-2"
            >
              {content.narrative.outcomes.items.map((item) => (
                <li
                  key={item.title}
                  className="rounded-[1.5rem] border border-white/15 bg-white/[0.025] p-6 sm:p-7"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-400 text-neutral-950">
                    <SectorIcon name={item.icon} className="h-5 w-5" />
                  </span>
                  <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-brand-400">
                    {item.label}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-neutral-400">
                    {item.description}
                  </p>
                </li>
              ))}
            </IndustryNarrativeList>
          </IndustryReveal>
        </IndustryNarrativeSection>
      </div>
    </>
  );
}
