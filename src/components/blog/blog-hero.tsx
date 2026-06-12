"use client";

import { motion } from "framer-motion";

export function BlogHero() {
  return (
    <section className="relative pt-24 md:pt-16 pb-4 overflow-hidden bg-white">
      {/* Background patterns from design system */}
      <div className="absolute inset-0 opacity-[0.03] -z-10"
        style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Ambient glows */}
      <div className="absolute top-0 right-[-10%] w-[50%] h-[70%] bg-gradient-to-bl from-brand-100/30 to-transparent blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-gradient-to-tr from-neutral-100/40 to-transparent blur-[100px] rounded-full" />

      <div className="container px-6 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section numbering pattern */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="text-[10px] font-black text-brand-600 uppercase tracking-[0.3em]">
              01 / Insights & Notícias
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.1] mb-4"
          >
            Nosso Blog de <span className="text-brand-500 italic font-light">Privacidade & Tech.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-base text-neutral-500 max-w-2xl mx-auto font-medium"
          >
            As últimas tendências regulatórias e estratégias de conformidade.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
