// All the copy and data of the portfolio lives here, so it can be edited without touching layout.
// Everything below is based on facts already on the original site or visible in the projects themselves.
// Nothing here is an invented metric, client or quote. Items marked "edit me" are meant to be changed.

export const SITE = {
  name: "Liz Code & Color",
  person: "ליז חג׳ג׳",
  personEn: "Liz Hajage",
  role: "מפתחת Full‑Stack, יישום AI ואוטומציות",
  url: "https://lizhajage.co.il",
  email: "lizhajage@gmail.com",
  phone: "0546887442",
  whatsapp: "https://wa.me/972546887442",
  linkedin: "https://www.linkedin.com/in/liz-hajage/",
  github: "https://github.com/lizamir",
  city: "ירושלים, ישראל",
  // edit me: turn the availability badge on or off and change its wording.
  available: true,
  availableText: "פנויה לפרויקטים חדשים",
};

export const NAV = [
  { href: "#automation", label: "AI ואוטומציות" },
  { href: "#work", label: "עבודות" },
  { href: "#services", label: "שירותים" },
  { href: "#about", label: "קצת עליי" },
  { href: "#contact", label: "בואו נדבר" },
];

/** What a visitor should know in the first five seconds. */
export const PROOF = [
  { value: "4+", unit: "שנים", label: "ניסיון בפיתוח" },
  { value: "2", unit: "הסמכות", label: "Workato ו‑MuleSoft" },
  { value: "B.Sc.", unit: "", label: "הנדסת חשמל ואלקטרוניקה" },
];

export const MARQUEE = ["AI AGENTS", "n8n", "AUTOMATIONS", "REACT", "NEXT.JS", "SUPABASE", "CREATIVE DEVELOPMENT", "ACCESSIBILITY"];

export type Category = "web" | "ai" | "brand";
export const CATEGORIES: { id: "all" | Category; label: string }[] = [
  { id: "all", label: "הכל" },
  { id: "web", label: "אתרים ומערכות" },
  { id: "brand", label: "מיתוג ועיצוב" },
  { id: "ai", label: "AI ואוטומציה" },
];

export type Project = {
  slug: string;
  mock: string; // base name of /public/mock/<mock>-d.webp and -m.webp (desktop and phone screenshots)
  no: string;
  title: string;
  kicker: string;
  summary: string; // one sentence for the card
  categories: Category[];
  year: string;
  role: string[];
  stack: string[];
  cover: string; // screenshot in /public/work
  coverAlt: string;
  tone: "violet" | "pink" | "lime" | "teal" | "sun";
  featured?: boolean;
  links: { href: string; label: string; external?: boolean }[];
  challenge: string;
  approach: string[];
  highlights: { title: string; text: string }[];
  gallery?: { src: string; alt: string; w: number; h: number }[];
};

