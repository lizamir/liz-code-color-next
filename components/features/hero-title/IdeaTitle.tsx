"use client";

import { useState } from "react";
import Bulb from "./Bulb";
import TypedWord from "./TypedWord";

/**
 * The hero headline: the accent word on its own line, written letter by letter, with a hand-drawn bulb right
 * beside it that switches on when the word is done. Clicking the bulb flips the switch again.
 */
export default function IdeaTitle({ before, word, rest }: { before: string; word: string; rest: string }) {
  const [run, setRun] = useState(0);
  const t0 = { ["--t0" as string]: run ? "0.05s" : "3.1s" };
  return (
    <h1 id="hero-title" className="display idea-title">
      <span className="mask">
        <span style={{ ["--i" as string]: 0, ["--base" as string]: "120ms" }}>{before}</span>
      </span>
      <span className="mask mask-open">
        <span className="iw-line" style={{ ["--i" as string]: 1, ["--base" as string]: "120ms" }}>
          <em className="iw-em">
            <TypedWord word={word} />
          </em>
          <span key={run} className="iw-switch" style={t0} onClick={() => setRun((r) => r + 1)}>
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
