"use client";

import { useRef, useState, FormEvent } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform, MotionValue } from "framer-motion";
import { Sparkles, BookOpen, Compass, Lock, Unlock, CheckCircle2, Download } from "lucide-react";
import CoverConcept from "@/src/assets/CoverConcept.jpeg";
import { PixelStar, PixelSparkle, PixelHeart, FloatingPixel } from "@/components/PixelElements";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabase/client";

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

// 3D Animated Book Component
function AnimatedBook({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const bookRotateY = useTransform(scrollProgress, [0, 1], [-5, -15]);
  const bookRotateX = useTransform(scrollProgress, [0, 1], [5, 0]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-sm mx-auto"
      style={{ perspective: "1200px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsOpen(false);
      }}
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Glow effect behind book */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: isHovered ? [0.5, 0.7, 0.5] : [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-10 bg-gradient-to-br from-primary/40 via-accent/30 to-primary/20 rounded-3xl blur-3xl"
      />

      {/* Sparkle overlay - OUTSIDE 3D container so it doesn't get rotated */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute inset-0 z-20 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-purple-50 rounded-2xl shadow-xl border border-primary/10" />

            {/* Sparkle effects */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`sparkle-${i}`}
                className="absolute"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  rotate: [0, 180],
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.12,
                  repeat: Infinity,
                  repeatDelay: 0.8,
                }}
                style={{
                  left: `${10 + (i % 4) * 22}%`,
                  top: `${8 + Math.floor(i / 4) * 28}%`,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5L8 0Z"
                    fill="hsl(248, 80%, 60%)"
                    fillOpacity="0.8"
                  />
                </svg>
              </motion.div>
            ))}

            {/* DREAM text and CTA */}
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <motion.span
                className="text-5xl md:text-6xl font-black bg-gradient-to-br from-primary via-purple-500 to-indigo-500 bg-clip-text text-transparent tracking-wider"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                DREAM
              </motion.span>
              <motion.p
                className="mt-4 text-sm md:text-base text-primary/90 font-semibold text-center px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Sign up for pre-order access!
              </motion.p>
              <motion.div
                className="mt-3"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, type: "spring" }}
              >
                <PixelHeart size={28} animated />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3D Book Container */}
      <motion.div
        className="relative cursor-pointer"
        style={{
          rotateY: bookRotateY,
          rotateX: bookRotateX,
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateY: isOpen ? -140 : isHovered ? -15 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Book spine - 3D effect */}
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-6 origin-left"
          style={{
            background: "linear-gradient(to right, hsl(248, 60%, 35%), hsl(248, 70%, 45%), hsl(248, 60%, 40%))",
            transform: "rotateY(-90deg) translateX(-12px)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Spine text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-white/80 text-[8px] font-bold tracking-widest uppercase whitespace-nowrap"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed", transform: "rotate(180deg)" }}
            >
              Doing The Dream
            </span>
          </div>
        </motion.div>

        {/* Book pages (simple white background) */}
        <motion.div
          className="absolute left-1 top-2 bottom-2 right-4 bg-gradient-to-r from-amber-50 to-white rounded-r-sm"
          style={{
            transform: "translateZ(-2px)",
            boxShadow: "inset -2px 0 4px rgba(0,0,0,0.1)",
          }}
          animate={{ opacity: isOpen ? 0 : 0.3 }}
        >
          {/* Page lines */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute right-0 w-[2px] bg-gradient-to-r from-transparent to-gray-200"
              style={{
                top: `${10 + i * 10}%`,
                height: "1px",
              }}
            />
          ))}
        </motion.div>

        {/* Front Cover */}
        <motion.div
          className="relative rounded-r-lg shadow-2xl overflow-hidden border-r border-t border-b border-border/30 aspect-[2/3]"
          style={{
            transformOrigin: "left center",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Book Cover Image */}
          <Image
            src={CoverConcept}
            alt="Doing The Dream Book Cover"
            fill
            className="object-cover"
            priority
          />

          {/* Cover overlay effects */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/10" />

          {/* Animated shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"
            animate={{
              x: ["-150%", "150%"],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatDelay: 4,
              ease: "easeInOut",
            }}
          />

          {/* Book edge highlight */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-r from-black/20 to-transparent" />
        </motion.div>

        {/* Floating "Pre-order" badge */}
        <motion.div
          animate={{
            y: [0, -8, 0],
            rotate: [0, 2, 0],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-3 -right-3 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-purple-500 text-primary-foreground text-xs font-bold shadow-xl z-10"
          style={{
            clipPath: "polygon(4px 0, calc(100% - 4px) 0, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 0 calc(100% - 4px), 0 4px)",
          }}
        >
          <PixelHeart size={14} />
          Pre-order Now
        </motion.div>

        {/* Hover instruction */}
        <AnimatePresence>
          {isHovered && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground whitespace-nowrap"
            >
              Click to open
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}


export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Email form state
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isUnlocking, setIsUnlocking] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsUnlocking(true);

    try {
      const { error: supabaseError } = await supabase
        .from('preorder_emails')
        .insert([{ email: email.trim() }]);

      if (supabaseError) {
        setIsUnlocking(false);
        if (supabaseError.code === '23505') {
          setError("This email is already registered");
        } else {
          setError("Something went wrong. Please try again.");
        }
        return;
      }

      setTimeout(() => {
        setIsUnlocking(false);
        setIsSubmitted(true);
        setEmail("");
      }, 1000);
    } catch (err) {
      setIsUnlocking(false);
      setError("Something went wrong. Please try again.");
    }
  };

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center pt-20 md:pt-28 pb-12 md:pb-20 overflow-hidden"
    >
      {/* Layered gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />

      {/* Floating gradient orbs */}
      <FloatingOrb
        className="w-[600px] h-[600px] -top-40 -right-40 bg-gradient-to-br from-violet-500/25 to-purple-400/15"
        duration={30}
      />
      <FloatingOrb
        className="w-[500px] h-[500px] top-1/3 -left-40 bg-gradient-to-br from-indigo-400/25 to-fuchsia-300/15"
        delay={8}
        duration={25}
      />
      <FloatingOrb
        className="w-[400px] h-[400px] bottom-0 right-1/4 bg-gradient-to-br from-purple-400/30 to-indigo-500/15"
        delay={15}
        duration={28}
      />

      {/* Floating pixel decorations */}
      <FloatingPixel className="top-[15%] left-[10%]" delay={0} duration={5}>
        <PixelStar size={20} color="hsl(248, 80%, 50%)" className="opacity-50" />
      </FloatingPixel>
      <FloatingPixel className="top-[25%] right-[15%]" delay={1.5} duration={6}>
        <PixelSparkle size={16} color="hsl(268, 70%, 55%)" className="opacity-60" />
      </FloatingPixel>
      <FloatingPixel className="top-[60%] left-[5%]" delay={3} duration={4}>
        <PixelHeart size={18} className="opacity-40" />
      </FloatingPixel>
      <FloatingPixel className="bottom-[30%] right-[8%]" delay={2} duration={5}>
        <PixelStar size={14} color="hsl(280, 70%, 55%)" className="opacity-50" />
      </FloatingPixel>

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

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
          {/* Left Column - Text Content & Form */}
          <motion.div style={{ y: textY }} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
              >
                <Sparkles className="w-4 h-4" />
                New Non-Fiction Book by Kasey Fu
              </motion.span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight">
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
              className="text-lg md:text-xl font-medium text-foreground leading-relaxed max-w-lg"
            >
              Eliminate all career anxiety, obtain job freedom, and never question yourself again.
            </motion.p>

            {/* Integrated Email Signup Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="relative group"
                  >
                    {/* Glow effect */}
                    <div className="absolute -inset-2 bg-gradient-to-br from-primary/15 via-accent/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border border-primary/10 rounded-2xl p-5 shadow-xl">
                      {/* Unlock Animation Overlay */}
                      <AnimatePresence>
                        {isUnlocking && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 backdrop-blur-md z-10 flex items-center justify-center rounded-2xl"
                          >
                            <motion.div
                              initial={{ scale: 0.5, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                              <Unlock className="h-12 w-12 text-primary" />
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="flex items-center gap-3 mb-4">
                        <motion.div
                          animate={{ rotate: [0, -5, 5, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20"
                        >
                          <Lock className="h-5 w-5 text-primary" />
                        </motion.div>
                        <div>
                          <h3 className="text-base font-bold text-foreground">
                            Get Pre-Order + Newsletter Updates
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            Unlock <span className="text-primary font-medium">Chapter 3</span> free
                          </p>
                        </div>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-3">
                        <div className="flex flex-col sm:flex-row gap-2">
                          <Input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                              setError("");
                            }}
                            className="flex-1 rounded-full h-11 text-sm pl-4 pr-4 bg-background/50 border-primary/20 focus:border-primary/50 transition-colors"
                            disabled={isUnlocking}
                            required
                          />
                          <Button
                            type="submit"
                            disabled={isUnlocking}
                            className="rounded-full bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:from-primary/90 hover:to-primary/80 whitespace-nowrap px-6 h-11 font-semibold shadow-lg"
                          >
                            {isUnlocking ? "Unlocking..." : "Unlock & Join"}
                          </Button>
                        </div>

                        {error && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-xs text-destructive"
                          >
                            {error}
                          </motion.p>
                        )}

                        <p className="text-[10px] text-muted-foreground">
                          No spam. Unsubscribe anytime.
                        </p>
                      </form>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border border-primary/20 rounded-2xl p-5 shadow-xl text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mx-auto mb-3"
                    >
                      <CheckCircle2 className="h-8 w-8 text-primary" />
                    </motion.div>

                    <h3 className="text-lg font-bold text-foreground mb-2">
                      You're in! Bonus unlocked.
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Download your free chapter below.
                    </p>

                    <Button
                      asChild
                      className="rounded-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 inline-flex items-center gap-2"
                    >
                      <a
                        href="/Doing the Dream - Sample Chapter 3.docx"
                        download="Doing the Dream - Sample Chapter 3.docx"
                        onClick={() =>
                          trackDownload("Doing the Dream - Sample Chapter 3.docx", "docx")
                        }
                      >
                        <Download className="h-4 w-4" />
                        Download Sample Chapter
                      </a>
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Animated Book */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <AnimatedBook scrollProgress={scrollYProgress} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
