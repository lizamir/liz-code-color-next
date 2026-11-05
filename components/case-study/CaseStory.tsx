import Image from "next/image";
import type { Project } from "@/content";

/** The project's story: the challenge, the approach, what was built, and screens when there are any. */
export default function CaseStory({ p }: { p: Project }) {
  return (
    <>
      <section className="case-block reveal" aria-labelledby="c-challenge">
        <h2 id="c-challenge">
          <span>01</span> האתגר
        </h2>
        <p className="case-lead">{p.challenge}</p>
      </section>

      <section className="case-block reveal" aria-labelledby="c-approach">
        <h2 id="c-approach">
          <span>02</span> הגישה
        </h2>
        <ol className="approach">
          {p.approach.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ol>
      </section>

      <section className="case-block reveal" aria-labelledby="c-built">
        <h2 id="c-built">
          <span>03</span> מה נבנה
        </h2>
        <div className="hl-grid">
          {p.highlights.map((h) => (
            <article key={h.title} className="hl">
              <h3>{h.title}</h3>
              <p>{h.text}</p>
            </article>
          ))}
        </div>
      </section>

      {p.gallery && (
        <section className="case-block reveal" aria-labelledby="c-gallery">
          <h2 id="c-gallery">
            <span>04</span> מבפנים
          </h2>
          <div className="gallery">
            {p.gallery.map((g) => (
              <figure key={g.src} className={g.w < g.h ? "tall" : undefined}>
                <Image src={g.src} alt={g.alt} width={g.w} height={g.h} sizes="(max-width: 900px) 100vw, 50vw" loading="lazy" />
              </figure>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
