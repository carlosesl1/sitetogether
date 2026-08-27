"use client";

import { useId, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { IndustryFaqItem } from "@/components/industry/industry-page-types";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";
import { SectionPill } from "@/components/ui/site-primitives";

type IndustryFaqSectionProps = {
  pill: string;
  title: string;
  accent: string;
  description: string;
  items: readonly IndustryFaqItem[];
};

function IndustryFaqRow({
  item,
  defaultOpen,
}: {
  item: IndustryFaqItem;
  defaultOpen: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const id = useId().replaceAll(":", "");
  const buttonId = `industry-faq-button-${id}`;
  const panelId = `industry-faq-panel-${id}`;
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={`group relative border-b border-neutral-100 transition-all ${isOpen ? "mb-8 pb-8" : "pb-6"}`}
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
          className={`min-w-0 break-words text-xl font-bold tracking-tight transition-colors md:text-3xl ${isOpen ? "text-neutral-900" : "text-neutral-500 group-hover:text-neutral-800"}`}
        >
          {item.question}
        </span>
        <span
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all ${isOpen ? "rotate-180 border-neutral-900 bg-neutral-900 text-white" : "border-neutral-200 text-neutral-500 group-hover:border-neutral-400"}`}
          aria-hidden="true"
        >
          <ChevronDown className="h-6 w-6" />
        </span>
      </button>
      <motion.div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!isOpen}
        initial={false}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.35 }}
        className="overflow-hidden"
      >
        <p className="ml-1 mt-6 max-w-3xl border-l-2 border-brand-400 pl-7 text-base font-medium leading-relaxed text-neutral-500 sm:text-lg">
          {item.answer}
        </p>
      </motion.div>
    </div>
  );
}

export function IndustryFaqSection({
  pill,
  title,
  accent,
  description,
  items,
}: IndustryFaqSectionProps) {
  return (
    <section id="faq" className="relative overflow-hidden bg-white py-24 md:py-40">
      <PixelDecor placement="topRight" mask="topRight" opacity={0.12} />
      <PixelDecor placement="bottomLeft" mask="bottomLeft" opacity={0.12} />
      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col items-start gap-14 lg:flex-row lg:gap-32">
          <div className="pt-2 lg:sticky lg:top-24 lg:w-1/3">
            <SectionPill>{pill}</SectionPill>
            <h2 className="mt-8 break-words text-[clamp(2.25rem,10vw,2.75rem)] font-bold leading-[0.94] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              {title}{" "}
              <span className="font-light italic text-brand-500">{accent}</span>
            </h2>
            <p className="mt-8 max-w-sm text-lg font-medium leading-relaxed text-neutral-500 sm:text-xl">
              {description}
            </p>
          </div>
          <div className="w-full min-w-0 lg:w-2/3">
            {items.map((item, index) => (
              <IndustryFaqRow
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
