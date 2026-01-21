"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ExternalLink, X, Headphones, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const FEATURED_VIDEO_ID = "kBEZqjywkJg";

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

interface PodcastPanelProps {
  children: React.ReactNode;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function PodcastPanel({ children, isOpen, onOpenChange }: PodcastPanelProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setIsPlaying(false);
    }
    onOpenChange?.(open);
  };

  return (
    <Sheet open={isOpen} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full sm:w-[540px] md:w-[640px] lg:w-[720px] p-0 overflow-y-auto border-l border-primary/10"
      >
        {/* Decorative gradient header */}
        <div className="sticky top-0 z-10 bg-gradient-to-b from-background via-background to-transparent pb-4">
          <div className="h-1.5 bg-gradient-to-r from-primary via-accent to-primary" />

          <SheetHeader className="px-6 pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20"
                >
                  <Headphones className="w-6 h-6 text-primary" />
                </motion.div>
                <div>
                  <SheetTitle className="text-2xl font-bold text-foreground">
                    Doing The Dream Podcast
                  </SheetTitle>
                  <p className="text-sm text-muted-foreground">
                    Weekly conversations about career & life
                  </p>
                </div>
              </div>
            </div>
          </SheetHeader>
        </div>

        <div className="px-6 pb-8 space-y-6">
          {/* Featured Episode */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="relative group"
          >
            <div className="absolute -inset-2 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-sm border border-primary/10 rounded-2xl overflow-hidden shadow-lg">
              {!isPlaying ? (
                <div className="relative aspect-video bg-gradient-to-br from-primary/20 via-muted to-accent/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button
                      onClick={handlePlay}
                      className="group relative z-10"
                      aria-label="Play featured episode"
                    >
                      <motion.div
                        className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Play className="h-8 w-8 text-primary-foreground ml-1" fill="currentColor" />
                      </motion.div>
                      <motion.div
                        className="absolute inset-0 rounded-full bg-primary/30"
                        animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </motion.button>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                  {/* Featured badge */}
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold flex items-center gap-1"
                  >
                    <Star className="w-3 h-3 fill-current" />
                    Featured
                  </motion.div>
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

              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Career Anxiety & The DREAM Framework
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  A deep dive into understanding career anxiety and how the DREAM framework
                  can help you navigate uncertainty with confidence.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button
                    asChild
                    size="sm"
                    className="rounded-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80"
                  >
                    <a
                      href={`https://www.youtube.com/watch?v=${FEATURED_VIDEO_ID}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      Watch on YouTube
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="rounded-full"
                  >
                    <a href="#" className="inline-flex items-center gap-2">
                      Subscribe
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* More Episodes */}
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              More Episodes
            </h4>
            <div className="space-y-3">
              {episodes.map((episode, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="group flex items-start gap-4 p-4 bg-gradient-to-r from-muted/50 to-transparent rounded-xl border border-transparent hover:border-primary/10 transition-all cursor-pointer"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Play className="h-4 w-4 text-primary" fill="currentColor" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {episode.title}
                    </h5>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {episode.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Subscribe CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="p-5 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 border border-primary/10"
          >
            <p className="text-sm text-muted-foreground mb-3">
              Never miss an episode. Subscribe to get notified when new episodes drop.
            </p>
            <Button
              asChild
              className="w-full rounded-full bg-foreground text-background hover:bg-foreground/90"
            >
              <a href="#">
                Subscribe to Podcast
              </a>
            </Button>
          </motion.div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
