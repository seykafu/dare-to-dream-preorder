import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { DreamPentagon } from "@/components/DreamPentagon";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { StickyJoinPill } from "@/components/StickyJoinPill";
import { BackgroundText } from "@/components/BackgroundText";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Faded professional text background */}
      <BackgroundText />

      <Header />

      <main className="flex-1 relative z-10">
        <HeroSection />
        <DreamPentagon />
        <AboutSection />
      </main>

      <Footer />
      <StickyJoinPill />
    </div>
  );
}
