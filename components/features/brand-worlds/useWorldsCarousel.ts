import { useEffect, useRef, useState } from "react";

/** Tracks which phone is centered in the swipe row, scales its neighbors via --k, and scrolls to a phone on request. */
export function useWorldsCarousel(count: number) {
  const row = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = row.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const mid = r.left + r.width / 2;
      let best = 0,
        bestD = Infinity;
      [...el.children].forEach((c, i) => {
        const cr = (c as HTMLElement).getBoundingClientRect();
        const d = Math.abs(cr.left + cr.width / 2 - mid);
        const k = Math.min(1, d / (cr.width * 1.2));
        (c as HTMLElement).style.setProperty("--k", k.toFixed(3));
        if (d < bestD) {
          bestD = d;
          best = i;
        }
      });
      setActive(best);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    el.addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
    };
  }, []);

  const go = (i: number) => {
    const el = row.current;
    const c = el?.children[Math.max(0, Math.min(count - 1, i))] as HTMLElement | undefined;
    c?.scrollIntoView({
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  return { row, active, go };
}
