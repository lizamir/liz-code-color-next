// AI and automation section copy.

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
  {
    icon: "lead",
    title: "פנייה מהאתר, ישר לוואטסאפ",
    text: "מישהו השאיר פרטים? אתם מקבלים הודעה בוואטסאפ, הלקוח מקבל אישור, והפרטים נשמרים בגיליון או ב‑CRM.",
    tools: "טופס · WhatsApp · Sheets / CRM",
  },
  {
    icon: "bot",
    title: "בוט וואטסאפ שעונה בשבילכם",
    text: "עונה על השאלות שחוזרות, אוסף את הפרטים החשובים, ומעביר לאדם כשצריך. בלי לחכות לשעות פעילות.",
    tools: "WhatsApp · n8n · AI",
  },
  {
    icon: "cal",
    title: "קביעת פגישות לבד",
    text: "הלקוח בוחר זמן פנוי מהיומן, מקבל זימון ותזכורת יום לפני, ואתם רואים הכול ביומן גוגל.",
    tools: "Google Calendar · Gmail · WhatsApp",
  },
  {
    icon: "doc",
    title: "סוכן שמכיר את העסק",
    text: "עונה מתוך המסמכים, המחירונים והנהלים שלכם, עם הפניה למקור. מתאים ללקוחות וגם לצוות.",
    tools: "RAG · Claude · MCP",
  },
  {
    icon: "file",
    title: "מסמכים שהופכים לנתונים",
    text: "חשבוניות, טפסים וקבצים נקראים לבד, הפרטים מחולצים ונבדקים, ונשמרים במקום הנכון.",
    tools: "Parsers · n8n · APIs",
  },
  {
    icon: "bell",
    title: "תזכורות וסיכומים",
    text: "תזכורת ללקוח שלא שילם, סיכום שבועי של פניות, או התראה כשמשהו דורש תשומת לב.",
    tools: "n8n · WhatsApp · Email",
  },
];

export const AUTOMATION_STEPS = [
  { title: "פגישת אפיון", text: "ממפים איפה הולך הזמן בעסק ומה אפשר להעביר לאוטומציה." },
  { title: "תכנון התהליך", text: "מגדירים מה נכנס, מה יוצא, ומתי אדם נכנס לתמונה." },
  { title: "בנייה ובדיקה", text: "בונים על המערכות שכבר יש לכם, ובודקים על מקרים אמיתיים." },
  { title: "הטמעה וליווי", text: "הדרכה קצרה, תיעוד, וזמינות לשינויים בהמשך." },
];

export const INTEGRATIONS = [
  "WhatsApp",
  "Google Calendar",
  "Gmail",
  "Google Sheets",
  "CRM",
  "n8n",
  "Claude",
  "Supabase",
  "Webhooks",
  "APIs",
];

export const AUTOMATION_CARDS = [
  {
    title: "סוכנים שמכירים את העסק",
    text: "חיבור מסמכים ומאגרי ידע לסוכן באמצעות RAG, עם מקורות למענה והעברה לאדם כשצריך.",
    stack: "RAG · Pinecone · LlamaParse",
  },
  {
    title: "מערכות שמדברות ביניהן",
    text: "חיבור טפסים, מערכות ניהול וערוצי תקשורת. נתונים מובנים, ניתוב, הרשאות וטיפול בתקלות.",
    stack: "n8n · Webhooks · APIs · MCP",
  },
  {
    title: "מידע שהופך לפעולה",
    text: "תהליכים לסיכום שיחות, חילוץ פרטים ממסמכים, מחקר ואיסוף מידע, עם נקודות בקרה לאורך הדרך.",
    stack: "Claude · OpenAI · HTTP · Parsers",
  },
];
