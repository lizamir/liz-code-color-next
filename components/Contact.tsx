import { SITE } from "@/lib/content";

export default function Contact() {
  const tel = `+972${SITE.phone.slice(1)}`;
  return (
    <section className="section contact on-deep" id="contact" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div className="reveal">
          <p className="eyebrow">
            <b>06</b> CONTACT
          </p>
          <h2 id="contact-title" className="title">
            נתחיל <em>בשיחה.</em>
          </h2>
        </div>
        <div className="contact-box reveal">
          <p>ספרו לי בכמה מילים מה אתם צריכים. אחזור עם שאלות והצעה לצעד הבא.</p>
          <a className="btn btn-lime" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            לוואטסאפ <span className="arrow" aria-hidden="true">←</span>
          </a>
          <div className="channels">
            <a href={`mailto:${SITE.email}`}>
              <span>Email</span>
              <bdi>{SITE.email}</bdi>
            </a>
            <a href={`tel:${tel}`}>
              <span>Phone</span>
              <bdi>{SITE.phone.replace(/^(\d{3})(\d{7})$/, "$1-$2")}</bdi>
            </a>
            <a href={SITE.linkedin} target="_blank" rel="noreferrer">
              <span>LinkedIn</span>
              <bdi>liz-hajage</bdi>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
