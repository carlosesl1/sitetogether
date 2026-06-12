import { Navbar } from "@/components/ui/navbar";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { toResourceArticle } from "@/lib/resource-article";
import { getAllPosts } from "@/lib/wordpress";
import { AuthorityStrip } from "@/components/ui/authority-strip";
import { SegmentationExperiment } from "@/components/ui/segmentation-experiment";
import { ProposalComparison } from "@/components/ui/proposal-comparison";
import { TechIntegration } from "@/components/ui/tech-integration";
import { Offers } from "@/components/ui/offers";
import { Methodology } from "@/components/ui/methodology";
import { Resources } from "@/components/ui/resources";
import { FAQSection } from "@/components/ui/faq-section";
import { CTASection } from "@/components/ui/cta-section";
import { Footer } from "@/components/ui/footer";

import { HeroV17 } from "@/components/ui/hero-v17";

export default async function Home() {
  const wpPosts = await getAllPosts(3);
  const recentPosts = wpPosts.map(toResourceArticle);

  return (
    <main className="min-h-screen bg-white">
      <EcaDigitalAnnouncement />
      <Navbar />

      <HeroV17 />


      <AuthorityStrip />
      <SegmentationExperiment />
      <ProposalComparison />

      <div className="relative z-10">
        <TechIntegration />
      </div>
      <Offers />
      <Methodology />
      <Resources posts={recentPosts} />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}

function EcaDigitalAnnouncement() {
  return (
    <section className="border-b border-neutral-800 bg-neutral-950 text-white">
      <div className="container mx-auto flex min-h-11 flex-col items-start justify-center gap-2 px-4 py-2 sm:min-h-10 sm:flex-row sm:items-center sm:justify-center sm:px-6">
        <p className="min-w-0 text-[11px] font-semibold leading-snug text-neutral-200 sm:text-xs">
          <span className="mr-2 inline-flex rounded-full bg-brand-400 px-2 py-0.5 text-[9px] font-black uppercase leading-none tracking-[0.16em] text-neutral-950">
            Novo
          </span>
          ECA Digital: entenda se sua empresa precisa se adequar às novas obrigações.
        </p>
        <Link
          href="/eca-digital"
          className="group inline-flex shrink-0 items-center gap-1.5 text-[11px] font-bold uppercase leading-none tracking-[0.14em] text-brand-400 transition-colors hover:text-white sm:text-xs"
        >
          Ver diagnóstico
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}
