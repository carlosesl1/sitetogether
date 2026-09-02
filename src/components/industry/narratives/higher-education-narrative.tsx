import { getIndustryAnchorIds } from "@/components/industry/industry-anchor-targets";
import {
  IndustryNarrativeList,
  IndustryNarrativeSection,
} from "@/components/industry/industry-narrative-primitives";
import { IndustryReveal } from "@/components/industry/industry-reveal";
import type { HigherEducationIndustryContent } from "@/components/industry/narratives/industry-narrative-types";
import { SectorIcon } from "@/components/industry/sector/sector-icon";
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
      <div data-chapter="privacy-program">
        <IndustryNarrativeSection
          chapter={content.narrative.context}
          anchorIds={anchors("privacy-program")}
          layoutFamily="editorial-rail"
          tone="paper"
        >
          <IndustryReveal className="mt-12">
            <p className="max-w-4xl border-l-4 border-brand-400 pl-6 text-2xl font-bold leading-snug text-neutral-900 sm:text-3xl">
              {content.narrative.context.note}
            </p>
          </IndustryReveal>
        </IndustryNarrativeSection>
      </div>

      <div data-chapter="six-fronts">
        <IndustryNarrativeSection
          chapter={content.narrative.sixFronts}
          anchorIds={anchors("six-fronts")}
          layoutFamily="evidence-dossier"
          tone="field"
        >
          <IndustryReveal className="mt-14">
            <IndustryNarrativeList
              ariaLabel="Seis frentes de um programa de privacidade"
              className="border-y border-neutral-200"
            >
              {content.narrative.sixFronts.items.map((item) => (
                <li
                  key={item.title}
                  className="grid gap-6 border-b border-neutral-200 py-8 last:border-b-0 sm:py-10 lg:grid-cols-[7rem_1fr_1fr] lg:gap-10"
                >
                  <div>
                    <span
                      data-front-index={item.label}
                      className="inline-flex h-12 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm"
                    >
                      <span className="flex h-full min-w-12 items-center justify-center bg-brand-400 px-3 text-xs font-black tracking-[0.08em] text-neutral-950">
                        {item.label}
                      </span>
                      <span className="flex h-full w-12 items-center justify-center text-neutral-950">
                        <SectorIcon name={item.icon} className="h-5 w-5" />
                      </span>
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-neutral-950">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base font-medium leading-relaxed text-neutral-500">
                      {item.description}
                    </p>
                  </div>
                  <div className="border-l-2 border-brand-400 pl-5 lg:pl-7">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-neutral-500">
                      Como a TOGETHER ajuda
                    </p>
                    <p className="mt-3 text-base font-semibold leading-relaxed text-neutral-800">
                      {item.togetherHelp}
                    </p>
                  </div>
                </li>
              ))}
            </IndustryNarrativeList>
          </IndustryReveal>
        </IndustryNarrativeSection>
      </div>

      <div data-chapter="together-approach">
        <IndustryNarrativeSection
          chapter={content.narrative.togetherApproach}
          anchorIds={anchors("together-approach")}
          layoutFamily="editorial-rail"
          tone="paper"
        >
          <IndustryReveal className="mt-14">
            <IndustryNarrativeList className="divide-y divide-neutral-200 border-y border-neutral-200">
              {content.narrative.togetherApproach.items.map((item) => (
                <li
                  key={item.title}
                  className="grid gap-4 py-6 sm:grid-cols-[5rem_1fr_1.4fr] sm:items-start"
                >
                  <span className="text-sm font-black text-brand-500">
                    {item.label}
                  </span>
                  <h3 className="text-xl font-bold text-neutral-950">
                    {item.title}
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-neutral-500">
                    {item.description}
                  </p>
                </li>
              ))}
            </IndustryNarrativeList>
          </IndustryReveal>
          <IndustryReveal className="mt-10">
            <div className="grid gap-6 rounded-[2rem] bg-neutral-950 p-6 text-white shadow-[0_24px_60px_rgba(0,0,0,0.14)] sm:p-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-10">
              <div className="max-w-2xl">
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
                className="sm:w-auto"
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
        >
          <IndustryReveal className="mt-14">
            <IndustryNarrativeList
              as="ul"
              ariaLabel="Resultados de um programa de privacidade estruturado"
              className="grid overflow-hidden rounded-[2rem] border border-white/15 sm:grid-cols-2"
            >
              {content.narrative.outcomes.items.map((item) => (
                <li
                  key={item.title}
                  className="border-b border-white/15 p-7 sm:odd:border-r sm:p-9"
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
