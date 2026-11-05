import { motionIsOff, type Cleanup } from "./shared";

/** Clicking a button or chip throws a few sparks in the palette colors. */
export function clickSparks(): Cleanup {
  const spark = (e: MouseEvent) => {
    if (motionIsOff()) return;
    const t = (e.target as HTMLElement).closest(".btn, .chip-link, .filters button");
    if (!t) return;
    const cs = getComputedStyle(document.documentElement);
    const cols = [cs.getPropertyValue("--accent"), cs.getPropertyValue("--accent-2"), cs.getPropertyValue("--accent-light"), cs.getPropertyValue("--accent-ink")];
    for (let i = 0; i < 10; i++) {
      const s = document.createElement("i");
      const a = (Math.PI * 2 * i) / 10 + Math.random() * 0.4;
      const d = 26 + Math.random() * 22;
      s.className = "spark";
      s.style.cssText = `left:${e.clientX}px;top:${e.clientY}px;background:${cols[i % cols.length]};--dx:${Math.cos(a) * d}px;--dy:${Math.sin(a) * d}px`;
      document.body.appendChild(s);
      setTimeout(() => s.remove(), 600);
    }
  };
  document.addEventListener("click", spark);
  return () => document.removeEventListener("click", spark);
}
