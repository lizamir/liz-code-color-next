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
    openGraph: { title, description: p.summary, url: `/work/${p.slug}/`, images: [{ url: `/work/${p.shot}-d.webp`, width: 1440, height: 900, alt: p.alt }] },
  };
}

export default async function CaseStudy({ params }: Props) {
  const { slug } = await params;
  const i = PROJECTS.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const p = PROJECTS[i];
  const next = PROJECTS[(i + 1) % PROJECTS.length];
  const site = p.links[1];

  return (
    <>
      <ScrollProgress />
      <Header home={false} />
      <main id="main" className="case">
        <section className="case-hero" style={{ ["--surface" as string]: p.surface, ["--on-surface" as string]: p.onSurface }}>
          <div className="container">
            <Link className="case-back" href="/#work">
              ← כל העבודות
            </Link>
            <p className="eyebrow" style={{ color: "inherit" }}>
              CASE STUDY · {p.no} / {String(PROJECTS.length).padStart(2, "0")}
            </p>
            <h1>{p.title}</h1>
            <p className="lead">
              {p.kicker}. {p.line}
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
              <a className="btn btn-primary" href={site.href}>
                {site.label} <span className="arrow" aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="case-shots">
              <figure className="d">
                <Image src={`/work/${p.shot}-d.webp`} alt={p.alt} width={1440} height={900} sizes="(max-width: 900px) 70vw, 900px" priority />
              </figure>
              <figure className="m">
                <Image src={`/work/${p.shot}-m.webp`} alt={`${p.title} בטלפון`} width={560} height={1213} sizes="(max-width: 900px) 28vw, 260px" />
              </figure>
            </div>
          </div>
        </section>

        <div className="container case-body">
          <section className="case-block reveal" aria-labelledby="c-who">
            <h2 id="c-who">
              <span>01</span> למי זה מיועד
            </h2>
            <p className="case-lead">{p.audience}</p>
          </section>

          <section className="case-block reveal" aria-labelledby="c-built">
            <h2 id="c-built">
              <span>02</span> מה בניתי
            </h2>
            <ol className="approach">
              {p.built.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ol>
          </section>

          <section className="case-block reveal" aria-labelledby="c-dec">
            <h2 id="c-dec">
              <span>03</span> החלטות UX
            </h2>
            <div className="hl-grid">
              {p.decisions.map((h) => (
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
                  <figure key={g.src}>
                    <Image src={g.src} alt={g.alt} width={g.w} height={g.h} sizes="(max-width: 900px) 100vw, 50vw" loading="lazy" />
                  </figure>
                ))}
              </div>
            </section>
          )}

          <nav className="case-next" aria-label="הפרויקט הבא">
            <span>NEXT PROJECT</span>
            <Link href={`/work/${next.slug}/`}>
              <b dir="ltr">{next.title}</b>
              <small>{next.kicker} ←</small>
            </Link>
          </nav>
        </div>

        <section className="case-cta on-deep" style={{ background: "var(--deep)" }}>
          <div className="container">
            <p className="eyebrow">NEXT</p>
            <h2 className="title">
              רוצים משהו <em>כזה?</em>
            </h2>
            <p className="lead">ספרו לי על העסק או על הרעיון, ונבין יחד מה שווה לבנות קודם.</p>
            <div className="case-actions">
              <a className="btn btn-lime" href={SITE.whatsapp} target="_blank" rel="noreferrer">
                בואו נדבר בוואטסאפ <span className="arrow" aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer home={false} />
      <Reveal />
    </>
  );
}
