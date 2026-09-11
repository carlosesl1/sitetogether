import { SaasCapacitySection } from "@/components/industry/saas/saas-capacity-section";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Box,
  ChevronsRight,
  Cloud,
  Code2,
  FileText,
  Settings,
  Truck,
  UserRound,
  UsersRound,
} from "lucide-react";
import type { ReactNode } from "react";
import { getIndustryAnchorIds } from "@/components/industry/industry-anchor-targets";
import { SaasContactLink } from "@/components/industry/saas/saas-contact-link";
import type { IndustrySectionKey } from "@/components/industry/saas/saas-page-types";
import { SaasReveal } from "@/components/industry/saas/saas-reveal";
import { IndustrySectionFrame } from "@/components/industry/industry-section-frame";
import { SaasSectionHeading } from "@/components/industry/saas/saas-section-heading";
import type {
  SaasIndustryContent,
  SaasSection,
} from "@/components/industry/saas/saas-content-types";
import { SaasClientProof } from "@/components/industry/saas/saas-client-proof";
import { SectorIcon } from "@/components/industry/sector/sector-icon";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";

type SectionTone = "paper" | "white" | "field" | "dark";

const dataPathIcons = [
  UserRound,
  Box,
  Code2,
  Cloud,
  UsersRound,
  BarChart3,
  Truck,
] as const;

const dataPathColumns = [
  "", "", "", "",
  "lg:col-start-2",
  "lg:col-start-4",
  "lg:col-start-6",
] as const;

const collaborationIcons = [FileText, Box, Settings, UserRound] as const;

