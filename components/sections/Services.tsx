import { SERVICES } from "@/content";
import GhostWord from "@/components/ui/GhostWord";

// A card turns dark on hover, with a soft spotlight that follows the pointer (--sx/--sy, set in lib/effects).
// `svc` is the hook for that effect and for high-contrast mode. No transform/transition: it is a .reveal element.
const card =
  "svc reveal group/svc relative grid [align-content:start] gap-3 overflow-hidden rounded-[32px] border border-line bg-card [padding:34px_34px_30px] hover:bg-ink hover:text-on-ink mobile:[padding:26px_22px] [&>*]:relative before:pointer-events-none before:absolute before:inset-0 before:opacity-0 before:[background:radial-gradient(260px_circle_at_var(--sx,50%)_var(--sy,50%),color-mix(in_srgb,var(--accent)_22%,transparent),transparent_70%)] before:[transition:opacity_0.3s] before:content-[''] hover:before:opacity-100";
const point =
  "flex items-center gap-2.5 text-[0.98rem] font-bold text-ink-2 group-hover/svc:text-[#f3e6eb] before:h-[11px] before:w-[11px] before:flex-none before:rounded-[2px] before:bg-accent before:[transform:rotate(45deg)] before:content-['']";

type Props = { items?: typeof SERVICES; id?: string; eyebrow?: string; lead?: string; ghost?: string };

/** The list of services. The props let the technical page show its own version. */
export default function Services({
  items = SERVICES,
  id = "services",
  eyebrow = "WHAT I BUILD",
  lead = "ארבעה דברים שאני בונה לעסקים, ומה תקבלו מכל אחד.",
  ghost = "ideas",
}: Props) {
  return (
    <section className="section" id={id} aria-labelledby={`${id}-title`}>
      <div className="container">
        <div className="section-head reveal">
          <GhostWord word={ghost} />
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2 id={`${id}-title`} className="title">
              מה נבנה <em>יחד?</em>
            </h2>
          </div>
          <p className="lead">{lead}</p>
        </div>

        <div className="grid grid-cols-[repeat(2,1fr)] gap-[22px] mobile:grid-cols-[1fr]">
          {items.map((s, i) => (
            <article className={card} key={s.tag} style={{ ["--d" as string]: i % 2 }}>
              <span className="text-right tracking-[0.18em] text-accent-ink [direction:ltr] [font:800_0.8rem/1_var(--font-display)] group-hover/svc:text-accent-light">
                {s.tag}
              </span>
              <h3 className="[font-size:clamp(1.7rem,2.6vw,2.3rem)] tracking-[-0.045em] group-hover/svc:text-white">
                {s.title}
              </h3>
              <p className="text-[1.08rem] text-muted group-hover/svc:text-[#f3e6eb]">{s.text}</p>
              <ul className="mt-2 grid list-none gap-2 p-0">
                {s.gets.map((g) => (
                  <li key={g} className={point}>
                    {g}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
