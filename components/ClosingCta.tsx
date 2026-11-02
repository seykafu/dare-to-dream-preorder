import Image from "next/image";
import { SignupForm } from "@/components/signup/SignupForm";
import { Reveal } from "@/components/Reveal";
import { CTA_FILLER } from "@/lib/content";
import cover from "@/src/assets/CoverConcept.jpeg";

export function ClosingCta() {
  return (
    <section
      id="preorder"
      aria-labelledby="preorder-title"
      className="relative overflow-hidden bg-cta text-cta-foreground"
    >
      {/* Same résumé texture as the hero, now in the cover's blue. */}
      <div
        aria-hidden
        className="field pointer-events-none absolute inset-x-0 top-0 select-none px-4 pt-6 [--filler:var(--cta-filler)] sm:px-6 lg:px-8"
      >
        {CTA_FILLER.map((t) => (
          <span key={t} className="fill" data-t={t} />
        ))}
      </div>

      <div className="container relative grid items-center gap-14 pb-20 pt-40 md:pb-28 md:pt-48 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <p className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.16em] text-cta-foreground/80">
            The pre-order list
          </p>
          <h2
            id="preorder-title"
            className="display mt-5 text-[clamp(3rem,7.5vw,6.5rem)] text-cta-foreground"
          >
            Start with{" "}
            <span className="whitespace-nowrap font-serif font-normal italic tracking-[-0.01em]">
              Chapter 3.
            </span>
          </h2>
          <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-cta-foreground/85">
            Join the list to unlock the free sample chapter instantly, and be the first to know
            when <span className="font-semibold text-cta-foreground">Doing The Dream</span> is
            available to pre-order.
          </p>
          <SignupForm location="closing" tone="inverse" layout="inline" className="mt-10 max-w-xl" />
        </Reveal>

        <Reveal delay={150} className="mx-auto w-full max-w-[17rem] sm:max-w-xs lg:col-span-5 lg:max-w-sm">
          <div className="book">
            <Image
              src={cover}
              alt="Doing The Dream book cover: the title in blue rising out of faint résumé text, by Kasey Fu"
              fill
              sizes="(min-width: 1024px) 24rem, 18rem"
              placeholder="blur"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
