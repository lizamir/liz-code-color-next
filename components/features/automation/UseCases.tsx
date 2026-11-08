import { AUTOMATION_USES } from "@/content";

import { autoSub } from "./automationClasses";
import { cn } from "@/lib/ui/cn";

const ICONS: Record<string, React.ReactNode> = {
  lead: <path d="M4 5h16v10H8l-4 4V5zm4 4h8m-8 3h5" />,
  bot: <path d="M7 8h10a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3zm5-4v4m-3 6h.01M15 14h.01" />,
  cal: <path d="M5 6h14v13H5zM5 10h14M9 4v4m6-4v4m-6 6h2m2 0h2" />,
  doc: <path d="M7 3h7l4 4v14H7zM14 3v4h4M9 12h7m-7 3h7m-7 3h4" />,
  file: <path d="M4 7h16v12H4zM4 7l3-3h10l3 3M9 12h6m-6 3h3" />,
  bell: <path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4l2-2zm4 4h4" />,
};

/** What can move to automation, as outcome cards. The tools are shown on the technical page only. */
export default function UseCases({ dev }: { dev: boolean }) {
  return (
    <>
      <h3 className={cn(autoSub, "reveal")} id="auto-uses">
        מה אפשר להעביר לאוטומציה?
      </h3>
      <div className="mb-[clamp(40px,6vw,72px)] grid grid-cols-[repeat(3,1fr)] gap-[18px] upto-1000:grid-cols-[1fr_1fr] upto-640:grid-cols-[1fr]">
        {AUTOMATION_USES.map((u, i) => (
          <article
            className="reveal grid [align-content:start] gap-2.5 rounded-[24px] border border-[rgba(255,255,255,0.16)] bg-[rgba(255,255,255,0.06)] p-6 hover:border-accent-light hover:bg-[rgba(255,255,255,0.09)]"
            key={u.title}
            style={{ ["--d" as string]: i % 3 }}
          >
            <svg
              className="h-[42px] w-[42px] rounded-[12px] bg-[color-mix(in_srgb,var(--accent)_35%,transparent)] p-2 text-white"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                {ICONS[u.icon]}
              </g>
            </svg>
            <h4 className="text-white [font:800_1.25rem/1.25_var(--font-display)]">{u.title}</h4>
            <p className="text-[1rem] text-on-deep-2">{u.text}</p>
            {dev && (
              <small
                dir="ltr"
                className="text-right tracking-[0.06em] text-accent-light [font:700_0.75rem_var(--font-display)]"
              >
                {u.tools}
              </small>
            )}
          </article>
        ))}
      </div>
    </>
  );
}
