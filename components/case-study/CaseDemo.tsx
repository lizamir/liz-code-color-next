import type { Project } from "@/content";
import Arrow from "@/components/ui/Arrow";

/**
 * A recorded demo at the top of a project page. The animated image plays on its
 * own; with reduced motion the browser picks the still frame instead.
 */
export default function CaseDemo({ demo }: { demo: NonNullable<Project["demo"]> }) {
  return (
    <figure className="reveal relative z-2 [margin:-90px_auto_40px] grid max-w-[1100px] gap-3">
      <a
        href={demo.href}
        target="_blank"
        rel="noreferrer"
        className="block overflow-hidden rounded-[28px] border border-line bg-card shadow-[0_40px_90px_-50px_rgba(36,22,29,0.6)]"
      >
        <picture>
          <source srcSet={demo.still} media="(prefers-reduced-motion: reduce)" />
          <img
            src={demo.src}
            alt={demo.alt}
            width={demo.w}
            height={demo.h}
            className="block h-auto w-full"
            fetchPriority="high"
          />
        </picture>
      </a>
      <figcaption className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-[0.98rem] text-muted">
        <span className="max-w-[60ch]">{demo.caption}</span>
        <a className="btn btn-ghost btn-sm" href={demo.href} target="_blank" rel="noreferrer">
          <span>
            לצפייה עם עצירה והפעלה <Arrow dir="out" />
          </span>
        </a>
      </figcaption>
    </figure>
  );
}
