import { Check } from "lucide-react";
import {
  PrivateSchoolsNarrativeList,
  PrivateSchoolsNarrativeSection,
  PrivateSchoolsSectionFrame,
} from "@/components/industry/private-schools/private-schools-section-primitives";
import type { PrivateSchoolsIndustryContent } from "@/components/industry/private-schools/private-schools-types";
import { IndustryReveal } from "@/components/industry/industry-reveal";
import { SectorIcon } from "@/components/industry/sector/sector-icon";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";
import { ActionLink, SectionPill } from "@/components/ui/site-primitives";

export function PrivateSchoolsNarrative({
  content,
}: {
  readonly content: PrivateSchoolsIndustryContent;
}) {
  const {
    problem,
    tension,
    integration,
    solutions,
    selfAssessment,
    process,
    positioning,
  } = content.narrative;

  return (
    <>
      <div data-chapter="problem">
        <PrivateSchoolsNarrativeSection
          chapter={problem}
          layoutFamily="school-day"
          tone="paper"
        >
          <IndustryReveal className="mt-14">
            <PrivateSchoolsNarrativeList
              as="ul"
              ariaLabel="Pontos da rotina escolar em que dados pessoais circulam"
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {problem.items.map((item) => (
                <li
                  key={item.title}
                  className="group min-h-64 rounded-[2rem] border border-neutral-200 bg-white p-7 shadow-[0_20px_50px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:border-brand-400 sm:p-8"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-400 text-neutral-950">
                      <SectorIcon name={item.icon} className="h-5 w-5" />
                    </span>
                    <span className="text-xs font-black tracking-[0.16em] text-neutral-300">
                      {item.label}
                    </span>
                  </div>
                  <h3 className="mt-9 text-2xl font-bold tracking-tight text-neutral-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base font-medium leading-relaxed text-neutral-500">
                    {item.description}
                  </p>
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
          tone="field"
        >
          <IndustryReveal className="relative mt-14">
            <div className="pointer-events-none absolute left-[18%] right-[18%] top-[6.75rem] hidden border-t border-dashed border-neutral-300 lg:block" />
            <div className="pointer-events-none absolute bottom-[7rem] left-1/2 top-[6.75rem] hidden border-l border-dashed border-neutral-300 lg:block" />
            <div className="relative grid gap-5 lg:grid-cols-[1fr_0.72fr_1fr] lg:items-start lg:gap-8">
              {integration.items.slice(0, 2).map((item, index) => (
                <article
                  key={item.title}
                  className={`relative z-10 rounded-[2rem] border border-neutral-200 bg-white p-7 shadow-[0_20px_50px_rgba(15,23,42,0.06)] sm:p-9 ${index === 1 ? "lg:col-start-3" : ""}`}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-950 text-brand-400">
                    <SectorIcon name={item.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-7 text-2xl font-bold text-neutral-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-neutral-500 sm:text-base">
                    {item.description}
                  </p>
                </article>
              ))}

              <div className="relative z-20 flex min-h-52 flex-col items-center justify-center rounded-[2rem] bg-brand-400 p-8 text-center text-neutral-950 shadow-[0_24px_70px_rgba(245,192,0,0.24)] lg:col-start-2 lg:row-start-1">
                <span className="text-xs font-black uppercase tracking-[0.18em] text-neutral-700">
                  Tudo converge para a
                </span>
                <strong className="mt-4 text-4xl font-bold tracking-tight">
                  Escola
                </strong>
                <span className="mt-3 text-sm font-bold leading-relaxed text-neutral-700">
                  decisões claras para a rotina
                </span>
              </div>

              {integration.items.slice(2).map((item) => (
                <article
                  key={item.title}
                  className="relative z-10 rounded-[2rem] border border-neutral-200 bg-white p-7 shadow-[0_20px_50px_rgba(15,23,42,0.06)] sm:p-9 lg:col-start-2"
                >
                  <div className="flex items-start gap-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-neutral-950 text-brand-400">
                      <SectorIcon name={item.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-2xl font-bold text-neutral-950">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm font-medium leading-relaxed text-neutral-500 sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </IndustryReveal>
        </PrivateSchoolsNarrativeSection>
      </div>

      <div data-chapter="solutions">
        <PrivateSchoolsNarrativeSection
          chapter={solutions}
          layoutFamily="evidence-dossier"
          tone="white"
        >
          <IndustryReveal className="mt-14">
            <PrivateSchoolsNarrativeList
              as="ul"
              ariaLabel="Soluções de privacidade para escolas"
              className="grid gap-5 lg:grid-cols-3"
            >
              {solutions.items.map((item) => (
                <li
                  key={item.title}
                  className="flex min-h-[28rem] flex-col rounded-[2rem] border border-neutral-200 bg-[#fffdf8] p-7 sm:p-9"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-400 text-neutral-950">
                      <SectorIcon name={item.icon} className="h-6 w-6" />
                    </span>
                    <span className="text-[11px] font-black uppercase tracking-[0.15em] text-neutral-400">
                      {item.label}
                    </span>
                  </div>
                  <h3 className="mt-10 text-3xl font-bold leading-tight tracking-tight text-neutral-950">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-base font-medium leading-relaxed text-neutral-500">
                    {item.description}
                  </p>
                  <ActionLink
                    href="#contato-escolas"
                    variant="dark"
                    size="lg"
                    fullWidth
                    className="relative mt-auto [&>svg]:absolute [&>svg]:right-6 sm:[&>svg]:right-8"
                  >
                    Quero saber mais
                  </ActionLink>
                </li>
              ))}
            </PrivateSchoolsNarrativeList>
          </IndustryReveal>
        </PrivateSchoolsNarrativeSection>
      </div>

      <div data-chapter="self-assessment">
        <PrivateSchoolsNarrativeSection
          chapter={selfAssessment}
          layoutFamily="school-day"
          tone="paper"
        >
          <IndustryReveal className="mt-14 rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-[0_28px_70px_rgba(15,23,42,0.06)] sm:p-10 lg:p-12">
            <ul className="grid gap-x-12 sm:grid-cols-2" aria-label="Autodiagnóstico de privacidade da escola">
              {selfAssessment.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 border-b border-neutral-200 py-5 text-base font-bold leading-relaxed text-neutral-800"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-400 text-neutral-950">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-col items-start justify-between gap-7 border-t border-neutral-200 pt-8 lg:flex-row lg:items-center">
              <p className="max-w-2xl text-xl font-bold leading-relaxed text-neutral-950 sm:text-2xl">
                {selfAssessment.note}
              </p>
              <ActionLink
                href="#contato-escolas"
                variant="primary"
                size="xl"
                fullWidth
                className="lg:w-auto"
              >
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
          tone="white"
        >
          <IndustryReveal className="mt-14">
            <ol className="grid border-y border-neutral-200 lg:grid-cols-3">
              {process.items.map((item, index) => (
                <li
                  key={item.title}
                  className={`relative py-9 lg:min-h-72 lg:px-9 ${index > 0 ? "border-t border-neutral-200 lg:border-l lg:border-t-0" : ""}`}
                >
                  <span className="text-5xl font-light italic leading-none text-brand-500">
                    {item.label}.
                  </span>
                  <h3 className="mt-8 text-2xl font-bold text-neutral-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-sm text-base font-medium leading-relaxed text-neutral-500">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
            <div className="mt-10 flex justify-start lg:justify-center">
              <ActionLink
                href="#contato-escolas"
                variant="dark"
                size="xl"
                fullWidth
                className="sm:w-auto"
              >
                Quero conversar com um especialista
              </ActionLink>
            </div>
          </IndustryReveal>
        </PrivateSchoolsNarrativeSection>
      </div>

      <div data-chapter="positioning">
        <PrivateSchoolsSectionFrame
          id={positioning.id}
          layoutFamily="editorial-rail"
          tone="dark"
        >
          <PixelDecor placement="bottomLeft" mask="bottomLeft" opacity={0.08} />
          <div className="container relative z-10 mx-auto px-6">
            <IndustryReveal>
              <SectionPill tone="dark">{positioning.pill}</SectionPill>
              <h2 className="mt-8 max-w-5xl text-[2.6rem] font-bold leading-[0.98] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
                {positioning.title}{" "}
                <span className="pb-1 font-light italic leading-[1.1] text-brand-400">
                  {positioning.accent}
                </span>
              </h2>
              <div className="mt-12 grid gap-8 border-t border-white/15 pt-9 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
                <p className="max-w-3xl text-lg font-medium leading-relaxed text-neutral-300 sm:text-xl">
                  {positioning.body}
                </p>
                <p className="text-2xl font-bold leading-tight text-brand-400 sm:text-3xl">
                  {positioning.closing}
                </p>
              </div>
            </IndustryReveal>
          </div>
        </PrivateSchoolsSectionFrame>
      </div>
    </>
  );
}
