import { motionIsOff, runAll, type Cleanup } from "./shared";

/** Plain numbers in the hero chips (like 4+) tick up once when they come into view. */
export function countUp(): Cleanup {
  const cleanups: Cleanup[] = [];
  document.querySelectorAll<HTMLElement>(".proof b").forEach((el) => {
    const m = (el.firstChild?.textContent || "").match(/^(\d+)(\+?)$/);
    if (!m || motionIsOff()) return;
    const target = Number(m[1]);
    const node = el.firstChild as Text;
    const suffix = m[2];
    node.textContent = "0" + suffix;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const step = (t: number) => {
          const k = Math.min(1, (t - t0) / 900);
          node.textContent = Math.round(target * (1 - Math.pow(1 - k, 3))) + suffix;
          if (k < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    cleanups.push(() => io.disconnect());
  });
  return runAll(cleanups);
}