export const PROJECTS: Project[] = [
  {
    slug: "ganli",
    mock: "ganli",
    no: "01",
    title: "גנלי",
    kicker: "מיתוג, אתר ומערכת ניהול לגן",
    summary: "אתר מותג עם טירת קוביות תלת ממדית, ואזור אישי להורים, לצוות ולמנהלת: יומן טיפול, איסוף בקוד QR, התראות אלרגיה, תשלומים ואוטומציות כמו קביעת פגישות ותזכורות הרשמה.",
    categories: ["web", "brand"],
    year: "2026",
    role: ["מיתוג", "עיצוב UX/UI", "פיתוח Full‑Stack", "נגישות"],
    stack: ["Next.js", "React", "TypeScript", "Supabase (RLS)", "React Three Fiber", "WCAG 2.1 AA"],
    cover: "/work/ganli.webp",
    coverAlt: "אתר גנלי: קשת עם טירת קוביות עץ תלת ממדית וכותרת ״כאן משחקים, לומדים וגדלים ביחד״",
    tone: "sun",
    featured: true,
    links: [
      { href: "/demos/ganli/", label: "לאתר" },
      { href: "/demos/ganli/login/", label: "לאזור האישי (דמו)" },
      { href: "https://github.com/lizamir/ganli", label: "לצפייה בקוד", external: true },
    ],
    challenge:
      "לגן קטן צריך מקום אחד שבו הורים רואים את היום של הילד, הצוות מעדכן בכמה לחיצות והמנהלת רואה את התמונה המלאה. ובלי ששום אדם יראה מידע שאינו שלו: צוות לא רואה כספים, והורה רואה רק את הילד שלו.",
    approach: [
      "הקשת והקוביות מהלוגו הפכו לשפה הוויזואלית של כל האתר: חלון הכניסה, הכרטיסים והחדרים.",
      "ההרשאות נאכפות במסד הנתונים עצמו (Supabase, Row Level Security), ולא רק בהסתרת כפתורים.",
      "מצב דמו על נתונים מומצאים מאפשר לכל מבקר לנסות את שלושת התפקידים בלי להיכנס לשום מערכת אמיתית.",
      "הנגישות נבדקה עם axe-core על כל המסכים: ניגודיות, ניווט במקלדת, כיווץ תנועה ותפריט נגישות.",
    ],
    highlights: [
      { title: "איסוף בקוד QR", text: "להורה קוד יומי ורשימת מורשים. הצוות מאמת, והיציאה נרשמת." },
      { title: "תפריט עם התראות אלרגיה", text: "מנה שלא מתאימה לילד מסומנת להורה ולצוות לפני הארוחה." },
      { title: "פס היום", text: "ארוחות, שינה והחלפות על ציר זמן אחד, עם ״טרם עודכן״ במקום שקט." },
      { title: "פגישה עם המנהלת בלי טלפונים", text: "בוחרים זמן פנוי באתר, מקבלים זימון ליומן (קובץ או יומן גוגל) ואישור מוכן בוואטסאפ. המנהלת רואה את הפגישה מיד." },
      { title: "מרכז אוטומציות למנהלת", text: "תזכורות הרשמה להורים שעוד לא נרשמו, תזכורות לפגישות ויומן פעולות. בהמשך: שליחה אוטומטית דרך WhatsApp Business ו‑n8n." },
      { title: "טירה שנבנית בגלילה", text: "סצנת Three.js שבה כל קובייה מונחת תוך כדי הגלילה, ונעצרת כשמבקשים הפחתת תנועה." },
    ],
    gallery: [
      { src: "/work/ganli-parent.webp", alt: "האזור האישי להורה: היום של נועה עם פס היום", w: 1600, h: 1000 },
      { src: "/work/ganli-staff.webp", alt: "האזור האישי לצוות: הקבוצה עם פס יום קטן לכל ילד", w: 1600, h: 1000 },
      { src: "/work/ganli-mobile.webp", alt: "אתר גנלי בטלפון", w: 560, h: 1212 },
    ],
  },
  {
    slug: "community-os",
    mock: "community",
    no: "02",
    title: "COMMUNITY OS",
    kicker: "לוח בקרה לפעילות קהילתית",
    summary: "תקציב, השתתפות ושעות התנדבות בתמונה אחת: פילוחים אינטראקטיביים, גרפים ותובנות שמחושבים יחד.",
    categories: ["web"],
    year: "2026",
    role: ["אפיון", "עיצוב ממשק", "פיתוח"],
    stack: ["JavaScript", "SVG", "Data visualization", "CSS"],
    cover: "/work/community-os.webp",
    coverAlt: "Community OS: לוח בקרה עם מדדי גיוס, שעות התנדבות וגרף תזרים",
    tone: "violet",
    links: [{ href: "/demos/community.html", label: "לפרויקט" }],
    challenge:
      "ארגון קהילתי מנהל תקציב, משתתפים ושעות התנדבות בכמה מקומות. כדי להחליט צריך לראות הכול יחד, לפי תקופה ולפי תחום, בלי לחשב ידנית.",
    approach: [
      "מערך נתונים אחד מחושב בדפדפן, כך שכל מדד, גרף וטבלה מתעדכנים יחד כשמשנים פילוח.",
      "פילוח לפי רבעון ולפי תחום (חינוך, סיוע קהילתי, סביבה) עם צבע קבוע לכל תחום.",
      "גרפים ב‑SVG שנבנו ישירות, בלי ספריית גרפים, כדי לשלוט בכל פרט ולשמור על קובץ קטן.",
    ],
    highlights: [
      { title: "מדדים שמתחשבים זה בזה", text: "גיוס, הוצאה, משתתפים ושעות מתעדכנים יחד לפי הפילטר." },
      { title: "תזרים לאורך השנה", text: "גרף גיוס מול הוצאה עם גיוון עונתי." },
      { title: "בלי שרת", text: "כל הנתונים בדפדפן, ולכן הדמו מהיר ופרטי." },
    ],
  },
  {
    slug: "glow-studio",
    mock: "glow",
    no: "03",
    title: "GLOW STUDIO",
    kicker: "אתר לסטודיו ביוטי",
    summary: "אתר לסטודיו לטיפוח: אור יום, נייר בהיר ובחירת תחום טיפול שמחליפה את ההסבר במקום.",
    categories: ["brand", "web"],
    year: "2026",
    role: ["מיתוג", "עיצוב", "פיתוח", "תנועה"],
    stack: ["HTML", "CSS", "JavaScript", "Motion"],
    cover: "/work/glow.webp",
    coverAlt: "GLOW: דף נחיתה לסטודיו ביוטי עם דיוקן ופלטה ורודה",
    tone: "pink",
    links: [
      { href: "/demos/glow.html", label: "לאתר" },
    ],
    challenge: "סטודיו ביוטי צריך אתר שמרגיש כמו הטיפול עצמו: שקט, מדויק ואישי. ובכל זאת ברור מה מציעים ואיך קובעים.",
    approach: [
      "מעט רעש ויותר תשומת לב: היררכיה ברורה, הרבה אוויר וקצב תנועה איטי.",
      "תפריט הטיפולים כנקודת הכניסה, ואחריו חוויה, שאלות נפוצות וקריאה לפעולה.",
      "בלי אבחון אוטומטי ובלי הבטחות: כל תחום מסביר איך נראית הפגישה, ופרטים נקבעים בשיחה.",
    ],
    highlights: [
      { title: "פלטה אחת, מצב רוח אחד", text: "נייר בהיר, דיו ירקרק ונגיעה של חמרה." },
      { title: "לשוניות נגישות", text: "תחומי הטיפול כרשימה שנגישה במקלדת." },
      { title: "צילום יום", text: "צילום פנים באור טבעי במקום אפקטים." },
    ],
  },
  {
    slug: "signature-engine",
    mock: "signature",
    no: "04",
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
    challenge: "חתימות מייל נראות אחרת אצל כל אחד: פונטים, צבעים ופרטים לא אחידים. צריך כלי שמוציא חתימה אחידה בכמה שדות.",
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
  },
  {
    slug: "content-design",
    mock: "creative",
    no: "05",
    title: "CONTENT & DESIGN",
    kicker: "קריאייטיב, רשתות ושפה גרפית",
    summary: "סטודיו קונספט שנותן לעסק קטן קול של מותג גדול: טיפוגרפיה חיה, שלושה פוסטרים עם רעיון, ומעבדת מסרים שבונה כותרות ותוצאת גוגל.",
    categories: ["brand"],
    year: "2026",
    role: ["כיוון אמנותי", "עיצוב גרפי", "דפי נחיתה"],
    stack: ["Figma", "Visual identity", "Landing pages"],
    cover: "/work/content-design.webp",
    coverAlt: "Bold Studio: דף נחיתה לסטודיו קריאייטיב בצבעים בולטים",
    tone: "teal",
    links: [{ href: "/demos/creative.html", label: "לאתר הסטודיו" }, { href: "/demos/creative.html#lab", label: "למעבדת המסרים" }],
    challenge: "רוב אתרי הסטודיו נראים אותו דבר: כותרת גדולה, שלושה כרטיסים וכפתור. רציתי אתר שמראה את העבודה במקום להבטיח אותה, וגם שיימצא בגוגל.",
    approach: [
      "הרעיון הוא “תפסו מקום”. האותיות בכותרת מתעבות ככל שהמצביע מתקרב, והגלילה הופכת רעש של מסרים גנריים למשפט אחד.",
      "שלושה קונספטים (מותג לייף‑סטייל, רשתות והשקה), כל אחד עם רעיון וביטוי אנימטיבי משלו.",
      "מעבדת מסרים: שם, תחום ועיר הופכים לכותרות באתר ולתצוגה של תוצאת חיפוש עם מדידת אורך. כך נראית עבודת תוכן ו‑SEO.",
    ],
    highlights: [
      { title: "טיפוגרפיה שמגיבה", text: "פונט משתנה (Heebo) שמשקלו משתנה לפי המרחק מהמצביע, בלי לשנות את הפריסה." },
      { title: "גלילה שמספרת", text: "משפט שמתאסף מהרעש בזמן הגלילה, וסטריפ שמסתובב לפי מהירות הגלילה." },
      { title: "תוכן ו‑SEO בפעולה", text: "כותרות, כותרת ותיאור לגוגל ומדידת אורך, בחיבור לכוונת החיפוש." },
    ],
  },
];

