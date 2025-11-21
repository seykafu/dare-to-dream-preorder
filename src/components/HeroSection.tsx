import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface HeroSectionProps {
  onPreOrderClick: () => void;
  onPodcastClick: () => void;
}

export const HeroSection = ({ onPreOrderClick, onPodcastClick }: HeroSectionProps) => {
  return (
    <section id="hero" className="min-h-screen flex items-center py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="text-center md:text-left space-y-6">
            <p className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wide">
              New Non-Fiction Book by Kasey Fu
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Doing The Dream
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground italic font-light">
              Conquer career anxiety, build powerful skills, and design a life you're proud of.
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto md:mx-0">
              A practical framework for Gen Z and millennial professionals who feel anxious about career direction, 
              overwhelmed by digital distraction, and want to build a meaningful path forward.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <Button
                onClick={onPreOrderClick}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg transition-all"
              >
                Pre-Order Updates
              </Button>
              <Button
                onClick={onPodcastClick}
                size="lg"
                variant="outline"
                className="border-2 hover:bg-muted transition-all"
              >
                Listen to the Podcast
              </Button>
            </div>
          </div>

          {/* Right: Book Mockup Card */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-[280px] md:max-w-[320px] aspect-[2/3] bg-gradient-to-br from-accent/20 via-background to-primary/10 rounded-lg shadow-xl border border-border/50 p-8 flex flex-col justify-between items-center transform hover:scale-105 transition-transform duration-300">
              {/* Decorative accent */}
              <div className="absolute top-4 right-4">
                <Sparkles className="h-6 w-6 text-accent/60" />
              </div>
              
              {/* Book content */}
              <div className="flex-1 flex flex-col justify-center items-center text-center space-y-4 w-full">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                  Doing The Dream
                </h2>
                
                <div className="w-12 h-px bg-border my-2" />
                
                <p className="text-base md:text-lg text-muted-foreground font-medium">
                  Kasey Fu
                </p>
              </div>
              
              {/* Bottom accent */}
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-accent/40 to-transparent rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

