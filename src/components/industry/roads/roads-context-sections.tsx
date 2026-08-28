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
import { SectionPill } from "@/components/ui/site-primitives";
import { cn } from "@/lib/utils";

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
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32 xl:py-36"
    >
      <PixelDecor placement="topRight" mask="topRight" opacity={0.18} />
      <PixelDecor
        placement="bottomLeft"
        mask="bottomLeft"
        opacity={0.14}
        className="max-sm:h-[38%] max-sm:w-[72%]"
      />
      <div className="container relative z-10 mx-auto grid items-start gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 xl:grid-cols-[0.82fr_1.18fr] xl:gap-28">
        <div className="max-w-3xl">
          <SectionPill>{content.pill}</SectionPill>
          <h2 className="mt-8 text-balance text-[clamp(2.6rem,8vw,3.4rem)] font-bold leading-[0.94] tracking-tight text-neutral-900 sm:text-6xl lg:text-[3.65rem] xl:text-[4rem]">
            {content.title}{" "}
            <span className="font-light italic text-brand-500">
              {content.accent}
            </span>
          </h2>
          <p className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-neutral-500">
            {content.description}
          </p>
          <p className="mt-5 max-w-2xl text-base font-medium leading-relaxed text-neutral-600">
            {content.emphasis}{" "}
            <span className="box-decoration-clone rounded bg-brand-100 px-1 font-semibold text-neutral-900">
              {content.emphasisAccent}
            </span>
          </p>
        </div>

        <div className="relative min-w-0">
          <div
            className="pointer-events-none absolute -inset-6 rounded-[44px] bg-brand-400/10 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-[36px] border border-brand-400/35 bg-white p-4 shadow-[0_30px_90px_rgba(15,23,42,0.11)] sm:p-7 lg:p-8">
            <div
              className="absolute inset-x-12 top-0 h-px bg-brand-400"
              aria-hidden="true"
            />
            <div className="mb-5 flex min-w-0 items-center justify-between gap-4 border-b border-neutral-200 pb-5 sm:mb-6 sm:pb-6">
              <span className="flex min-w-0 items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-900 sm:text-[11px]">
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-[3px] bg-brand-400"
                  aria-hidden="true"
                />
                Fluxo operacional
              </span>
              <span className="hidden text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-600 sm:block">
                Da entrada ao atendimento
              </span>
            </div>

            <div className="relative">
              <div
                className="absolute bottom-8 left-10 top-8 w-px bg-gradient-to-b from-brand-400 via-brand-400/60 to-brand-400/10 sm:left-12"
                aria-hidden="true"
              />
              <ol className="relative space-y-3 sm:space-y-4">
                {content.nodes.map((node, index) => {
                  const Icon = contextIcons[index];
                  const isFeatured = index === 2;

                  return (
                    <li
                      key={node.title}
                      className={cn(
                        "relative grid min-w-0 grid-cols-[48px_1fr] gap-4 overflow-hidden rounded-[22px] border p-4 sm:grid-cols-[56px_1fr] sm:gap-5 sm:p-5",
                        isFeatured
                          ? "border-neutral-950 bg-neutral-950 text-white shadow-[0_24px_54px_rgba(10,10,10,0.22)] sm:mx-2"
                          : "border-neutral-200/90 bg-white shadow-[0_14px_34px_rgba(15,23,42,0.055)]",
                      )}
                    >
                      <span
                        className={cn(
                          "relative z-10 flex h-12 w-12 items-center justify-center rounded-[16px] border shadow-[0_12px_24px_rgba(15,23,42,0.13)] sm:h-14 sm:w-14 sm:rounded-[18px]",
                          isFeatured
                            ? "border-brand-400 bg-brand-400 text-neutral-950"
                            : "border-neutral-900 bg-neutral-950 text-brand-400",
                        )}
                      >
                        <Icon
                          className="h-5 w-5 sm:h-6 sm:w-6"
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                      </span>
                      <span className="min-w-0 self-center">
                        <span
                          className={cn(
                            "text-[10px] font-black uppercase tracking-[0.2em]",
                            isFeatured ? "text-brand-400" : "text-brand-600",
                          )}
                        >
                          {node.label}
                        </span>
                        <strong
                          className={cn(
                            "mt-1.5 block break-words text-lg tracking-tight sm:text-xl",
                            isFeatured ? "text-white" : "text-neutral-900",
                          )}
                        >
                          {node.title}
                        </strong>
                        <span
                          className={cn(
                            "mt-1.5 block text-sm font-medium leading-relaxed",
                            isFeatured ? "text-neutral-400" : "text-neutral-500",
                          )}
                        >
                          {node.description}
                        </span>
                      </span>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
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
          accent={content.accent}
          description={content.description}
        />
        <div className="relative mt-14">
          <div
            className="absolute left-6 top-6 hidden h-px w-[calc(100%-3rem)] bg-gradient-to-r from-brand-400 via-neutral-300 to-brand-400/30 xl:block"
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
                  <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-[16px] border border-brand-400/25 bg-white text-neutral-900 shadow-sm">
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
      className="relative scroll-mt-24 overflow-hidden bg-neutral-950 py-20 text-white sm:py-24 lg:py-28 xl:py-36"
    >
      <PixelDecor placement="topRight" mask="topRight" opacity={0.12} />
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
              accent={content.accent}
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
