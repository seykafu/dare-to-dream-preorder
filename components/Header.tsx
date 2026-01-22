"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Headphones } from "lucide-react";
import Link from "next/link";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useActiveSection } from "@/hooks/useActiveSection";
import { PodcastPanel } from "@/components/PodcastPanel";
import { PixelHeart } from "@/components/PixelElements";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPodcastOpen, setIsPodcastOpen] = useState(false);
  const progress = useScrollProgress();
  const activeSection = useActiveSection();

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home", href: "#home" },
    { id: "dream", label: "DREAM", href: "#dream" },
    { id: "about", label: "About", href: "#about" },
    { id: "preorder", label: "Pre-Order", href: "#preorder" },
  ];

  const backgroundPhrase = "Career growth professional development skill building continuous learning roadmap execution cross-functional collaboration";

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm overflow-hidden">
      {/* Faded background text */}
      <div
        className="absolute inset-0 pointer-events-none select-none overflow-hidden"
        style={{ opacity: 0.08 }}
      >
        <div className="absolute inset-0 flex items-center text-[10px] font-medium text-foreground whitespace-nowrap">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="mx-4">{backgroundPhrase}</span>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-muted/50 z-10">
        <div
          className="h-full bg-gradient-to-r from-primary via-accent to-primary transition-all duration-150 ease-out origin-left"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Pixel Heart Logo */}
          <Link
            href="#home"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity group"
          >
            <PixelHeart size={36} animated />
            <span className="font-bold text-lg tracking-tight text-foreground group-hover:text-primary transition-colors">
              DTD
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`text-sm font-medium transition-colors relative py-2 ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}

            {/* Podcast Button - Opens Panel */}
            <PodcastPanel isOpen={isPodcastOpen} onOpenChange={setIsPodcastOpen}>
              <button
                className={`text-sm font-medium transition-colors relative py-2 inline-flex items-center gap-1.5 ${
                  isPodcastOpen
                    ? "text-primary"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                <Headphones className="w-4 h-4" />
                Podcast
                {isPodcastOpen && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </button>
            </PodcastPanel>
          </nav>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={handleNavClick}
                    className={`text-left text-lg font-medium transition-colors ${
                      activeSection === item.id
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Mobile Podcast Button */}
                <PodcastPanel>
                  <button
                    onClick={handleNavClick}
                    className="text-left text-lg font-medium transition-colors text-foreground hover:text-primary inline-flex items-center gap-2"
                  >
                    <Headphones className="w-5 h-5" />
                    Podcast
                  </button>
                </PodcastPanel>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
