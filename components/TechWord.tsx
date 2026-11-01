"use client";

import { useState } from "react";

const SPECKS = 15;
// fixed positions so the server and client render the same thing
const specks = Array.from({ length: SPECKS }, (_, i) => {
  const a = (i * 137.5 * Math.PI) / 180;
  const r = 0.55 + ((i * 37) % 45) / 100;
  return { x: 50 + Math.cos(a) * r * 50, y: 50 + Math.sin(a) * r * 46, d: (i % 5) * 0.4, s: 2 + (i % 3) };
});

/**
 * The hero accent word, in the spirit of React Bits' TechText: the letters are revealed one by one as a
 * dashed outline, then fill in, with small specks around it. Clicking it gives it a little kick.
 * The real text stays in the DOM (for search engines and screen readers); the drawing is decorative.
 */
export default function TechWord({ text }: { text: string }) {
  const [kick, setKick] = useState(0);
  const letters = [...text].length;
  return (
    <span
      className="tech-word"
      style={{ ["--letters" as string]: letters }}
      onClick={() => setKick((k) => k + 1)}
      data-kick={kick % 2 ? "a" : kick ? "b" : undefined}
    >
      <span className="tw-text">{text}</span>
      <svg className="tw-svg" aria-hidden="true" focusable="false">
        <defs>
          <mask id="tw-reveal">
            <rect className="tw-mask" x="0" y="-20%" width="100%" height="140%" fill="#fff" />
          </mask>
        </defs>
        <g mask="url(#tw-reveal)">
          <text className="tw-dash" x="50%" y="0.86em" textAnchor="middle">
            {text}
          </text>
          <text className="tw-fill" x="50%" y="0.86em" textAnchor="middle">
            {text}
          </text>
        </g>
      </svg>
      <span className="tw-specks" aria-hidden="true">
        {specks.map((p, i) => (
          <i key={i} style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.s, height: p.s, animationDelay: `${1.2 + p.d}s` }} />
        ))}
      </span>
    </span>
  );
}
