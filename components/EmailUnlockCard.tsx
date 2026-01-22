"use client";

import { useState, FormEvent, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, MotionValue } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, Download, Lock, Unlock, Mail, Gift, Zap } from "lucide-react";
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
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
        className="p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/10 shadow-lg"
      >
        <Icon className="w-5 h-5 text-primary/70" />
      </motion.div>
    </motion.div>
  );
}


export function EmailUnlockCard() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isUnlocking, setIsUnlocking] = useState(false);

  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const cardY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

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

    // Simulate unlock animation
    setIsUnlocking(true);

    // After animation, show success
    setTimeout(() => {
      setIsUnlocking(false);
      setIsSubmitted(true);
      setEmail("");
    }, 1500);
  };

  return (
    <section
      ref={containerRef}
      id="preorder"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Layered gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

      {/* Floating gradient orbs */}
      <FloatingOrb
        className="w-[400px] h-[400px] -top-20 -left-20 bg-gradient-to-br from-violet-500/25 to-purple-400/15"
        duration={22}
      />
      <FloatingOrb
        className="w-[350px] h-[350px] top-1/2 -right-20 bg-gradient-to-br from-indigo-400/25 to-fuchsia-300/15"
        delay={6}
        duration={25}
      />
      <FloatingOrb
        className="w-[300px] h-[300px] -bottom-20 left-1/3 bg-gradient-to-br from-purple-400/30 to-indigo-500/15"
        delay={12}
        duration={28}
      />

      {/* Floating pixel decorations */}
      <FloatingPixel className="top-[20%] left-[15%]" delay={0} duration={5}>
        <PixelStar size={16} color="hsl(248, 80%, 50%)" className="opacity-45" />
      </FloatingPixel>
      <FloatingPixel className="top-[30%] right-[20%]" delay={1.5} duration={6}>
        <PixelHeart size={14} className="opacity-40" />
      </FloatingPixel>
      <FloatingPixel className="bottom-[25%] left-[10%]" delay={3} duration={4}>
        <PixelSparkle size={12} color="hsl(268, 70%, 55%)" className="opacity-50" />
      </FloatingPixel>
      <FloatingPixel className="bottom-[35%] right-[15%]" delay={2} duration={5}>
        <PixelStar size={14} color="hsl(280, 70%, 55%)" className="opacity-40" />
      </FloatingPixel>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Floating icons */}
        <FloatingIcon
          icon={Mail}
          parallaxOffset={y1}
          className="hidden md:block top-10 left-[8%]"
          delay={0.2}
        />
        <FloatingIcon
          icon={Gift}
          parallaxOffset={y2}
          className="hidden md:block top-1/3 right-[5%]"
          delay={0.4}
        />
        <FloatingIcon
          icon={Zap}
          parallaxOffset={y3}
          className="hidden md:block bottom-20 left-[12%]"
          delay={0.6}
        />

        <motion.div
          style={{ y: cardY, scale }}
          className="max-w-2xl mx-auto relative z-10"
        >
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative group"
              >
                {/* Glow effect behind card */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />

                <div className="relative bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-xl border border-primary/10 rounded-3xl shadow-2xl overflow-hidden">
                  {/* Decorative top gradient bar */}
                  <div className="h-1.5 bg-gradient-to-r from-primary via-accent to-primary" />

                  {/* Unlock Animation Overlay */}
                  <AnimatePresence>
                    {isUnlocking && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 backdrop-blur-md z-10 flex items-center justify-center"
                      >
                        <motion.div
                          initial={{ scale: 0.5, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          exit={{ scale: 1.5, rotate: 180, opacity: 0 }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="relative"
                        >
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.5, repeat: 2 }}
                            className="absolute inset-0 bg-primary/30 rounded-full blur-xl"
                          />
                          <Unlock className="relative h-20 w-20 text-primary" />
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="p-8 md:p-12 relative">
                    {/* Header with icon */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                      <motion.div
                        animate={{ rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20 shadow-lg"
                      >
                        <Lock className="h-7 w-7 text-primary" />
                      </motion.div>
                      <div>
                        <motion.h2
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                          className="text-3xl md:text-4xl font-bold text-foreground tracking-tight"
                        >
                          Get Pre-Order + Newsletter Updates
                        </motion.h2>
                      </div>
                    </div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed"
                    >
                      Join the list for launch updates + unlock{" "}
                      <span className="text-primary font-semibold">Chapter 3</span> of the book.
                    </motion.p>

                    <motion.form
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      <div className="flex flex-col sm:flex-row gap-3">
                        <div className="relative flex-1">
                          <Input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                              setError("");
                            }}
                            className="flex-1 rounded-full h-14 text-base pl-6 pr-4 bg-background/50 border-primary/20 focus:border-primary/50 transition-colors"
                            disabled={isUnlocking}
                            required
                          />
                        </div>
                        <Button
                          type="submit"
                          disabled={isUnlocking}
                          size="lg"
                          className="rounded-full bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:from-primary/90 hover:to-primary/80 whitespace-nowrap px-8 h-14 font-semibold shadow-lg hover:shadow-xl transition-all"
                        >
                          {isUnlocking ? (
                            <motion.span
                              animate={{ opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 1, repeat: Infinity }}
                            >
                              Unlocking...
                            </motion.span>
                          ) : (
                            "Unlock & Join"
                          )}
                        </Button>
                      </div>

                      {error && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-sm text-destructive text-center"
                        >
                          {error}
                        </motion.p>
                      )}

                      <p className="text-xs text-muted-foreground text-center pt-2">
                        No spam. Unsubscribe anytime.
                      </p>
                    </motion.form>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative group"
              >
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-accent/20 to-transparent rounded-[2rem] blur-2xl opacity-60" />

                <div className="relative bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-xl border border-primary/20 rounded-3xl shadow-2xl p-8 md:p-12 text-center overflow-hidden">
                  {/* Decorative top gradient bar */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-accent to-primary" />

                  {/* Success particles */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        x: [0, (i % 2 === 0 ? 1 : -1) * (50 + i * 20)],
                        y: [0, -100 - i * 30],
                      }}
                      transition={{ duration: 1.5, delay: i * 0.1 }}
                      style={{ left: "50%", top: "40%" }}
                    >
                      <Star className="w-4 h-4 text-primary fill-primary/50" />
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                    className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mx-auto mb-8 relative"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
                    />
                    <CheckCircle2 className="h-14 w-14 text-primary relative" />
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight"
                  >
                    You're in! Bonus unlocked.
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-base md:text-lg text-muted-foreground mb-8"
                  >
                    We'll notify you when pre-orders go live. In the meantime, download your free bonus.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      asChild
                      size="lg"
                      className="rounded-full bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:from-primary/90 hover:to-primary/80 inline-flex items-center gap-2 px-8 h-14 font-semibold shadow-lg"
                    >
                      <a
                        href="/Doing the Dream - Sample Chapter 3.docx"
                        download="Doing the Dream - Sample Chapter 3.docx"
                        onClick={() =>
                          trackDownload(
                            "Doing the Dream - Sample Chapter 3.docx",
                            "docx"
                          )
                        }
                      >
                        <Download className="h-5 w-5" />
                        Download Sample Chapter
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