/** Real messages clients sent Liz (with their permission to quote). Spelling lightly fixed, wording kept. */
export const TESTIMONIALS = [
  {
    name: "רעיה",
    role: "DJ",
    initial: "ר",
    color: "#f0a6c3",
    project: "דף נחיתה",
    text: "ואי, עפתי על הדף נחיתה! זה הביא לי ימבה של לקוחות, ואיזה כיף שליז ליוותה אותי בכל התהליך. היה מושלם!!",
  },
  {
    name: "נתן",
    role: "DJ",
    initial: "נ",
    color: "#8fcfbf",
    project: "אתר",
    text: "ואי ליז, איזה אליפות זה יצא! אני עכשיו כבר שולח את זה לכל הלקוחות שלי.",
  },
  {
    name: "חוט השני",
    role: "עיצוב בלונים",
    initial: "ח",
    color: "#f5b48a",
    project: "אתר",
    text: "ואי ליז, איזה מהמם! אהבתי מאוד, ובכלל כל התהליך איתך היה כל כך כיף. רואים שיש לך את זה. תודה רבה!!",
  },
];

export const BRAND_WORLDS = [
  { id: "glow", title: "GLOW / SKIN STUDIO", desc: "ביוטי · תחומי טיפול שמחליפים את ההסבר במקום" },
  { id: "jewelry", title: "AURA / FINE JEWELRY", desc: "תכשיטים · תקריב נשלט לכל פריט" },
  { id: "icecream", title: "SCOOP / HAPPY GELATO", desc: "גלידות · בוחרים טעמים ומרכיבים שילוב" },
  { id: "burger", title: "STACK / BURGER CLUB", desc: "המבורגרים · בונים המבורגר ושולחים בוואטסאפ" },
  { id: "school", title: "PLAYDAY / SCHOOL FEST", desc: "יום כיף · בונים לוח זמנים להדפסה" },
];

