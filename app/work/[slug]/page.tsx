import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ScrollProgress from "@/components/ScrollProgress";
import { PROJECTS, SITE } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = PROJECTS.find((x) => x.slug === slug);
  if (!p) return {};
  const title = `${p.title}: ${p.kicker}`;
  return {
    title,
    description: p.summary,
    alternates: { canonical: `/work/${p.slug}/` },
    openGraph: { title, description: p.summary, url: `/work/${p.slug}/`, images: [{ url: p.cover, width: 1600, height: 1000, alt: p.coverAlt }] },
  };
}

export default async function CaseStudy({ params }: Props) {
  const { slug } = await params;
  const i = PROJECTS.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const p = PROJECTS[i];
  const next = PROJECTS[(i + 1) % PROJECTS.length];

  return (
    <>
      <ScrollProgress />
      <Header home={false} />
      <main id="main" className="case">
        <section className="case-hero" data-tone={p.tone}>
          <div className="container">
            <Link className="case-back" href="/#work">
              ← כל העבודות
            </Link>
            <p className="eyebrow">
              CASE STUDY · {p.no} / {String(PROJECTS.length).padStart(2, "0")}
            </p>
            <h1 className="display" dir="ltr">
              {p.title}
            </h1>
            <p className="lead">
              {p.kicker}. {p.summary}
            </p>
            <dl className="meta">
              <div>
                <dt>שנה</dt>
                <dd>{p.year}</dd>
              </div>
              <div>
                <dt>תפקיד</dt>
                <dd>{p.role.join(" · ")}</dd>
              </div>
              <div>
                <dt>טכנולוגיות</dt>
                <dd dir="ltr">{p.stack.join(" · ")}</dd>
              </div>
            </dl>
            <div className="case-actions">
              {p.links.map((l, k) => (
                <a key={l.href} className={`btn ${k === 0 ? "btn-ink" : "btn-ghost"}`} href={l.href} {...(l.external ? { target: "_blank", rel: "noreferrer" } : {})}>
                  <span>
                    {l.label} {l.external ? "↗" : "↙"}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="container case-body">
          <figure className="case-cover reveal">
            <Image src={p.cover} alt={p.coverAlt} width={1600} height={1000} sizes="(max-width: 1300px) 100vw, 1240px" priority />
          </figure>

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

          <nav className="case-next reveal" aria-label="הפרויקט הבא">
            <span>הפרויקט הבא</span>
            <Link href={`/work/${next.slug}/`} data-cursor="לפרויקט">
              <b dir="ltr">{next.title}</b>
              <small>{next.kicker} ←</small>
            </Link>
          </nav>
        </div>

        <section className="case-cta on-deep">
          <div className="container">
            <h2 className="title">
              יש לכם פרויקט <em>דומה?</em>
            </h2>
            <p className="lead">ספרו לי בכמה שורות מה צריך, ואחזור עם כיוון ראשוני.</p>
            <div className="case-actions">
              <a className="btn btn-lime" href={SITE.whatsapp} target="_blank" rel="noreferrer">
                בואו נדבר בוואטסאפ ↗
              </a>
              <Link className="btn btn-ghost" href="/#contact">
                <span>לטופס הקצר</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer home={false} />
      <Reveal />
    </>
  );
}
