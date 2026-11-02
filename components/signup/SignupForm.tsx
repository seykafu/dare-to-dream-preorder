"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { AlertCircle, ArrowRight, Check, Download, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { joinPreorderList, normalizeEmail, preloadSignup, validateEmail } from "@/lib/signup";
import { trackDownload, trackSignup } from "@/lib/analytics";
import { SAMPLE_CHAPTER } from "@/lib/content";
import { useSignup } from "@/components/signup/SignupProvider";

interface SignupFormProps {
  /** Reported to analytics so you can see which form converts. */
  location: "hero" | "closing";
  tone?: "default" | "inverse";
  layout?: "stack" | "inline";
  className?: string;
}

export function SignupForm({ location, tone = "default", layout = "stack", className }: SignupFormProps) {
  const id = useId();
  const { state, source, markJoined, reset } = useSignup();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const inverse = tone === "inverse";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;

    // Honeypot: hidden from people, but naive bots fill every field.
    const trap = e.currentTarget.elements.namedItem("company") as HTMLInputElement | null;
    if (trap?.value) {
      markJoined(false, location);
      return;
    }

    const normalized = normalizeEmail(email);
    const problem = validateEmail(normalized);
    if (problem) {
      setError(problem);
      inputRef.current?.focus();
      return;
    }

    setSubmitting(true);
    setError(null);
    const outcome = await joinPreorderList(normalized);
    setSubmitting(false);

    if (outcome.status === "error") {
      setError(outcome.message);
      inputRef.current?.focus();
      return;
    }

    const alreadyOnList = outcome.status === "already-joined";
    trackSignup(location, alreadyOnList);
    setEmail("");
    markJoined(alreadyOnList, location);
  }

  if (state !== "none") {
    return (
      <Unlocked
        returning={state === "returning"}
        inverse={inverse}
        takeFocus={source === location}
        onReset={reset}
        className={className}
      />
    );
  }

  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;

  return (
    <form onSubmit={handleSubmit} noValidate className={cn("w-full", className)}>
      <label
        htmlFor={`${id}-email`}
        className={cn(
          "mb-2 block text-sm font-medium",
          inverse ? "text-cta-foreground" : "text-foreground",
        )}
      >
        Email address
      </label>

      <div className={cn("flex flex-col gap-2.5", layout === "inline" && "sm:flex-row")}>
        <input
          ref={inputRef}
          id={`${id}-email`}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          spellCheck={false}
          placeholder="you@example.com"
          value={email}
          onFocus={preloadSignup}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError(null);
          }}
          disabled={submitting}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${errorId} ${hintId}` : hintId}
          className={cn(
            "h-12 w-full min-w-0 rounded-md border px-4 text-base transition-colors disabled:opacity-60",
            layout === "inline" && "sm:flex-1",
            inverse
              ? "border-cta-foreground/60 bg-cta-foreground/10 text-cta-foreground placeholder:text-cta-foreground/60 hover:border-cta-foreground/70 focus:border-cta-foreground focus-visible:outline-cta-foreground"
              : "border-input bg-card text-foreground placeholder:text-muted-foreground/70 hover:border-foreground/50 focus:border-primary aria-[invalid=true]:border-destructive",
          )}
        />

        <button
          type="submit"
          disabled={submitting}
          className={cn(
            "group inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-md px-5 text-base font-semibold transition-colors disabled:cursor-progress",
            inverse
              ? "bg-cta-foreground text-cta hover:bg-cta-foreground/90 focus-visible:outline-cta-foreground"
              : "bg-primary text-primary-foreground hover:bg-primary/90",
          )}
        >
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              Saving…
            </>
          ) : (
            <>
              Unlock Chapter 3
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden
              />
            </>
          )}
        </button>
      </div>

      {/* Honeypot */}
      <div aria-hidden className="absolute left-[-9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${id}-company`}>Company</label>
        <input id={`${id}-company`} name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {error && (
        <p
          id={errorId}
          role="alert"
          className={cn(
            "mt-2.5 flex items-start gap-2 text-sm font-medium",
            inverse ? "rounded-md bg-cta-foreground/15 px-3 py-2 text-cta-foreground" : "text-destructive",
          )}
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
          {error}
        </p>
      )}

      <p
        id={hintId}
        className={cn("mt-3 text-xs", inverse ? "text-cta-foreground/80" : "text-muted-foreground")}
      >
        Instant download. No spam, unsubscribe anytime.
      </p>
    </form>
  );
}

function Unlocked({
  returning,
  inverse,
  takeFocus,
  onReset,
  className,
}: {
  returning: boolean;
  inverse: boolean;
  takeFocus: boolean;
  onReset: () => void;
  className?: string;
}) {
  const headingRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (takeFocus) headingRef.current?.focus();
  }, [takeFocus]);

  return (
    <div role="status" className={cn("w-full animate-in fade-in-0 slide-in-from-bottom-2 duration-500", className)}>
      <p
        className={cn(
          "flex items-center gap-2 font-mono text-[0.72rem] font-medium uppercase tracking-[0.16em]",
          inverse ? "text-cta-foreground/85" : "text-primary",
        )}
      >
        <Check className="h-3.5 w-3.5" aria-hidden />
        {returning ? "Welcome back" : "You're on the list"}
      </p>
      <p
        ref={headingRef}
        tabIndex={-1}
        className={cn(
          "mt-2 text-2xl font-semibold tracking-tight focus:outline-none",
          inverse ? "text-cta-foreground" : "text-foreground",
        )}
      >
        Chapter 3 is yours.
      </p>
      <p className={cn("mt-1.5 text-sm", inverse ? "text-cta-foreground/85" : "text-muted-foreground")}>
        {returning
          ? "You're already on the pre-order list. Here's your free chapter again."
          : "We'll let you know when pre-orders open. In the meantime, start reading."}
      </p>

      <a
        href={SAMPLE_CHAPTER.href}
        download={SAMPLE_CHAPTER.fileName}
        onClick={() => trackDownload(SAMPLE_CHAPTER.fileName, "docx")}
        className={cn(
          "mt-5 inline-flex h-12 items-center justify-center gap-2 rounded-md px-5 text-base font-semibold transition-colors",
          inverse
            ? "bg-cta-foreground text-cta hover:bg-cta-foreground/90 focus-visible:outline-cta-foreground"
            : "bg-primary text-primary-foreground hover:bg-primary/90",
        )}
      >
        <Download className="h-4 w-4" aria-hidden />
        Download Chapter 3
        <span className="font-normal opacity-75">(.docx)</span>
      </a>

      <button
        type="button"
        onClick={onReset}
        className={cn(
          "mt-4 block text-xs underline underline-offset-4",
          inverse
            ? "text-cta-foreground/80 hover:text-cta-foreground focus-visible:outline-cta-foreground"
            : "text-muted-foreground hover:text-foreground",
        )}
      >
        Sign up a different email
      </button>
    </div>
  );
}