export const SERVICES = [
  {
    tag: "01 / WEB",
    title: "אתר שעובד בשביל העסק",
    text: "אתרי תדמית, דפי נחיתה ואתרים בקוד (Next.js): מבנה ברור, עיצוב מותאם למותג וחוויית שימוש נעימה גם בנייד.",
    gets: ["מבנה ותוכן שמובילים לפעולה", "מובייל ונגישות מההתחלה", "אפשרות לעדכן לבד"],
  },
  {
    tag: "02 / AI",
    title: "AI עם מטרה ברורה",
    text: "אפיון ויישום פתרונות AI לפי הצורך: עוזרים חכמים, תהליכי תוכן וכלים פנימיים, עם בקרה אנושית והתייחסות לפרטיות.",
    gets: ["מתחילים מבעיה, לא מטכנולוגיה", "בקרה אנושית בנקודות החשובות", "שקיפות לגבי מידע ופרטיות"],
  },
  {
    tag: "03 / AUTOMATION",
    title: "פחות עבודה חוזרת",
    text: "חיבור בין מערכות ואוטומציה של תהליכים, כדי להעביר מידע בצורה מסודרת ולפנות זמן לעבודה החשובה.",
    gets: ["מיפוי התהליך הקיים", "טיפול בתקלות ובחריגים", "תיעוד שאפשר להמשיך ממנו"],
  },
  {
    tag: "04 / DEVELOPMENT",
    title: "שותפה טכנית לפרויקט",
    text: "ממשקים ב‑React ו‑Next.js, פיתוח מותאם והשתלבות בצוות. לפרויקט ממוקד או לשיתוף פעולה מתמשך.",
    gets: ["קוד נקי וטיפוסי (TypeScript)", "עבודה בצוות ובקוד ריוויו", "הערכות זמן שקופות"],
  },
];

// edit me: generic working steps, adjust them to how you really work.
export const PROCESS = [
  { no: "01", title: "שיחת היכרות", text: "מבינים מה המטרה, מי הקהל ומה המגבלות: תקציב, זמן ומערכות קיימות." },
  { no: "02", title: "אפיון והצעה", text: "מגדירים מה נבנה ומה לא, מחלקים לשלבים ומסכמים לו״ז ומחיר לפני שמתחילים." },
  { no: "03", title: "עיצוב ובנייה", text: "עובדים בקצרים, עם קישור חי לבדיקה בכל שלב, כדי שאין הפתעות בסוף." },
  { no: "04", title: "מסירה וליווי", text: "מעבירים עם הדרכה ותיעוד, ונשארים זמינים לשינויים ולשאלות אחרי העלייה לאוויר." },
];

