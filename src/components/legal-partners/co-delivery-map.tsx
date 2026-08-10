"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Plus, Scale, ShieldCheck } from "lucide-react";

type Role = {
  readonly label: string;
  readonly title: string;
  readonly summary: string;
  readonly items: readonly string[];
};

type CoDeliveryMapProps = {
  roles: {
    readonly office: Role;
    readonly together: Role;
    readonly result: string;
  };
};

const laneMotion = {
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
} as const;

export function CoDeliveryMap({ roles }: CoDeliveryMapProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      role="group"
      aria-label="Responsabilidades do escritório e da TOGETHER em um projeto de LGPD"
      className="relative overflow-hidden rounded-[2rem] border border-neutral-200 bg-neutral-50 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.06)] sm:p-7"
    >
      <div className="relative grid gap-3 md:grid-cols-[1fr_56px_1fr] md:items-stretch">
        <motion.section
          initial={false}
          whileInView={reduceMotion ? undefined : laneMotion.whileInView}
          viewport={laneMotion.viewport}
          transition={laneMotion.transition}
          className="rounded-2xl border border-neutral-200 bg-white p-5 text-neutral-900 sm:p-7"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-100 text-neutral-900">
              <Scale aria-hidden="true" className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-neutral-400">
                {roles.office.label}
              </p>
              <h3 className="mt-1 text-xl font-bold">{roles.office.title}</h3>
            </div>
          </div>
          <p className="mt-5 text-sm font-medium leading-relaxed text-neutral-600 md:hidden">
            {roles.office.summary}
          </p>
          <ul className="mt-7 hidden space-y-4 md:block">
            {roles.office.items.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm font-medium leading-relaxed text-neutral-600"
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 text-neutral-900"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        <div className="flex h-12 items-center justify-center md:h-auto">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-900 shadow-sm">
            <Plus className="h-5 w-5" aria-hidden="true" />
          </span>
        </div>

        <motion.section
          initial={false}
          whileInView={reduceMotion ? undefined : laneMotion.whileInView}
          viewport={laneMotion.viewport}
          transition={{ ...laneMotion.transition, delay: reduceMotion ? 0 : 0.08 }}
          className="rounded-2xl bg-brand-400 p-5 text-neutral-950 sm:p-7"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-950 text-brand-400">
              <ShieldCheck aria-hidden="true" className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-neutral-700">
                {roles.together.label}
              </p>
              <h3 className="mt-1 text-xl font-bold">{roles.together.title}</h3>
            </div>
          </div>
          <p className="mt-5 text-sm font-semibold leading-relaxed text-neutral-800 md:hidden">
            {roles.together.summary}
          </p>
          <ul className="mt-7 hidden space-y-4 md:block">
            {roles.together.items.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm font-semibold leading-relaxed text-neutral-800"
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 text-neutral-950"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.section>
      </div>

      <motion.div
        initial={false}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.12 }}
        className="mt-3 rounded-2xl bg-neutral-950 p-5 text-white sm:p-6"
      >
        <p className="text-[9px] font-black uppercase tracking-[0.22em] text-brand-400">
          Resultado
        </p>
        <p className="mt-2 max-w-4xl text-sm font-bold leading-relaxed sm:text-base">
          {roles.result}
        </p>
      </motion.div>
    </div>
  );
}
