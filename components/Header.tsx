"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useActiveSection } from "@/hooks/useActiveSection";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const progress = useScrollProgress();
  const activeSection = useActiveSection();

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home", href: "#home" },
    { id: "dream", label: "DREAM", href: "#dream" },
    { id: "about", label: "About", href: "#about" },
    { id: "podcast", label: "Podcast", href: "#podcast" },
    { id: "preorder", label: "Pre-Order", href: "#preorder" },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-muted/50">
        <div
          className="h-full bg-gradient-to-r from-primary via-accent to-primary transition-all duration-150 ease-out origin-left"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="#home"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <Image
              src="/Logo.png"
              alt="Doing The Dream Logo"
              width={120}
              height={40}
              className="h-8 md:h-10 w-auto"
              priority
            />
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
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
