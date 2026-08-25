"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, MessageSquare } from "lucide-react";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";
import { ActionLink, SectionPill } from "@/components/ui/site-primitives";

type PartnerFaq = {
  readonly question: string;
  readonly answer: string;
};

type PartnerFaqItemProps = PartnerFaq & {
  index: number;
};

type PartnerFaqSectionProps = {
  faqs: readonly PartnerFaq[];
};

function PartnerFaqItem({ question, answer, index }: PartnerFaqItemProps) {
  const [isOpen, setIsOpen] = React.useState(index === 0);
  const contentId = `partner-faq-answer-${index}`;

  return (
    <motion.div
      initial={false}
      className={`group relative border-b border-neutral-100 transition-all duration-500 ${isOpen ? "mb-8 pb-8" : "pb-6"}`}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setIsOpen((current) => !current)}
        className="flex min-h-16 w-full items-center justify-between gap-5 py-2 text-left"
      >
        <h3
          className={`text-xl font-bold tracking-tight transition-colors md:text-3xl ${isOpen ? "text-neutral-900" : "text-neutral-400 group-hover:text-neutral-700"}`}
        >
          {question}
        </h3>
        <span
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all ${isOpen ? "rotate-180 border-neutral-900 bg-neutral-900 text-white" : "border-neutral-200 text-neutral-400 group-hover:border-neutral-400 group-hover:text-neutral-800"}`}
        >
          <ChevronDown className="h-6 w-6" aria-hidden="true" />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={contentId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="ml-1 mt-6 max-w-3xl border-l-2 border-brand-400 pl-7 text-lg font-medium leading-relaxed text-neutral-500 md:text-xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function PartnerFaqSection({ faqs }: PartnerFaqSectionProps) {
  return (
    <section
      id="faq"
      className="relative w-full overflow-hidden bg-white py-24 md:py-40"
    >
      <PixelDecor placement="topRight" mask="topRight" opacity={0.14} />
      <PixelDecor placement="bottomLeft" mask="bottomLeft" opacity={0.16} />
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-neutral-100 to-transparent" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col items-start gap-16 lg:flex-row lg:gap-36">
          <div className="pt-2 lg:sticky lg:top-24 lg:w-1/3">
            <SectionPill>Perguntas frequentes</SectionPill>
            <h2 className="mt-8 break-words text-[clamp(2.25rem,10vw,2.75rem)] font-bold leading-[0.94] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Perguntas{" "}
              <span className="font-light italic text-brand-500">frequentes.</span>
            </h2>
            <p className="mb-10 mt-8 max-w-sm text-xl font-medium leading-relaxed text-neutral-500">
              Antes de apresentar uma oportunidade.
            </p>

            <div className="rounded-3xl border border-neutral-100 bg-neutral-50 p-8">
              <div className="mb-6 flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-100 bg-white shadow-sm">
                  <MessageSquare
                    className="h-6 w-6 text-brand-500"
                    aria-hidden="true"
                  />
                </span>
                <strong className="text-neutral-900">Ainda com dúvidas?</strong>
              </div>
              <ActionLink
                href="/contato"
                variant="dark"
                size="md"
                fullWidth
                className="sm:whitespace-normal"
              >
                Conversar com nosso time
              </ActionLink>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            {faqs.map((faq, index) => (
              <PartnerFaqItem key={faq.question} index={index} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
