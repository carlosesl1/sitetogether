"use client";

import { useMemo, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import type { BlogListPost } from "@/lib/blog-list-post";
import { BlogCard } from "./blog-card";
import { BlogFeatured } from "./blog-featured";

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
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_POSTS);
  const searchTerms = useMemo(() => normalize(query).trim().split(/\s+/).filter(Boolean), [query]);
  const isFiltering = searchTerms.length > 0 || activeFilter !== "Todos";

  const filteredPosts = useMemo(
    () => posts.filter((post) => postMatchesFilter(post, activeFilter)
      && searchTerms.every((term) => normalize(post.searchText).includes(term))),
    [activeFilter, posts, searchTerms],
  );
  const gridPosts = isFiltering ? filteredPosts : filteredPosts.slice(1);
  const visiblePosts = gridPosts.slice(0, visibleCount);
  const hasMorePosts = visibleCount < gridPosts.length;

  function handleFilterChange(filterLabel: string) {
    setActiveFilter(filterLabel);
    setVisibleCount(INITIAL_VISIBLE_POSTS);
  }

  return (
    <>
      <div role="search" aria-label="Pesquisa de artigos" className="mx-auto mb-10 mt-8 max-w-2xl md:mb-12">
        <label htmlFor="blog-search" className="mb-3 block text-xs font-bold uppercase tracking-widest text-neutral-700">
          Pesquisar no blog
        </label>
        <div className="relative">
          <Search aria-hidden="true" className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
          <input
            ref={searchRef}
            id="blog-search"
            name="q"
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setVisibleCount(INITIAL_VISIBLE_POSTS);
            }}
            placeholder="Busque por LGPD, segurança, inteligência artificial..."
            aria-controls="blog-results"
            className="h-14 w-full rounded-2xl border border-neutral-200 bg-neutral-50 pl-14 pr-14 text-base text-neutral-900 outline-none transition-colors placeholder:text-neutral-500 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-400/30 [&::-webkit-search-cancel-button]:appearance-none"
          />
          {query && (
            <button
              type="button"
              aria-label="Limpar pesquisa"
              onClick={() => {
                setQuery("");
                setVisibleCount(INITIAL_VISIBLE_POSTS);
                searchRef.current?.focus();
              }}
              className="absolute right-1 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-xl text-neutral-500 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-brand-500"
            >
              <X aria-hidden="true" className="h-4 w-4" />
            </button>
          )}
        </div>
        <p className="mt-3 text-sm text-neutral-500">Pesquise por título, resumo ou tema.</p>
      </div>

      {!isFiltering && <BlogFeatured post={posts[0]} />}

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

      <p role="status" aria-atomic="true" className="mb-6 text-sm text-neutral-500">
        {isFiltering ? `${filteredPosts.length} ${filteredPosts.length === 1 ? "artigo encontrado" : "artigos encontrados"}${activeFilter !== "Todos" ? ` em ${activeFilter}` : ""}.` : ""}
      </p>
      <div id="blog-results">
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
            Tente outro termo ou selecione outra categoria.
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
      </div>
    </>
  );
}
