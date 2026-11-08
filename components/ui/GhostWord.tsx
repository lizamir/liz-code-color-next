import { cn } from "@/lib/ui/cn";

/** A big outlined English word behind a section title, in the handwritten face. Decorative. */
export default function GhostWord({ word, className }: { word: string; className?: string }) {
  return (
    <span className={cn("ghost-word", className)} aria-hidden="true">
      {word}
    </span>
  );
}
