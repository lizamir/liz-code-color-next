import { SITE } from "@/content";
import BriefForm from "@/components/features/contact-brief/BriefForm";
import Arrow from "@/components/ui/Arrow";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { formatPhone } from "@/lib/format";

/** The last section of the home page: direct ways to reach Liz, next to the brief form. */
export default function Contact() {
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div className="contact-copy reveal">
          <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
          <h2 id="contact-title" className="title">
            יש לכם רעיון?
            <br />
            <em>בואו נעשה ממנו וואו.</em>
          </h2>
          <p className="lead">
            אתר לעסק, דף נחיתה, או וואטסאפ ויומן שעובדים לבד? ספרו לי בכמה שורות מה צריך, ואני חוזרת עם כיוון ראשוני.
          </p>
          <ul className="channels">
            <li>
              <a href={SITE.whatsapp} target="_blank" rel="noreferrer">
                <span className="wa-chip">
                  <WhatsAppIcon size={14} /> וואטסאפ
                </span>{" "}
                <bdi>{formatPhone(SITE.phone)}</bdi>
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`}>
                <span>מייל</span> {SITE.email}
              </a>
            </li>
            <li>
              <a href={SITE.linkedin} target="_blank" rel="noreferrer">
                <span>LinkedIn</span> liz-hajage <Arrow dir="out" size={16} />
              </a>
            </li>
          </ul>
        </div>

        <BriefForm />
      </div>
    </section>
  );
}
