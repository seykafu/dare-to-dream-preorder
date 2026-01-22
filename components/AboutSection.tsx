"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ExternalLink, Sparkles, Quote, Users, Lightbulb, Heart } from "lucide-react";
import Image from "next/image";
import DoingTheDreamImage from "@/src/assets/DoingTheDreamImage.JPG";

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
      className={`absolute rounded-full blur-3xl opacity-30 pointer-events-none ${className}`}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        scale: [1, 1.1, 1],
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

// Floating icon component
function FloatingIcon({
  icon: Icon,
  className,
  parallaxOffset,
}: {
  icon: React.ElementType;
  className?: string;
  parallaxOffset: MotionValue<number>;
}) {
  return (
    <motion.div
      style={{ y: parallaxOffset }}
      className={`absolute pointer-events-none ${className}`}
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/10 shadow-lg"
      >
        <Icon className="w-5 h-5 text-primary/70" />
      </motion.div>
    </motion.div>
  );
}

// Floating quote card
function FloatingQuote({
  quote,
  parallaxOffset,
  className,
}: {
  quote: string;
  parallaxOffset: MotionValue<number>;
  className?: string;
}) {
  return (
    <motion.div
      style={{ y: parallaxOffset }}
      className={`absolute pointer-events-none ${className}`}
    >
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="max-w-[200px] p-4 rounded-2xl bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-md border border-primary/10 shadow-xl"
      >
        <Quote className="w-4 h-4 text-primary/50 mb-2" />
        <p className="text-xs text-muted-foreground italic leading-relaxed">{quote}</p>
      </motion.div>
    </motion.div>
  );
}

export function AboutSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Different parallax speeds for layered effect
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const y4 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const contentY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Layered gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      {/* Floating gradient orbs - background layer */}
      <FloatingOrb
        className="w-[500px] h-[500px] -top-32 -left-32 bg-gradient-to-br from-primary/40 to-violet-300/30"
        duration={25}
      />
      <FloatingOrb
        className="w-[400px] h-[400px] top-1/4 -right-20 bg-gradient-to-br from-accent/40 to-indigo-200/30"
        delay={5}
        duration={22}
      />
      <FloatingOrb
        className="w-[300px] h-[300px] bottom-20 left-1/4 bg-gradient-to-br from-secondary/50 to-primary/20"
        delay={10}
        duration={28}
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header with parallax */}
        <motion.div style={{ y: contentY }} className="text-center mb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Meet the Author
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
              Kasey Fu
            </h2>
          </motion.div>
        </motion.div>

        {/* Main content area with floating elements */}
        <div className="relative max-w-6xl mx-auto">
          {/* Floating icons - decorative layer */}
          <FloatingIcon
            icon={Lightbulb}
            parallaxOffset={y1}
            className="hidden md:block top-0 left-[5%]"
          />
          <FloatingIcon
            icon={Users}
            parallaxOffset={y2}
            className="hidden md:block top-1/3 right-[2%]"
          />
          <FloatingIcon
            icon={Heart}
            parallaxOffset={y3}
            className="hidden md:block bottom-1/4 left-[8%]"
          />

          {/* Floating quotes */}
          <FloatingQuote
            quote="Helping Gen Z navigate career anxiety"
            parallaxOffset={y4}
            className="hidden lg:block top-20 right-[5%]"
          />
          <FloatingQuote
            quote="Hundreds of interviews, one framework"
            parallaxOffset={y2}
            className="hidden lg:block bottom-32 left-[2%]"
          />

          {/* Main content grid */}
          <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center relative z-10">
            {/* Author image with parallax and effects */}
            <motion.div
              style={{ y: imageY, rotate }}
              className="md:col-span-2 relative"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                {/* Decorative frame */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Image container */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-primary/10">
                  <Image
                    src={DoingTheDreamImage}
                    alt="Kasey Fu - Author of Doing The Dream"
                    className="w-full h-auto object-cover"
                  />
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-sm font-medium shadow-lg"
                >
                  PM Hive Founder
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Text content cards */}
            <motion.div
              style={{ y: contentY, scale }}
              className="md:col-span-3 space-y-6"
            >
              {/* Main bio card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm border border-primary/10 shadow-xl">
                  <p className="text-lg md:text-xl text-foreground leading-relaxed mb-4">
                    Kasey is a <span className="text-primary font-semibold">product manager</span>,{" "}
                    <span className="text-primary font-semibold">community builder</span>, and{" "}
                    <span className="text-primary font-semibold">writer</span>.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    He works with Gen Z and millennial professionals navigating career anxiety
                    and uncertainty, helping them find clarity and build meaningful paths forward.
                  </p>
                </div>
              </motion.div>

              {/* Secondary info cards - floating grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10 shadow-lg"
                >
                  <Users className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">PM Hive Community</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Built a thriving community of product managers sharing insights on career
                    development and professional growth.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 border border-accent/20 shadow-lg"
                >
                  <Lightbulb className="w-6 h-6 text-violet-600 mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">The DREAM Framework</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Emerged from hundreds of interviews and Kasey's own nonlinear career path
                    of pivots and industry changes.
                  </p>
                </motion.div>
              </div>

              {/* Quote highlight */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-6 border-l-4 border-primary/50"
              >
                <Quote className="absolute -left-3 -top-2 w-6 h-6 text-primary/30 bg-background" />
                <p className="text-lg italic text-muted-foreground">
                  "Doing The Dream" is his way of sharing these insights—helping others reduce
                  anxiety, build confidence, and design careers they're proud of.
                </p>
              </motion.div>

              {/* Author link */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="pt-4"
              >
                <a
                  href="https://kaseyfu.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors group"
                >
                  Follow Kasey
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
