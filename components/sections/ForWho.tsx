import { FOR_WHO } from "@/content";
import GhostWord from "@/components/ui/GhostWord";

/** Three situations business owners recognize, each with what changes. */
export default function ForWho() {
  return (
    <section className="section" id="for-who" aria-labelledby="for-who-title">
      <div className="container">
        <div className="section-head reveal">
          <GhostWord word="you" />
          <div>
            <p className="eyebrow">FOR WHO</p>
            <h2 id="for-who-title" className="title">
              מכירים את <em>זה?</em>
            </h2>
          </div>
          <p className="lead">רוב בעלי העסקים שפונים אליי נמצאים באחד משלושת המצבים האלה.</p>
        </div>
        <ul className="m-0 grid list-none grid-cols-[repeat(3,1fr)] gap-[22px] p-0 mobile:grid-cols-[1fr] mobile:gap-[30px]">
          {FOR_WHO.map((f, i) => (
            <li
              className="reveal relative grid [align-content:start] gap-3 rounded-[30px] border border-line bg-card [padding:34px_28px_30px] before:absolute before:start-6 before:top-[-18px] before:grid before:h-10 before:w-10 before:place-items-center before:rounded-[50%] before:bg-idea before:text-on-idea before:shadow-[0_4px_0_var(--ink)] before:content-['?'] before:[font:400_1.6rem/1_var(--font-hand-face)] hover:shadow-[0_30px_50px_-36px_rgba(36,22,29,0.5)]"
              key={f.title}
              style={{ ["--d" as string]: i }}
            >
              <p className="tracking-[-0.02em] [font:800_1.35rem/1.3_var(--font-display)]">{f.title}</p>
              <p className="text-[1.05rem] text-muted">{f.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
