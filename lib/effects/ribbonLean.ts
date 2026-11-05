import { clamp, motionIsOff, type Cleanup } from "./shared";

/** The ribbon leans into the scroll, according to how fast the page moves. */
export function ribbonLean(): Cleanup {
  const ribbon = document.querySelector<HTMLElement>(".ribbon");
  let lastY = scrollY,
    skew = 0,
    raf = 0;
  const tick = () => {
    const dy = scrollY - lastY;
    lastY = scrollY;
    skew += (clamp(dy * 0.08, -4, 4) - skew) * 0.2;
    if (ribbon && !motionIsOff()) ribbon.style.setProperty("--lean", `${(-1.4 + skew).toFixed(2)}deg`);
    raf = requestAnimationFrame(tick);
  };
  if (ribbon) raf = requestAnimationFrame(tick);
  return () => cancelAnimationFrame(raf);
}
