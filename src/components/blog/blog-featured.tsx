"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import type { BlogListPost } from "@/lib/blog-list-post";

interface BlogFeaturedProps {
  post?: BlogListPost;
}

export function BlogFeatured({ post }: BlogFeaturedProps) {
  if (!post) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative w-full mb-12 md:mb-20"
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="bg-white rounded-b-[24px] md:rounded-b-[48px] shadow-2xl shadow-neutral-200/50 transition-shadow duration-700 hover:shadow-brand-400/20">
          {/* Keep the complete textual artwork separate from the article metadata. */}
          <div className="relative w-full aspect-[1216/600] bg-neutral-100">
          <Image
            src={post.featuredImage}
            alt={post.imageAlt}
            fill
            className="object-contain"
            sizes="(max-width: 1536px) 100vw, 1536px"
            priority
          />

          </div>

          <div className="px-6 pt-6 md:px-10 md:pt-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-400 text-neutral-900 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
              <span
                data-pause-offscreen-animation
                className="w-1.5 h-1.5 rounded-full bg-neutral-900 animate-pulse"
              ></span>
              Em Destaque
            </span>
          </div>

          <div className="p-6 md:p-10">
            <div className="flex flex-wrap items-center gap-3 mb-4 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
              <span className="text-brand-600">{post.category}</span>
              <span className="opacity-30">•</span>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>{post.dateLabel}</span>
              </div>
            </div>

            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 leading-tight mb-6 group-hover:text-brand-600 transition-colors line-clamp-3"
              dangerouslySetInnerHTML={{ __html: post.titleHtml }}
            />

            <div className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-neutral-900 group/btn">
              Ler artigo completo
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
