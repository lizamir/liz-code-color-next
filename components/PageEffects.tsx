"use client";

import { useEffect } from "react";

/** Page-wide effects: scroll reveal, cursor glow, mockup tilt and scroll progress bar. */
export default function PageEffects() {
  useEffect(() => {
    const cleanups: (() => void)[] = [];

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    cleanups.push(() => observer.disconnect());

    const glow = document.querySelector<HTMLElement>(".cursor-glow");
    const onPointer = (e: PointerEvent) => {
      if (!glow) return;
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };
    window.addEventListener("pointermove", onPointer);
    cleanups.push(() => window.removeEventListener("pointermove", onPointer));

    document.querySelectorAll<HTMLElement>(".mockup").forEach((card) => {
      const move = (e: PointerEvent) => {
        const r = card.getBoundingClientRect();
        card.style.transform = `rotateX(${(e.clientY - r.top - r.height / 2) / -35}deg) rotateY(${(e.clientX - r.left - r.width / 2) / 35}deg)`;
      };
      const leave = () => (card.style.transform = "");
      card.addEventListener("pointermove", move);
      card.addEventListener("pointerleave", leave);
      cleanups.push(() => {
        card.removeEventListener("pointermove", move);
        card.removeEventListener("pointerleave", leave);
      });
    });

    const progress = document.createElement("div");
    progress.className = "scroll-progress";
    progress.setAttribute("aria-hidden", "true");
    document.body.append(progress);
    const onScroll = () => {
      const range = document.documentElement.scrollHeight - innerHeight;
      progress.style.width = (range > 0 ? (scrollY / range) * 100 : 0) + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    cleanups.push(() => {
      window.removeEventListener("scroll", onScroll);
      progress.remove();
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
