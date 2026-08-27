import {
  Blocks,
  CloudCog,
  FileCheck2,
  Network,
  ScanSearch,
  ShieldAlert,
  UserCheck,
  Workflow,
} from "lucide-react";
import type { RoadsIndustryContent } from "@/components/industry/industry-page-types";
import { IndustryContactLink } from "@/components/industry/industry-contact-link";
import { IndustrySectionHeading } from "@/components/industry/industry-section-heading";
import { IndustryTechnologyRail } from "@/components/industry/industry-technology-rail";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";
import { SectionPill } from "@/components/ui/site-primitives";
import { cn } from "@/lib/utils";

type CapabilityProps = {
  sector: string;
  allowedAnchors: readonly string[];
  content: RoadsIndustryContent["capabilities"];
};

type PrivacyByDesignProps = {
  content: RoadsIndustryContent["privacyByDesign"];
};

type OperationsProps = {
  content: RoadsIndustryContent["operations"];
  training: RoadsIndustryContent["training"];
};

type InternationalMethodProps = {
  international: RoadsIndustryContent["international"];
  method: RoadsIndustryContent["method"];
};

const capabilityIcons = [
  ScanSearch,
  Network,
  Blocks,
  FileCheck2,
  Workflow,
  CloudCog,
  UserCheck,
  ShieldAlert,
] as const;

const capabilitySpans = [
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-4",
  "lg:col-span-5",
  "lg:col-span-7",
  "lg:col-span-5",
] as const;

