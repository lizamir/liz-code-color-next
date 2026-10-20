import Image from "next/image";
import { BRAND_WORLDS } from "@/lib/content";

/** Five brands, five phones: a staggered row of live sites (native scroll, so it works with touch and keyboard). */
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
          <p className="lead">חמישה אתרי מותג, כל אחד עם שפה, צבע ואינטראקציה משלו. לחצו על טלפון כדי לפתוח את האתר החי.</p>
        </div>
      </div>
      <div className="worlds-row phones" tabIndex={0} role="region" aria-label="חמישה אתרי מותג, אפשר להחליק הצידה">
        {BRAND_WORLDS.map((w, i) => (
          <article className="world" key={w.id} style={{ ["--n" as string]: i }}>
            <a href={`/demos/${w.id}.html`} className="ph" aria-label={`${w.title}: פתיחת האתר`}>
              <i className="dv-island" aria-hidden="true" />
              <Image src={`/mock/${w.id}-m.webp`} alt="" width={560} height={1213} sizes="(max-width: 900px) 60vw, 240px" loading="lazy" />
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
