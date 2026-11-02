import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { LINKS } from "@/lib/content";
import authorPhoto from "@/src/assets/DoingTheDreamImage.JPG";

const stats = [
  { value: "3,000+", label: "members in PM Hive, the Vancouver tech community he co-founded" },
  { value: "30+", label: "career professionals interviewed on their career decisions" },
];

export function AuthorSection() {
  return (
    <section id="author" aria-labelledby="author-title" className="border-t border-border py-20 md:py-28">
      <div className="container grid gap-12 md:grid-cols-12 md:gap-10 lg:gap-16">
        <Reveal className="md:col-span-5">
          <figure>
            <div className="riso relative aspect-[4/5] rounded-lg">
              <Image
                src={authorPhoto}
                alt="Kasey Fu, author of Doing The Dream, smiling in a navy suit"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover object-[50%_30%]"
              />
            </div>
            <figcaption className="mt-3 flex justify-between font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground">
              <span>Kasey Fu</span>
              <span>Author · PM · Host</span>
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={120} className="md:col-span-7 md:pt-4">
          <p className="eyebrow">03 — The author</p>
          <h2 id="author-title" className="display mt-5 text-[clamp(2.75rem,6vw,5.25rem)] text-foreground">
            Kasey Fu
          </h2>

          <div className="mt-8 max-w-[62ch] space-y-5">
            <p className="text-xl leading-relaxed text-foreground">
              Kasey is the co-founder of <strong className="font-semibold text-primary">PM Hive</strong>,
              a tech community in Vancouver with over 3000 members. He is also a fiction author,
              podcast host, and a senior product leader in tech.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              He worked with countless Gen Z and millennial professionals on navigating career
              anxiety and uncertainty, and has interviewed over 30 career professionals on their
              career decisions. He loves mentoring and supporting others who are discovering their
              own career paths.
            </p>
          </div>

          <dl className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
            {stats.map((s) => (
              <div key={s.value} className="bg-background p-5">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block text-4xl font-bold tracking-[-0.04em] text-primary">{s.value}</span>
                  <span className="mt-1 block text-sm leading-snug text-muted-foreground" aria-hidden>
                    {s.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>

          <blockquote className="mt-10 border-l-2 border-primary pl-5 font-serif text-[1.6rem] italic leading-snug text-foreground">
            &ldquo;Doing The Dream&rdquo; is his way of sharing these insights—helping others reduce
            anxiety, build confidence, and design careers they&apos;re proud of.
          </blockquote>

          <a
            href={LINKS.author}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-2 text-base font-semibold text-foreground"
          >
            <span className="link-underline">Follow Kasey at kaseyfu.com</span>
            <ArrowUpRight
              className="h-4 w-4 text-primary transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden
            />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
