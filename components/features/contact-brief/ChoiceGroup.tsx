type Props = { legend: string; name: string; options: string[]; value: string; onChange: (v: string) => void };

/** One question of the brief, answered with pill-shaped radio buttons. */
export default function ChoiceGroup({ legend, name, options, value, onChange }: Props) {
  return (
    <fieldset>
      <legend>{legend}</legend>
      <div className="opts">
        {options.map((t) => (
          <label key={t} className={value === t ? "on" : undefined}>
            <input type="radio" name={name} value={t} checked={value === t} onChange={() => onChange(t)} />
            {t}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
