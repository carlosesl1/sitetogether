import Image from "next/image";
import {
  Blocks,
  CloudCog,
  FileCheck2,
  GraduationCap,
  Network,
  ScanSearch,
  Workflow,
} from "lucide-react";
import type { RoadsIndustryContent } from "@/components/industry/industry-page-types";
import { IndustryContactLink } from "@/components/industry/industry-contact-link";
import { IndustrySectionHeading } from "@/components/industry/industry-section-heading";
import { IndustryTechnologyRail } from "@/components/industry/industry-technology-rail";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";
import { SectionPill } from "@/components/ui/site-primitives";

type DeliveryProps = {
  sector: string;
  allowedAnchors: readonly string[];
  capabilities: RoadsIndustryContent["capabilities"];
  operations: RoadsIndustryContent["operations"];
  training: RoadsIndustryContent["training"];
};

type InternationalProps = {
  content: RoadsIndustryContent["international"];
};

const capabilityIcons = [
  ScanSearch,
  Network,
  Blocks,
  FileCheck2,
  Workflow,
  CloudCog,
] as const;

export function RoadsDeliverySection({
  sector,
  allowedAnchors,
  capabilities,
  operations,
  training,
}: DeliveryProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative py-20 sm:py-24 lg:py-28 xl:py-32">
        <PixelDecor placement="topRight" mask="topRight" opacity={0.08} />
        <PixelDecor
          placement="bottomLeft"
          mask="bottomLeft"
          opacity={0.07}
          className="max-sm:h-[34%] max-sm:w-[72%]"
        />
        <div className="container relative z-10 mx-auto px-6">
          <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <IndustrySectionHeading
              pill={capabilities.pill}
              title={capabilities.title}
              description={capabilities.description}
              className="lg:sticky lg:top-28"
            />

            <div className="grid border-t border-neutral-300 xl:grid-cols-2">
              {capabilities.items.map((item, index) => {
                const Icon = capabilityIcons[index];
                return (
                  <article
                    key={item.title}
                    className="grid min-w-0 grid-cols-[40px_1fr] gap-4 border-b border-neutral-200 py-6 xl:odd:pr-7 xl:even:border-l xl:even:pl-7"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-brand-400 text-neutral-950">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="break-words text-lg font-bold tracking-tight text-neutral-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm font-medium leading-relaxed text-neutral-500">
                        {item.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="mt-12 flex flex-col items-start gap-7 rounded-[24px] bg-neutral-950 p-7 text-white sm:flex-row sm:items-center sm:justify-between sm:p-9">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-white">
                {capabilities.ctaTitle}
              </h3>
              <p className="mt-2 max-w-2xl text-sm font-medium leading-relaxed text-neutral-400">
                {capabilities.ctaText}
              </p>
            </div>
            <IndustryContactLink
              sector={sector}
              position="capabilities"
              allowedAnchors={allowedAnchors}
              variant="primary"
              size="md"
              fullWidth
              className="sm:w-auto"
            >
              {capabilities.cta}
            </IndustryContactLink>
          </div>
        </div>
      </div>

      <div className="relative bg-[#0a0a0a] py-20 text-white sm:py-24 lg:py-28 xl:py-32">
        <PixelDecor placement="bottomLeft" mask="bottomLeft" opacity={0.12} />
        <div className="container relative z-10 mx-auto px-6">
          <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <SectionPill tone="dark">{operations.pill}</SectionPill>
              <h2 className="mt-7 max-w-3xl text-[clamp(2.05rem,7vw,3.5rem)] font-bold leading-[0.98] tracking-[-0.03em] text-white">
                {operations.title}
              </h2>
              <p className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-neutral-400 sm:text-lg">
                {operations.description}
              </p>

              <div className="mt-10 border-t border-white/15">
                {operations.routines.map((routine, index) => (
                  <article
                    id={index === 0 ? "dpo" : index === 1 ? "incidentes" : undefined}
                    key={routine.title}
                    className="scroll-mt-28 grid gap-3 border-b border-white/10 py-6 sm:grid-cols-[120px_1fr] sm:gap-7"
                  >
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-400">
                      {routine.label}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-white">
                        {routine.title}
                      </h3>
                      <p className="mt-2 text-sm font-medium leading-relaxed text-neutral-400">
                        {routine.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <aside className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7 sm:p-9">
              <span className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-brand-400 text-neutral-950">
                <GraduationCap className="h-7 w-7" aria-hidden="true" />
              </span>
              <div className="mt-7">
                <SectionPill tone="dark">{training.pill}</SectionPill>
                <h3 className="mt-7 text-3xl font-bold tracking-[-0.025em] text-white">
                  {training.title}
                </h3>
                <p className="mt-5 text-base font-medium leading-relaxed text-neutral-400">
                  {training.description}
                </p>
              </div>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {training.audiences.map((audience) => (
                  <li
                    key={audience}
                    className="flex min-h-24 items-start gap-3 rounded-[18px] border border-white/10 bg-black/20 p-4 text-sm font-bold leading-relaxed text-neutral-200"
                  >
                    <span
                      className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-[3px] bg-brand-400"
                      aria-hidden="true"
                    />
                    <span>{audience}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>

          <div className="mt-14">
            <IndustryTechnologyRail />
          </div>
        </div>
      </div>
    </section>
  );
}

export function RoadsInternationalSection({ content }: InternationalProps) {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-24">
      <PixelDecor
        placement="topRight"
        mask="topRight"
        opacity={0.09}
        className="max-sm:h-[36%] max-sm:w-[72%]"
      />
      <PixelDecor
        placement="bottomLeft"
        mask="bottomLeft"
        opacity={0.06}
        className="max-sm:h-[30%] max-sm:w-[68%]"
      />
      <div className="container relative z-10 mx-auto px-6">
        <div
          id="internacional"
          className="scroll-mt-28 overflow-hidden rounded-[28px] bg-neutral-100/80 p-7 sm:p-10 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12"
        >
          <div>
            <SectionPill>{content.pill}</SectionPill>
            <h2 className="mt-8 max-w-3xl text-[clamp(2rem,7vw,3.25rem)] font-bold leading-[0.98] tracking-[-0.03em] text-neutral-900">
              {content.title}
            </h2>
            <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-neutral-500 sm:text-lg">
              {content.description}
            </p>
          </div>
          <div className="mx-auto mt-10 aspect-square w-full max-w-[420px] lg:mt-0">
            <Image
              src={content.illustration.src}
              alt={content.illustration.alt}
              width={content.illustration.width}
              height={content.illustration.height}
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
