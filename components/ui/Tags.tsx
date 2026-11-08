/** A row of small pill labels, used for a project's tech stack. */
export default function Tags({ items, label, ltrItems }: { items: string[]; label: string; ltrItems?: boolean }) {
  return (
    <ul className="flex list-none flex-wrap gap-[6px] p-0" aria-label={label}>
      {items.map((t) => (
        <li
          key={t}
          dir={ltrItems ? "ltr" : undefined}
          className="rounded-[999px] bg-paper-2 px-3 py-[5px] text-ink [direction:ltr] [font:700_0.8rem/1.3_var(--font-display)]"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}
