"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, MotionValue } from "framer-motion";
import { CheckCircle2, Sparkles, Target, TrendingUp, Flame, GitBranch, Focus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PixelStar, PixelSparkle, PixelHeart, FloatingPixel } from "@/components/PixelElements";

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

const trackDownload = (fileName: string, fileType: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "file_download", {
      event_category: "Downloads",
      event_label: fileName,
      file_name: fileName,
      file_type: fileType,
    });
  }
};

interface DreamRule {
  letter: string;
  title: string;
  description: string;
  keyTakeaway: string;
  color: string;
  angle: number;
  icon: React.ElementType;
}

const dreamRules: DreamRule[] = [
  {
    letter: "D",
    title: "Do Yourself a Favor",
    description:
      "Build strong foundations: prioritize your health, create a supportive environment, establish healthy habits, and ensure basic financial stability. These fundamentals give you the energy and security to pursue meaningful work.",
    keyTakeaway: "You can't build a dream on a shaky foundation.",
    color: "hsl(248, 80%, 65%)",
    angle: 0,
    icon: Target,
  },
  {
    letter: "R",
    title: "Relentlessly Grow",
    description:
      "Focus on skill-building as the antidote to anxiety and imposter syndrome. Invest in both horizontal skills (breadth) and vertical skills (depth) that compound over time. Continuous learning builds confidence and opens doors.",
    keyTakeaway: "Skills are the currency of career confidence.",
    color: "hsl(258, 70%, 72%)",
    angle: 72,
    icon: TrendingUp,
  },
  {
    letter: "E",
    title: "Embrace the Suffering",
    description:
      "Discomfort is part of growth. Learn to lean into challenges instead of escaping them. The path to meaningful work involves facing difficult moments, pushing through resistance, and building resilience.",
    keyTakeaway: "Growth happens outside your comfort zone.",
    color: "hsl(238, 60%, 78%)",
    angle: 144,
    icon: Flame,
  },
  {
    letter: "A",
    title: "Adjacents Are Possible",
    description:
      "Nonlinear careers and pivots are normal. Nearby skills and paths compound. You don't need to start over—your existing experience creates adjacent opportunities that feel like natural progressions.",
    keyTakeaway: "Your next step doesn't require starting from zero.",
    color: "hsl(268, 65%, 75%)",
    angle: 216,
    icon: GitBranch,
  },
  {
    letter: "M",
    title: "Make Yourself Engaged",
    description:
      "Engage deeply with your communities and seek out mentorships—they're powerful antidotes to imposter syndrome. Share your experiences openly, build in public, and connect with others on similar journeys. Growth accelerates when you surround yourself with people who support and challenge you.",
    keyTakeaway: "Community and mentorship multiply your growth.",
    color: "hsl(278, 55%, 78%)",
    angle: 288,
    icon: Focus,
  },
];

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

