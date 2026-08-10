import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function EcaDigitalAnnouncement() {
  return (
    <section className="border-b border-neutral-800 bg-neutral-950 text-white">
      <div className="container mx-auto flex min-h-11 flex-col items-start justify-center gap-2 px-4 py-2 sm:min-h-10 sm:flex-row sm:items-center sm:justify-center sm:px-6">
        <p className="min-w-0 text-[11px] font-semibold leading-snug text-neutral-200 sm:text-xs">
          <span className="mr-2 inline-flex rounded-full bg-brand-400 px-2 py-0.5 text-[9px] font-black uppercase leading-none tracking-[0.16em] text-neutral-950">
            Novo
          </span>
          ECA Digital: entenda se sua empresa precisa se adequar às novas obrigações.
        </p>
        <Link
          href="/eca-digital"
          className="group inline-flex shrink-0 items-center gap-1.5 text-[11px] font-bold uppercase leading-none tracking-[0.14em] text-brand-400 transition-colors hover:text-white sm:text-xs"
        >
          Ver diagnóstico
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}
