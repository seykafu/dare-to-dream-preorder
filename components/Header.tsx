"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "book", label: "The book" },
  { id: "framework", label: "Framework" },
  { id: "author", label: "Author" },
  { id: "podcast", label: "Podcast" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  return (
    <header className="site-header sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/75">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <div className="container flex h-16 items-center justify-between gap-6">
        <a href="#top" className="text-lg font-bold tracking-[-0.03em] text-primary">
          Doing The Dream
        </a>

        <nav aria-label="Sections" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const active = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={active ? "location" : undefined}
                    className={cn(
                      "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className={cn(
                        "absolute inset-x-3 -bottom-px h-0.5 origin-left bg-primary transition-transform duration-300",
                        active ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#preorder"
            className="inline-flex h-10 items-center rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <span className="sm:hidden">Chapter 3</span>
            <span className="hidden sm:inline">Get Chapter 3 free</span>
          </a>

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-secondary md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" aria-hidden />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              aria-describedby={undefined}
              className="w-[85vw] max-w-sm border-border bg-background p-8"
            >
              <SheetTitle className="text-lg font-bold tracking-[-0.03em] text-primary">
                Doing The Dream
              </SheetTitle>
              <nav aria-label="Sections" className="mt-10">
                <ul className="border-t border-border">
                  {navItems.map((item, i) => (
                    <li key={item.id} className="border-b border-border">
                      <a
                        href={`#${item.id}`}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-baseline gap-4 py-4 text-2xl font-semibold tracking-tight text-foreground"
                      >
                        <span className="font-mono text-xs text-primary">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <a
                href="#preorder"
                onClick={() => setMenuOpen(false)}
                className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-md bg-primary font-semibold text-primary-foreground"
              >
                Get Chapter 3 free
              </a>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div aria-hidden className="header-progress absolute inset-x-0 -bottom-px h-0.5 bg-primary" />
    </header>
  );
}
