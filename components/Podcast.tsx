"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { LINKS } from "@/lib/content";

const FEATURED_VIDEO_ID = "ddhEG5VsAao";

const episodes = [
  {
    title: "Career Anxiety & The DREAM Framework",
    description:
      "A deep dive into understanding career anxiety and how the DREAM framework can help you navigate uncertainty with confidence.",
    videoId: "kBEZqjywkJg",
  },
];

export function Podcast() {
  const [playing, setPlaying] = useState(false);

  return (
    <section
      id="podcast"
      aria-labelledby="podcast-title"
      className="border-t border-border bg-card/50 py-20 md:py-28"
    >
      <div className="container">
        <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow">04 — Listen</p>
            <h2 id="podcast-title" className="display mt-5 text-[clamp(2.5rem,5.5vw,4.75rem)] text-foreground">
              The Doing The Dream{" "}
              <span className="font-serif font-normal italic tracking-[-0.01em] text-primary">podcast</span>
            </h2>
          </div>
          <p className="max-w-[40ch] text-lg leading-relaxed text-muted-foreground lg:col-span-5 lg:pb-2">
            Weekly conversations about career &amp; life.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 md:mt-16 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-8">
            <div className="relative aspect-video overflow-hidden rounded-lg border border-border bg-foreground">
              {playing ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${FEATURED_VIDEO_ID}?autoplay=1&rel=0`}
                  title="Doing The Dream podcast: latest episode"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  className="group absolute inset-0 h-full w-full text-left"
                >
                  <Image
                    src={`https://i.ytimg.com/vi/${FEATURED_VIDEO_ID}/maxresdefault.jpg`}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover opacity-80 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-100"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-[hsl(237_57%_8%/0.85)] via-transparent to-transparent" />
                  <span className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 sm:bottom-7 sm:left-7 sm:right-7">
                    <span>
                      <span className="block font-mono text-[0.7rem] uppercase tracking-[0.16em] text-white/80">
                        Latest episode
                      </span>
                      <span className="mt-1 block text-xl font-semibold tracking-tight text-white sm:text-2xl">
                        Watch the newest episode
                      </span>
                    </span>
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
                      <Play className="ml-0.5 h-6 w-6" fill="currentColor" aria-hidden />
                    </span>
                  </span>
                  <span className="sr-only">Play the latest episode</span>
                </button>
              )}
            </div>
          </Reveal>

          <Reveal delay={120} className="flex flex-col lg:col-span-4">
            <h3 className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Watch more
            </h3>
            <ul className="mt-4 border-t border-border">
              {episodes.map((ep) => (
                <li key={ep.videoId} className="border-b border-border">
                  <a
                    href={`https://www.youtube.com/watch?v=${ep.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex gap-4 py-5"
                  >
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Play className="ml-0.5 h-3.5 w-3.5" fill="currentColor" aria-hidden />
                    </span>
                    <span>
                      <span className="block text-lg font-semibold leading-snug tracking-tight text-foreground group-hover:text-primary">
                        {ep.title}
                      </span>
                      <span className="mt-1.5 block text-sm leading-relaxed text-muted-foreground">
                        {ep.description}
                      </span>
                    </span>
                    <span className="sr-only">(opens YouTube in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3 lg:mt-auto lg:pt-8">
              <a
                href={LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-md bg-foreground px-5 font-semibold text-background transition-opacity hover:opacity-90"
              >
                Subscribe on YouTube
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
              <a
                href={`https://www.youtube.com/watch?v=${FEATURED_VIDEO_ID}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-md border border-foreground/30 px-5 font-semibold text-foreground transition-colors hover:border-foreground"
              >
                Open latest
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
