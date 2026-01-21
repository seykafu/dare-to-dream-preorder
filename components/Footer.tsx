"use client";

import { ExternalLink } from "lucide-react";

const backgroundPhrases = [
  "Career growth professional development skill building continuous learning",
  "Product strategy roadmap execution cross-functional collaboration",
  "Leadership communication innovation creativity problem-solving",
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 md:py-16 bg-background border-t border-border/50 overflow-hidden">
      {/* Faded background text */}
      <div
        className="absolute inset-0 pointer-events-none select-none overflow-hidden"
        style={{ opacity: 0.08 }}
      >
        <div className="absolute inset-0 flex flex-col justify-center text-xs font-medium text-foreground whitespace-nowrap">
          {backgroundPhrases.map((phrase, index) => (
            <div
              key={index}
              className="py-2"
              style={{ transform: `translateX(${index * -50}px)` }}
            >
              {[...Array(6)].map((_, i) => (
                <span key={i} className="mx-6">{phrase}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-base md:text-lg font-semibold text-foreground">
            Doing The Dream — © {currentYear} Kasey Fu
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-muted-foreground">
            <a
              href="https://kaseyfu.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors inline-flex items-center gap-1"
            >
              kaseyfu.com
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
