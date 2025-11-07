import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export const AboutAuthor = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-6">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-foreground">
          About the Author
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
          Kasey Fu - Product Leader, Writer, and Community Builder
        </p>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="p-8 md:p-12 bg-card/80 backdrop-blur-sm shadow-soft border-border/50">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Professional Journey
            </h3>
            <p className="text-lg leading-relaxed text-card-foreground mb-4">
              I'm a product manager, writer, author, and community builder. As co-founder of PM Hive, 
              Vancouver's premier PM community, I've dedicated myself to helping professionals navigate 
              their careers with confidence.
            </p>
            <p className="text-lg leading-relaxed text-card-foreground">
              My career has taken me from improving Bing Search marketshare at Microsoft to now building 
              Planview's flagship AI product, Planview Copilot. I run both the PM Hive Newsletter as well 
              as other productivity blogs on Medium, sharing insights and strategies with thousands of readers.
            </p>
          </Card>

          <Card className="p-8 md:p-12 bg-accent/20 backdrop-blur-sm border-accent/50">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Creative Work
            </h3>
            <p className="text-lg leading-relaxed text-card-foreground mb-4">
              Beyond product management, I'm a part-time writer and published fiction author. My works include:
            </p>
            <ul className="space-y-2 text-lg text-card-foreground ml-4">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span><span className="font-semibold">Darkness Me, Colorful You</span> - A YA Fantasy/Action novel</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span><span className="font-semibold">Corruptions Are Best Exposed In The Autumn!</span> - A RomCom light novel</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8 md:p-12 bg-card/80 backdrop-blur-sm shadow-soft border-border/50">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Background
            </h3>
            <p className="text-lg leading-relaxed text-card-foreground">
              I graduated with a Bachelor of Science in Science and Business from the University of Waterloo, 
              and completed numerous internships in product management before launching my career. This unique 
              blend of technical knowledge, business acumen, creative storytelling, and hands-on experience 
              shapes my approach to helping others navigate their professional journeys.
            </p>
          </Card>

          <div className="text-center pt-8">
            <a 
              href="https://kaseyfu.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lg font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              Visit my main website
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};