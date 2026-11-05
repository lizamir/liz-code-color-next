import type { Cleanup } from "./shared";

/** Desktop menu: a soft highlight glides to the hovered, focused or current link. */
export function navPill(): Cleanup {
  const nav = document.querySelector<HTMLElement>(".nav-desktop");
  if (!nav) return () => {};
  const pill = document.createElement("span");
  pill.className = "nav-pill";
  pill.setAttribute("aria-hidden", "true");
  nav.appendChild(pill);
  const links = [...nav.querySelectorAll<HTMLElement>("a")];
  const to = (el: HTMLElement | null) => {
    if (!el) {
      pill.style.opacity = "0";
      return;
    }
    const nr = nav.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    pill.style.width = `${r.width}px`;
    pill.style.height = `${r.height}px`;
    pill.style.transform = `translate(${r.left - nr.left}px, ${r.top - nr.top}px)`;
    pill.style.opacity = "1";
  };
  const current = () => links.find((l) => l.getAttribute("aria-current") === "true") ?? null;
  const handlers = links.map((l) => {
    const enter = () => to(l);
    const leave = () => to(current());
    l.addEventListener("pointerenter", enter);
    l.addEventListener("focus", enter);
    l.addEventListener("pointerleave", leave);
    l.addEventListener("blur", leave);
    return () => {
      l.removeEventListener("pointerenter", enter);
      l.removeEventListener("focus", enter);
      l.removeEventListener("pointerleave", leave);
      l.removeEventListener("blur", leave);
    };
  });
  const mo = new MutationObserver(() => to(current()));
  mo.observe(nav, { attributes: true, subtree: true, attributeFilter: ["aria-current"] });
  to(current());
  return () => {
    handlers.forEach((h) => h());
    mo.disconnect();
    pill.remove();
  };
}
