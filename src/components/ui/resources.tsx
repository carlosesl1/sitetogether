"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Clock, User, ChevronRight } from "lucide-react";
import Link from "next/link";
import type { ResourceArticle } from "@/lib/resource-article";
import { ActionLink, SectionPill } from "@/components/ui/site-primitives";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";

const articles: ResourceArticle[] = [
    {
        title: "Vendor Assessment: Como preparar sua empresa para grandes clientes.",
        category: "Estratégia",
        author: "Carlos Silveira",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        readTime: "5 min",
        link: "/blog",
    },
    {
        title: "O papel da tecnologia na conformidade LGPD em 2026.",
        category: "Tecnologia",
        author: "Ana Beatriz",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2340&auto=format&fit=crop",
        readTime: "8 min",
        link: "/blog",
    },
    {
        title: "Reduzindo custos operacionais com DPO as a Service.",
        category: "Operações",
        author: "Ricardo Mendonça",
        image: "https://images.unsplash.com/photo-1454165833767-1316b044633b?q=80&w=2340&auto=format&fit=crop",
        readTime: "6 min",
        link: "/blog",
    }
];

export function Resources({ posts = [] }: { posts?: ResourceArticle[] }) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const displayArticles = posts.length > 0 ? posts : articles;
    
    return (
        <section className="w-full py-32 md:py-48 bg-[#0a0a0a] overflow-hidden relative" id="resources">
            <PixelDecor placement="topRight" mask="topRight" opacity={0.24} />
            {/* Top Border Line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <div className="container px-6 mx-auto relative z-10">
                <div className="flex flex-col items-center text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <SectionPill tone="dark">Blog</SectionPill>
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-[1.1] mb-6">
                        Conteúdo técnico para <br />
                        <span className="text-brand-500 italic font-light">decisões estratégicas.</span>
                    </h2>

                    <p className="text-neutral-500 font-medium mb-12 max-w-lg">
                        Mantenha sua empresa à frente da regulação.
                    </p>

                    {/* View More Button - Positioned above cards */}
                    <ActionLink href="/blog" variant="light" size="md" className="mb-16">
                        Ver todos os posts do blog
                    </ActionLink>

                    <div className="w-24 h-px bg-brand-400/30"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-12 max-w-7xl mx-auto">
                    {displayArticles.map((article, i) => {
                        // Logic: First image color by default, others grayscale. 
                        // If anything is hovered, only the hovered one is colored.
                        const isColor = hoveredIndex === null ? i === 0 : hoveredIndex === i;

                        return (
                            <Link href={article.link} key={i}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8 }}
                                className="group cursor-pointer"
                                onMouseEnter={() => setHoveredIndex(i)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className="relative aspect-[16/9] rounded-[32px] overflow-hidden mb-8 bg-neutral-900 border border-white/5 shadow-2xl transition-all duration-700 group-hover:border-brand-400/40 group-hover:-translate-y-2">
                                    {/* Remote WordPress/Unsplash images are intentionally left as img to avoid locking the CMS to a fixed allowlist. */}
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        loading="lazy"
                                        decoding="async"
                                        className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 ${isColor ? 'grayscale-0 opacity-100' : 'grayscale opacity-40'
                                            }`}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                                    <div className="absolute top-8 left-8">
                                        <span className={`px-4 py-2 rounded-full backdrop-blur-md border border-white/10 text-[9px] font-bold uppercase tracking-[0.2em] transition-colors duration-500 ${isColor ? 'bg-brand-400 text-black border-brand-400' : 'bg-black/60 text-white'
                                            }`}>
                                            {article.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-6 text-center md:text-left px-2">
                                    <div className="flex items-center justify-center md:justify-start gap-6 text-[10px] font-bold text-neutral-500 uppercase tracking-[0.2em]">
                                        <div className="flex items-center gap-2">
                                            <Clock className={`w-3.5 h-3.5 transition-colors ${i === 0 || hoveredIndex === i ? 'text-brand-400' : ''}`} />
                                            {article.readTime}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <User className={`w-3.5 h-3.5 transition-colors ${i === 0 || hoveredIndex === i ? 'text-brand-400' : ''}`} />
                                            {article.author}
                                        </div>
                                    </div>
                                    <h3 className={`text-2xl font-bold leading-[1.2] transition-colors duration-500 line-clamp-2 ${isColor ? 'text-white' : 'text-neutral-400'
                                        } group-hover:text-brand-400`}>
                                        {article.title}
                                    </h3>
                                    <div className={`flex items-center justify-center md:justify-start gap-2 font-bold uppercase text-[9px] tracking-[0.3em] transition-all duration-500 ${isColor ? 'text-white opacity-100' : 'text-neutral-600 opacity-0 group-hover:opacity-100 group-hover:text-brand-400'
                                        }`}>
                                        Ler Artigo Completo <ChevronRight className="w-3.5 h-3.5" />
                                    </div>
                                </div>
                            </motion.div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
