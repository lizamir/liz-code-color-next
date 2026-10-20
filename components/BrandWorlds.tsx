import Image from "next/image";
import { BRAND_WORLDS } from "@/lib/content";

/** Five brands, five different worlds: a swipeable row (native scroll, so it works with touch and keyboard). */
export default function BrandWorlds() {
  return (
    <section className="section worlds on-deep" id="brand-worlds" aria-labelledby="worlds-title">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <p className="eyebrow">
              <b>02</b> FIVE BRANDS. FIVE WORLDS.
            </p>
            <h2 id="worlds-title" className="title">
              כל מותג. <em>עולם משלו.</em>
            </h2>
          </div>
          <p className="lead">אתרי מותג, חוויות אינטראקטיביות וקמפיינים. מהרעיון הראשון ועד לפרט הקטן.</p>
        </div>
      </div>
      <div className="worlds-row" tabIndex={0} role="region" aria-label="חמישה עולמות מותג, אפשר להחליק הצידה">
        {BRAND_WORLDS.map((w) => (
          <article className="world" key={w.id}>
            <a href={`/demos/${w.id}.html`} className="world-media" tabIndex={-1} aria-hidden="true">
              <Image src={`/assets/${w.id}.webp`} alt="" width={800} height={800} sizes="(max-width: 900px) 70vw, 24vw" loading="lazy" />
            </a>
            <h3 dir="ltr">{w.title}</h3>
            <p>{w.desc}</p>
            <div className="world-links">
              <a href={`/demos/${w.id}.html`}>לאתר ↙</a>
              <a href={`/demos/${w.id}-poster.html`}>לפוסטר ↙</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
