import { cn } from "@/lib/ui/cn";

const pill =
  "relative inline-flex min-h-[46px] cursor-pointer items-center rounded-[999px] border-2 px-[18px] py-2.5 [font:700_0.95rem/1_var(--font-display)] [transition:border-color_0.2s,background_0.2s,transform_0.25s_var(--ease-spring)] focus-within:[outline:3px_solid_var(--accent-ink)] focus-within:outline-offset-3 hover:[transform:translateY(-2px)]";

type Props = { legend: string; name: string; options: string[]; value: string; onChange: (v: string) => void };

/** One question of the brief, answered with pill-shaped radio buttons. */
export default function ChoiceGroup({ legend, name, options, value, onChange }: Props) {
  return (
    <fieldset className="m-0 p-0 [border:0]">
      <legend className="mb-2.5 p-0 [font:800_0.95rem_var(--font-display)]">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((t) => (
          <label
            key={t}
            className={cn(
              pill,
              value === t ? "border-ink bg-ink text-on-ink" : "border-line bg-paper hover:border-ink",
            )}
          >
            <input
              className="absolute inset-0 cursor-pointer opacity-0"
              type="radio"
              name={name}
              value={t}
              checked={value === t}
              onChange={() => onChange(t)}
            />
            {t}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
