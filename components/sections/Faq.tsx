import { FAQ, SITE } from "@/content";
import GhostWord from "@/components/ui/GhostWord";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

// The question is a chat bubble from the visitor; open, it turns dark and the arrow flips.
const question =
  "relative inline-flex max-w-[88%] items-center gap-3 rounded-[22px_22px_22px_6px] border border-line bg-card px-5 py-[14px] [font:700_1.1rem/1.35_var(--font-display)] [transition:background_0.2s,border-color_0.2s] group-hover/sum:border-accent group-open/qa:border-ink group-open/qa:bg-ink group-open/qa:text-on-ink mobile:max-w-full after:h-2.5 after:w-2.5 after:flex-none after:border-e-[2.5px] after:border-b-[2.5px] after:[rotate:45deg] after:[translate:0_-3px] after:[transition:rotate_0.3s_var(--ease-spring)] after:content-[''] group-open/qa:after:[rotate:-135deg] group-open/qa:after:[translate:0_2px]";
// The answer is Liz's reply bubble, with her initial.
const answer =
  "[margin:10px_0_0_auto] flex max-w-[88%] items-end gap-3 rounded-[22px_22px_6px_22px] bg-accent-soft px-[18px] py-[14px] text-[1.05rem] leading-[1.55] text-ink group-open/qa:animate-[qa-pop_0.45s_var(--ease-spring)] group-open/qa:[transform-origin:left_bottom] mobile:max-w-full";

/** Questions as a chat: the visitor's question is a bubble, the answer opens as Liz's reply. */
export default function Faq() {
  return (
    <section className="section" id="faq" aria-labelledby="faq-title">
      <div className="container grid grid-cols-[0.85fr_1.15fr] [align-items:start] gap-[70px] mobile:grid-cols-[1fr] mobile:gap-10">
        <div className="reveal sticky top-[120px] isolate grid justify-items-start gap-[18px] mobile:static">
          <GhostWord word="FAQ" className="top-[-0.85em]" />
          <p className="eyebrow">QUESTIONS</p>
          <h2 id="faq-title" className="title">
            שאלות <em>ששואלים אותי</em>
          </h2>
          <p className="lead">לא מצאתם את מה שחיפשתם? שאלו אותי ישירות.</p>
          <a className="btn btn-wa" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            <WhatsAppIcon /> לשאול בוואטסאפ
          </a>
        </div>
        <div className="grid gap-[14px]">
          {FAQ.map((f, i) => (
            <details className="qa reveal group/qa" key={f.q} style={{ ["--d" as string]: i % 3 }} name="faq">
              <summary className="group/sum flex cursor-pointer justify-start [list-style:none] [&::-webkit-details-marker]:hidden">
                <span className={question}>{f.q}</span>
              </summary>
              <p className={answer}>
                <span
                  className="order-2 grid h-[30px] w-[30px] flex-none place-items-center rounded-[50%] bg-accent text-on-accent [font:800_0.85rem/1_var(--font-display)]"
                  aria-hidden="true"
                >
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
