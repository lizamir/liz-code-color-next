import { MARQUEE } from "@/lib/content";

/** A slanted marquee of the tools. Decorative (the same list appears as text in the Stack section). */
export default function Ribbon() {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div className="ribbon" aria-hidden="true">
      <div className="ribbon-track">
        {items.map((w, i) => (
          <span key={i}>
            {w}
            <i>✦</i>
          </span>
        ))}
      </div>
    </div>
  );
}
