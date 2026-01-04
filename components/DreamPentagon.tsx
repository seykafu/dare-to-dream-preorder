"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DreamRule {
  letter: string;
  title: string;
  description: string;
  keyTakeaway: string;
  color: string;
  angle: number;
}

const dreamRules: DreamRule[] = [
  {
    letter: "D",
    title: "Do Yourself a Favor",
    description:
      "Build strong foundations: prioritize your health, create a supportive environment, establish healthy habits, and ensure basic financial stability. These fundamentals give you the energy and security to pursue meaningful work.",
    keyTakeaway: "You can't build a dream on a shaky foundation.",
    color: "hsl(340, 65%, 75%)",
    angle: 0,
  },
  {
    letter: "R",
    title: "Relentlessly Grow",
    description:
      "Focus on skill-building as the antidote to anxiety and imposter syndrome. Invest in both horizontal skills (breadth) and vertical skills (depth) that compound over time. Continuous learning builds confidence and opens doors.",
    keyTakeaway: "Skills are the currency of career confidence.",
    color: "hsl(330, 60%, 80%)",
    angle: 72,
  },
  {
    letter: "E",
    title: "Embrace the Suffering",
    description:
      "Discomfort is part of growth. Learn to lean into challenges instead of escaping them. The path to meaningful work involves facing difficult moments, pushing through resistance, and building resilience.",
    keyTakeaway: "Growth happens outside your comfort zone.",
    color: "hsl(40, 25%, 85%)",
    angle: 144,
  },
  {
    letter: "A",
    title: "Adjacents Are Possible",
    description:
      "Nonlinear careers and pivots are normal. Nearby skills and paths compound. You don't need to start over—your existing experience creates adjacent opportunities that feel like natural progressions.",
    keyTakeaway: "Your next step doesn't require starting from zero.",
    color: "hsl(340, 55%, 78%)",
    angle: 216,
  },
  {
    letter: "M",
    title: "Make Yourself Engaged",
    description:
      "Beat digital distraction, deepen focus, and stay present in your work. Reclaim your attention from endless scrolling and notifications. True engagement requires intentional boundaries and mindful practices.",
    keyTakeaway: "Attention is your most valuable resource.",
    color: "hsl(330, 55%, 82%)",
    angle: 288,
  },
];

function getPentagonPoints(centerX: number, centerY: number, radius: number) {
  const points: { x: number; y: number }[] = [];
  for (let i = 0; i < 5; i++) {
    const angle = (i * 72 - 90) * (Math.PI / 180);
    points.push({
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    });
  }
  return points;
}

function getSegmentPath(
  centerX: number,
  centerY: number,
  radius: number,
  startAngle: number,
  endAngle: number
) {
  const start = {
    x: centerX + radius * Math.cos((startAngle - 90) * (Math.PI / 180)),
    y: centerY + radius * Math.sin((startAngle - 90) * (Math.PI / 180)),
  };
  const end = {
    x: centerX + radius * Math.cos((endAngle - 90) * (Math.PI / 180)),
    y: centerY + radius * Math.sin((endAngle - 90) * (Math.PI / 180)),
  };
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${centerX} ${centerY} L ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArc} 1 ${end.x} ${end.y} Z`;
}

export function DreamPentagon() {
  const [selectedRule, setSelectedRule] = useState(1); // Default to "R"
  const centerX = 200;
  const centerY = 200;
  const radius = 150;

  return (
    <section id="dream" className="pt-20 md:pt-32 pb-8 md:pb-12 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            The DREAM Framework
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Five principles to guide your career and life journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Pentagon SVG */}
          <div className="flex justify-center items-center">
            <div className="relative">
              <svg
                width="400"
                height="400"
                viewBox="0 0 400 400"
                className="w-full max-w-[400px] h-auto"
              >
                {/* Background circle */}
                <circle
                  cx={centerX}
                  cy={centerY}
                  r={radius}
                  fill="hsl(var(--muted))"
                  opacity={0.3}
                />

                {/* Pentagon segments */}
                {dreamRules.map((rule, index) => {
                  const startAngle = rule.angle;
                  const endAngle = rule.angle + 72;
                  const isSelected = selectedRule === index;
                  const segmentPath = getSegmentPath(centerX, centerY, radius, startAngle, endAngle);

                  return (
                    <motion.path
                      key={rule.letter}
                      d={segmentPath}
                      fill={rule.color}
                      fillOpacity={isSelected ? 0.8 : 0.4}
                      stroke="hsl(var(--border))"
                      strokeWidth={isSelected ? 2 : 1}
                      initial={false}
                      animate={{
                        fillOpacity: isSelected ? 0.8 : 0.4,
                        strokeWidth: isSelected ? 2 : 1,
                        filter: isSelected ? "drop-shadow(0 4px 12px rgba(0,0,0,0.15))" : "none",
                      }}
                      transition={{ duration: 0.3 }}
                      className="cursor-pointer"
                      onClick={() => setSelectedRule(index)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setSelectedRule(index);
                        }
                      }}
                      tabIndex={0}
                      role="button"
                      aria-label={`${rule.letter}: ${rule.title}`}
                    />
                  );
                })}

                {/* Letter labels */}
                {dreamRules.map((rule, index) => {
                  const labelAngle = rule.angle + 36;
                  const labelRadius = radius * 0.65;
                  const labelX = centerX + labelRadius * Math.cos((labelAngle - 90) * (Math.PI / 180));
                  const labelY = centerY + labelRadius * Math.sin((labelAngle - 90) * (Math.PI / 180));

                  return (
                    <text
                      key={`label-${rule.letter}`}
                      x={labelX}
                      y={labelY}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="text-4xl font-bold fill-foreground pointer-events-none select-none"
                    >
                      {rule.letter}
                    </text>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Detail Panel */}
          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedRule}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-card border border-border/50 rounded-2xl p-8 md:p-10 shadow-modern"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg"
                    style={{ backgroundColor: dreamRules[selectedRule].color }}
                  >
                    {dreamRules[selectedRule].letter}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    {dreamRules[selectedRule].title}
                  </h3>
                </div>

                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                  {dreamRules[selectedRule].description}
                </p>

                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg mb-6">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm md:text-base text-foreground font-medium">
                    <span className="text-primary">Key takeaway:</span>{" "}
                    {dreamRules[selectedRule].keyTakeaway}
                  </p>
                </div>

                <Button
                  asChild
                  className="w-full md:w-auto rounded-full bg-primary hover:bg-primary/90"
                >
                  <a href="#preorder">Read Sample Chapter</a>
                </Button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

