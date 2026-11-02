import { ArrowUp, ArrowUpRight } from "lucide-react";
import { LINKS } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="overflow-hidden border-t border-border pt-16">
      <div className="container">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-[34ch] text-lg leading-relaxed text-muted-foreground">
            A new non-fiction book on navigating career anxiety with clarity and confidence.
          </p>
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium">
            <li>
              <a
                href={LINKS.author}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-foreground hover:text-primary"
              >
                kaseyfu.com <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </a>
            </li>
            <li>
              <a
                href={LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-foreground hover:text-primary"
              >
                YouTube <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </a>
            </li>
            <li>
              <a href="#top" className="inline-flex items-center gap-1 text-foreground hover:text-primary">
                Back to top <ArrowUp className="h-3.5 w-3.5" aria-hidden />
              </a>
            </li>
          </ul>
        </div>

        <p
          aria-hidden
          className="mt-14 select-none whitespace-nowrap pb-[0.14em] text-center text-[min(12.4vw,10.6rem)] font-bold leading-[0.8] tracking-[-0.055em] text-primary"
        >
          Doing The Dream
        </p>
        <div className="flex flex-col gap-2 border-t border-border py-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <p>© {year} Kasey Fu. All rights reserved.</p>
          <p className="font-mono uppercase tracking-[0.14em]">Doing The Dream</p>
        </div>
      </div>
    </footer>
  );
}
