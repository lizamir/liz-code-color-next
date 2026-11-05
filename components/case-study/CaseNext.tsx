import Link from "next/link";
import type { Project } from "@/content";
import Arrow from "@/components/ui/Arrow";

/** A link to the next project, at the end of a project page. */
export default function CaseNext({ next }: { next: Project }) {
  return (
    <nav className="case-next reveal" aria-label="הפרויקט הבא">
      <span>הפרויקט הבא</span>
      <Link href={`/work/${next.slug}/`} data-cursor="לפרויקט">
        <b dir="ltr">{next.title}</b>
        <small>
          {next.kicker} <Arrow size={16} />
        </small>
      </Link>
    </nav>
  );
}
