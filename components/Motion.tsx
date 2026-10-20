"use client";

import { useEffect } from "react";

/**
 * A small set of micro-interactions in the spirit of React Bits, written for this site and attached by
 * delegation (no markup changes, no extra package): tilt + glare on project cards, magnetic buttons,
 * spotlight on service cards, click sparks, a velocity-skewed ribbon and a blur-in word reveal for section leads.
 * Everything is decorative, only runs with a fine pointer where it needs one, and stops with reduced motion.
 */
export default function Motion() {
  useEffect(() => {
    const off = () => matchMedia("(prefers-reduced-motion: reduce)").matches || document.documentElement.classList.contains("a11y-nomotion");
    const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
    const cleanups: (() => void)[] = [];
    const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));

    /* ── Tilted card + glare hover (project cards) ── */
    if (fine) {
      document.querySelectorAll<HTMLElement>(".pw").forEach((card) => {
        const media = card.querySelector<HTMLElement>(".pw-media");
        if (!media) return;
        const move = (e: PointerEvent) => {
          if (off()) return;
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

      /* ── Magnet (primary buttons) ── */
      document.querySelectorAll<HTMLElement>(".hero .btn, .pw-actions .btn, .contact .btn").forEach((b) => {
        const move = (e: PointerEvent) => {
          if (off()) return;
          const r = b.getBoundingClientRect();
          const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
          const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
          b.style.transform = `translate(${(dx * 10).toFixed(1)}px, ${(dy * 8).toFixed(1)}px)`;
        };
        const leave = () => (b.style.transform = "");
        b.addEventListener("pointermove", move);
        b.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          b.removeEventListener("pointermove", move);
          b.removeEventListener("pointerleave", leave);
        });
      });

      /* ── Spotlight card (services) ── */
      document.querySelectorAll<HTMLElement>(".svc").forEach((c) => {
        const move = (e: PointerEvent) => {
          const r = c.getBoundingClientRect();
          c.style.setProperty("--sx", `${e.clientX - r.left}px`);
          c.style.setProperty("--sy", `${e.clientY - r.top}px`);
        };
        c.addEventListener("pointermove", move);
        cleanups.push(() => c.removeEventListener("pointermove", move));
      });
    }

    /* ── Click spark (buttons and chips) ── */
    const spark = (e: MouseEvent) => {
      if (off()) return;
      const t = (e.target as HTMLElement).closest(".btn, .chip-link, .filters button");
      if (!t) return;
      const cols = ["#b99aff", "#ffb4d6", "#d9c8ff", "#8e63ff"];
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
    cleanups.push(() => document.removeEventListener("click", spark));

    /* ── Scroll velocity: the ribbon leans into the scroll ── */
    const ribbon = document.querySelector<HTMLElement>(".ribbon");
    let lastY = scrollY, skew = 0, raf = 0;
    const tick = () => {
      const dy = scrollY - lastY;
      lastY = scrollY;
      skew += (clamp(dy * 0.08, -4, 4) - skew) * 0.2;
      if (ribbon && !off()) ribbon.style.setProperty("--lean", `${(-1.4 + skew).toFixed(2)}deg`);
      raf = requestAnimationFrame(tick);
    };
    if (ribbon) raf = requestAnimationFrame(tick);
    cleanups.push(() => cancelAnimationFrame(raf));

    /* ── Blur text: section leads come into focus word by word ── */
    const leads = [...document.querySelectorAll<HTMLElement>(".section-head .lead")];
    if (!off() && "IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (es) =>
          es.forEach((e) => {
            if (!e.isIntersecting) return;
            e.target.classList.add("words-in");
            io.unobserve(e.target);
          }),
        { threshold: 0.4 }
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
      cleanups.push(() => io.disconnect());
    }

    return () => cleanups.forEach((c) => c());
  }, []);

  return null;
}
