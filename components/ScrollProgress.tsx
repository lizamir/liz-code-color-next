"use client";

import { useEffect, useRef } from "react";

/** A thin bar across the top that shows how far down the page the visitor is. Decorative. */
export default function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = bar.current;
    if (!el) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const range = document.documentElement.scrollHeight - innerHeight;
      el.style.setProperty("--progress", String(range > 0 ? Math.min(1, scrollY / range) : 0));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return (
    <div className="progress" ref={bar} aria-hidden="true">
      <i />
    </div>
  );
}
