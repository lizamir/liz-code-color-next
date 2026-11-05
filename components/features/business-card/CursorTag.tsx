/** A small "collaborator cursor" with a name tag floating near the card. Decorative. */
export default function CursorTag({ className, label }: { className: string; label: string }) {
  return (
    <span className={`fc ${className}`} aria-hidden="true">
      <svg viewBox="0 0 20 22" width="18" height="20"><path d="M2 1l15 8-6.5 1.8L8 18z" fill="currentColor" stroke="#fff" strokeWidth="1.4" strokeLinejoin="round" /></svg>
      <b>{label}</b>
    </span>
  );
}
