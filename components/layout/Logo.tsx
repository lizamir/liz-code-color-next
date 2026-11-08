import { cn } from "@/lib/ui/cn";

/** The link that wraps the logo, in the header and the footer. */
export const brandLink =
  "brand inline-flex items-center gap-0 [font:900_1.05rem/1_var(--font-display)] tracking-[-0.03em] [direction:ltr]";

/** The mark: an L written like a line of code, ending in a colored cursor that follows the chosen theme. */
export default function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5 [direction:ltr]">
      <svg className="block flex-none" viewBox="0 0 40 40" width="38" height="38" aria-hidden="true" focusable="false">
        <rect className={onDark ? "fill-white" : "fill-ink"} width="40" height="40" rx="11" />
        <path
          className={onDark ? "stroke-ink" : "stroke-white"}
          d="M13 9v22h12"
          fill="none"
          strokeWidth="4.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          className="animate-[blink_1.2s_steps(2,start)_infinite] fill-accent motion-reduce:animate-none [.a11y-nomotion_&]:animate-none"
          x="27"
          y="26.4"
          width="6.4"
          height="9.2"
          rx="1.6"
        />
      </svg>
      <span className={cn("grid text-left leading-none", onDark && "text-white")}>
        <b className="tracking-[-0.02em] [font:800_1.35rem/1_var(--font-display)]">Liz</b>
        <small
          className={cn(
            "mt-1 tracking-[0.3em] [font:700_0.58rem/1_var(--font-display)]",
            onDark ? "text-accent-light" : "text-accent-ink",
          )}
        >
          CODE &amp; COLOR
        </small>
      </span>
    </span>
  );
}
