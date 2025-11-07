import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

interface HeroProps {
  onRegisterClick: () => void;
}

export const Hero = ({ onRegisterClick }: HeroProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95" />
      </div>
      
      <div className="container relative z-10 px-6 py-16 text-center">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-foreground leading-tight">
          Dare to Dream
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 max-w-3xl mx-auto font-light">
          Conquer Career Anxiety & Build the Future You Deserve
        </p>
        <p className="text-base md:text-lg text-muted-foreground/90 mb-10 max-w-2xl mx-auto">
          A transformative guide for Gen Z and Millennials navigating the complexities of modern careers
        </p>
        <Button 
          onClick={onRegisterClick}
          size="lg"
          className="text-lg px-10 py-6 rounded-full shadow-modern hover:shadow-hover transition-all duration-300 hover-scale bg-gradient-primary border-0"
        >
          Register for Pre-Order
        </Button>
      </div>
    </section>
  );
};