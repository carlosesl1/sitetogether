import { ArrowUpRight, Mail, Phone } from "lucide-react";
import type { RoadsIndustryContent } from "@/components/industry/industry-page-types";
import { IndustryContactLink } from "@/components/industry/industry-contact-link";
import { SectionPill } from "@/components/ui/site-primitives";

type IndustryFinalCtaProps = {
  sector: string;
  content: RoadsIndustryContent["finalCta"];
  allowedAnchors: readonly string[];
};

const industryContacts = [
  {
    label: "WhatsApp",
    value: "(11) 5178-3235",
    href: "https://wa.me/551151783235",
    icon: Phone,
  },
  {
    label: "WhatsApp",
    value: "(11) 92642-0123",
    href: "https://wa.me/5511926420123",
    icon: Phone,
  },
  {
    label: "E-mail",
    value: "contato@togetherprivacy.com",
    href: "mailto:contato@togetherprivacy.com",
    icon: Mail,
  },
] as const;

export function IndustryFinalCta({
  sector,
  content,
  allowedAnchors,
}: IndustryFinalCtaProps) {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-brand-400 py-20 text-neutral-950 sm:py-24 lg:py-28 xl:py-36"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-white/30 blur-[120px]" />
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <div className="min-w-0">
            <SectionPill tone="brand">{content.pill}</SectionPill>
            <h2 className="mt-6 max-w-4xl break-words text-[clamp(2.35rem,10vw,3.5rem)] font-bold leading-[0.94] tracking-tight sm:text-6xl lg:text-[3.5rem] xl:text-[4rem]">
              {content.title}
            </h2>
            <p className="mt-6 max-w-lg text-lg font-medium leading-relaxed text-neutral-800">
              {content.description}
            </p>
          </div>
          <div className="min-w-0 rounded-[28px] border border-black/5 bg-white p-6 shadow-[0_32px_70px_rgba(0,0,0,0.08)] sm:p-8">
            <div>
              <h3 className="text-3xl font-bold tracking-tight text-neutral-900">
                Contato
              </h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-neutral-500">
                Fale diretamente com nosso time.
              </p>
            </div>
            <IndustryContactLink
              sector={sector}
              position="final"
              allowedAnchors={allowedAnchors}
              variant="dark"
              size="xl"
              fullWidth
              className="mt-7"
            >
              {content.cta}
            </IndustryContactLink>
            <div className="mt-6 border-t border-neutral-200 pt-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-500">
                Próximo passo
              </p>
              <p className="mt-2 text-sm font-bold leading-relaxed text-neutral-900">
                {content.nextStep}
              </p>
            </div>
            <div className="mt-6 space-y-3">
              {industryContacts.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    aria-label={`${item.label}: ${item.value}`}
                    className="group flex min-h-16 min-w-0 items-center gap-4 rounded-[18px] border border-neutral-200 bg-neutral-50 px-4 py-3 outline-none transition-colors hover:border-brand-400 focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-brand-400 text-neutral-950">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-neutral-400">
                        {item.label}
                      </span>
                      <span className="mt-1 block break-words text-sm font-bold leading-tight text-neutral-900 sm:text-base">
                        {item.value}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-neutral-400"
                      aria-hidden="true"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
