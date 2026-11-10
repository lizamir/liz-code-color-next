import type { Project } from "./types";

export const signatureEngine: Project = {
  slug: "signature-engine",
  mock: "signature",
  no: "06",
  title: "SIGNATURE ENGINE",
  kicker: "מערכת לחתימות מייל",
  summary: "מערכת חכמה ליצירה וניהול של חתימות מייל אחידות, עם תצוגה חיה וחוויית עריכה פשוטה.",
  categories: ["web"],
  year: "2025",
  role: ["פיתוח Full‑Stack", "עיצוב ממשק"],
  stack: ["React", "TypeScript", "Node.js", "Express"],
  cover: "/work/signature-engine.webp",
  coverAlt: "Signature Engine: עורך חתימות עם טופס ותצוגה חיה",
  tone: "lime",
  links: [
    { href: "/demos/signature.html", label: "לעורך החתימות" },
    { href: "https://github.com/lizamir/signatureEngine", label: "לצפייה בקוד", external: true },
  ],
  challenge:
    "חתימות מייל נראות אחרת אצל כל אחד: פונטים, צבעים ופרטים לא אחידים. צריך כלי שמוציא חתימה אחידה בכמה שדות.",
  approach: [
    "בחירה מגלריית תבניות, טופס פרטים עם ולידציה, והפקה של חתימה כטקסט וכ‑HTML.",
    "ממשק API שמאפשר להפיק חתימות לקבוצה שלמה בבת אחת.",
    "בדמו: עריכה בזמן אמת והעתקה, והמידע נשאר בדף ואינו נשלח לשרת.",
  ],
  highlights: [
    { title: "תצוגה חיה", text: "כל שינוי בטופס מופיע מיד בחתימה." },
    { title: "הפקה בכמות", text: "API ליצירת חתימות לצוות שלם." },
    { title: "טקסט ו‑HTML", text: "חתימה שמתאימה גם למערכות מייל מגבילות." },
  ],
};