/** In the order a story is told: study, work, certification, training, today. */
export const CREDENTIALS = [
  { title: "הנדסת חשמל ואלקטרוניקה", sub: "תואר ראשון", text: "חשיבה מערכתית: איך חלקים קטנים מתחברים למערכת שעובדת." },
  { title: "מעל 4 שנות פיתוח", sub: "מערכות, אינטגרציות ואתרים", text: "בסביבות ארגוניות ובפרויקטים עצמאיים. איפה ומה בדיוק, אפשר לראות בקורות החיים." },
  { title: "הסמכות Workato ו‑MuleSoft", sub: "פלטפורמות אינטגרציה", text: "חיבור בין מערכות, ממשקי API ותהליכים אוטומטיים בקנה מידה ארגוני." },
  { title: "BotCamp של Focus AI", sub: "בוגרת", text: "סוכנים ב‑n8n, מערכות RAG, חיבורי MCP ואפיון פתרונות AI עסקיים." },
  { title: "היום: פרילנס ושילוב בצוותים", sub: "Next.js · Claude Code · AI", text: "מאתר תדמית ועד ממשק מותאם או תהליך אוטומטי, עם קשר ישיר וליווי." },
];

/** Shown only on the CV page: this is where the details of who and what are written. */
export const CV_JOBS = [
  {
    title: "פרילנס ושילוב בצוותי פיתוח",
    where: "עצמאית",
    when: "היום",
    text: "אתרים וממשקים ב‑React ו‑Next.js, פיתוח בעזרת Claude Code, מערכות עם Supabase, אוטומציות וסוכני AI ב‑n8n. עבודה ישירה עם בעלי עסקים ויזמים, וגם השתלבות בצוותים.",
  },
  {
    title: "פיתוח מערכות ואינטגרציות",
    where: "Deloitte",
    when: "כשלוש שנים",
    text: "פיתוח מערכות ואינטגרציות בסביבה ארגונית, בעבודת צוות. הסמכות Workato ו‑MuleSoft.",
  },
];
export const CV_EDU = [
  { title: "תואר ראשון בהנדסת חשמל ואלקטרוניקה", where: "B.Sc.", text: "חשיבה מערכתית: איך חלקים קטנים מתחברים למערכת שעובדת." },
  { title: "BotCamp של Focus AI", where: "בוגרת", text: "סוכנים ב‑n8n, מערכות RAG, חיבורי MCP ואפיון פתרונות AI עסקיים." },
  { title: "הסמכות Workato ו‑MuleSoft", where: "פלטפורמות אינטגרציה", text: "חיבור בין מערכות, ממשקי API ותהליכים אוטומטיים בקנה מידה ארגוני." },
];

export const STACK = [
  { group: "ממשקים", items: ["React", "Next.js", "TypeScript", "Three.js", "CSS & Design systems", "נגישות (WCAG)"] },
  { group: "שרת ונתונים", items: ["Node.js", "Supabase", "Postgres & RLS", "REST & Webhooks"] },
  { group: "AI ואוטומציה", items: ["Claude Code", "n8n", "AI Agents", "RAG", "MCP", "Claude · OpenAI", "Pinecone · LlamaParse"] },
  { group: "אינטגרציה", items: ["Workato", "MuleSoft", "APIs", "חיבור בין מערכות"] },
  { group: "עיצוב ותוכן", items: ["Figma", "UX/UI", "Design systems"] },
];

export const AUTOMATION_FLOWS = {
  leads: {
    label: "טיפול בפניות",
    steps: [
      { title: "פנייה חדשה", detail: "טופס באתר או הודעה" },
      { title: "סיווג והבנת הצורך", detail: "סוכן AI + כללים עסקיים" },
      { title: "המידע מגיע לאדם הנכון", detail: "עדכון מערכת ויצירת משימה" },
    ],
    note: "פנייה נכנסת, מנותבת לפי סוג הבקשה וממשיכה למשימת מעקב מסודרת.",
  },
  knowledge: {
    label: "סוכן ידע",
    steps: [
      { title: "שאלה נכנסת", detail: "ערוץ תקשורת מחובר" },
      { title: "שליפה ממאגר הידע", detail: "RAG + מקורות רלוונטיים" },
      { title: "מענה עם מקורות", detail: "או העברה לאדם להמשך" },
    ],
    note: "הסוכן מחפש במאגר שהוגדר לו ומבסס את המענה על המידע שנשלף.",
  },
  documents: {
    label: "עיבוד מסמכים",
    steps: [
      { title: "מסמך נכנס", detail: "חשבונית, טופס או קובץ" },
      { title: "חילוץ ובדיקת שדות", detail: "Parser + כללי אימות" },
      { title: "מידע מסודר במערכת", detail: "אישור אנושי במידת הצורך" },
    ],
    note: "המסמך הופך לנתונים מובנים, עם מסלול בדיקה לפרטים חסרים או חריגים.",
  },
} as const;