function Section({
  chapter,
  sectionKey,
  anchors,
  tone = "white",
  inverse = false,
  headingLayout = "stacked",
  compact = false,
  children,
}: {
  readonly chapter: SaasSection;
  readonly sectionKey: IndustrySectionKey;
  readonly anchors: (key: IndustrySectionKey) => readonly string[];
  readonly tone?: SectionTone;
  readonly inverse?: boolean;
  readonly headingLayout?: "stacked" | "centered" | "split";
  readonly compact?: boolean;
  readonly children: ReactNode;
}) {
  const layoutFamily =
    sectionKey === "evolution" || sectionKey === "method"
      ? "release-cycle"
      : sectionKey === "cross-functional"
        ? "decision-chapter"
        : sectionKey === "real-situations"
          ? "editorial-rail"
          : "operational-field";

  return (
    <IndustrySectionFrame
      id={chapter.id}
      anchorIds={anchors(sectionKey)}
      layoutFamily={layoutFamily}
      tone={tone}
      className={compact ? "py-16 sm:py-20 lg:py-20" : undefined}
    >
      <div className={`container relative z-10 mx-auto px-6 ${headingLayout === "split" ? "grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16" : ""}`}>
        <SaasSectionHeading
          pill={chapter.pill}
          title={chapter.title}
          accent={chapter.accent}
          description={chapter.description}
          inverse={inverse}
          className={[
            headingLayout === "centered" ? "mx-auto text-center [&>p]:mx-auto" : "",
            compact ? "[&>h2]:mt-6 [&>h2]:text-4xl sm:[&>h2]:text-5xl [&>p]:mt-5 [&>p]:max-w-3xl" : "",
          ].join(" ")}
        />
        {children}
      </div>
    </IndustrySectionFrame>
  );
}
export function SaasNarrative({
  content,
}: {
  readonly content: SaasIndustryContent;
}) {
  const allowedAnchors = content.campaignAnchors.map(({ id }) => id);
  const anchors = (key: IndustrySectionKey) =>
    getIndustryAnchorIds(content.campaignAnchors, key);

  return (
    <>
      <div data-chapter="growth-complexity">
        <Section
          chapter={content.narrative.growth}
          sectionKey="growth-complexity"
          anchors={anchors}
          tone="paper"
        >
          <SaasReveal className="mt-12">
            <div className="relative">
              <ol
                className="relative grid gap-y-10 lg:grid-cols-8 lg:gap-x-12 lg:gap-y-20"
                aria-label="Caminho dos dados no SaaS"
              >
                {content.narrative.growth.path.map((item, index) => {
                  const Icon = dataPathIcons[index];
                  return (
                    <li
                      key={item}
                      className={`relative flex min-h-36 flex-col items-center justify-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-5 lg:col-span-2 lg:h-36 ${dataPathColumns[index]}`}
                    >
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-400 text-neutral-950">
                        <Icon className="h-7 w-7" aria-hidden="true" />
                      </span>
                      <span className="text-center text-sm font-black tracking-[0.12em] text-neutral-950">
                        {item}
                      </span>
                      {index < content.narrative.growth.path.length - 1 ? (
                        <>
                          <ArrowDown
                            className="absolute -bottom-8 h-6 w-6 text-brand-500 lg:hidden"
                            aria-hidden="true"
                          />
                          <ArrowRight
                            className={`absolute -right-9 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-brand-500 ${index === 3 ? "" : "lg:block"}`}
                            aria-hidden="true"
                          />
                        </>
                      ) : null}
                    </li>
                  );
                })}
              </ol>
              <div className="pointer-events-none absolute left-[calc(25%_-_0.75rem)] right-[calc(12.5%_-_1.125rem)] top-36 hidden h-20 text-brand-500 lg:block" aria-hidden="true">
                <svg className="h-full w-full overflow-visible" viewBox="0 0 1000 80" preserveAspectRatio="none">
                  <path d="M1000 0V24Q1000 40 984 40H16Q0 40 0 56V70" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                </svg>
                <ArrowDown className="absolute -bottom-0.5 left-0 h-5 w-5 -translate-x-1/2" />
              </div>
            </div>
            <p className="mx-auto mt-12 max-w-5xl text-center text-xl font-bold leading-relaxed text-neutral-900 sm:text-2xl">
              {content.narrative.growth.question}
            </p>
          </SaasReveal>
        </Section>
      </div>

      <div data-chapter="policy-decisions">
        <Section
          chapter={content.narrative.decisions}
          sectionKey="policy-decisions"
          anchors={anchors}
          tone="field"
          headingLayout="centered"
        >
          <SaasReveal className="mt-12 text-center">
            <div className="relative mx-auto max-w-6xl">
              <svg className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block" viewBox="0 0 1000 600" preserveAspectRatio="none" aria-hidden="true">
                <path d="M500 135V300M250 300H750M500 300L300 500M500 300L700 500" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-500/35" vectorEffect="non-scaling-stroke" />
              </svg>
              <div className="absolute left-1/2 top-1/2 hidden h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-brand-500/25 bg-brand-400 text-neutral-950 ring-[18px] ring-brand-400/10 lg:flex" aria-hidden="true">
                <SectorIcon name="users" className="h-12 w-12" />
              </div>
              <ul className="relative grid gap-5 text-left md:grid-cols-2 lg:auto-rows-fr lg:grid-cols-12 lg:gap-8">
                {content.narrative.decisions.items.map((item, index) => {
                  const position = [
                    "lg:col-start-5 lg:row-start-1",
                    "lg:col-start-1 lg:row-start-2",
                    "lg:col-start-9 lg:row-start-2",
                    "lg:col-start-2 lg:row-start-3",
                    "md:col-span-2 lg:col-start-8 lg:row-start-3",
                  ][index];
                  return (
                    <li
                      key={item.title}
                      className={`relative rounded-3xl border border-white/10 bg-neutral-950 p-6 text-white shadow-[0_8px_24px_rgba(0,0,0,0.05)] lg:col-span-4 lg:min-h-44 ${position}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-brand-400">
                          <SectorIcon name={item.icon} className="h-6 w-6" />
                        </span>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                      </div>
                      <p
                        className="mt-4 text-base font-medium leading-relaxed text-neutral-300"
                      >
                        {item.description}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
            <SaasContactLink
              sector={content.sector}
              position="map"
              allowedAnchors={allowedAnchors}
              size="lg"
              fullWidth
              className="mt-9 sm:w-auto"
            >
              {content.narrative.decisions.cta}
            </SaasContactLink>
          </SaasReveal>
        </Section>
      </div>

      <div data-chapter="privacy-by-design">
        <Section
          chapter={content.narrative.privacyByDesign}
          sectionKey="privacy-by-design"
          anchors={anchors}
          tone="dark"
          inverse
          compact
        >
          <PixelDecor placement="right" mask="right" opacity={0.08} />
          <SaasReveal className="relative mt-8 grid gap-5 md:grid-cols-2 lg:gap-6">
            <div className="rounded-3xl border border-brand-400/35 bg-[linear-gradient(135deg,rgba(255,214,0,0.10),transparent_65%)] p-6 lg:p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-400/30 bg-brand-400/10 text-brand-400">
                <UsersRound className="h-7 w-7" aria-hidden="true" />
              </span>
              <p className="mt-5 text-xl font-light italic leading-snug text-brand-400 sm:text-2xl">
                {content.narrative.privacyByDesign.question}
              </p>
            </div>
            <div className="rounded-3xl border border-white/20 bg-white/[0.02] p-6 lg:p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/[0.04] text-white">
                <FileText className="h-7 w-7" aria-hidden="true" />
              </span>
              <p className="mt-5 text-xl font-bold leading-snug text-white sm:text-2xl">
                {content.narrative.privacyByDesign.closing}
              </p>
            </div>
          </SaasReveal>
        </Section>
      </div>

      <div data-chapter="evolution">
        <Section
          chapter={content.narrative.evolution}
          sectionKey="evolution"
          anchors={anchors}
          tone="paper"
          headingLayout="split"
        >
          <SaasReveal>
            <ol className="grid gap-5">
              {content.narrative.evolution.stages.map((stage, index) => (
                <li
                  key={stage}
                  className="flex items-start gap-5 rounded-[2rem] bg-neutral-50 p-6 sm:min-h-44 sm:items-center sm:gap-6 sm:p-8"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-100 text-2xl font-bold text-brand-500 sm:h-20 sm:w-20 sm:text-3xl">
                    0{index + 1}
                  </span>
                  <ArrowRight
                    className="hidden h-8 w-8 shrink-0 text-brand-500 sm:block"
                    aria-hidden="true"
                  />
                  <h3 className="min-w-0 text-xl font-bold leading-snug text-neutral-950 sm:border-l sm:border-neutral-200 sm:py-2 sm:pl-6 sm:text-2xl xl:text-3xl">
                    {stage}
                  </h3>
                </li>
              ))}
            </ol>
          </SaasReveal>
        </Section>
      </div>

      <div data-chapter="method">
        <Section
          chapter={content.narrative.method}
          sectionKey="method"
          anchors={anchors}
          tone="white"
        >
          <SaasReveal className="mt-12 text-center">
            <ol className="grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-4">
              {content.narrative.method.items.map((item, index) => (
                <li
                  key={item.title}
                  className={`relative min-w-0 overflow-hidden rounded-3xl border border-neutral-200 ${index === 0 ? "bg-[#fffdf8] p-7 sm:col-span-2 lg:row-span-2 lg:p-10" : "bg-white p-6 lg:p-7"}`}
                >
                  {index === 0 ? <PixelDecor placement="bottomRight" mask="bottomRight" squareSize={30} gridGap={8} opacity={0.16} /> : null}
                  <div className="relative flex items-center justify-between gap-5">
                    <span className={`font-bold tabular-nums text-brand-500 ${index === 0 ? "text-4xl" : "text-lg"}`}>
                      {item.label}
                    </span>
                    <span className={`flex shrink-0 items-center justify-center rounded-2xl text-neutral-950 ${index === 0 ? "h-16 w-16 bg-brand-400/15" : "h-11 w-11 bg-neutral-50"}`}>
                      <SectorIcon name={item.icon} className={index === 0 ? "h-9 w-9" : "h-6 w-6"} />
                    </span>
                  </div>
                  <h3 className={`relative mt-6 font-bold leading-tight text-neutral-950 ${index === 0 ? "max-w-sm text-3xl lg:mt-12 lg:text-4xl" : "text-xl"}`}>
                    {item.title}
                  </h3>
                  <p className={`relative mt-3 font-medium leading-relaxed text-neutral-500 ${index === 0 ? "max-w-sm text-lg lg:mt-6 lg:text-xl" : "text-base"}`}>
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
            <SaasContactLink
              sector={content.sector}
              position="proof"
              allowedAnchors={allowedAnchors}
              size="lg"
              fullWidth
              className="mt-9 sm:w-auto"
            >
              {content.narrative.method.cta}
            </SaasContactLink>
          </SaasReveal>
        </Section>
      </div>

      <div data-chapter="real-situations">
        <Section
          chapter={content.narrative.situations}
          sectionKey="real-situations"
          anchors={anchors}
          tone="field"
        >
          <SaasReveal className="mt-12">
            <ol className="grid gap-y-5 md:grid-cols-2">
              {content.narrative.situations.items.map((item, index) => (
                <li
                  key={item}
                  className={`relative grid grid-cols-[3.5rem_1fr] items-center gap-5 rounded-2xl bg-[#fffdf8] p-6 sm:grid-cols-[5rem_1fr] sm:p-8 md:rounded-none ${index % 2 === 0 ? "md:rounded-l-2xl" : "md:rounded-r-2xl md:before:absolute md:before:inset-y-7 md:before:left-0 md:before:border-l md:before:border-neutral-200"}`}
                >
                  <span className="border-r border-neutral-200 pr-4 text-4xl font-light italic text-brand-500 sm:text-5xl">
                    0{index + 1}
                  </span>
                  <p className="text-lg font-bold leading-relaxed text-neutral-900 sm:text-xl">
                    {item}
                  </p>
                </li>
              ))}
            </ol>
            <aside className="relative mt-7 flex flex-col gap-6 overflow-hidden rounded-[2rem] bg-neutral-950 p-8 text-white sm:flex-row sm:items-start sm:p-10">
              <SectorIcon
                name="message"
                className="h-8 w-8 shrink-0 text-brand-400"
              />
              <p className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
                {content.narrative.situations.question}
              </p>
            </aside>
          </SaasReveal>
        </Section>
      </div>

      <div data-chapter="capabilities">
        <Section
          chapter={content.narrative.capabilities}
          sectionKey="capabilities"
          anchors={anchors}
          tone="paper"
        >
          <SaasReveal className="mt-12">
            <ul className="relative grid gap-y-10 md:grid-flow-col md:grid-cols-2 md:grid-rows-4 md:gap-x-20 md:before:absolute md:before:inset-y-0 md:before:left-1/2 md:before:border-l md:before:border-neutral-200">
              {content.narrative.capabilities.items.map((item, index) => {
                const featured = index === 1 || index === 5;
                return (
                  <li
                    key={item.title}
                    className="flex min-w-0 items-start gap-5 text-neutral-950"
                  >
                    <span
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${featured
                        ? "bg-brand-400 text-neutral-950"
                        : "bg-neutral-100 text-neutral-950"
                        }`}
                    >
                      <SectorIcon name={item.icon} className="h-7 w-7" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-xl font-bold sm:text-2xl">{item.title}</h3>
                      <p
                        className="mt-3 text-base font-medium leading-relaxed text-neutral-500"
                      >
                        {item.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </SaasReveal>
        </Section>
      </div>

      <div data-chapter="cross-functional">
        <Section
          chapter={content.narrative.crossFunctional}
          sectionKey="cross-functional"
          anchors={anchors}
          tone="dark"
          inverse
        >
          <PixelDecor
            placement="bottomLeft"
            mask="bottomLeft"
            opacity={0.08}
          />
          <SaasReveal className="mt-12">
            <ol className="grid gap-12 md:grid-cols-4">
              {content.narrative.crossFunctional.areas.map((area, index) => {
                const Icon = collaborationIcons[index];
                return (
                  <li key={area} className="relative flex min-h-44 flex-col items-center justify-center gap-5 rounded-2xl border border-white/15 px-6 py-8">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-400 text-neutral-950">
                      <Icon className="h-8 w-8" aria-hidden="true" />
                    </span>
                    <span className="text-center text-sm font-black tracking-[0.16em] text-white">
                      {area}
                    </span>
                    {index <
                      content.narrative.crossFunctional.areas.length - 1 ? (
                      <>
                        <ArrowDown
                          className="absolute -bottom-9 h-6 w-6 text-brand-400 md:hidden"
                          aria-hidden="true"
                        />
                        <ChevronsRight className="absolute -right-10 top-1/2 hidden h-8 w-8 -translate-y-1/2 text-brand-400 md:block" aria-hidden="true" />
                      </>
                    ) : null}
                  </li>
                );
              })}
            </ol>
            <p className="mt-12 max-w-5xl text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-5xl">
              {content.narrative.crossFunctional.closing}
            </p>
          </SaasReveal>
        </Section>
      </div>

      <div data-chapter="social-proof">
        <Section
          chapter={content.narrative.socialProof}
          sectionKey="social-proof"
          anchors={anchors}
          tone="field"
        >
          <SaasReveal className="mt-12">
            <SaasClientProof
              clients={content.narrative.socialProof.clients}
              variant="open"
            />
          </SaasReveal>
        </Section>
      </div>

      <div data-chapter="capacity" id="capacidade-comprovada"><SaasCapacitySection /></div>
      <div data-chapter="saas-stage">
        <Section
          chapter={content.narrative.stage}
          sectionKey="saas-stage"
          anchors={anchors}
          tone="white"
        >
          <SaasReveal className="mt-12">
            <ul className="grid gap-10 lg:grid-cols-3 lg:gap-0">
              {content.narrative.stage.items.map((item, index) => (
                <li
                  key={item.title}
                  className={`min-w-0 ${index > 0 ? "lg:border-l lg:border-neutral-200 lg:pl-10" : ""} ${index < 2 ? "lg:pr-10" : ""}`}
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-400 text-neutral-950">
                    <SectorIcon name={item.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 text-2xl font-bold text-neutral-950 sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base font-medium leading-relaxed text-neutral-500">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-9 flex justify-center">
              <SaasContactLink
                sector={content.sector}
                position="proof"
                allowedAnchors={allowedAnchors}
                size="lg"
                fullWidth
                className="sm:w-auto"
              >
                {content.narrative.stage.cta}
              </SaasContactLink>
            </div>
          </SaasReveal>
        </Section>
      </div>
    </>
  );
}
