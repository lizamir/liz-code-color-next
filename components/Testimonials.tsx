import { TESTIMONIALS } from "@/lib/content";
import WhatsAppIcon from "./WhatsAppIcon";

/** What clients wrote, shown the way it arrived: as WhatsApp messages. A typing dot plays before each bubble. */
export default function Testimonials() {
  return (
    <section className="section voices" id="voices" aria-labelledby="voices-title">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <p className="eyebrow">
              <b>04</b> KIND WORDS
            </p>
            <h2 id="voices-title" className="title">
              מה לקוחות <em>כתבו לי</em>
            </h2>
          </div>
          <p className="lead">הודעות שקיבלתי בוואטסאפ אחרי שהאתר עלה לאוויר. בלי עריכה, רק תיקוני כתיב קטנים.</p>
        </div>

        <ul className="chats">
          {TESTIMONIALS.map((t, i) => (
            <li className="chat-card reveal" key={t.name} style={{ ["--d" as string]: i, ["--k" as string]: i }}>
              <figure>
                <div className="chat-head" aria-hidden="true">
                  <span className="chat-avatar" style={{ background: t.color }}>
                    {t.initial}
                  </span>
                  <span className="chat-who">
                    <b>{t.name}</b>
                    <small>{t.role}</small>
                  </span>
                  <WhatsAppIcon size={18} />
                </div>
                <div className="chat-body">
                  <span className="chat-typing" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </span>
                  <blockquote className="chat-bubble">
                    <p>{t.text}</p>
                    <span className="chat-ticks" aria-hidden="true">
                      ✓✓
                    </span>
                  </blockquote>
                </div>
                <figcaption className="sr-only">
                  {t.name}, {t.role}, על {t.project}
                </figcaption>
                <p className="chat-tag" aria-hidden="true">
                  {t.role} · {t.project}
                </p>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