/** What an automation can take off a business owner's plate. Written as outcomes, with the tools that do it. */
export const AUTOMATION_USES = [
  { icon: "lead", title: "פנייה מהאתר, ישר לוואטסאפ", text: "מישהו השאיר פרטים? אתם מקבלים הודעה בוואטסאפ, הלקוח מקבל אישור, והפרטים נשמרים בגיליון או ב‑CRM.", tools: "טופס · WhatsApp · Sheets / CRM" },
  { icon: "bot", title: "בוט וואטסאפ שעונה בשבילכם", text: "עונה על השאלות שחוזרות, אוסף את הפרטים החשובים, ומעביר לאדם כשצריך. בלי לחכות לשעות פעילות.", tools: "WhatsApp · n8n · AI" },
  { icon: "cal", title: "קביעת פגישות לבד", text: "הלקוח בוחר זמן פנוי מהיומן, מקבל זימון ותזכורת יום לפני, ואתם רואים הכול ביומן גוגל.", tools: "Google Calendar · Gmail · WhatsApp" },
  { icon: "doc", title: "סוכן שמכיר את העסק", text: "עונה מתוך המסמכים, המחירונים והנהלים שלכם, עם הפניה למקור. מתאים ללקוחות וגם לצוות.", tools: "RAG · Claude · MCP" },
  { icon: "file", title: "מסמכים שהופכים לנתונים", text: "חשבוניות, טפסים וקבצים נקראים לבד, הפרטים מחולצים ונבדקים, ונשמרים במקום הנכון.", tools: "Parsers · n8n · APIs" },
  { icon: "bell", title: "תזכורות וסיכומים", text: "תזכורת ללקוח שלא שילם, סיכום שבועי של פניות, או התראה כשמשהו דורש תשומת לב.", tools: "n8n · WhatsApp · Email" },
];

export const AUTOMATION_STEPS = [
  { title: "פגישת אפיון", text: "ממפים איפה הולך הזמן בעסק ומה אפשר להעביר לאוטומציה." },
  { title: "תכנון התהליך", text: "מגדירים מה נכנס, מה יוצא, ומתי אדם נכנס לתמונה." },
  { title: "בנייה ובדיקה", text: "בונים על המערכות שכבר יש לכם, ובודקים על מקרים אמיתיים." },
  { title: "הטמעה וליווי", text: "הדרכה קצרה, תיעוד, וזמינות לשינויים בהמשך." },
];

export const INTEGRATIONS = ["WhatsApp", "Google Calendar", "Gmail", "Google Sheets", "CRM", "n8n", "Claude", "Supabase", "Webhooks", "APIs"];

export const AUTOMATION_CARDS = [
  { title: "סוכנים שמכירים את העסק", text: "חיבור מסמכים ומאגרי ידע לסוכן באמצעות RAG, עם מקורות למענה והעברה לאדם כשצריך.", stack: "RAG · Pinecone · LlamaParse" },
  { title: "מערכות שמדברות ביניהן", text: "חיבור טפסים, מערכות ניהול וערוצי תקשורת. נתונים מובנים, ניתוב, הרשאות וטיפול בתקלות.", stack: "n8n · Webhooks · APIs · MCP" },
  { title: "מידע שהופך לפעולה", text: "תהליכים לסיכום שיחות, חילוץ פרטים ממסמכים, מחקר ואיסוף מידע, עם נקודות בקרה לאורך הדרך.", stack: "Claude · OpenAI · HTTP · Parsers" },
];

export const BRIEF = {
  types: ["אתר או דף נחיתה", "אפליקציה או מערכת", "אוטומציה או AI", "מיתוג ועיצוב", "עוד לא בטוח/ה"],
  timelines: ["דחוף, תוך חודש", "1 עד 3 חודשים", "גמיש"],
};
