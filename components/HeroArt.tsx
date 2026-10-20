"use client";

import { useEffect, useRef } from "react";
import { useMotionOff } from "@/lib/a11y";

const CHIPS = [
  { cls: "chip-a", text: "AI AGENTS" },
  { cls: "chip-b", text: "REACT" },
  { cls: "chip-c", text: "n8n" },
  { cls: "chip-d", text: "AUTOMATIONS" },
  { cls: "chip-e", text: "NEXT.JS" },
  { cls: "chip-f", text: "SUPABASE" },
];

/** The "CODE & COLOR" core with floating tool chips. It leans toward the pointer (decorative). */
export default function HeroArt() {
  const ref = useRef<HTMLDivElement>(null);
  const motionOff = useMotionOff();

  useEffect(() => {
    const el = ref.current;
    if (!el || motionOff || !matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = (e.clientX / innerWidth - 0.5) * 2;
        const y = (e.clientY / innerHeight - 0.5) * 2;
        el.style.setProperty("--px", x.toFixed(3));
        el.style.setProperty("--py", y.toFixed(3));
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, [motionOff]);

  return (
    <div className="hero-art" ref={ref} aria-hidden="true">
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="core">
        <span>CODE</span>
        <b>&amp;</b>
        <span>COLOR</span>
      </div>
      {CHIPS.map((c) => (
        <div key={c.text} className={`chip ${c.cls}`}>
          {c.text}
        </div>
      ))}
      <p className="art-note hand">
        <span>החליפו צבע, זה האתר שלכם</span>
        <svg viewBox="0 0 60 50" width="46" height="38">
          <path d="M8 44C10 24 24 12 50 8m0 0l-12-4m12 4l-5 11" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </p>
    </div>
  );
}