// Floating decorative orb component
function FloatingOrb({
  className,
  delay = 0,
  duration = 20,
}: {
  className?: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-25 pointer-events-none ${className}`}
      animate={{
        y: [0, -35, 0],
        x: [0, 18, 0],
        scale: [1, 1.12, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

// Floating letter badge
function FloatingBadge({
  letter,
  color,
  className,
  parallaxOffset,
  delay = 0,
}: {
  letter: string;
  color: string;
  className?: string;
  parallaxOffset: MotionValue<number>;
  delay?: number;
}) {
  return (
    <motion.div
      style={{ y: parallaxOffset }}
      className={`absolute pointer-events-none ${className}`}
    >
      <motion.div
        animate={{
          y: [0, -8, 0],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
        className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold text-white shadow-lg"
        style={{ backgroundColor: color }}
      >
        {letter}
      </motion.div>
    </motion.div>
  );
}


export function DreamPentagon() {
  const [selectedRule, setSelectedRule] = useState(1); // Default to "R"
  const centerX = 200;
  const centerY = 200;
  const radius = 150;

  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y3 = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const pentagonY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const panelY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const headerY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const SelectedIcon = dreamRules[selectedRule].icon;

  return (
    <section
      ref={containerRef}
      id="dream"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Layered gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      {/* Floating gradient orbs */}
      <FloatingOrb
        className="w-[500px] h-[500px] -top-32 -right-32 bg-gradient-to-br from-violet-500/25 to-purple-400/15"
        duration={26}
      />
      <FloatingOrb
        className="w-[400px] h-[400px] top-1/2 -left-32 bg-gradient-to-br from-indigo-400/25 to-fuchsia-300/15"
        delay={7}
        duration={24}
      />
      <FloatingOrb
        className="w-[350px] h-[350px] -bottom-20 right-1/4 bg-gradient-to-br from-purple-400/30 to-indigo-500/15"
        delay={14}
        duration={28}
      />

      {/* Floating pixel decorations */}
      <FloatingPixel className="top-[10%] left-[15%]" delay={0} duration={5}>
        <PixelStar size={18} color="hsl(248, 80%, 50%)" className="opacity-45" />
      </FloatingPixel>
      <FloatingPixel className="top-[20%] right-[10%]" delay={1.5} duration={6}>
        <PixelHeart size={16} className="opacity-40" />
      </FloatingPixel>
      <FloatingPixel className="bottom-[20%] left-[8%]" delay={3} duration={4}>
        <PixelSparkle size={14} color="hsl(268, 70%, 55%)" className="opacity-50" />
      </FloatingPixel>
      <FloatingPixel className="top-[60%] right-[12%]" delay={2} duration={5}>
        <PixelStar size={12} color="hsl(280, 70%, 55%)" className="opacity-40" />
      </FloatingPixel>

      {/* Floating letter badges */}
      <FloatingBadge
        letter="D"
        color={dreamRules[0].color}
        parallaxOffset={y1}
        className="hidden lg:block top-[15%] left-[8%]"
        delay={0}
      />
      <FloatingBadge
        letter="M"
        color={dreamRules[4].color}
        parallaxOffset={y2}
        className="hidden lg:block top-[25%] right-[6%]"
        delay={0.5}
      />
      <FloatingBadge
        letter="E"
        color={dreamRules[2].color}
        parallaxOffset={y3}
        className="hidden lg:block bottom-[20%] left-[5%]"
        delay={1}
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header with parallax */}
        <motion.div style={{ y: headerY }} className="text-center mb-16 md:mb-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              The Core Principles
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4 tracking-tight">
              The DREAM Framework
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Five principles to guide your career and life journey
            </p>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto relative z-10">
          {/* Pentagon SVG with parallax */}
          <motion.div
            style={{ y: pentagonY }}
            className="flex justify-center items-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Glow effect behind pentagon */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-full blur-3xl"
                style={{ transform: "scale(1.2)" }}
              />

              <svg
                width="400"
                height="400"
                viewBox="0 0 400 400"
                className="w-full max-w-[400px] h-auto relative"
              >
                {/* Background circle with gradient */}
                <defs>
                  <radialGradient id="bgGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="hsl(var(--muted))" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="hsl(var(--muted))" stopOpacity="0.1" />
                  </radialGradient>
                </defs>
                <circle
                  cx={centerX}
                  cy={centerY}
                  r={radius}
                  fill="url(#bgGradient)"
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
                      fillOpacity={isSelected ? 0.9 : 0.4}
                      stroke={isSelected ? "hsl(var(--primary))" : "hsl(var(--border))"}
                      strokeWidth={isSelected ? 3 : 1}
                      initial={false}
                      animate={{
                        fillOpacity: isSelected ? 0.9 : 0.4,
                        strokeWidth: isSelected ? 3 : 1,
                        filter: isSelected ? "drop-shadow(0 8px 20px rgba(0,0,0,0.2))" : "none",
                      }}
                      transition={{ duration: 0.3 }}
                      className="cursor-pointer hover:fill-opacity-70 transition-all"
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
                      whileHover={{ scale: 1.02 }}
                    />
                  );
                })}

                {/* Letter labels */}
                {dreamRules.map((rule, index) => {
                  const labelAngle = rule.angle + 36;
                  const labelRadius = radius * 0.65;
                  const labelX = centerX + labelRadius * Math.cos((labelAngle - 90) * (Math.PI / 180));
                  const labelY = centerY + labelRadius * Math.sin((labelAngle - 90) * (Math.PI / 180));
                  const isSelected = selectedRule === index;

                  return (
                    <motion.text
                      key={`label-${rule.letter}`}
                      x={labelX}
                      y={labelY}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="text-4xl font-bold pointer-events-none select-none"
                      fill={isSelected ? "hsl(var(--foreground))" : "hsl(var(--foreground))"}
                      animate={{
                        scale: isSelected ? 1.1 : 1,
                        opacity: isSelected ? 1 : 0.7,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {rule.letter}
                    </motion.text>
                  );
                })}

                {/* Center decoration */}
                <motion.circle
                  cx={centerX}
                  cy={centerY}
                  r={25}
                  fill="hsl(var(--background))"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </svg>

              {/* Interactive hint */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-center text-sm text-muted-foreground mt-4"
              >
                Click a segment to explore
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Detail Panel with parallax */}
          <motion.div style={{ y: panelY }} className="min-h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedRule}
                initial={{ opacity: 0, x: 30, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -30, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative group"
              >
                {/* Glow effect behind card */}
                <div
                  className="absolute -inset-4 rounded-[2rem] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                  style={{ backgroundColor: dreamRules[selectedRule].color }}
                />

                <div className="relative bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-xl border border-primary/10 rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden">
                  {/* Decorative top bar matching segment color */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1.5"
                    style={{
                      background: `linear-gradient(to right, ${dreamRules[selectedRule].color}, hsl(var(--primary)), ${dreamRules[selectedRule].color})`,
                    }}
                  />

                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-white shadow-lg relative"
                      style={{ backgroundColor: dreamRules[selectedRule].color }}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-2xl blur-lg opacity-50"
                        style={{ backgroundColor: dreamRules[selectedRule].color }}
                      />
                      <span className="relative">{dreamRules[selectedRule].letter}</span>
                    </motion.div>
                    <div>
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl md:text-3xl font-bold text-foreground"
                      >
                        {dreamRules[selectedRule].title}
                      </motion.h3>
                    </div>
                  </div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6"
                  >
                    {dreamRules[selectedRule].description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-start gap-3 p-4 rounded-2xl mb-6"
                    style={{ backgroundColor: `${dreamRules[selectedRule].color}20` }}
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm md:text-base text-foreground font-medium">
                      <span className="text-primary">Key takeaway:</span>{" "}
                      {dreamRules[selectedRule].keyTakeaway}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      asChild
                      className="w-full md:w-auto rounded-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 shadow-lg"
                    >
                      <a
                        href="/DREAM Framework Worksheet.docx"
                        download="DREAM Framework Worksheet.docx"
                        onClick={() =>
                          trackDownload("DREAM Framework Worksheet.docx", "docx")
                        }
                      >
                        Download DREAM Framework Worksheet
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Bottom navigation dots */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-3 mt-12"
        >
          {dreamRules.map((rule, index) => (
            <motion.button
              key={rule.letter}
              onClick={() => setSelectedRule(index)}
              className="relative w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all"
              style={{
                backgroundColor: selectedRule === index ? rule.color : "transparent",
                color: selectedRule === index ? "white" : "hsl(var(--muted-foreground))",
                border: `2px solid ${rule.color}`,
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Select ${rule.letter}: ${rule.title}`}
            >
              {rule.letter}
              {selectedRule === index && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: rule.color }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{rule.letter}</span>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
