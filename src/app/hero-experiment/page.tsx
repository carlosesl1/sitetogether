import { notFound } from "next/navigation";
import { Navbar } from "@/components/ui/navbar";
import { HeroExperimentFresh } from "@/components/ui/hero-experiment-fresh";

export default function HeroExperimentPage() {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroExperimentFresh />
    </main>
  );
}
