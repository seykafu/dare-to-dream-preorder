import { SignupForm } from "@/components/signup/SignupForm";
import { FILLER } from "@/lib/content";

type CSSVars = React.CSSProperties & Record<`--${string}`, string | number>;

/** A block of decorative résumé copy, clamped to whole lines and justified. */
function Fill({ t, lines = 1, linesLg }: { t: string; lines?: number; linesLg?: number }) {
  const style: CSSVars = { "--l": lines };
  if (linesLg) style["--l-lg"] = linesLg;
  return <span aria-hidden className="fill" data-t={t} style={style} />;
}

function FillLine({ t, className }: { t: string; className?: string }) {
  return <span aria-hidden className={`fill-line ${className ?? ""}`} data-t={t} />;
}

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="container grid items-center gap-8 pb-14 pt-6 sm:pt-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] lg:gap-0 lg:pb-20 lg:pt-10 xl:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
        {/* The cover, typeset live: the title surfaces out of a page of résumé bullets. */}
        <div className="field lg:col-span-2 lg:col-start-1 lg:row-start-1">
          <Fill t={FILLER[0]} lines={2} />

          <h1 id="hero-title">
            <span className="field-row row-doing">
              <FillLine t={FILLER[1]} className="lead" />
              <span className="word" style={{ "--i": 0 } as CSSVars}>
                Doing
              </span>
              <FillLine t={FILLER[2]} className="tail" />
            </span>{" "}
            <Fill t={FILLER[3]} lines={1} linesLg={2} />
            <span className="field-row row-the">
              <FillLine t={FILLER[4]} className="lead" />
              <span className="word" style={{ "--i": 1 } as CSSVars}>
                The
              </span>
              <FillLine t={FILLER[5]} className="tail" />
            </span>{" "}
            <Fill t={FILLER[6]} lines={1} linesLg={2} />
            <span className="field-row row-dream">
              <FillLine t={FILLER[7]} className="lead" />
              <span className="word" style={{ "--i": 2 } as CSSVars}>
                Dream
              </span>
              <FillLine t={FILLER[8]} className="tail" />
            </span>
          </h1>

          <Fill t={FILLER[9]} lines={1} />
          <p className="field-row">
            <span className="text-muted-foreground">by</span>
            <span className="shrink-0 text-[1.3em] font-bold leading-none tracking-tight text-primary">
              Kasey Fu
            </span>
            <FillLine t={FILLER[10]} className="tail" />
          </p>
          <Fill t={FILLER[11]} lines={1} linesLg={2} />
        </div>

        {/* Sign-up card, laid over the right edge of the page on desktop. */}
        <div className="relative z-10 lg:col-start-2 lg:row-start-1">
          <div className="rounded-lg border border-border bg-card p-6 shadow-[0_1px_0_hsl(var(--border)),0_24px_48px_-28px_hsl(240_60%_20%/0.35)] animate-in fade-in-0 slide-in-from-bottom-3 duration-700 sm:p-7">
            <p className="eyebrow">Free sample · Chapter 3</p>
            <p className="mt-3 text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.025em] text-foreground">
              Navigate career anxiety{" "}
              <span className="font-serif text-[1.08em] font-normal italic tracking-normal text-primary">
                with clarity and confidence.
              </span>
            </p>
            <p className="mt-3 text-[0.975rem] leading-relaxed text-muted-foreground">
              A new non-fiction book by Kasey Fu. Eliminate all career anxiety, obtain job
              freedom, and never question yourself again.
            </p>

            <div className="my-6 h-px bg-border" />

            <p className="mb-4 text-sm leading-relaxed text-foreground">
              Join the pre-order list to read Chapter 3 now and hear first when the book is
              available.
            </p>
            <SignupForm location="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}
