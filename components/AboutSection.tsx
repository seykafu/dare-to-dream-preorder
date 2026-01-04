"use client";

import { Reveal } from "@/components/Reveal";
import { ExternalLink } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="pt-8 md:pt-12 pb-8 md:pb-12 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center tracking-tight">
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
            
            <div className="mt-10 pt-8 border-t border-border/50">
              <p className="text-base md:text-lg text-foreground">
                <span className="font-medium">Follow the author: </span>
                <a
                  href="https://kaseyfu.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1 transition-colors"
                >
                  kaseyfu.com
                  <ExternalLink className="h-4 w-4" />
                </a>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
