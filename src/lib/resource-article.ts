import type { WPPost } from "./blog-data";

export interface ResourceArticle {
  title: string;
  category: string;
  author: string;
  image: string;
  readTime: string;
  link: string;
}

function stripHtml(value: string) {
  return value.replace(/<[^>]+>/g, " ");
}

export function toResourceArticle(post: WPPost): ResourceArticle {
  const termArrays = post._embedded?.["wp:term"] ?? [];
  const terms = termArrays.flat();
  const tags = terms.filter((term) => term.taxonomy === "post_tag");
  const categories = terms.filter((term) => term.taxonomy === "category");
  const category = tags[0]?.name || categories[0]?.name || "Notícias";
  const author = post._embedded?.author?.[0]?.name || "Equipe TOGETHER";
  const image =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop";
  const wordCount = stripHtml(post.content.rendered).trim().split(/\s+/).filter(Boolean).length;
  const readTimeMinutes = Math.max(1, Math.ceil(wordCount / 200));

  return {
    title: post.title.rendered,
    category,
    author,
    image,
    readTime: `${readTimeMinutes} min`,
    link: `/blog/${post.slug}`,
  };
}
