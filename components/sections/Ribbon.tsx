import { MARQUEE } from "@/content";

/** A slanted marquee. Decorative: what I build on the home page, the tools on the technical page. */
export default function Ribbon({ words = MARQUEE }: { words?: string[] }) {
  const items = [...words, ...words];
  return (
    <div
      className="ribbon relative z-3 [margin:-34px_-3vw_0] [transform:rotate(var(--lean,-1.4deg))] overflow-hidden bg-accent-2 pt-3 pb-[14px] text-on-idea [direction:ltr]"
      aria-hidden="true"
    >
      <div className="flex w-max animate-[marq_46s_linear_infinite] tracking-[-0.02em] [font:900_clamp(1.4rem,3vw,2.2rem)/1.2_var(--font-display)]">
        {items.map((w, i) => (
          <span key={i} className="inline-flex items-center gap-[0.6em] px-[0.5em] whitespace-nowrap">
            {w}
            <i className="text-[0.6em] not-italic">✦</i>
          </span>
        ))}
      </div>
    </div>
  );
}
