import { PROJECTS } from "@/content";
import { cvItemText } from "./cvClasses";

/** The lead project, right under the name: what a reader should see first. */
export default function ResumeFeatured() {
  const featured = PROJECTS.filter((p) => p.cv);
  if (!featured.length) return null;
  return (
    <>
      {featured.map((p) => (
        <section
          key={p.slug}
          className="rounded-[16px] border-2 border-accent bg-accent-soft/40 [padding:18px_22px] print:[padding:10px_14px]"
        >
          <h2>{p.cv!.headline}</h2>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <b dir="ltr" className="[font:900_1.25rem_var(--font-display)]">
              {p.title}
            </b>
            <span className="text-[0.95rem] text-muted">
              <bdi>{p.kicker}</bdi> · {p.year}
            </span>
          </div>
          <ul className="mt-2 grid list-disc gap-1 ps-5">
            {p.cv!.bullets.map((b) => (
              <li key={b} className={cvItemText}>
                {b}
              </li>
            ))}
          </ul>
          <small dir="ltr" className="mt-2 block text-[0.85rem] text-muted">
            {p.links.map((l) => l.href.replace(/^https?:\/\//, "")).join(" · ")}
          </small>
        </section>
      ))}
    </>
  );
}
