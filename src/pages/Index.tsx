import { useRef } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { EmailSignup } from "@/components/EmailSignup";
import { AboutBook } from "@/components/AboutBook";
import { DreamFramework } from "@/components/DreamFramework";
import { AboutAuthor } from "@/components/AboutAuthor";
import { PodcastSection } from "@/components/PodcastSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const aboutAuthorRef = useRef<HTMLDivElement>(null);
  const podcastRef = useRef<HTMLDivElement>(null);
  const preOrderRef = useRef<HTMLDivElement>(null);

  const scrollToAboutAuthor = () => {
    aboutAuthorRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPodcast = () => {
    podcastRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPreOrder = () => {
    preOrderRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        onAboutAuthorClick={scrollToAboutAuthor}
        onPodcastClick={scrollToPodcast}
        onPreOrderClick={scrollToPreOrder}
      />
      
      <main className="flex-1">
        <HeroSection
          onPreOrderClick={scrollToPreOrder}
          onPodcastClick={scrollToPodcast}
        />
        
        <div ref={preOrderRef}>
          <EmailSignup />
        </div>
        
        <AboutBook />
        
        <DreamFramework />
        
        <div ref={aboutAuthorRef}>
          <AboutAuthor />
        </div>
        
        <div ref={podcastRef}>
          <PodcastSection />
        </div>
        
        {/* Second CTA Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Ready to Start Doing the Dream?
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Join the early access list for pre-orders, bonus content, and launch updates.
              </p>
              <EmailSignup variant="compact" />
            </div>
          </div>
        </section>
      </main>
      
      <Footer
        onAboutAuthorClick={scrollToAboutAuthor}
        onPodcastClick={scrollToPodcast}
      />
    </div>
  );
};

export default Index;
