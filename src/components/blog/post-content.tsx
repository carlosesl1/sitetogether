"use client";

import { motion } from "framer-motion";

interface PostContentProps {
  content: string;
}

export function PostContent({ content }: PostContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="prose prose-lg prose-neutral max-w-none min-w-0 overflow-x-clip break-words [overflow-wrap:anywhere]
        prose-headings:text-neutral-900 prose-headings:font-bold prose-headings:tracking-tight
        prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8
        prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6
        prose-p:text-neutral-500 prose-p:leading-relaxed prose-p:mb-8 prose-p:font-medium
        prose-strong:text-neutral-900 prose-strong:font-bold
        prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-8
        prose-li:text-neutral-500 prose-li:mb-3 prose-li:font-medium
        prose-blockquote:border-l-4 prose-blockquote:border-brand-400 prose-blockquote:bg-neutral-50 prose-blockquote:py-8 prose-blockquote:px-10 prose-blockquote:rounded-r-3xl prose-blockquote:italic prose-blockquote:text-neutral-900 prose-blockquote:font-medium
        prose-img:rounded-[32px] prose-img:shadow-2xl prose-img:my-16
        [&_a]:[overflow-wrap:anywhere] [&_figure]:max-w-full [&_img]:h-auto [&_img]:max-w-full [&_iframe]:max-w-full [&_pre]:overflow-x-auto [&_table]:max-w-full
      "
    >
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </motion.div>
  );
}
