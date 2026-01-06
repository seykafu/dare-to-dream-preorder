"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, Download, Lock, Unlock } from "lucide-react";

export function EmailUnlockCard() {
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
    <section id="preorder" className="pt-8 md:pt-12 pb-20 md:pb-32 bg-gradient-to-b from-muted/30 via-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative bg-card border border-border/50 rounded-2xl shadow-modern hover:shadow-hover transition-shadow duration-300 overflow-hidden"
              >
                {/* Unlock Animation Overlay */}
                <AnimatePresence>
                  {isUnlocking && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 backdrop-blur-sm z-10 flex items-center justify-center"
                    >
                      <motion.div
                        initial={{ scale: 0.8, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 1.2, rotate: 180 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      >
                        <Unlock className="h-16 w-16 text-primary" />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="p-8 md:p-12 relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Lock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                        Get Pre-Order + Newsletter Updates
                      </h2>
                    </div>
                  </div>

                  <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
                    Join the list for launch updates + unlock Chapter 3 of the book.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setError("");
                        }}
                        className="flex-1 rounded-full h-12 text-base"
                        disabled={isUnlocking}
                        required
                      />
                      <Button
                        type="submit"
                        disabled={isUnlocking}
                        size="lg"
                        className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 whitespace-nowrap px-8 h-12"
                      >
                        {isUnlocking ? "Unlocking..." : "Unlock & Join"}
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

                    <p className="text-xs text-muted-foreground text-center">
                      No spam. Unsubscribe anytime.
                    </p>
                  </form>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                className="bg-card border border-border/50 rounded-2xl shadow-modern p-8 md:p-12 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle2 className="h-12 w-12 text-primary" />
                </motion.div>

                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
                  You're in! Bonus unlocked.
                </h2>

                <p className="text-base md:text-lg text-muted-foreground mb-8">
                  We'll notify you when pre-orders go live. In the meantime, download your free bonus.
                </p>

                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2"
                >
                  <a href="/Doing the Dream - Sample Chapter 3.docx" download="Doing the Dream - Sample Chapter 3.docx">
                    <Download className="h-5 w-5" />
                    Download Sample Chapter
                  </a>
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

