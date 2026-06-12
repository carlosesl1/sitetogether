import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const DEFAULT_WP_BASE_URL = "https://togetherprivacy.tech/wp-json/wp/v2";
const WP_BASE_URL = (
  process.env.WORDPRESS_API_URL ||
  process.env.NEXT_PUBLIC_WORDPRESS_API_URL ||
  DEFAULT_WP_BASE_URL
).replace(/\/$/, "");
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://togetherprivacy.tech"
).replace(/\/$/, "");

const rootDir = process.cwd();
const dataDir = path.join(rootDir, "public", "data");
const postsPath = path.join(dataDir, "blog-posts.json");
const syncPath = path.join(dataDir, "blog-sync.json");
const sitemapPath = path.join(rootDir, "public", "sitemap.xml");

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText} while fetching ${url}`);
  }

  return {
    data: await response.json(),
    totalPages: Number(response.headers.get("x-wp-totalpages") || "1"),
  };
}

async function fetchAllPosts() {
  const posts = [];
  let page = 1;
  let totalPages = 1;

  do {
    const url = new URL(`${WP_BASE_URL}/posts`);
    url.searchParams.set("_embed", "true");
    url.searchParams.set("per_page", "100");
    url.searchParams.set("status", "publish");
    url.searchParams.set("orderby", "date");
    url.searchParams.set("order", "desc");
    url.searchParams.set("page", String(page));

    const result = await fetchJson(url.toString());
    if (!Array.isArray(result.data)) {
      throw new Error("WordPress posts response is not an array.");
    }

    posts.push(...result.data);
    totalPages = result.totalPages;
    page += 1;
  } while (page <= totalPages);

  return posts;
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function buildSitemap(posts) {
  const staticRoutes = [
    "",
    "/eca-digital",
    "/blog",
    "/contato",
    "/servicos/dpo-as-a-service",
    "/servicos/consultoria-adequacao",
    "/servicos/mentoria-e-cultura",
  ];

  const urls = [
    ...staticRoutes.map((route) => ({
      loc: `${SITE_URL}${route}`,
      lastmod: new Date().toISOString(),
    })),
    ...posts.map((post) => ({
      loc: `${SITE_URL}/blog/${post.slug}`,
      lastmod: post.modified_gmt
        ? new Date(`${post.modified_gmt}Z`).toISOString()
        : new Date(post.date).toISOString(),
    })),
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls
      .map(
        (url) =>
          `  <url>\n` +
          `    <loc>${escapeXml(url.loc)}</loc>\n` +
          `    <lastmod>${escapeXml(url.lastmod)}</lastmod>\n` +
          `  </url>`,
      )
      .join("\n") +
    `\n</urlset>\n`;
}

async function readExistingCache() {
  if (!existsSync(postsPath)) {
    return null;
  }

  try {
    const raw = await readFile(postsPath, "utf8");
    const posts = JSON.parse(raw);
    return Array.isArray(posts) ? posts : null;
  } catch {
    return null;
  }
}

try {
  const posts = await fetchAllPosts();

  await mkdir(dataDir, { recursive: true });
  await writeFile(postsPath, `${JSON.stringify(posts, null, 2)}\n`, "utf8");
  await writeFile(
    syncPath,
    `${JSON.stringify(
      {
        ok: true,
        source: WP_BASE_URL,
        siteUrl: SITE_URL,
        generatedAt: new Date().toISOString(),
        count: posts.length,
        slugs: posts.map((post) => post.slug),
      },
      null,
      2,
    )}\n`,
    "utf8",
  );
  await writeFile(sitemapPath, buildSitemap(posts), "utf8");

  console.log(`Synced ${posts.length} WordPress posts into public/data/blog-posts.json`);
} catch (error) {
  const existingPosts = await readExistingCache();
  if (existingPosts?.length) {
    console.warn(
      `WordPress sync failed, keeping existing cache with ${existingPosts.length} posts: ${error.message}`,
    );
  } else {
    console.warn(`WordPress sync failed and no cache exists: ${error.message}`);
  }
}
