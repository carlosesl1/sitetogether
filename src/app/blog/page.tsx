import { Navbar } from "@/components/ui/navbar";
import type { Metadata } from "next";
import { socialImages } from "@/lib/social-images";
import { Footer } from "@/components/ui/footer";
import { CTASection } from "@/components/ui/cta-section";
import { BlogHero } from "@/components/blog/blog-hero";
import { BlogGrid } from "@/components/blog/blog-grid";
import { toBlogListPost } from "@/lib/blog-list-post";
import { getAllPosts } from "@/lib/wordpress";

const title = "Blog | Privacidade, LGPD e Tecnologia";
const description =
  "Conteúdos da TOGETHER sobre privacidade, proteção de dados, LGPD e tecnologia para apoiar decisões e transformar conhecimento em prática.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "TOGETHER Privacy & Tech",
    url: "/blog",
    title,
    description,
    images: [socialImages.blog],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImages.blog],
  },
};

// This page is rendered at build time.
// Next.js fetches all posts from WordPress and bakes them into static HTML.
export default async function BlogPage() {
  const allPosts = await getAllPosts();
  const listPosts = allPosts.map(toBlogListPost);

  return (
    <main className="min-h-screen bg-white selection:bg-brand-400/30">
      <Navbar />
      
      <BlogHero />

      <section className="w-full pb-32 bg-white relative">
        <div className="container px-6 mx-auto relative z-10">
          <BlogGrid posts={listPosts} />

        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
