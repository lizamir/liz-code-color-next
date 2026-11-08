import Link from "next/link";
import Arrow from "@/components/ui/Arrow";
import Devices from "@/components/ui/Devices";
import { PROJECTS, type Project } from "@/content";
import GhostWord from "@/components/ui/GhostWord";
import Tags from "@/components/ui/Tags";
import { cn } from "@/lib/ui/cn";

// A project card. The cards stack as you scroll (sticky, each 14px lower); on phones they simply follow each other.
// `pw` / `pw-media` are the hooks for the tilt effect (lib/effects/tiltCards), whose CSS stays with the motion styles.
const card =
  "pw group/pw sticky top-[calc(var(--header-h)_+_14px_+_var(--i)_*_14px)] mb-[clamp(40px,7vw,96px)] grid items-center gap-[clamp(20px,3vw,56px)] rounded-[36px] border border-line bg-card p-[clamp(22px,3.4vw,54px)] shadow-[0_30px_60px_-40px_rgba(36,22,29,0.35)] mobile:relative mobile:top-auto mobile:grid-cols-[1fr] mobile:rounded-[28px] [.a11y-nomotion_&]:relative [.a11y-nomotion_&]:top-auto";
// The card's buttons follow the pointer (lib/effects/magnetButtons, hooked on `.pw-actions .btn`).
const magnet = "[transition:transform_0.25s_var(--ease-out),background_0.2s,color_0.2s,border-color_0.2s]";

/** One project: its devices, summary and links. `tech` adds the stack and the code link. */
function Showcase({ p, i, tech }: { p: Project; i: number; tech: boolean }) {
  // business visitors get the story; the code link and the stack belong to the technical page
  const code = p.links.find((l) => l.href.includes("github.com"));
  const second = tech ? (code ?? p.links[0]) : p.links.find((l) => l !== code);
  return (
    <article
      className={cn(card, i % 2 ? "grid-cols-[1fr_1.25fr]" : "grid-cols-[1.25fr_1fr]")}
      data-tone={p.tone}
      style={{ ["--i" as string]: i }}
    >
      <div className={cn("pw-media relative", i % 2 && "order-2 mobile:order-0")}>
        <Devices mock={p.mock} alt={p.coverAlt} priority={i === 0} className="relative z-1" />
      </div>
      <div className="grid [align-content:center] gap-4">
        <p className="tracking-[0.08em] text-accent-ink [font:700_0.85rem/1.3_var(--font-display)]">
          {p.kicker} · {p.year}
        </p>
        <h3 dir="ltr" className="text-right [font-size:clamp(2.2rem,4.4vw,4rem)] tracking-[-0.055em]">
          <Link
            href={`/work/${p.slug}/`}
            className="after:absolute after:inset-0 after:rounded-[36px] after:content-['']"
            data-cursor="לפרטים"
          >
            {p.title}
          </Link>
        </h3>
        <p className="text-[1.12rem] text-muted">{p.summary}</p>
        {tech && <Tags items={p.stack} label="טכנולוגיות" />}
        <div className="pw-actions relative z-2 mt-[6px] flex flex-wrap gap-3">
          <Link
            className={cn("btn btn-lime bg-ink text-on-ink shadow-[0_5px_0_var(--accent)]", magnet)}
            href={`/work/${p.slug}/`}
          >
            <span>
              {tech ? "למקרה הבוחן" : "לסיפור המלא"} <Arrow />
            </span>
          </Link>
          {[second]
            .filter((l) => l !== undefined)
            .map((l) => (
              <a
                key={l.href}
                className={cn("btn btn-ghost border-ink text-ink hover:bg-ink [&:hover>span]:text-white", magnet)}
                href={l.href}
                {...(l.external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                <span>
                  {l.label} <Arrow dir={l.external ? "out" : "in"} />
                </span>
              </a>
            ))}
        </div>
      </div>
    </article>
  );
}

/** Selected work as a stack of full-width cards: each project sits on a monitor with a phone in front. */
export default function Work({ tech = false }: { tech?: boolean }) {
  const id = tech ? "dev-projects" : "work";
  return (
    <section className="section pt-[150px] pb-[150px] mobile:pt-[110px]" id={id} aria-labelledby={`${id}-title`}>
      <div className="container">
        <div className="section-head reveal">
          <GhostWord word={tech ? "code" : "work"} />
          <div>
            <p className="eyebrow text-accent-ink">{tech ? "PROJECTS · STACK · CODE" : "SELECTED WORK"}</p>
            <h2 id={`${id}-title`} className="title">
              {tech ? (
                <>
                  פרויקטים <em className="text-accent-ink">מבפנים</em>
                </>
              ) : (
                <>
                  פרויקטים <em className="text-accent-ink">נבחרים</em>
                </>
              )}
            </h2>
          </div>
          <p className="lead text-muted">
            {tech
              ? "כל פרויקט עם הסטאק, ההחלטות הטכניות וקישור לקוד או לדמו חי."
              : "כל אתר נבנה סביב העסק שלו, ונבדק על מסך גדול ועל טלפון. לכל פרויקט יש עמוד שמספר מה היה צריך ומה נבנה."}
          </p>
        </div>
        <div className="grid gap-0">
          {PROJECTS.map((p, i) => (
            <Showcase key={p.slug} p={p} i={i} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
}
