"use client";

import { useState } from "react";

// rays around the bulb: [x1, y1, x2, y2], drawn outward from the glass
const RAYS = [
  [50, 2, 50, -12],
  [24, 10, 15, -1],
  [76, 10, 85, -1],
  [8, 30, -6, 24],
  [92, 30, 106, 24],
  [6, 54, -8, 58],
  [94, 54, 108, 58],
];

function Bulb() {
  return (
    <svg className="iw-bulb" viewBox="-12 -16 124 150" aria-hidden="true" focusable="false">
      <circle className="iw-glow" cx="50" cy="44" r="46" />
      <g className="iw-rays">
        {RAYS.map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} style={{ ["--r" as string]: i }} />
        ))}
      </g>
      <path
        className="iw-glass"
        d="M50 8C27 8 12 25 12 46c0 14 7 22 15 30 5 5 8 10 8 16h30c0-6 3-11 8-16 8-8 15-16 15-30 0-21-15-38-38-38Z"
      />
      <path className="iw-shine" d="M27 40c1-9 6-16 14-19" />
      <path className="iw-filament" d="M42 92V72c0-9 3-13 8-6 5-7 8-3 8 6v20" />
      <g className="iw-base">
        <rect x="33" y="92" width="34" height="10" rx="4" />
        <rect x="35" y="102" width="30" height="10" rx="4" />
        <path d="M42 112h16l-3 7h-10Z" />
      </g>
    </svg>
  );
}

/**
 * The hero headline as "a lightbulb moment": the accent word sits on its own line with a hand-drawn bulb
 * right next to it. The bulb drops in, flickers and switches on, its rays pop out, and a beam of light
 * sweeps across the word as it lights up. Every few seconds the bulb hums (a tiny flicker). Clicking the
 * bulb or the word flips the switch again. The words are real text; the bulb is decorative.
 */
export default function IdeaTitle({ before, word, rest }: { before: string; word: string; rest: string }) {
  const [run, setRun] = useState(0);
  const t0 = { ["--t0" as string]: run ? "0.05s" : "1.45s" };
  const again = () => setRun((r) => r + 1);
  return (
    <h1 id="hero-title" className="display idea-title">
      <span className="mask">
        <span style={{ ["--i" as string]: 0, ["--base" as string]: "120ms" }}>{before}</span>
      </span>
      <span className="mask mask-open">
        <span className="iw-line" style={{ ["--i" as string]: 1, ["--base" as string]: "120ms" }}>
          <em className="iw-em">
            <span key={run} className="idea-word" style={t0} onClick={again}>
              {word}
            </span>
          </em>
          <span key={`b${run}`} className="iw-switch" style={t0} onClick={again}>
            <Bulb />
          </span>
        </span>
      </span>
      <span className="mask">
        <span style={{ ["--i" as string]: 2, ["--base" as string]: "120ms" }}>{rest}</span>
      </span>
    </h1>
  );
}
