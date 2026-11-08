import Link from "next/link";
import { PROJECTS, type Project } from "@/content";
import Arrow from "@/components/ui/Arrow";
import { cn } from "@/lib/ui/cn";
import { caseActions } from "./caseClasses";

// A colored band (--tone) with two soft circles behind the text.
const band =
  "relative overflow-hidden bg-(--tone) [padding:150px_0_150px] text-(--on-tone) [--on-tone:var(--on-accent)] [--tone:var(--accent)] mobile:[padding:120px_0_130px] before:pointer-events-none before:absolute before:start-[-120px] before:top-[-180px] before:h-[520px] before:w-[520px] before:rounded-[50%] before:bg-[rgba(255,255,255,0.16)] before:content-[''] after:pointer-events-none after:absolute after:end-[8%] after:bottom-[-120px] after:h-[300px] after:w-[300px] after:rounded-[50%] after:border-2 after:border-current after:opacity-25 after:content-['']";

/** The top of a project page: title, summary, year, role and the links to the live work. */
export default function CaseHero({ p, links }: { p: Project; links: Project["links"] }) {
  return (
    <section className={band} data-tone={p.tone}>
      <div className="container relative z-1 grid gap-5">
        <Link
          className="[justify-self:start] border-b-2 border-b-current [padding-block:4px] [font:800_0.95rem_var(--font-display)]"
          href="/#work"
        >
          <Arrow dir="right" size={16} /> כל העבודות
        </Link>
        <p className="eyebrow text-current">
          CASE STUDY · {p.no} / {String(PROJECTS.length).padStart(2, "0")}
        </p>
        <h1 className="display text-right" dir="ltr">
          {p.title}
        </h1>
        <p className="lead max-w-[46rem] text-current opacity-[0.92]">
          {p.kicker}. {p.summary}
        </p>
        <dl className="[margin:14px_0_0] grid max-w-[46rem] grid-cols-[0.5fr_1.5fr] gap-x-[34px] gap-y-[18px] border-t-2 border-t-current pt-[22px] mobile:grid-cols-[1fr]">
          <div>
            <dt className="mb-1 tracking-[0.18em] opacity-80 [font:800_0.74rem_var(--font-display)]">שנה</dt>
            <dd className="m-0 [font:800_1.1rem/1.4_var(--font-display)]">{p.year}</dd>
          </div>
          <div>
            <dt className="mb-1 tracking-[0.18em] opacity-80 [font:800_0.74rem_var(--font-display)]">תפקיד</dt>
            <dd className="m-0 [font:800_1.1rem/1.4_var(--font-display)]">{p.role.join(" · ")}</dd>
          </div>
        </dl>
        <div className={caseActions}>
          {links.map((l, k) => (
            <a
              key={l.href}
              className={cn(
                "btn",
                k === 0 ? "btn-ink" : "btn-ghost text-current hover:bg-current [&:hover>span]:text-(--tone)",
              )}
              href={l.href}
              {...(l.external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              <span>
                {l.label} <Arrow dir={l.external ? "out" : "in"} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
