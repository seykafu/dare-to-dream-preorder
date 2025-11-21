import { ExternalLink } from "lucide-react";

export const AboutAuthor = () => {
  return (
    <section id="about-author" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            About the Author — Kasey Fu
          </h2>
          
          <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              Kasey is a product manager, community builder, and writer. He works with Gen Z and 
              millennial professionals navigating career anxiety and uncertainty, helping them find 
              clarity and build meaningful paths forward.
            </p>
            
            <p>
              As a founder and co-organizer of PM Hive, Kasey has built a thriving community of 
              product managers and professionals who share insights about career development, 
              product thinking, and modern work. Through conversations, workshops, and writing, 
              he explores the intersection of passion, practicality, and professional growth.
            </p>
            
            <p>
              The DREAM framework emerged from hundreds of interviews, extensive research, and 
              Kasey's own nonlinear career path. Having navigated multiple pivots, industry 
              changes, and the challenges of building skills in an uncertain world, he developed 
              a system that blends personal experience with practical strategies.
            </p>
            
            <p>
              "Doing The Dream" is his way of sharing these insights with a broader audience—helping 
              others reduce anxiety, build confidence, and design careers they're proud of.
            </p>
          </div>
          
          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-base md:text-lg text-foreground">
              <span className="font-medium">Follow the author: </span>
              <a
                href="https://kaseyfu.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                kaseyfu.com
                <ExternalLink className="h-4 w-4" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
