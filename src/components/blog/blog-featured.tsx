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
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative w-full mb-12 md:mb-20"
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="w-full rounded-[24px] md:rounded-[48px] overflow-hidden bg-white border border-neutral-100 shadow-2xl shadow-neutral-200/50 transition-all duration-700 hover:border-brand-400/30 hover:shadow-brand-400/20">
          <div className="relative w-full aspect-[152/75] bg-neutral-900">
            <Image
              src={post.featuredImage}
              alt={post.imageAlt}
              fill
              className="object-contain"
              priority
            />
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
