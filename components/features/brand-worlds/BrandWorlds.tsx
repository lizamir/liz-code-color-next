"use client";

import Image from "next/image";
import Arrow from "@/components/ui/Arrow";
import { BRAND_WORLDS } from "@/content";
import { useWorldsCarousel } from "./useWorldsCarousel";
import { island } from "@/components/ui/Devices";
import { cn } from "@/lib/ui/cn";

// One centered row of phones from 1200px; below 1199px a centered swipe carousel whose neighbors shrink (--k from the hook).
const rowClass =
  "flex [align-items:flex-start] gap-[34px] overflow-x-auto [padding:40px_max(32px,calc((100vw_-_1280px)/2))_50px] [scroll-snap-type:x_proximity] [scrollbar-color:var(--accent)_transparent] [scrollbar-width:thin] carousel:gap-[14px] carousel:overflow-y-hidden carousel:[padding:24px_calc(50%_-_min(124px,33vw))_18px] carousel:[scroll-snap-type:x_mandatory] carousel:[scrollbar-width:none] carousel:[&::-webkit-scrollbar]:hidden min-[1200px]:justify-center min-[1200px]:overflow-visible";
const world =
  "grid [align-content:start] gap-2 [scroll-snap-align:start] carousel:mt-0 carousel:[flex:0_0_min(248px,66vw)] carousel:[opacity:calc(1_-_var(--k,0)_*_0.5)] carousel:[scroll-snap-align:center] carousel:[scroll-snap-stop:always] carousel:[transform:scale(calc(1_-_var(--k,0)_*_0.14))] carousel:[transition:transform_0.2s_ease-out,opacity_0.2s_ease-out] min-[1200px]:[flex:0_0_216px] [.a11y-nomotion_&]:[transition:none]";
// Text under a phone fades with its distance from the center.
const fade = "carousel:justify-center carousel:text-center carousel:[opacity:calc(1_-_var(--k,0)_*_1.6)]";
// The phone lifts on hover or keyboard focus (not in the carousel, where the centered one is already big).
const phone =
  "relative mb-[14px] block aspect-[9/19] rounded-[34px] p-2 [background:linear-gradient(160deg,#474a5a,#0f1017)] [box-shadow:0_34px_50px_-22px_rgba(0,0,0,0.9),inset_0_0_0_1px_rgba(255,255,255,0.25)] [transition:transform_0.5s_var(--ease-spring),box-shadow_0.4s] hover:[transform:translateY(-14px)_rotate(-1.5deg)] hover:[box-shadow:0_50px_60px_-24px_color-mix(in_srgb,var(--accent)_60%,#000),inset_0_0_0_1px_rgba(255,255,255,0.4)] focus-visible:[transform:translateY(-14px)_rotate(-1.5deg)] focus-visible:[box-shadow:0_50px_60px_-24px_color-mix(in_srgb,var(--accent)_60%,#000),inset_0_0_0_1px_rgba(255,255,255,0.4)] carousel:mb-4 carousel:hover:[transform:none] carousel:focus-visible:[transform:none] [&_img]:block [&_img]:h-full [&_img]:w-full [&_img]:rounded-[27px] [&_img]:object-cover [&_img]:object-top";
const navArrow =
  "carousel:h-11 carousel:w-11 carousel:cursor-pointer carousel:rounded-[50%] carousel:border-[1.5px] carousel:border-ink carousel:bg-card carousel:[font:800_1.1rem_var(--font-display)] carousel:text-ink carousel:disabled:cursor-default carousel:disabled:opacity-30";
const dot =
  "carousel:relative carousel:h-6 carousel:w-6 carousel:cursor-pointer carousel:[border:0] carousel:[background:none] carousel:p-0 carousel:before:absolute carousel:before:[inset:8px] carousel:before:rounded-[99px] carousel:before:bg-line carousel:before:[transition:all_0.25s] carousel:before:content-[''] carousel:aria-[current=true]:before:[inset:8px_2px] carousel:aria-[current=true]:before:bg-accent-ink";

/**
 * Five brands, five phones. On wide screens they sit in one row; on phones and tablets it becomes a centered
 * swipe carousel (in the spirit of React Bits' Carousel): the phone in the middle is full size, its neighbors
 * peek in smaller, with dots and arrows. Native scroll-snap, so touch, trackpad and keyboard all work.
 */
export default function BrandWorlds() {
  const { row, active, go } = useWorldsCarousel(BRAND_WORLDS.length);

  return (
    <section
      className="section overflow-hidden pb-[110px] mobile:pb-[84px]"
      id="brand-worlds"
      aria-labelledby="worlds-title"
    >
      <div className="container">
        <div className="section-head reveal mb-10">
          <div>
            <p className="eyebrow text-accent-ink">FIVE BRANDS. FIVE WORLDS.</p>
            <h2 id="worlds-title" className="title">
              כל מותג. <em className="text-accent-ink">עולם משלו.</em>
            </h2>
          </div>
          <p className="lead text-muted">
            חמישה אתרי מותג, כל אחד עם שפה, צבע ואינטראקציה משלו. לחצו על טלפון כדי לפתוח את האתר החי.
          </p>
        </div>
      </div>
      <div
        className={rowClass}
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
          <article
            className={cn(world, i % 2 === 1 && "mt-14")}
            key={w.id}
            style={{ ["--n" as string]: i }}
            aria-label={`${i + 1} מתוך ${BRAND_WORLDS.length}: ${w.title}`}
          >
            <a href={`/demos/${w.id}.html`} className={phone} aria-label={`${w.title}: פתיחת האתר`}>
              <i className={cn(island, "top-[14px] w-[26%]")} aria-hidden="true" />
              <Image
                src={`/mock/${w.id}-m.webp`}
                alt=""
                width={560}
                height={1213}
                sizes="(max-width: 1199px) 62vw, 240px"
                loading="lazy"
              />
            </a>
            <h3 dir="ltr" className={cn("mt-2.5 text-right text-[1.15rem] tracking-[0.01em] text-ink", fade)}>
              {w.title}
            </h3>
            <p className={cn("text-[0.98rem] text-muted", fade)}>{w.desc}</p>
            <div className={cn("mt-1 flex gap-[18px]", fade)}>
              <a
                className="border-b-2 border-b-current [padding-block:4px_3px] text-accent-ink [font:800_0.92rem_var(--font-display)]"
                href={`/demos/${w.id}.html`}
              >
                לאתר <Arrow dir="in" size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
      <div
        className="worlds-nav hidden carousel:mt-[6px] carousel:flex carousel:items-center carousel:justify-center carousel:gap-[18px]"
        aria-label="ניווט בין האתרים"
      >
        <button
          type="button"
          className={navArrow}
          onClick={() => go(active - 1)}
          disabled={active === 0}
          aria-label="לאתר הקודם"
        >
          <Arrow dir="right" />
        </button>
        <div className="carousel:flex carousel:gap-[6px]">
          {BRAND_WORLDS.map((w, i) => (
            <button
              key={w.id}
              type="button"
              aria-label={`${w.title}`}
              className={dot}
              aria-current={i === active ? "true" : undefined}
              onClick={() => go(i)}
            />
          ))}
        </div>
        <button
          type="button"
          className={navArrow}
          onClick={() => go(active + 1)}
          disabled={active === BRAND_WORLDS.length - 1}
          aria-label="לאתר הבא"
        >
          <Arrow />
        </button>
      </div>
    </section>
  );
}
