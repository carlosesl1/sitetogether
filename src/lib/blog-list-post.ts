import type { WPPost } from "./blog-data";

export interface BlogListPost {
  id: number;
  slug: string;
  titleHtml: string;
  featuredImage: string;
  imageAlt: string;
  category: string;
  dateLabel: string;
  searchText: string;
}

function stripHtml(value: string) {
  return value.replace(/<[^>]*>/g, " ");
}

export function toBlogListPost(post: WPPost): BlogListPost {
  const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];
  const termArrays = post._embedded?.["wp:term"] ?? [];
  const terms = termArrays.flat();
  const tags = terms.filter((term) => term.taxonomy === "post_tag");
  const categories = terms.filter((term) => term.taxonomy === "category");
  const category = tags[0]?.name || categories[0]?.name || "Notícias";

  const dateLabel = new Date(post.date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const searchText = [
    stripHtml(post.title.rendered),
    stripHtml(post.excerpt.rendered),
    ...terms.flatMap((term) => [term.name, term.slug, term.taxonomy]),
  ].join(" ");

  return {
    id: post.id,
    slug: post.slug,
    titleHtml: post.title.rendered,
    featuredImage: featuredMedia?.source_url || "/placeholder-blog.jpg",
    imageAlt: featuredMedia?.alt_text || stripHtml(post.title.rendered),
    category,
    dateLabel,
    searchText,
  };
}
