import Image from "next/image";
import type { Project } from "@/content";
import { cn } from "@/lib/ui/cn";

// `case-block` stays as the hook for high-contrast mode.
const block =
  "case-block reveal grid grid-cols-[220px_1fr] gap-10 border-t border-t-line py-[50px] mobile:grid-cols-[1fr] mobile:gap-[18px] mobile:py-9";
const heading =
  "flex [align-self:start] items-baseline gap-3 [font:800_1.5rem/1.1_var(--font-display)] tracking-[-0.03em]";
const headingNo = "[font:900_0.9rem_var(--font-display)] tracking-[0.1em] text-accent-ink [direction:ltr]";

/** The project's story: the challenge, the approach, what was built, and screens when there are any. */
export default function CaseStory({ p }: { p: Project }) {
  return (
    <>
      <section className={block} aria-labelledby="c-challenge">
        <h2 id="c-challenge" className={heading}>
          <span className={headingNo}>01</span> האתגר
        </h2>
        <p className="tracking-[-0.03em] [font:700_clamp(1.4rem,2.4vw,2.1rem)/1.45_var(--font-display)]">
          {p.challenge}
        </p>
      </section>

      <section className={block} aria-labelledby="c-approach">
        <h2 id="c-approach" className={heading}>
          <span className={headingNo}>02</span> הגישה
        </h2>
        <ol className="grid list-none gap-[14px] p-0 [counter-reset:a]">
          {p.approach.map((a) => (
            <li
              key={a}
              className="relative rounded-[22px] bg-paper-2 py-5 ps-[74px] pe-6 text-[1.1rem] [counter-increment:a] before:absolute before:start-[22px] before:top-[14px] before:text-accent-ink before:content-[counter(a)] before:[font:900_2rem/1_var(--font-display)]"
            >
              {a}
            </li>
          ))}
        </ol>
      </section>

      <section className={block} aria-labelledby="c-built">
        <h2 id="c-built" className={heading}>
          <span className={headingNo}>03</span> מה נבנה
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
          {p.highlights.map((h) => (
            <article
              key={h.title}
              className="grid [align-content:start] gap-2 rounded-[26px] border border-line bg-card p-6"
            >
              <h3 className="text-[1.25rem] tracking-[-0.03em]">{h.title}</h3>
              <p className="text-muted">{h.text}</p>
            </article>
          ))}
        </div>
      </section>

      {p.gallery && (
        <section className={block} aria-labelledby="c-gallery">
          <h2 id="c-gallery" className={heading}>
            <span className={headingNo}>04</span> מבפנים
          </h2>
          <div className="grid grid-cols-[1fr_1fr] [align-items:start] gap-[18px] mobile:grid-cols-[1fr]">
            {p.gallery.map((g) => (
              <figure
                key={g.src}
                className={cn(
                  "m-0 overflow-hidden rounded-[22px] border border-line bg-card [&_img]:block [&_img]:h-auto [&_img]:w-full",
                  g.w < g.h &&
                    "[grid-column:1] [grid-row:span_2] max-w-[340px] justify-self-center mobile:[grid-row:auto] mobile:max-w-[300px]",
                )}
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  width={g.w}
                  height={g.h}
                  sizes="(max-width: 900px) 100vw, 50vw"
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