export function RoadsCapabilitiesSection({
  sector,
  allowedAnchors,
  content,
}: CapabilityProps) {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-36">
      <PixelDecor placement="topRight" mask="topRight" opacity={0.1} />
      <div className="container relative z-10 mx-auto px-6">
        <IndustrySectionHeading
          pill={content.pill}
          title={content.title}
          description={content.description}
        />

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
          {content.items.map((item, index) => {
            const Icon = capabilityIcons[index];
            return (
              <article
                key={item.title}
                className={cn(
                  "min-w-0 rounded-[28px] border p-6 sm:p-8",
                  capabilitySpans[index],
                  item.tone === "light" &&
                    "border-neutral-200 bg-neutral-50/60 text-neutral-900",
                  item.tone === "dark" &&
                    "border-neutral-900 bg-[#0a0a0a] text-white",
                  item.tone === "brand-compact" &&
                    "w-full max-w-[280px] justify-self-start border-brand-500 bg-brand-400 text-neutral-950 lg:max-w-none",
                )}
              >
                <span
                  className={cn(
                    "flex h-11 w-11 items-center justify-center rounded-[14px]",
                    item.tone === "dark"
                      ? "bg-brand-400 text-neutral-950"
                      : "bg-white text-neutral-900 shadow-sm",
                  )}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-8 break-words text-xl font-bold tracking-tight">
                  {item.title}
                </h3>
                <p
                  className={cn(
                    "mt-4 text-sm font-medium leading-relaxed",
                    item.tone === "dark" ? "text-neutral-400" : "text-neutral-600",
                  )}
                >
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-6 flex flex-col items-start gap-7 rounded-[28px] bg-neutral-950 p-7 text-white sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-white">
              {content.ctaTitle}
            </h3>
            <p className="mt-2 max-w-2xl text-sm font-medium leading-relaxed text-neutral-400">
              {content.ctaText}
            </p>
          </div>
          <IndustryContactLink
            sector={sector}
            position="capabilities"
            allowedAnchors={allowedAnchors}
            variant="light"
            size="md"
            fullWidth
            className="sm:w-auto"
          >
            {content.cta}
          </IndustryContactLink>
        </div>
      </div>
    </section>
  );
}

export function RoadsPrivacyByDesignSection({ content }: PrivacyByDesignProps) {
  return (
    <section
      id="privacy-by-design"
      className="relative overflow-hidden bg-neutral-50 py-24 md:py-36"
    >
      <div className="container mx-auto grid items-start gap-14 px-6 md:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <IndustrySectionHeading
          pill={content.pill}
          title={content.title}
          description={content.description}
          className="md:sticky md:top-28"
        />
        <div
          id="fornecedores"
          className="scroll-mt-28 overflow-hidden rounded-[32px] border border-neutral-200 bg-white"
        >
          {content.steps.map((step, index) => (
            <article
              key={step.title}
              className="grid gap-5 border-b border-neutral-100 p-6 last:border-b-0 sm:grid-cols-[84px_1fr] sm:p-8"
            >
              <span
                className={cn(
                  "flex h-14 w-14 items-center justify-center rounded-[18px] text-sm font-black",
                  index === 1
                    ? "bg-brand-400 text-neutral-950"
                    : "border border-neutral-200 bg-neutral-50 text-neutral-900",
                )}
              >
                {step.label.slice(0, 2).toUpperCase()}
              </span>
              <div>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-600">
                  {step.label}
                </span>
                <h3 className="mt-3 text-2xl font-bold tracking-tight text-neutral-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-neutral-500">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RoadsOperationsSection({ content, training }: OperationsProps) {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-24 text-white md:py-36">
      <PixelDecor placement="bottomLeft" mask="bottomLeft" opacity={0.14} />
      <div className="container relative z-10 mx-auto px-6">
        <IndustrySectionHeading
          pill={content.pill}
          title={content.title}
          description={content.description}
          inverse
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-[30px] border border-white/10 bg-white/10 md:grid-cols-2">
          {content.routines.map((routine, index) => (
            <article
              id={index === 0 ? "dpo" : index === 1 ? "incidentes" : undefined}
              key={routine.title}
              className="scroll-mt-28 bg-[#0a0a0a] p-7 sm:p-9"
            >
              <span className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.2em] text-brand-400">
                <span className="h-3 w-3 rounded-[3px] bg-brand-400" aria-hidden="true" />
                {routine.label}
              </span>
              <h3 className="mt-7 text-2xl font-bold tracking-tight text-white">
                {routine.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-neutral-400">
                {routine.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-10 border-t border-white/10 pt-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionPill tone="dark">{training.pill}</SectionPill>
            <h3 className="mt-7 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {training.title}
            </h3>
            <p className="mt-5 text-base font-medium leading-relaxed text-neutral-400">
              {training.description}
            </p>
          </div>
          <div className="flex flex-wrap content-start gap-3">
            {training.audiences.map((audience) => (
              <span
                key={audience}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-xs font-bold text-neutral-300"
              >
                {audience}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <IndustryTechnologyRail />
        </div>
      </div>
    </section>
  );
}

export function RoadsInternationalMethodSection({
  international,
  method,
}: InternationalMethodProps) {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-36">
      <div className="container mx-auto px-6">
        <div
          id="internacional"
          className="scroll-mt-28 rounded-[32px] border border-neutral-200 bg-neutral-50/70 p-7 sm:p-10 lg:grid lg:grid-cols-[0.75fr_1.25fr] lg:gap-20"
        >
          <SectionPill>{international.pill}</SectionPill>
          <div className="mt-8 lg:mt-0">
            <h2 className="text-[clamp(2.2rem,8vw,3rem)] font-bold leading-[0.98] tracking-tight text-neutral-900 lg:text-5xl">
              {international.title}
            </h2>
            <p className="mt-6 text-lg font-medium leading-relaxed text-neutral-500">
              {international.description}
            </p>
          </div>
        </div>

        <div className="mt-20">
          <IndustrySectionHeading
            pill={method.pill}
            title={method.title}
            description={method.description}
          />
          <ol aria-label="Fluxo de trabalho" className="mt-12 grid gap-8 lg:grid-cols-4">
            {method.stages.map((stage, index) => (
              <li key={stage.title} className="relative min-w-0 border-t border-neutral-300 pt-8">
                <span
                  className={cn(
                    "mb-6 flex h-11 w-11 items-center justify-center rounded-[14px] text-sm font-black",
                    index === method.stages.length - 1
                      ? "bg-neutral-950 text-brand-400"
                      : "bg-brand-400 text-neutral-950",
                  )}
                >
                  {stage.label.slice(0, 1)}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-600">
                  {stage.label}
                </span>
                <h3 className="mt-3 text-xl font-bold tracking-tight text-neutral-900">
                  {stage.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-neutral-500">
                  {stage.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
