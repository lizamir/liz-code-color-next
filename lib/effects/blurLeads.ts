import { motionIsOff, type Cleanup } from "./shared";

/** Section leads come into focus word by word when they scroll into view. */
export function blurLeads(): Cleanup {
  const leads = [...document.querySelectorAll<HTMLElement>(".section-head .lead")];
  if (motionIsOff() || !("IntersectionObserver" in window)) return () => {};
  const io = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("words-in");
        io.unobserve(e.target);
      }),
    { threshold: 0.4 },
  );
  leads.forEach((el) => {
    if (el.dataset.split) return;
    const words = (el.textContent || "").trim().split(/\s+/);
    el.textContent = "";
    words.forEach((w, i) => {
      const s = document.createElement("span");
      s.className = "bw";
      s.style.setProperty("--w", String(i));
      s.textContent = w + (i < words.length - 1 ? " " : "");
      el.appendChild(s);
    });
    el.dataset.split = "1";
    io.observe(el);
  });
  return () => io.disconnect();
}
