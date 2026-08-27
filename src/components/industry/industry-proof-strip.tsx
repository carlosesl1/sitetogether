import type { IndustryProofItem } from "@/components/industry/industry-page-types";

type IndustryProofStripProps = {
  items: readonly IndustryProofItem[];
};

export function IndustryProofStrip({ items }: IndustryProofStripProps) {
  return (
    <div className="relative z-20 -mt-10 w-full px-4 md:px-6">
      <section
        aria-label="Capacidade institucional da TOGETHER"
        className="container relative rounded-t-[40px] border border-neutral-100 bg-white px-5 pb-8 pt-8 shadow-[0_-20px_40px_rgba(0,0,0,0.03)] sm:px-8 lg:px-12"
      >
        <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={`${item.value}-${item.label}`}
              className="relative min-w-0 rounded-[24px] border border-neutral-100 bg-neutral-50/70 p-5 sm:p-6"
            >
              <span
                className="mb-5 block h-3 w-3 rounded-[3px] bg-brand-400"
                aria-hidden="true"
              />
              <dt className="break-words text-lg font-bold tracking-tight text-neutral-900 sm:text-xl">
                {item.value}
              </dt>
              <dd className="mt-2 text-sm font-medium leading-relaxed text-neutral-500">
                {item.label}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
