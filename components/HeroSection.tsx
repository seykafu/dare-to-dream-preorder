"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Sparkles, Star, BookOpen, Compass, ArrowDown } from "lucide-react";
import CoverConcept from "@/src/assets/CoverConcept.jpeg";

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
        y: [0, -40, 0],
        x: [0, 20, 0],
        scale: [1, 1.15, 1],
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
  delay = 0,
}: {
  icon: React.ElementType;
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
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, y: [0, -12, 0], rotate: [0, 5, -5, 0] }}
        transition={{
          opacity: { duration: 0.5, delay },
          scale: { duration: 0.5, delay },
          y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay },
          rotate: { duration: 8, repeat: Infinity, ease: "easeInOut", delay },
        }}
        className="p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/10 shadow-lg"
      >
        <Icon className="w-5 h-5 text-primary/70" />
      </motion.div>
    </motion.div>
  );
}

// Floating star decoration
function FloatingStar({
  className,
  delay = 0,
  size = "w-4 h-4",
}: {
  className?: string;
  delay?: number;
  size?: string;
}) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0.3, 0.7, 0.3],
        scale: [0.8, 1.2, 0.8],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <Star className={`${size} text-primary/40 fill-primary/20`} />
    </motion.div>
  );
}

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const bookY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const bookRotate = useTransform(scrollYProgress, [0, 1], [-8, -12]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center pt-20 md:pt-32 pb-16 md:pb-24 overflow-hidden"
    >
      {/* Layered gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />

      {/* Floating gradient orbs - background layer */}
      <FloatingOrb
        className="w-[600px] h-[600px] -top-40 -right-40 bg-gradient-to-br from-primary/30 to-pink-300/20"
        duration={30}
      />
      <FloatingOrb
        className="w-[500px] h-[500px] top-1/3 -left-40 bg-gradient-to-br from-accent/30 to-yellow-200/20"
        delay={8}
        duration={25}
      />
      <FloatingOrb
        className="w-[400px] h-[400px] bottom-0 right-1/4 bg-gradient-to-br from-secondary/40 to-primary/10"
        delay={15}
        duration={28}
      />

      {/* Floating stars scattered around */}
      <FloatingStar className="top-[15%] left-[10%]" delay={0} />
      <FloatingStar className="top-[25%] right-[15%]" delay={2} size="w-5 h-5" />
      <FloatingStar className="top-[60%] left-[5%]" delay={4} size="w-3 h-3" />
      <FloatingStar className="bottom-[30%] right-[8%]" delay={6} />
      <FloatingStar className="top-[40%] left-[20%]" delay={3} size="w-3 h-3" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Floating icons */}
        <FloatingIcon
          icon={Compass}
          parallaxOffset={y1}
          className="hidden md:block top-0 left-[5%]"
          delay={0.2}
        />
        <FloatingIcon
          icon={BookOpen}
          parallaxOffset={y2}
          className="hidden md:block top-1/4 right-[3%]"
          delay={0.4}
        />
        <FloatingIcon
          icon={Sparkles}
          parallaxOffset={y3}
          className="hidden md:block bottom-1/3 left-[8%]"
          delay={0.6}
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 items-center relative z-10">
          {/* Left Column - Text Content */}
          <motion.div style={{ y: textY }} className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
              >
                <Sparkles className="w-4 h-4" />
                New Non-Fiction Book by Kasey Fu
              </motion.span>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="block"
                >
                  Navigate Career
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="block"
                >
                  Anxiety{" "}
                  <span className="text-primary">with Clarity</span>
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="block text-primary"
                >
                  and Confidence
                </motion.span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl"
            >
              Pre-order the new book "Doing The Dream" and join the newsletter for exclusive insights.
            </motion.p>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              style={{ opacity }}
              className="hidden md:flex items-center gap-2 text-muted-foreground pt-8"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown className="w-5 h-5" />
              </motion.div>
              <span className="text-sm">Scroll to explore</span>
            </motion.div>
          </motion.div>

          {/* Right Column - Book Mock with Parallax */}
          <motion.div
            style={{ y: bookY }}
            className="flex justify-center md:justify-end"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-sm"
              style={{ perspective: "1000px" }}
            >
              {/* Glow effect behind book */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-8 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/10 rounded-3xl blur-3xl"
              />

              {/* 3D Book Mock */}
              <motion.div
                className="relative"
                style={{
                  rotateY: bookRotate,
                  rotateX: 3,
                  transformStyle: "preserve-3d",
                }}
                whileHover={{ scale: 1.05, rotateY: -5 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative rounded-2xl shadow-2xl overflow-hidden border border-border/50 aspect-[2/3]">
                  {/* Book Spine Effect */}
                  <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-foreground/30 to-transparent rounded-l-2xl z-10" />

                  {/* Book Cover Image */}
                  <Image
                    src={CoverConcept}
                    alt="Doing The Dream Book Cover"
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Shine effect overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 5,
                      ease: "easeInOut",
                    }}
                  />
                </div>

                {/* Floating "Pre-order" badge */}
                <motion.div
                  animate={{ y: [0, -6, 0], rotate: [-2, 2, -2] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 px-4 py-2 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-sm font-bold shadow-lg"
                >
                  Pre-order Now
                </motion.div>

                {/* Page edges effect */}
                <div className="absolute right-0 top-2 bottom-2 w-2 bg-gradient-to-l from-muted to-transparent rounded-r-sm opacity-50" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
