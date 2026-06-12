"use client";

import { useMemo, useState } from "react";
import type { BlogListPost } from "@/lib/blog-list-post";
import { BlogCard } from "./blog-card";

interface BlogGridProps {
  posts: BlogListPost[];
}

const INITIAL_VISIBLE_POSTS = 9;
const POSTS_INCREMENT = 9;

const BLOG_FILTERS = [
  { label: "Todos", aliases: [] },
  { label: "LGPD", aliases: ["lgpd", "lei geral de protecao de dados"] },
  {
    label: "Compliance",
    aliases: ["compliance", "conformidade", "governanca", "anpd", "ripd", "dpia", "dpo", "fornecedores"],
  },
  {
    label: "Segurança",
    aliases: ["seguranca", "incidente", "vazamento", "autenticacao", "risco"],
  },
  {
    label: "Tech",
    aliases: ["tech", "tecnologia", "ia", "inteligencia artificial", "generativa", "deepfake", "saas", "microsaas", "chatgpt", "geolocalizacao", "data brokers"],
  },
] as const;

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function containsAlias(searchText: string, alias: string) {
  const normalizedAlias = normalize(alias).trim();

  if (!normalizedAlias) {
    return false;
  }

  if (/^[a-z0-9]+$/.test(normalizedAlias)) {
    return new RegExp(`(^|[^a-z0-9])${escapeRegExp(normalizedAlias)}([^a-z0-9]|$)`).test(searchText);
  }

  return searchText.includes(normalizedAlias);
}

function postMatchesFilter(post: BlogListPost, filterLabel: string) {
  const filter = BLOG_FILTERS.find((item) => item.label === filterLabel);

  if (!filter || filter.label === "Todos") {
    return true;
  }

  const searchText = normalize(post.searchText);
  return filter.aliases.some((alias) => containsAlias(searchText, alias));
}

export function BlogGrid({ posts }: BlogGridProps) {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_POSTS);

  const filteredPosts = useMemo(
    () => posts.filter((post) => postMatchesFilter(post, activeFilter)),
    [activeFilter, posts],
  );
  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMorePosts = visibleCount < filteredPosts.length;

  function handleFilterChange(filterLabel: string) {
    setActiveFilter(filterLabel);
    setVisibleCount(INITIAL_VISIBLE_POSTS);
  }

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-tight mb-4">
            Artigos <span className="text-brand-500 italic font-light">Recentes.</span>
          </h2>
          <p className="text-lg text-neutral-500 font-medium">
            Explore nosso arquivo de conteúdos técnicos e regulatórios.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {BLOG_FILTERS.map((filter) => {
            const isActive = filter.label === activeFilter;

            return (
              <button
                key={filter.label}
                type="button"
                aria-pressed={isActive}
                onClick={() => handleFilterChange(filter.label)}
                className={`px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                  isActive
                    ? "bg-neutral-900 text-white shadow-lg"
                    : "bg-neutral-50 text-neutral-500 border border-neutral-100 hover:bg-neutral-100"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </div>

      {visiblePosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visiblePosts.map((post, index) => (
            <BlogCard key={`${activeFilter}-${post.id}`} post={post} index={index} />
          ))}
        </div>
      ) : (
        <div className="rounded-[32px] border border-neutral-100 bg-neutral-50 px-8 py-14 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-600">
            Nenhum artigo encontrado
          </p>
          <p className="mt-3 text-base font-medium text-neutral-500">
            Tente outra categoria para explorar os conteúdos disponíveis.
          </p>
        </div>
      )}

      {hasMorePosts && (
        <div className="mt-20 flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((current) => current + POSTS_INCREMENT)}
            className="h-14 px-10 text-sm font-bold uppercase tracking-widest text-neutral-900 border border-neutral-200 rounded-2xl hover:bg-neutral-50 transition-colors"
          >
            Carregar mais artigos
          </button>
        </div>
      )}
    </>
  );
}
