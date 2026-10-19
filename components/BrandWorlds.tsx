import Image from "next/image";

const WORLDS = [
  { id: "glow", title: "GLOW / SKIN STUDIO", desc: "ביוטי · נקי, אישי ואלגנטי" },
  { id: "jewelry", title: "AURA / FINE JEWELRY", desc: "תכשיטים · דרמטי ומדויק" },
  { id: "icecream", title: "SCOOP / HAPPY GELATO", desc: "גלידות · צבעוני ושובב" },
  { id: "burger", title: "STACK / BURGER CLUB", desc: "המבורגרים · נועז ומעורר תיאבון" },
  { id: "school", title: "PLAYDAY / SCHOOL FEST", desc: "יום כיף · שמח ומלא דמיון" },
];

export default function BrandWorlds() {
  return (
    <section className="brand-worlds" id="brand-worlds">
      <p className="eyebrow">FIVE BRANDS. FIVE DIFFERENT WORLDS.</p>
      <h2>
        כל מותג.
        <br />
        <em>עולם משלו.</em>
      </h2>
      <p>אתרי מותג, חוויות אינטראקטיביות וקמפיינים. מהרעיון הראשון ועד לפרט הקטן.</p>
      <div className="world-grid">
        {WORLDS.map((w) => (
          <a key={w.id} className={`world-card world-${w.id}`} href={`/demos/${w.id}.html`}>
            <Image
              src={`/assets/${w.id}.webp`}
              alt={w.desc}
              width={800}
              height={800}
              sizes="(max-width: 900px) 100vw, 33vw"
            />
            <div>
              <h3 dir="ltr">{w.title}</h3>
              <p>{w.desc}</p>
              <span>לפתיחת דף הנחיתה והפוסטר ↗</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
