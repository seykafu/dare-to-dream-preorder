"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const FEATURED_VIDEO_ID = "kBEZqjywkJg"; // YouTube video ID

interface Episode {
  title: string;
  description: string;
  videoId?: string;
}

const episodes: Episode[] = [
  {
    title: "Understanding Career Anxiety",
    description: "Exploring the root causes of career anxiety and how to navigate uncertainty with confidence.",
  },
  {
    title: "Building Skills That Compound",
    description: "A deep dive into horizontal and vertical skill-building strategies for long-term growth.",
  },
  {
    title: "Reclaiming Your Attention",
    description: "Practical strategies to beat digital distraction and deepen focus in your work.",
  },
];

export function PodcastEmbed() {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <section id="podcast" className="pt-8 md:pt-12 pb-20 md:pb-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Doing The Dream Podcast
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Weekly conversations about career anxiety, digital distraction, and building a meaningful life.
            </p>
          </div>

          {/* Featured Episode */}
          <div className="mb-16">
            <motion.div
              className="bg-card border border-border/50 rounded-2xl overflow-hidden shadow-modern hover:shadow-hover transition-shadow duration-300"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              {!isPlaying ? (
                <div className="relative aspect-video bg-gradient-to-br from-primary/20 via-muted to-accent/20">
                  {/* Thumbnail/Preview */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button
                      onClick={handlePlay}
                      className="group relative z-10"
                      aria-label="Play featured episode"
                    >
                      <motion.div
                        className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary flex items-center justify-center shadow-lg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Play className="h-10 w-10 md:h-12 md:w-12 text-primary-foreground ml-1" fill="currentColor" />
                      </motion.div>
                      {isHovered && (
                        <motion.div
                          className="absolute inset-0 rounded-full bg-primary/20 blur-xl"
                          initial={{ scale: 1 }}
                          animate={{ scale: 1.5, opacity: 0 }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                      )}
                    </motion.button>
                  </div>
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              ) : (
                <div className="relative aspect-video bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${FEATURED_VIDEO_ID}?autoplay=1&mute=0`}
                    title="Featured Episode"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              )}

              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Featured Episode: Career Anxiety & The DREAM Framework
                </h3>
                <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
                  Join us for a deep dive into understanding career anxiety and how the DREAM framework
                  can help you navigate uncertainty with confidence and clarity.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-primary hover:bg-primary/90"
                  >
                    <a
                      href={`https://www.youtube.com/watch?v=${FEATURED_VIDEO_ID}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      Watch on YouTube
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-full border-2"
                  >
                    <a href="#" className="inline-flex items-center gap-2">
                      Subscribe
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Episode Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {episodes.map((episode, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm hover:shadow-modern hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Play className="h-6 w-6 text-primary" fill="currentColor" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">
                  {episode.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {episode.description}
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full rounded-full"
                >
                  <a href="#">Watch</a>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

