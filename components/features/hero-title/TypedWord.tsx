"use client";

import { useEffect, useRef, useState } from "react";
import TechText from "@/components/vendor/react-bits/TechText";
import { useMotionOff } from "@/lib/stores/a11y";

/**
 * The accent word, written letter by letter with React Bits' TechText (type intro: each letter appears as a
 * dashed outline under a selection frame, then fills). The real word stays in the DOM, transparent, so it
 * sets the size and is what search engines and screen readers read; the canvas sits over it with room to
 * spare, so the handwritten letters are never cut.
 */
export default function TypedWord({ word }: { word: string }) {
  const sizer = useRef<HTMLSpanElement>(null);
  const [px, setPx] = useState(0);
  const [ready, setReady] = useState(false);
  const still = useMotionOff();

  useEffect(() => {
    const el = sizer.current;
    if (!el) return;
    const measure = () => setPx(parseFloat(getComputedStyle(el).fontSize) || 0);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    // start writing once the headline line has slid in
    const t = window.setTimeout(() => setReady(true), still ? 0 : 1100);
    return () => {
      ro.disconnect();
      window.clearTimeout(t);
    };
  }, [still]);

  return (
    <span className="tt-word">
      <span ref={sizer} className="tt-sizer">
        {word}
      </span>
      {ready && px > 0 && (
        <TechText
          className="tt-canvas"
          ariaHidden
          rtl
          text={[...word].reverse().join("")}
          fontWeight={400}
          fontSize={px}
          letterSpacing={0}
          reveal="letter"
          dashLength={4}
          dashGap={2}
          specks={15}
          labels={false}
          intro={still ? "none" : "type"}
          introDuration={1.8}
          sweep={!still}
          speed={0.6}
          clickKick
        />
      )}
    </span>
  );
}
