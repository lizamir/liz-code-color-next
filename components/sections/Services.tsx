import { SERVICES } from "@/content";
import GhostWord from "@/components/ui/GhostWord";

type Props = { items?: typeof SERVICES; id?: string; eyebrow?: string; lead?: string; ghost?: string };

/** The list of services. The props let the technical page show its own version. */
export default function Services({ items = SERVICES, id = "services", eyebrow = "WHAT I BUILD", lead = "ארבעה דברים שאני בונה לעסקים, ומה תקבלו מכל אחד.", ghost = "ideas" }: Props) {
  return (
    <section className="section services" id={id} aria-labelledby={`${id}-title`}>
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

        <div className="svc-grid">
          {items.map((s, i) => (
            <article className="svc reveal" key={s.tag} style={{ ["--d" as string]: i % 2 }}>
              <span className="svc-tag">{s.tag}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ul>
                {s.gets.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
