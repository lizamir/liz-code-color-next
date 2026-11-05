/** A big outlined English word behind a section title, in the handwritten face. Decorative. */
export default function GhostWord({ word }: { word: string }) {
  return (
    <span className="ghost-word" aria-hidden="true">
      {word}
    </span>
  );
}
