/**
 * WordPress REST API integration
 * Fetches posts from the Together Privacy WordPress instance.
 *
 * How it works:
 * - At build time (npm run build), Next.js calls these functions to pre-generate
 *   all pages as static HTML.
 * - When deployed, all pages are served instantly as static files.
 * - A WordPress webhook fires each time a post is published/updated, which
 *   triggers a new build automatically (via GitHub Actions or Hostinger webhook).
 */

const DEFAULT_WP_BASE_URL = "https://togetherprivacy.tech/wp-json/wp/v2";
const WP_BASE_URL = (
  process.env.WORDPRESS_API_URL ||
  process.env.NEXT_PUBLIC_WORDPRESS_API_URL ||
  DEFAULT_WP_BASE_URL
).replace(/\/$/, "");

// Re-export the type so components can use it from this central file
export type { WPPost } from "./blog-data";
import type { WPPost } from "./blog-data";

async function getCachedPosts(): Promise<WPPost[] | null> {
  if (process.env.WORDPRESS_CACHE_DISABLED === "true") {
    return null;
  }

  try {
    const [{ readFile }, { join }] = await Promise.all([
      import("node:fs/promises"),
      import("node:path"),
    ]);
    const cachePath = join(process.cwd(), "public", "data", "blog-posts.json");
    const raw = await readFile(cachePath, "utf8");
    const posts = JSON.parse(raw) as unknown;

    if (Array.isArray(posts)) {
      return posts as WPPost[];
    }
  } catch {
    // Cache is optional. Builds can still fall back to the live API or mock data.
  }

  return null;
}

/**
 * Fetches all published posts from WordPress.
 * Requests up to 100 posts per page with embedded media and terms.
 */
export async function getAllPosts(perPage = 100): Promise<WPPost[]> {
  const cachedPosts = await getCachedPosts();
  if (cachedPosts?.length) {
    return cachedPosts.slice(0, perPage);
  }

  try {
    const url = `${WP_BASE_URL}/posts?_embed=true&per_page=${perPage}&status=publish&orderby=date&order=desc`;

    const res = await fetch(url, {
      // `next: { revalidate }` is used in server-mode (ISR).
      // In static export mode, this is effectively ignored — the fetch
      // runs once at build time and the result is baked into the HTML.
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error(`WordPress API error: ${res.status} ${res.statusText}`);
      return getFallbackPosts();
    }

    const posts: WPPost[] = await res.json();
    return posts;
  } catch (error) {
    console.error("Failed to fetch posts from WordPress:", error);
    // Gracefully fall back to mock data so builds don't fail
    return getFallbackPosts();
  }
}

/**
 * Fetches a single post by its slug.
 */
export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const cachedPosts = await getCachedPosts();
  const cachedPost = cachedPosts?.find((post) => post.slug === slug);
  if (cachedPost) {
    return cachedPost;
  }

  try {
    const url = `${WP_BASE_URL}/posts?_embed=true&slug=${encodeURIComponent(slug)}`;

    const res = await fetch(url, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error(`WordPress API error for slug "${slug}": ${res.status}`);
      return getFallbackPostBySlug(slug);
    }

    const posts: WPPost[] = await res.json();
    return posts[0] ?? null;
  } catch (error) {
    console.error(`Failed to fetch post "${slug}" from WordPress:`, error);
    return getFallbackPostBySlug(slug);
  }
}

/**
 * Returns all slugs — used by Next.js generateStaticParams to pre-render
 * every post at build time.
 */
export async function getAllPostSlugs(): Promise<string[]> {
  const posts = await getAllPosts();
  return posts.map((p) => p.slug);
}

// ---------------------------------------------------------------------------
// Fallback data (mock) — used when the WordPress API is unreachable during
// development or CI builds without network access.
// ---------------------------------------------------------------------------

import { MOCK_POSTS } from "./blog-data";

function getFallbackPosts(): WPPost[] {
  console.warn("⚠️  Using mock posts as fallback. Check WordPress connectivity.");
  return MOCK_POSTS;
}

function getFallbackPostBySlug(slug: string): WPPost | null {
  return MOCK_POSTS.find((p) => p.slug === slug) ?? null;
}
