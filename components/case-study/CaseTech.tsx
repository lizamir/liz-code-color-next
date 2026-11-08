import Link from "next/link";
import type { Project } from "@/content";
import Arrow from "@/components/ui/Arrow";
import Tags from "@/components/ui/Tags";

/** The technical details, folded at the end of the page: stack, link to the code, and the technical page. */
export default function CaseTech({ stack, code }: { stack: string[]; code?: Project["links"][number] }) {
  return (
    <details className="reveal mt-[30px] rounded-[26px] border-2 border-dashed border-line bg-card px-[26px]">
      <summary className="flex cursor-pointer items-center gap-[14px] py-[22px] [font:800_1.15rem/1.3_var(--font-display)] [list-style:none] [&::-webkit-details-marker]:hidden">
        <span
          className="rounded-[10px] bg-ink px-2.5 py-[7px] text-on-ink [font:700_0.85rem/1_ui-monospace,'SF_Mono',Menlo,monospace]"
          dir="ltr"
        >
          {"</>"}
        </span>
        הצד הטכני, למפתחים ולמגייסים
      </summary>
      <div className="grid gap-[18px] pb-6">
        <Tags items={stack} label="טכנולוגיות" ltrItems />
        <div className="flex flex-wrap gap-6">
          {code && (
            <a className="text-link" href={code.href} target="_blank" rel="noreferrer">
              {code.label} <Arrow dir="out" />
            </a>
          )}
          <Link className="text-link" href="/dev/">
            לעמוד המקצועי <Arrow dir="in" />
          </Link>
        </div>
      </div>
    </details>
  );
}
