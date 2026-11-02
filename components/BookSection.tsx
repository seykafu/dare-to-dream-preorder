import { Reveal } from "@/components/Reveal";

const learn = [
  "Reduce career anxiety by understanding its root causes",
  "Build horizontal and vertical skills that compound over time",
  "Stay open to adjacent career paths and pivots",
  "Lean on community and mentorship to beat imposter syndrome",
];

const readers = [
  "Gen Z and millennial professionals struggling with career direction and anxiety",
  "Career coaches, mentors, and HR professionals supporting young workers",
  "Parents, educators, and managers who want to better understand and support the next generation",
  "Anyone seeking guidance on navigating uncertainty, burnout, and social comparison",
];

export function BookSection() {
  return (
    <section id="book" aria-labelledby="book-title" className="border-t border-border py-20 md:py-28">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow">01 — The book</p>
            <h2
              id="book-title"
              className="display mt-5 max-w-[16ch] text-[clamp(2.5rem,5.5vw,4.75rem)] text-foreground"
            >
              A modern roadmap for a{" "}
              <span className="font-serif font-normal italic tracking-[-0.01em] text-primary">
                nonlinear
              </span>{" "}
              career.
            </h2>
            <div className="mt-8 max-w-[60ch] space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">Doing The Dream</span> is for Gen Z
                and millennial professionals dealing with career anxiety, burnout, digital
                distraction, and nonlinear career paths. In a world where traditional career
                ladders are disappearing, it offers a practical framework to navigate uncertainty
                with confidence.
              </p>
              <p>
                Whether you&apos;re feeling stuck, overwhelmed by options, or searching for meaning
                in your work, this book provides actionable strategies to design a career and life
                you&apos;re proud of.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5 lg:pt-14">
            <h3 className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              You&apos;ll learn how to
            </h3>
            <ol className="mt-4 border-t border-border">
              {learn.map((item, i) => (
                <li
                  key={item}
                  className="grid grid-cols-[2.5rem_1fr] items-baseline border-b border-border py-4"
                >
                  <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-lg font-medium leading-snug tracking-[-0.01em] text-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <Reveal className="mt-20">
          <h3 className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            Written for
          </h3>
          <ul className="mt-4 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {readers.map((reader) => (
              <li key={reader} className="bg-background p-6 text-base leading-relaxed text-foreground">
                {reader}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
