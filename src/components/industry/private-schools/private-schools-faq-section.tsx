"use client";

import { useId, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { PrivateSchoolsIndustryContent } from "@/components/industry/private-schools/private-schools-types";

type PrivateSchoolsFaqItem =
  PrivateSchoolsIndustryContent["faq"]["items"][number];

function PrivateSchoolsFaqRow({
  item,
  defaultOpen,
}: {
  readonly item: PrivateSchoolsFaqItem;
  readonly defaultOpen: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const id = useId().replaceAll(":", "");
  const buttonId = `private-schools-faq-button-${id}`;
  const panelId = `private-schools-faq-panel-${id}`;
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={`group relative border-b border-neutral-100 ${reduceMotion ? "transition-none" : "transition-all"} ${isOpen ? "mb-8 pb-8" : "pb-6"}`}
    >
      <button
        id={buttonId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((current) => !current)}
        className="flex min-h-16 w-full items-center justify-between gap-5 py-2 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-4"
      >
        <span
          className={`min-w-0 break-words text-xl font-bold leading-[1.3] tracking-tight md:text-3xl ${reduceMotion ? "transition-none" : "transition-colors"} ${isOpen ? "text-neutral-900" : "text-neutral-500 group-hover:text-neutral-800"}`}
        >
          {item.question}
        </span>
        <span
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border ${reduceMotion ? "transition-none" : "transition-all"} ${isOpen ? "rotate-180 border-neutral-900 bg-neutral-900 text-white" : "border-neutral-200 text-neutral-500 group-hover:border-neutral-400"}`}
          aria-hidden="true"
        >
          <ChevronDown className="h-6 w-6" />
        </span>
      </button>
      {isOpen ? (
        <div id={panelId} role="region" aria-labelledby={buttonId}>
          <p className="ml-1 mt-6 max-w-3xl border-l-2 border-brand-400 pl-7 text-base font-medium leading-relaxed text-neutral-500 sm:text-lg">
            {item.answer}
          </p>
        </div>
      ) : null}
    </div>
  );
}

export function PrivateSchoolsFaqSection({
  content,
}: {
  readonly content: PrivateSchoolsIndustryContent["faq"];
}) {
  return (
    <section
      id="faq"
      data-layout-family="faq-accordion"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28 xl:py-40"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-start gap-14 lg:flex-row lg:gap-32">
          <div className="pt-2 lg:sticky lg:top-24 lg:w-1/3">
            <h2 className="break-words text-[clamp(2rem,9vw,2.75rem)] font-bold leading-[0.96] tracking-[-0.035em] text-neutral-900 sm:text-5xl lg:text-[3.5rem] xl:text-6xl">
              {content.title}{" "}
              <span className="inline-block pb-1 font-light italic leading-[1.1] text-brand-500">
                {content.accent}
              </span>
            </h2>
            {content.description ? (
              <p className="mt-8 max-w-sm text-lg font-medium leading-relaxed text-neutral-500 sm:text-xl">
                {content.description}
              </p>
            ) : null}
          </div>
          <div className="w-full min-w-0 lg:w-2/3">
            {content.items.map((item, index) => (
              <PrivateSchoolsFaqRow
                key={item.question}
                item={item}
                defaultOpen={index === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
