import { getIndustryAnchorIds } from "@/roads-release/components/industry/industry-anchor-targets";
import { IndustryNarrativeDiagnostic, IndustryNarrativeList, IndustryNarrativeSection } from "@/roads-release/components/industry/industry-narrative-primitives";
import { IndustryReveal } from "@/roads-release/components/industry/industry-reveal";
import { IndustrySectionFrame } from "@/roads-release/components/industry/industry-section-frame";
import { IndustrySectionHeading } from "@/roads-release/components/industry/industry-section-heading";
import type { RoadsNarrativeIndustryContent } from "@/roads-release/components/industry/narratives/industry-narrative-types";
import { SectorIcon } from "@/roads-release/components/industry/sector/sector-icon";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";
import { IndustryCapacitySection } from "@/roads-release/components/industry/industry-capacity-section";
import { IndustryContactLink } from "@/roads-release/components/industry/industry-contact-link";


export function RoadsNarrative({ content }: { readonly content: RoadsNarrativeIndustryContent }) {
  const allowedAnchors = content.campaignAnchors.map(({ id }) => id);
  const anchors = (key: Parameters<typeof getIndustryAnchorIds>[1]) => getIndustryAnchorIds(content.campaignAnchors, key);
  return <>
    <div data-chapter="data-route">
      <IndustrySectionFrame
        id={content.narrative.dataRoute.id}
        anchorIds={anchors("data-route")}
        layoutFamily="passage-lifecycle"
        tone="paper"
      >
        <div className="container relative z-10 mx-auto grid gap-10 px-6 sm:gap-12 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.6fr)] xl:items-start xl:gap-20">
          <IndustryReveal>
            <IndustrySectionHeading
              pill={content.narrative.dataRoute.pill}
              title={content.narrative.dataRoute.title}
              accent={content.narrative.dataRoute.accent}
              description={content.narrative.dataRoute.description}
              className="max-w-2xl xl:[&_h2>span]:block xl:[&>p]:max-w-md"
            />
            <IndustryContactLink sector={content.sector} position="map" allowedAnchors={allowedAnchors} size="lg" fullWidth className="mt-8 whitespace-normal text-center sm:w-auto">
              Avaliar a privacidade na minha operação
            </IndustryContactLink>
          </IndustryReveal>
          <IndustryReveal className="min-w-0 xl:pt-5">
            <p className="text-xs font-bold uppercase tracking-wide text-neutral-900">Frentes</p>
            <IndustryNarrativeList
              className="mt-2 divide-y divide-neutral-200"
              ariaLabel="Frentes de uso de dados na operação rodoviária"
            >
              {content.narrative.dataRoute.items.map((item) => (
                <li key={item.title} className="grid grid-cols-[2.5rem_minmax(0,1fr)] items-start gap-4 py-6 sm:gap-7">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-400 text-base font-bold text-neutral-950">
                    {item.label}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold sm:text-2xl">{item.title}</h3>
                    <p className="mt-1 text-sm font-medium leading-relaxed text-neutral-500 sm:text-base">{item.description}</p>
                  </div>
                </li>
              ))}
            </IndustryNarrativeList>
          </IndustryReveal>
        </div>
      </IndustrySectionFrame>
    </div>
    <div data-chapter="free-flow-decisions">
      <IndustryNarrativeSection chapter={content.narrative.freeFlowDecisions} anchorIds={anchors("free-flow-decisions")} layoutFamily="operational-field" tone="dark" inverse>
        <PixelDecor placement="right" mask="right" opacity={0.08}/><IndustryReveal className="mt-14"><div className="grid overflow-hidden rounded-[2rem] border border-white/15 md:grid-cols-[1.15fr_0.85fr]"><div className="grid gap-px bg-white/15 sm:grid-cols-2">{content.narrative.freeFlowDecisions.items.slice(0,4).map(item=><article key={item.title} className="bg-neutral-950 p-7"><SectorIcon name={item.icon} className="h-6 w-6 text-brand-400"/><p className="mt-7 text-xs font-bold uppercase tracking-[0.14em] text-brand-400">{item.label}</p><h3 className="mt-2 text-xl font-bold">{item.title}</h3><p className="mt-3 text-sm text-neutral-400">{item.description}</p></article>)}</div><aside className="flex flex-col justify-center bg-brand-400 p-8 text-neutral-950"><SectorIcon name={content.narrative.freeFlowDecisions.items[4].icon} className="h-9 w-9"/><p className="mt-8 text-xs font-bold uppercase tracking-[0.14em]">{content.narrative.freeFlowDecisions.items[4].label}</p><h3 className="mt-3 text-3xl font-bold">{content.narrative.freeFlowDecisions.items[4].title}</h3><p className="mt-4 text-sm font-medium leading-relaxed">{content.narrative.freeFlowDecisions.items[4].description}</p></aside></div></IndustryReveal>
      </IndustryNarrativeSection>
    </div>
    <div data-chapter="dispute">
      <IndustrySectionFrame
        id={content.narrative.dispute.id}
        anchorIds={anchors("dispute")}
        layoutFamily="editorial-rail"
        tone="field"
      >
        <div className="container relative z-10 mx-auto px-6">
          <IndustryReveal className="grid gap-7 xl:grid-cols-[minmax(0,1.8fr)_minmax(0,1fr)] xl:items-end xl:gap-16">
            <IndustrySectionHeading
              pill={content.narrative.dispute.pill}
              title={content.narrative.dispute.title}
              accent={content.narrative.dispute.accent}
            />
            <p className="max-w-2xl text-base font-medium leading-relaxed text-neutral-500 md:text-lg">
              {content.narrative.dispute.description}
            </p>
          </IndustryReveal>
          <IndustryReveal className="mt-12 sm:mt-14">
            <blockquote className="flex flex-col gap-6 rounded-[2rem] bg-brand-400 p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
              <div className="flex items-start gap-4 sm:gap-6">
                <span aria-hidden="true" className="text-5xl font-light italic leading-none">“</span>
                <p className="text-2xl font-bold leading-tight sm:text-3xl">{content.narrative.dispute.items[0].title}</p>
              </div>
              <footer className="shrink-0 text-xs font-bold uppercase tracking-[0.14em]">Situação ilustrativa</footer>
            </blockquote>
          </IndustryReveal>
          <IndustryReveal className="relative mt-12 sm:mt-16">
            <span aria-hidden="true" className="absolute inset-x-0 top-5 hidden h-px bg-neutral-300 lg:block" />
            <IndustryNarrativeList
              className="relative grid gap-8 lg:grid-cols-4 lg:gap-10"
              ariaLabel="Etapas de apuração e resposta à cobrança contestada"
            >
              {content.narrative.dispute.items.slice(1).map((item, index) => (
                <li key={item.title} className="grid grid-cols-[2.5rem_minmax(0,1fr)] items-start gap-4 lg:block">
                  <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-brand-400 text-base font-bold text-neutral-950 lg:mx-auto">
                    0{index + 1}
                  </span>
                  <div className="lg:mt-9">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="mt-3 text-sm font-medium leading-relaxed text-neutral-500 sm:text-base">{item.description}</p>
                  </div>
                </li>
              ))}
            </IndustryNarrativeList>
          </IndustryReveal>
        </div>
      </IndustrySectionFrame>
    </div>
    <div data-chapter="road-responsibilities">
      <IndustryNarrativeSection
        chapter={content.narrative.roadResponsibilities}
        anchorIds={anchors("road-responsibilities")}
        layoutFamily="passage-lifecycle"
        headingClassName="max-w-none [&_h2>span]:block [&>p]:max-w-none"
      >
        <IndustryReveal className="mt-12 sm:mt-14">
          <table role="table" className="block w-full border-collapse text-left md:table">
            <thead role="rowgroup" className="sr-only md:not-sr-only md:table-header-group">
              <tr role="row" className="border-b border-neutral-200 text-xs font-bold uppercase tracking-[0.14em] text-neutral-500">
                <th scope="col" className="py-4 pr-10 md:w-[36%]">Participante / Atuação</th>
                <th scope="col" className="py-4">O que alinhar</th>
              </tr>
            </thead>
            <tbody role="rowgroup" className="block md:table-row-group">
              {content.narrative.roadResponsibilities.items.map((item) => (
                <tr role="row" key={item.title} className="grid gap-3 border-b border-neutral-200 py-6 last:border-b-0 md:table-row md:py-0">
                  <th role="rowheader" scope="row" className="text-left align-middle md:py-7 md:pr-10">
                    <span className="block text-sm font-medium text-brand-500 sm:text-base">{item.label}</span>
                    <span className="mt-1 block text-xl font-bold text-neutral-950 sm:text-2xl">{item.title}</span>
                  </th>
                  <td role="cell" className="align-middle text-sm font-medium leading-relaxed text-neutral-500 sm:text-base md:py-7">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] md:hidden">O que alinhar</span>
                    {item.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <IndustryContactLink sector={content.sector} position="map" allowedAnchors={allowedAnchors} size="lg" fullWidth className="mt-8 whitespace-normal text-center sm:w-auto">
            Conversar sobre equipes e fornecedores
          </IndustryContactLink>
        </IndustryReveal>
      </IndustryNarrativeSection>
    </div>
    <div data-chapter="road-incidents">
      <IndustryNarrativeSection chapter={content.narrative.roadIncidents} anchorIds={anchors("road-incidents")} layoutFamily="decision-chapter" tone="dark" inverse>
        <IndustryReveal className="mt-14"><IndustryNarrativeList className="grid overflow-hidden rounded-[2rem] border border-white/15 xl:grid-cols-5">{content.narrative.roadIncidents.items.map(item=><li key={item.title} className="border-b border-white/15 p-6 last:border-0 xl:border-b-0 xl:border-r xl:last:border-r-0"><span className="text-sm font-black text-brand-400">{item.label}</span><h3 className="mt-8 text-xl font-bold">{item.title}</h3><p className="mt-3 text-sm font-medium leading-relaxed text-neutral-400">{item.description}</p></li>)}</IndustryNarrativeList></IndustryReveal>
      </IndustryNarrativeSection>
    </div>
    <div data-chapter="integrations">
      <IndustrySectionFrame
        id={content.narrative.integrations.id}
        anchorIds={anchors("integrations")}
        layoutFamily="passage-lifecycle"
        tone="paper"
      >
        <div className="container relative z-10 mx-auto grid gap-12 px-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] xl:items-start xl:gap-20">
          <IndustryReveal>
            <IndustrySectionHeading
              pill={content.narrative.integrations.pill}
              title={content.narrative.integrations.title}
              accent={content.narrative.integrations.accent}
              description={content.narrative.integrations.description}
              className="max-w-2xl xl:[&_h2>span]:block"
            />
          </IndustryReveal>
          <IndustryReveal className="grid min-w-0 gap-x-12 gap-y-9 sm:grid-cols-2 xl:gap-x-16 xl:gap-y-12 xl:pt-5">
            {content.narrative.integrations.items.map((item, index) => (
              <article
                key={item.title}
                className={`${index > 0 ? "border-t border-neutral-200 pt-9" : ""} ${index === 1 ? "sm:border-t-0 sm:pt-0" : ""} ${index > 1 ? "xl:pt-12" : ""}`}
              >
                <SectorIcon name={item.icon} className="h-8 w-8 text-brand-500" />
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-neutral-400">{item.label}</p>
                <h3 className="mt-2 text-2xl font-bold">{item.title}</h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-neutral-500 sm:text-base">{item.description}</p>
              </article>
            ))}
          </IndustryReveal>
        </div>
      </IndustrySectionFrame>
    </div>
    <div data-chapter="together-roads">
      <IndustryNarrativeSection chapter={content.narrative.togetherRoads} anchorIds={anchors("together-roads")} layoutFamily="evidence-dossier" tone="field">
        <IndustryReveal className="mt-12 sm:mt-14">
          <IndustryNarrativeList className="grid gap-y-9 sm:grid-cols-2 xl:grid-cols-4">
            {content.narrative.togetherRoads.items.map((item, index) => (
              <li key={item.title} className={`min-w-0 sm:px-6 xl:px-7 ${index % 2 === 1 ? "sm:border-l sm:border-neutral-200" : ""} ${index === 2 ? "xl:border-l xl:border-neutral-200" : ""} ${index === 0 ? "sm:pl-0" : ""} ${index === 2 ? "sm:pl-0 xl:pl-7" : ""} ${index === 3 ? "sm:pr-0" : ""}`}>
                <div className="h-full border-t-[3px] border-brand-400 pt-5">
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-500">{item.label}</span>
                  <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
                  <p className="mt-5 text-sm font-medium leading-relaxed text-neutral-500 sm:text-base">{item.description}</p>
                </div>
              </li>
            ))}
          </IndustryNarrativeList>
          <aside className="mt-10 grid gap-6 rounded-[2rem] bg-neutral-950 p-7 text-white sm:mt-12 sm:p-10 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-400">Nossa metodologia</p>
              <h3 className="mt-4 text-3xl font-bold">Privacidade aplicada à operação.</h3>
            </div>
            <p className="text-base font-bold leading-relaxed text-brand-400">{content.narrative.togetherRoads.note}</p>
          </aside>
          <IndustryContactLink sector={content.sector} position="proof" allowedAnchors={allowedAnchors} size="lg" fullWidth className="mt-8 whitespace-normal text-center sm:w-auto">
            Definir o apoio para minha equipe
          </IndustryContactLink>
        </IndustryReveal>
      </IndustryNarrativeSection>
    </div>
    <div data-chapter="capacity" id="capacidade-comprovada"><IndustryCapacitySection /></div>
    <div data-chapter="diagnostic"><IndustryNarrativeDiagnostic sector={content.sector} content={content.narrative.diagnostic} allowedAnchors={allowedAnchors} anchorIds={anchors("diagnostic")} layout="horizontal" /></div>
  </>;
}

