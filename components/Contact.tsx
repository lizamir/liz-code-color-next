import CurvedWhatsApp from "./CurvedWhatsApp";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, WHATSAPP_URL } from "@/lib/links";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <p className="eyebrow reveal">HAVE A PROJECT IN MIND?</p>
      <h2 className="reveal">
        יש לכם רעיון?
        <br />
        <em>בואו נעשה ממנו וואו.</em>
      </h2>
      <p className="contact-intro">אתר לעסק, רעיון למוצר, יישום AI או חיזוק לצוות? ספרו לי מה אתם צריכים.</p>
      <CurvedWhatsApp href={WHATSAPP_URL} label="בואו נדבר בוואטסאפ ↗" />
      <div className="contact-details">
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
          וואטסאפ · <bdi>0546887442</bdi>
        </a>
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
          LinkedIn ↗
        </a>
      </div>
      <footer>
        <a className="brand" href="#top">
          <span>LIZ</span>
          <i></i>CODE&amp;COLOR
        </a>
        <p>JERUSALEM · ISRAEL</p>
        <div>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">
            GITHUB
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
            LINKEDIN
          </a>
          <a href={`mailto:${EMAIL}`}>EMAIL</a>
        </div>
      </footer>
    </section>
  );
}
