import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { DreamPentagon } from "@/components/DreamPentagon";
import { AboutSection } from "@/components/AboutSection";
import { PodcastEmbed } from "@/components/PodcastEmbed";
import { EmailUnlockCard } from "@/components/EmailUnlockCard";
import { Footer } from "@/components/Footer";
import { StickyJoinPill } from "@/components/StickyJoinPill";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        <EmailUnlockCard />
        <DreamPentagon />
        <AboutSection />
        <PodcastEmbed />
      </main>
      
      <Footer />
      <StickyJoinPill />
    </div>
  );
}
