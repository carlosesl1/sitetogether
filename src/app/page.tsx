import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/ui/hero";
import { Challenges } from "@/components/ui/challenges";
import { PainPoints } from "@/components/ui/pain-points";
import { SolutionsSummary } from "@/components/ui/solutions-summary";
import { SocialProof } from "@/components/ui/social-proof";
import { Methodology } from "@/components/ui/methodology";
import { Offers } from "@/components/ui/offers";
import { WhyTogether } from "@/components/ui/why-together";
import { FAQSection } from "@/components/ui/faq-section";
import { CTASection } from "@/components/ui/cta-section";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Challenges />
      <PainPoints />
      <SolutionsSummary />
      <SocialProof />
      <Methodology />
      <Offers />
      <WhyTogether />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
