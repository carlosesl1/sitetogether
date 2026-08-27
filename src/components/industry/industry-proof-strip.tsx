import type { IndustryProofItem } from "@/components/industry/industry-page-types";

type IndustryProofStripProps = {
  items: readonly IndustryProofItem[];
  note?: string;
};

export function IndustryProofStrip({ items, note }: IndustryProofStripProps) {
  return (
    <div className="relative z-20 -mt-10 w-full px-4 md:px-6">
      <section
        aria-label="Capacidade institucional da TOGETHER"
        className="container relative rounded-t-[40px] border border-neutral-100 bg-white px-5 pb-7 pt-7 shadow-[0_-20px_40px_rgba(0,0,0,0.03)] sm:px-8 lg:px-12"
      >
        <dl className="grid grid-cols-2 gap-x-4 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
          {items.map((item) => (
            <div
              key={`${item.value}-${item.label}`}
              className="relative min-w-0 border-t border-neutral-200 py-4 sm:py-5"
            >
              <span
                className="mb-3 block h-2.5 w-2.5 rounded-[3px] bg-brand-400"
                aria-hidden="true"
              />
              <dt className="break-words text-base font-bold tracking-tight text-neutral-900 sm:text-lg">
                {item.value}
              </dt>
              <dd className="mt-2 text-xs font-medium leading-relaxed text-neutral-500 sm:text-sm">
                {item.label}
              </dd>
            </div>
          ))}
        </dl>
        {note ? (
          <p className="mt-3 max-w-5xl text-xs font-medium leading-relaxed text-neutral-500 sm:text-sm">
            {note}
          </p>
        ) : null}
      </section>
    </div>
  );
}
