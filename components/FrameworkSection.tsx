"use client";

import { useId, useState } from "react";
import { ArrowDown, Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { trackDownload } from "@/lib/analytics";
import { WORKSHEET } from "@/lib/content";

const rules = [
  {
    letter: "D",
    title: "Do Yourself a Favor",
    description:
      "Build strong foundations: prioritize your health, create a supportive environment, establish healthy habits, and ensure basic financial stability. These fundamentals give you the energy and security to pursue meaningful work.",
    takeaway: "You can't build a dream on a shaky foundation.",
  },
  {
    letter: "R",
    title: "Relentlessly Grow",
    description:
      "Focus on skill-building as the antidote to anxiety and imposter syndrome. Invest in both horizontal skills (breadth) and vertical skills (depth) that compound over time. Continuous learning builds confidence and opens doors.",
    takeaway: "Skills are the currency of career confidence.",
  },
  {
    letter: "E",
    title: "Embrace the Suffering",
    description:
      "Discomfort is part of growth. Learn to lean into challenges instead of escaping them. The path to meaningful work involves facing difficult moments, pushing through resistance, and building resilience.",
    takeaway: "Growth happens outside your comfort zone.",
  },
  {
    letter: "A",
    title: "Adjacents Are Possible",
    description:
      "Nonlinear careers and pivots are normal. Nearby skills and paths compound. You don't need to start over—your existing experience creates adjacent opportunities that feel like natural progressions.",
    takeaway: "Your next step doesn't require starting from zero.",
  },
  {
    letter: "M",
    title: "Make Yourself Engaged",
    description:
      "Engage deeply with your communities and seek out mentorships—they're powerful antidotes to imposter syndrome. Share your experiences openly, build in public, and connect with others on similar journeys. Growth accelerates when you surround yourself with people who support and challenge you.",
    takeaway: "Community and mentorship multiply your growth.",
  },
];

export function FrameworkSection() {
  const [active, setActive] = useState(0);
  const baseId = useId();

  return (
    <section
      id="framework"
      aria-labelledby="framework-title"
      className="border-t border-border bg-card/50 py-20 md:py-28"
    >
      <div className="container">
        <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow">02 — The framework</p>
            <h2
              id="framework-title"
              className="display mt-5 text-[clamp(2.5rem,5.5vw,4.75rem)] text-foreground"
            >
              The <span className="text-primary">DREAM</span> Framework
            </h2>
          </div>
          <p className="max-w-[46ch] text-lg leading-relaxed text-muted-foreground lg:col-span-5 lg:pb-2">
            Five principles to guide your career and life journey, shaped by conversations with
            career professionals and Kasey&apos;s own nonlinear path of pivots and industry changes.
          </p>
        </Reveal>

        <div className="fw mt-12 md:mt-16">
          {rules.map((rule, i) => {
            const isActive = i === active;
            const triggerId = `${baseId}-t${i}`;
            const panelId = `${baseId}-p${i}`;
            return (
              <div key={rule.letter} className="fw-col" data-active={isActive}>
                <h3>
                  <button
                    id={triggerId}
                    type="button"
                    className="fw-trigger"
                    aria-expanded={isActive}
                    aria-controls={panelId}
                    onClick={() => setActive(i)}
                  >
                    <span className="fw-letter" aria-hidden>
                      {rule.letter}
                    </span>
                    <span className="fw-title">{rule.title}</span>
                    <span className="fw-index" aria-hidden>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  hidden={!isActive}
                  className="fw-panel"
                >
                  <p className="text-base leading-relaxed opacity-90 md:text-[1.05rem]">
                    {rule.description}
                  </p>
                  <p className="mt-6 flex items-start gap-3 border-t border-primary-foreground/30 pt-5 text-lg font-medium leading-snug">
                    <Check className="mt-1 h-4 w-4 shrink-0" aria-hidden />
                    <span>
                      <span className="sr-only">Key takeaway: </span>
                      {rule.takeaway}
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <Reveal className="mt-10 flex flex-col gap-5 rounded-lg border border-border bg-background p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
          <div>
            <p className="eyebrow">Free worksheet</p>
            <p className="mt-2 text-xl font-semibold tracking-tight text-foreground">
              Put the framework to work on your own career.
            </p>
          </div>
          <a
            href={WORKSHEET.href}
            download={WORKSHEET.fileName}
            onClick={() => trackDownload(WORKSHEET.fileName, "docx")}
            className="group inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-md border border-foreground px-5 font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            <ArrowDown
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5"
              aria-hidden
            />
            Download the DREAM worksheet
            <span className="font-normal opacity-70">(.docx)</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
