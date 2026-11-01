/**
 * Hand-drawn, rounded arrows (instead of text glyphs like ← ↗).
 * `dir` is the direction the arrow points. In RTL, "forward" is to the left.
 */
type Dir = "left" | "right" | "down" | "out" | "in";
const ROT: Record<Dir, number> = { left: 0, right: 180, down: -90, out: 135, in: 45 };

export default function Arrow({ dir = "left", size = 18 }: { dir?: Dir; size?: number }) {
  return (
    <svg className="arrow-ic" viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" focusable="false" style={{ transform: `rotate(${ROT[dir]}deg)` }}>
      <path d="M20 13.5c-2.6 1.8-6.4 2.4-10.2.9C7 13.3 5.4 11.4 4.5 9.4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M3.6 14.2c.1-1.9.4-3.6 1-5.1 1.6.6 3.3.9 5.1.8" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** The decorative dashed loop arrow (hero), drawn on load. */
export function LoopArrow({ className = "" }: { className?: string }) {
  return (
    <svg className={`loop-arrow ${className}`} viewBox="0 0 200 220" aria-hidden="true" focusable="false">
      <path className="la-line" d="M52 208C92 178 116 140 110 100c-5-34-34-52-58-40-26 13-20 56 16 62 38 6 76-24 96-66 10-21 14-38 13-50" fill="none" />
      <path className="la-head" d="M164 6c-3 12-8 23-15 32l13-6 14 2c-6-7-10-17-12-28z" />
    </svg>
  );
}
