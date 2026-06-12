import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { CTASection } from "@/components/ui/cta-section";
import { BlogHero } from "@/components/blog/blog-hero";
import { BlogFeatured } from "@/components/blog/blog-featured";
import { BlogGrid } from "@/components/blog/blog-grid";
import { toBlogListPost } from "@/lib/blog-list-post";
import { getAllPosts } from "@/lib/wordpress";

// This page is rendered at build time.
// Next.js fetches all posts from WordPress and bakes them into static HTML.
export default async function BlogPage() {
  const allPosts = await getAllPosts();
  const listPosts = allPosts.map(toBlogListPost);
  const featuredPost = listPosts[0];
  const remainingPosts = listPosts.slice(1);

  return (
    <main className="min-h-screen bg-white selection:bg-brand-400/30">
      <Navbar />
      
      <BlogHero />

      <section className="w-full pb-32 bg-white relative">
        <div className="container px-6 mx-auto relative z-10">
          {/* Featured Post */}
          <BlogFeatured post={featuredPost} />

          <BlogGrid posts={remainingPosts} />

        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
