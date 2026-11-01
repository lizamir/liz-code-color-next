"use client";

import Image from "next/image";
import Arrow from "./Arrow";
import { useEffect, useRef, useState } from "react";
import { BRAND_WORLDS } from "@/lib/content";

/**
 * Five brands, five phones. On wide screens they sit in one row; on phones and tablets it becomes a centered
 * swipe carousel (in the spirit of React Bits' Carousel): the phone in the middle is full size, its neighbors
 * peek in smaller, with dots and arrows. Native scroll-snap, so touch, trackpad and keyboard all work.
 */
export default function BrandWorlds() {
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
      let best = 0, bestD = Infinity;
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
    const c = el?.children[Math.max(0, Math.min(BRAND_WORLDS.length - 1, i))] as HTMLElement | undefined;
    c?.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", inline: "center", block: "nearest" });
  };

  return (
    <section className="section worlds" id="brand-worlds" aria-labelledby="worlds-title">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <p className="eyebrow">
              <b>03</b> FIVE BRANDS. FIVE WORLDS.
            </p>
            <h2 id="worlds-title" className="title">
              כל מותג. <em>עולם משלו.</em>
            </h2>
          </div>
          <p className="lead">חמישה אתרי מותג, כל אחד עם שפה, צבע ואינטראקציה משלו. לחצו על טלפון כדי לפתוח את האתר החי.</p>
        </div>
      </div>
      <div
        className="worlds-row phones"
        ref={row}
        tabIndex={0}
        role="region"
        aria-roledescription="קרוסלה"
        aria-label="חמישה אתרי מותג, אפשר להחליק הצידה"
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            go(active + 1);
          }
          if (e.key === "ArrowRight") {
            e.preventDefault();
            go(active - 1);
          }
        }}
      >
        {BRAND_WORLDS.map((w, i) => (
          <article className="world" key={w.id} style={{ ["--n" as string]: i }} aria-label={`${i + 1} מתוך ${BRAND_WORLDS.length}: ${w.title}`}>
            <a href={`/demos/${w.id}.html`} className="ph" aria-label={`${w.title}: פתיחת האתר`}>
              <i className="dv-island" aria-hidden="true" />
              <Image src={`/mock/${w.id}-m.webp`} alt="" width={560} height={1213} sizes="(max-width: 1199px) 62vw, 240px" loading="lazy" />
            </a>
            <h3 dir="ltr">{w.title}</h3>
            <p>{w.desc}</p>
            <div className="world-links">
              <a href={`/demos/${w.id}.html`}>לאתר <Arrow dir="in" size={16} /></a>
            </div>
          </article>
        ))}
      </div>
      <div className="worlds-nav" aria-label="ניווט בין האתרים">
        <button type="button" className="wn-arrow" onClick={() => go(active - 1)} disabled={active === 0} aria-label="לאתר הקודם">
          <Arrow dir="right" />
        </button>
        <div className="wn-dots">
          {BRAND_WORLDS.map((w, i) => (
            <button key={w.id} type="button" aria-label={`${w.title}`} aria-current={i === active ? "true" : undefined} onClick={() => go(i)} />
          ))}
        </div>
        <button type="button" className="wn-arrow" onClick={() => go(active + 1)} disabled={active === BRAND_WORLDS.length - 1} aria-label="לאתר הבא">
          <Arrow />
        </button>
      </div>
    </section>
  );
}
