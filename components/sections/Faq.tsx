import { FAQ, SITE } from "@/content";
import GhostWord from "@/components/ui/GhostWord";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

/** Questions as a chat: the visitor's question is a bubble, the answer opens as Liz's reply. */
export default function Faq() {
  return (
    <section className="section faq-chat" id="faq" aria-labelledby="faq-title">
      <div className="container faq-wrap">
        <div className="faq-head reveal">
          <GhostWord word="FAQ" />
          <p className="eyebrow">QUESTIONS</p>
          <h2 id="faq-title" className="title">
            שאלות <em>ששואלים אותי</em>
          </h2>
          <p className="lead">לא מצאתם את מה שחיפשתם? שאלו אותי ישירות.</p>
          <a className="btn btn-wa" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            <WhatsAppIcon /> לשאול בוואטסאפ
          </a>
        </div>
        <div className="faq-list">
          {FAQ.map((f, i) => (
            <details className="qa reveal" key={f.q} style={{ ["--d" as string]: i % 3 }} name="faq">
              <summary>
                <span className="qa-q">{f.q}</span>
              </summary>
              <p className="qa-a">
                <span className="qa-from" aria-hidden="true">
                  L
                </span>
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
