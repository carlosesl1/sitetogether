import {
  BadgeCheck,
  CarFront,
  Cloud,
  CreditCard,
  FileSignature,
  RefreshCw,
  ScanLine,
  Search,
  Settings2,
  Users,
} from "lucide-react";
import type { RoadsIndustryContent } from "@/components/industry/industry-page-types";
import { IndustrySectionHeading } from "@/components/industry/industry-section-heading";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";

type ContextProps = {
  content: RoadsIndustryContent["context"];
};

type LifecycleProps = {
  content: RoadsIndustryContent["lifecycle"];
};

type FreeFlowProps = {
  content: RoadsIndustryContent["freeFlow"];
};

const contextIcons = [CarFront, ScanLine, CreditCard, Cloud, Users] as const;
const lifecycleIcons = [
  Search,
  FileSignature,
  Settings2,
  BadgeCheck,
  RefreshCw,
] as const;

export function RoadsOperationalContextSection({ content }: ContextProps) {
  return (
    <section
      data-section="roads-context"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28 xl:py-36"
    >
      <PixelDecor placement="topRight" mask="topRight" opacity={0.18} />
      <PixelDecor
        placement="bottomLeft"
        mask="bottomLeft"
        opacity={0.14}
        className="max-sm:h-[38%] max-sm:w-[72%]"
      />
      <div className="container relative z-10 mx-auto grid items-start gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <IndustrySectionHeading
          pill={content.pill}
          title={content.title}
          description={content.description}
          className="lg:sticky lg:top-28"
        />

        <div className="relative overflow-hidden rounded-[32px] border border-neutral-200 bg-neutral-50/70 p-5 shadow-xl shadow-neutral-200/35 sm:p-8">
          <div
            className="absolute bottom-10 left-[42px] top-10 w-px bg-gradient-to-b from-brand-400 via-neutral-300 to-transparent sm:left-[58px]"
            aria-hidden="true"
          />
          <ol className="relative space-y-4">
            {content.nodes.map((node, index) => {
              const Icon = contextIcons[index];
              return (
                <li
                  key={node.title}
                  className="grid min-w-0 grid-cols-[48px_1fr] gap-4 rounded-[24px] border border-neutral-100 bg-white p-4 sm:grid-cols-[64px_1fr] sm:gap-5 sm:p-5"
                >
                  <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-[16px] border border-neutral-200 bg-white text-neutral-900 shadow-sm sm:h-16 sm:w-16 sm:rounded-[20px]">
                    <Icon
                      className="h-5 w-5 sm:h-6 sm:w-6"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="min-w-0 self-center">
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-neutral-600">
                      {node.label}
                    </span>
                    <strong className="mt-2 block break-words text-lg tracking-tight text-neutral-900">
                      {node.title}
                    </strong>
                    <span className="mt-2 block text-sm font-medium leading-relaxed text-neutral-500">
                      {node.description}
                    </span>
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function RoadsLifecycleSection({ content }: LifecycleProps) {
  return (
    <section
      id="privacy-by-design"
      className="relative scroll-mt-24 overflow-hidden bg-neutral-50 py-20 sm:py-24 lg:py-28 xl:py-36"
    >
      <PixelDecor
        placement="topRight"
        mask="topRight"
        opacity={0.18}
        className="left-0 right-auto -scale-x-100 max-sm:h-[36%] max-sm:w-[72%]"
      />
      <PixelDecor
        placement="bottomRight"
        mask="bottomRight"
        opacity={0.14}
        className="max-sm:h-[30%] max-sm:w-[68%]"
      />
      <div className="container relative z-10 mx-auto px-6">
        <IndustrySectionHeading
          pill={content.pill}
          title={content.title}
          description={content.description}
        />
        <div className="relative mt-14">
          <div
            className="absolute left-6 top-6 hidden h-px w-[calc(100%-3rem)] bg-neutral-300 xl:block"
            aria-hidden="true"
          />
          <ol className="relative grid gap-8 lg:grid-cols-3 lg:gap-6 xl:grid-cols-5 xl:gap-5">
            {content.stages.map((stage, index) => {
              const Icon = lifecycleIcons[index];

              return (
                <li
                  id={index === 1 ? "fornecedores" : undefined}
                  key={stage.title}
                  className="relative scroll-mt-28 grid grid-cols-[48px_1fr] gap-5 lg:block"
                >
                  <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-[16px] border border-neutral-200 bg-white text-neutral-900 shadow-sm">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                    <span
                      className="absolute -bottom-1 -right-1 h-2.5 w-2.5 rounded-[3px] bg-brand-400 ring-2 ring-neutral-50"
                      aria-hidden="true"
                    />
                  </span>
                  <div className="min-w-0 lg:mt-8">
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-neutral-600">
                      {stage.label}
                    </span>
                    <h3 className="mt-3 break-words text-xl font-bold tracking-tight text-neutral-900">
                      {stage.title}
                    </h3>
                    <p className="mt-3 text-sm font-medium leading-relaxed text-neutral-500">
                      {stage.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function RoadsFreeFlowSection({ content }: FreeFlowProps) {
  return (
    <section
      id="free-flow"
      className="relative scroll-mt-24 overflow-hidden bg-[#0a0a0a] py-20 text-white sm:py-24 lg:py-28 xl:py-36"
    >
      <PixelDecor placement="bottomLeft" mask="bottomLeft" opacity={0.14} />
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <span className="mb-7 flex h-14 w-14 items-center justify-center rounded-[18px] bg-brand-400 text-neutral-950">
              <ScanLine className="h-7 w-7" aria-hidden="true" />
            </span>
            <IndustrySectionHeading
              pill={content.pill}
              title={content.title}
              description={content.description}
              inverse
            />
          </div>
          <div className="border-t border-white/15">
            {content.controls.map((control) => (
              <article
                key={control.title}
                className="grid gap-3 border-b border-white/10 py-7 sm:grid-cols-[130px_1fr] sm:gap-8"
              >
                <span className="flex items-start gap-3 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-400">
                  <span
                    className="mt-0.5 h-3 w-3 shrink-0 rounded-[3px] bg-brand-400"
                    aria-hidden="true"
                  />
                  {control.label}
                </span>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-white">
                    {control.title}
                  </h3>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-neutral-400">
                    {control.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
