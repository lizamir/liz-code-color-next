import { clamp, motionIsOff, runAll, type Cleanup } from "./shared";

/** Project cards: the device mockup tilts toward the pointer, with a glare that follows it. */
export function tiltCards(): Cleanup {
  const cleanups: Cleanup[] = [];
  document.querySelectorAll<HTMLElement>(".pw").forEach((card) => {
    const media = card.querySelector<HTMLElement>(".pw-media");
    if (!media) return;
    const move = (e: PointerEvent) => {
      if (motionIsOff()) return;
      const r = media.getBoundingClientRect();
      const x = clamp((e.clientX - r.left) / r.width, 0, 1) - 0.5;
      const y = clamp((e.clientY - r.top) / r.height, 0, 1) - 0.5;
      media.style.setProperty("--rx", `${(-y * 5).toFixed(2)}deg`);
      media.style.setProperty("--ry", `${(x * 7).toFixed(2)}deg`);
      media.style.setProperty("--gx", `${((x + 0.5) * 100).toFixed(1)}%`);
      media.style.setProperty("--gy", `${((y + 0.5) * 100).toFixed(1)}%`);
      media.dataset.tilt = "1";
    };
    const leave = () => {
      media.style.setProperty("--rx", "0deg");
      media.style.setProperty("--ry", "0deg");
      delete media.dataset.tilt;
    };
    media.addEventListener("pointermove", move);
    media.addEventListener("pointerleave", leave);
    cleanups.push(() => {
      media.removeEventListener("pointermove", move);
      media.removeEventListener("pointerleave", leave);
    });
  });
  return runAll(cleanups);
}
