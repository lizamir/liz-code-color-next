import Link from "next/link";
import type { Project } from "@/content";
import Arrow from "@/components/ui/Arrow";

/** The technical details, folded at the end of the page: stack, link to the code, and the technical page. */
export default function CaseTech({ stack, code }: { stack: string[]; code?: Project["links"][number] }) {
  return (
    <details className="case-tech reveal">
      <summary>
        <span className="case-tech-label" dir="ltr">
          {"</>"}
        </span>
        הצד הטכני, למפתחים ולמגייסים
      </summary>
      <div className="case-tech-body">
        <ul className="tags" aria-label="טכנולוגיות">
          {stack.map((t) => (
            <li key={t} dir="ltr">
              {t}
            </li>
          ))}
        </ul>
        <div className="case-tech-links">
          {code && (
            <a className="text-link" href={code.href} target="_blank" rel="noreferrer">
              {code.label} <Arrow dir="out" />
            </a>
          )}
          <Link className="text-link" href="/dev/">
            לעמוד המקצועי <Arrow dir="in" />
          </Link>
        </div>
      </div>
    </details>
  );
}
