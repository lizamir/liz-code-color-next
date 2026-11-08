import Link from "next/link";
import type { Project } from "@/content";
import Arrow from "@/components/ui/Arrow";

/** A link to the next project, at the end of a project page. */
export default function CaseNext({ next }: { next: Project }) {
  return (
    <nav
      className="reveal flex flex-wrap items-center justify-between gap-6 border-t border-t-line [padding:40px_0_10px]"
      aria-label="הפרויקט הבא"
    >
      <span className="tracking-[0.18em] text-muted [font:800_0.8rem_var(--font-display)]">הפרויקט הבא</span>
      <Link
        href={`/work/${next.slug}/`}
        data-cursor="לפרויקט"
        className="grid gap-1 text-left [transition:transform_0.3s_var(--ease-spring)] hover:[transform:translateX(-8px)]"
      >
        <b dir="ltr" className="tracking-[-0.05em] [font:900_clamp(1.8rem,4vw,3rem)/1_var(--font-display)]">
          {next.title}
        </b>
        <small className="text-accent-ink [font:700_0.95rem_var(--font-display)]">
          {next.kicker} <Arrow size={16} />
        </small>
      </Link>
    </nav>
  );
}
