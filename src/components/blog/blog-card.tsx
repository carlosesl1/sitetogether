"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { BlogListPost } from "@/lib/blog-list-post";

interface BlogCardProps {
  post: BlogListPost;
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col h-full bg-white border border-neutral-100 rounded-[32px] overflow-hidden hover:border-brand-400/30 transition-all duration-500"
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-[152/75] overflow-hidden bg-neutral-900 mb-8">
          <Image
            src={post.featuredImage}
            alt={post.imageAlt}
            fill
            className="object-contain"
          />
        </div>

        <div className="px-8 pb-8">
          <div className="flex items-center gap-3 mb-4 text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-400">
            <span className="text-brand-600">{post.category}</span>
            <span className="opacity-30">•</span>
            <span>{post.dateLabel}</span>
          </div>

          <h3
            className="text-xl md:text-2xl font-bold text-neutral-900 tracking-tight leading-snug group-hover:text-brand-600 transition-colors duration-300 line-clamp-2"
            dangerouslySetInnerHTML={{ __html: post.titleHtml }}
          />
        </div>
      </Link>
    </motion.div>
  );
}
