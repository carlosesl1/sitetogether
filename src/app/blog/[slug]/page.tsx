import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { CTASection } from "@/components/ui/cta-section";
import { PostContent } from "@/components/blog/post-content";
import { BlogCard } from "@/components/blog/blog-card";
import { ArticleToc } from "@/components/blog/article-toc";
import { toBlogListPost } from "@/lib/blog-list-post";
import { getAllPosts, getAllPostSlugs, getPostBySlug } from "@/lib/wordpress";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { notFound } from "next/navigation";

// Optional helper to extract H2 for the Table of Contents dynamically
function normalizePostLinks(html: string) {
  return html.replace(/\shref=(["'])(.*?)\1/gi, (match, quote: string, rawHref: string) => {
    const fixedMalformedHref = rawHref.replace(
      /^http:\/\/\(https:\/\/togetherprivacy\.tech\/(.+?)\/?\)$/i,
      "https://togetherprivacy.tech/$1",
    );

    try {
      const url = new URL(fixedMalformedHref);
      if (url.hostname === "togetherprivacy.tech") {
        const segments = url.pathname.split("/").filter(Boolean);
        if (segments.length === 1) {
          return ` href=${quote}/blog/${segments[0]}${quote}`;
        }
      }
    } catch {
      return match;
    }

    return ` href=${quote}${fixedMalformedHref}${quote}`;
  });
}

function processContentForToC(html: string) {
  const headings: { id: string; text: string; level: string }[] = [];
  const normalizedHtml = normalizePostLinks(html);
  
  const contentWithIds = normalizedHtml.replace(/<(h[2])([^>]*)>(.*?)<\/\1>/gi, (fullMatch, tag, attrs, innerRaw) => {
    // Strip inner HTML tags (e.g., <strong>) to get plain text
    const innerText = innerRaw.replace(/<[^>]+>/g, '').trim();
    if (!innerText) return fullMatch;

    // Create a URL-friendly ID
    let id = innerText.toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // remove accents
      .replace(/[^a-z0-9]+/g, '-') // replace non-alphanumeric with dashes
      .replace(/(^-|-$)/g, ''); // trim dashes

    // Prevent duplicate IDs
    if (headings.some(h => h.id === id)) {
      id = `${id}-${headings.length}`;
    }

    headings.push({ id, text: innerText, level: tag.toLowerCase() });
    
    // Inject the ID into the HTML if it doesn't already have one
    if (attrs.includes('id=')) return fullMatch;
    
    return `<${tag}${attrs} id="${id}">${innerRaw}</${tag}>`;
  });

  return { headings, contentWithIds };
}

// Required for static export (output: 'export').
// At build time, Next.js calls this to know ALL slugs that need to be
// pre-rendered as static HTML files.
export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { headings, contentWithIds } = processContentForToC(post.content.rendered);

  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || "/placeholder-blog.jpg";
  const termArrays = post._embedded?.['wp:term'] || [];
  const category = termArrays[1]?.[0]?.name || termArrays[0]?.[0]?.name || "Notícias";
  const date = new Date(post.date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const allPosts = await getAllPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 3).map(toBlogListPost);
  const postUrl = `https://togetherprivacy.tech/blog/${post.slug}`;
  const encodedPostUrl = encodeURIComponent(postUrl);
  const encodedPostTitle = encodeURIComponent(post.title.rendered.replace(/<[^>]+>/g, ""));
  const shareLinks = [
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedPostUrl}`,
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/?text=${encodedPostTitle}%20${encodedPostUrl}`,
    },
    {
      label: "E-mail",
      href: `mailto:?subject=${encodedPostTitle}&body=${encodedPostUrl}`,
    },
  ];

  const titleLength = post.title.rendered.length;
  const titleSizeClass = 
    titleLength > 80 ? "text-2xl md:text-4xl lg:text-4xl" :
    titleLength > 50 ? "text-3xl md:text-4xl lg:text-5xl" :
    "text-3xl md:text-5xl lg:text-[56px]";

  return (
    <main className="min-h-screen overflow-x-clip bg-white">
      <Navbar />

      {/* Post Hero Header */}
      <section className="relative pt-[48px] pb-2 overflow-hidden">
        {/* Background Blur Image */}
        <div className="absolute inset-0 -z-10 opacity-20 blur-[100px] scale-150">
          <Image src={featuredImage} alt="" fill className="object-cover" />
        </div>

        <div className="container px-6 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[10px] font-black text-brand-600 uppercase tracking-widest mb-6 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft className="w-3 h-3" />
              Voltar para o blog
            </Link>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
              <span className="text-brand-600">{category}</span>
              <span className="opacity-30">•</span>
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5" />
                <span>{date}</span>
              </div>
              <span className="opacity-30">•</span>
              <div className="flex items-center gap-2">
                <User className="w-3.5 h-3.5" />
                <span>Together Team</span>
              </div>
            </div>

            <h1
              className={`${titleSizeClass} font-bold tracking-tight text-neutral-900 leading-[1.1] mb-8`}
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />

            {/* Featured Image */}
            <div className="relative w-full aspect-[21/9] max-h-[250px] md:max-h-[350px] rounded-[24px] md:rounded-[40px] overflow-hidden shadow-2xl shadow-neutral-200/50 mb-6 animate-in fade-in slide-in-from-bottom-10 duration-1000">
              <Image
                src={featuredImage}
                alt={post.title.rendered}
                fill
                className="object-cover"
                priority
              />
            </div>

          </div>
        </div>
      </section>

      {/* Post Content & Sidebar */}
      <section className="w-full overflow-x-clip pb-32">
        <div className="container px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid min-w-0 grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Content Column */}
              <div className="min-w-0 lg:col-span-8 animate-in mt-2 fade-in slide-in-from-bottom-5 duration-1000 delay-300">

                <PostContent content={contentWithIds} />

                {/* Share Bottom */}
                <div className="mt-20 pt-10 border-t border-neutral-100 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Compartilhar</span>
                    <div className="flex gap-2">
                      {shareLinks.map((share) => (
                        <Link
                          key={share.label}
                          href={share.href}
                          aria-label={`Compartilhar no ${share.label}`}
                          target={share.href.startsWith("mailto:") ? undefined : "_blank"}
                          rel={share.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                          className="w-10 h-10 rounded-xl bg-neutral-50 flex items-center justify-center text-neutral-400 hover:bg-neutral-900 hover:text-white transition-all"
                        >
                          <Share2 className="w-4 h-4" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="min-w-0 lg:col-span-4 lg:sticky lg:top-32 h-fit">
                {headings.length > 0 && <ArticleToc headings={headings} />}

                <div className="p-1.5 bg-neutral-900 rounded-[32px]">
                  <div className="p-8 bg-neutral-900 rounded-[30.5px] text-white">
                    <h4 className="text-xl font-bold mb-4">Precisa de um DPO?</h4>
                    <p className="text-sm text-neutral-400 mb-6 font-medium">Garanta a conformidade da sua empresa hoje mesmo.</p>
                    <Link href="/contato" data-blog-dpo-cta className="blog-dpo-cta-button">
                      <span className="max-w-full">Falar com especialista</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Read Next Section */}
      <section className="w-full py-32 bg-neutral-50 relative overflow-hidden">
        <div className="container px-6 mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <h2 className="text-4xl font-bold tracking-tight text-neutral-900 leading-tight">
              Continue <span className="text-neutral-400 italic font-light">Lendo.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post, idx) => (
              <BlogCard key={post.id} post={post} index={idx} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
