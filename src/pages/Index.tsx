import { useRef } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { EmailSignup } from "@/components/EmailSignup";
import { AboutBook } from "@/components/AboutBook";
import { DreamFramework } from "@/components/DreamFramework";
import { Footer } from "@/components/Footer";

const Index = () => {
  const preOrderRef = useRef<HTMLDivElement>(null);

  const scrollToPreOrder = () => {
    preOrderRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        onPreOrderClick={scrollToPreOrder}
      />
      
      <main className="flex-1">
        <HeroSection
          onPreOrderClick={scrollToPreOrder}
        />
        
        <div ref={preOrderRef}>
          <EmailSignup />
        </div>
        
        <AboutBook />
        
        <DreamFramework />
        
        {/* Second CTA Section */}
        <section className="py-16 md:py-24 bg-background hover:-translate-y-2 transition-transform duration-300">
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
      
      <Footer />
    </div>
  );
};

export default Index;
