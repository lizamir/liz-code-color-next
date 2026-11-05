import { MARQUEE } from "@/content";

/** A slanted marquee. Decorative: what I build on the home page, the tools on the technical page. */
export default function Ribbon({ words = MARQUEE }: { words?: string[] }) {
  const items = [...words, ...words];
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
