"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, FileText, ShieldCheck } from "lucide-react";

type CoDeliveryMapProps = {
  officeItems: readonly string[];
  togetherItems: readonly string[];
};

const laneMotion = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
} as const;

export function CoDeliveryMap({
  officeItems,
  togetherItems,
}: CoDeliveryMapProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      role="group"
      aria-label="Mapa da demanda de LGPD"
      className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a0a] p-5 text-white shadow-2xl shadow-neutral-950/20 sm:p-7"
    >
      <div className="flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.24em] text-brand-400">
            Mapa da demanda
          </p>
          <p className="mt-2 text-lg font-bold">Projeto de LGPD do cliente</p>
        </div>
        <span className="w-fit rounded-full border border-brand-400/25 bg-brand-400/10 px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-brand-400">
          Coentrega coordenada
        </span>
      </div>

      <div className="relative mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-brand-400">
            <FileText aria-hidden="true" className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-bold text-white">
              Demanda recebida pelo escritório
            </p>
            <p className="mt-1 text-xs font-medium text-neutral-400">
              Estratégia jurídica e execução multidisciplinar
            </p>
          </div>
        </div>
      </div>

      <motion.div
        aria-hidden="true"
        initial={reduceMotion ? false : { scaleY: 0 }}
        whileInView={reduceMotion ? undefined : { scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto h-8 w-px origin-top bg-brand-400/60"
      />

      <div className="grid gap-3 md:grid-cols-2">
        <motion.section
          initial={reduceMotion ? false : laneMotion.initial}
          whileInView={reduceMotion ? undefined : laneMotion.whileInView}
          viewport={laneMotion.viewport}
          transition={laneMotion.transition}
          className="rounded-2xl border border-neutral-100 bg-white p-5 text-neutral-900"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-neutral-900">
              <ShieldCheck aria-hidden="true" className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-neutral-400">
                Escritório
              </p>
              <h3 className="mt-1 text-lg font-bold">Liderança jurídica</h3>
            </div>
          </div>
          <ul className="mt-5 space-y-3">
            {officeItems.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm font-medium text-neutral-600"
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

        <motion.section
          initial={reduceMotion ? false : laneMotion.initial}
          whileInView={reduceMotion ? undefined : laneMotion.whileInView}
          viewport={laneMotion.viewport}
          transition={{ ...laneMotion.transition, delay: reduceMotion ? 0 : 0.08 }}
          className="rounded-2xl bg-brand-400 p-5 text-neutral-950"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-950 text-brand-400">
              <ShieldCheck aria-hidden="true" className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-neutral-700">
                TOGETHER
              </p>
              <h3 className="mt-1 text-lg font-bold">Execução especializada</h3>
            </div>
          </div>
          <ul className="mt-5 space-y-3">
            {togetherItems.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm font-semibold text-neutral-800"
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
    </div>
  );
}
