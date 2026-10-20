"use client";

import { useEffect, useRef } from "react";
import { useMotionOff } from "@/lib/a11y";

/** The hero's drafting grid. The squares near the pointer light up softly (decorative, off with reduced motion). */
export default function GridGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const motionOff = useMotionOff();

  useEffect(() => {
    const el = ref.current;
    const hero = el?.parentElement;
    if (!el || !hero || motionOff || !matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = hero.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
        el.dataset.live = "1";
      });
    };
    const onLeave = () => delete el.dataset.live;
    hero.addEventListener("pointermove", onMove, { passive: true });
    hero.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      hero.removeEventListener("pointermove", onMove);
      hero.removeEventListener("pointerleave", onLeave);
    };
  }, [motionOff]);

  return <div className="grid-glow" ref={ref} aria-hidden="true" />;
}
