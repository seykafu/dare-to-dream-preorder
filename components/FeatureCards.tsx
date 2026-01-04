"use client";

import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FeatureCards() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {/* About the Author Card */}
          <Reveal direction="left">
            <div className="bg-card border border-border/50 rounded-2xl shadow-modern p-8 md:p-10 hover:shadow-hover hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-tight">
                About the Author
              </h3>
              <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
                Learn more about my journey and the inspiration behind "Doing The Dream".
              </p>
              <Link href="#about">
                <Button
                  variant="outline"
                  className="w-full rounded-full border-2 hover:bg-muted h-11"
                >
                  READ MORE
                </Button>
              </Link>
            </div>
          </Reveal>

          {/* Podcast Card */}
          <Reveal direction="right">
            <div className="bg-card border border-border/50 rounded-2xl shadow-modern p-8 md:p-10 hover:shadow-hover hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-tight">
                Listen to the Podcast
              </h3>
              <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
                Tune in for insights, advice, and deep conversations about career and life.
              </p>
              <Link href="#podcast">
                <Button
                  variant="outline"
                  className="w-full rounded-full border-2 hover:bg-muted h-11"
                >
                  LATEST EPISODES →
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
