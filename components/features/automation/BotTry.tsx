/** The live bot callout: a QR code and buttons that open the Telegram bot. */
export default function BotTry({ dev }: { dev: boolean }) {
  return (
    <aside className="bot-try reveal" aria-labelledby="bot-try-h">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/assets/bot-qr.svg" width="120" height="120" alt="קוד QR לבוט @liz_cosmetic_bot בטלגרם" />
      <div>
        <p className="bot-live">
          <i aria-hidden="true" /> בוט חי
        </p>
        <h3 id="bot-try-h">{dev ? "דברו עם סוכן AI שבניתי" : "נסו עוזר דיגיטלי שבניתי"}</h3>
        <p>
          {dev
            ? "סוכן ב‑n8n עם Claude: ארבעה כלים בלבד (מאגר מידע, בדיקת זמינות, קביעת תור ומייל), זיכרון שיחה וכללי בטיחות בהנחיות."
            : "עוזר לקליניקת קוסמטיקה: עונה ללקוחות מתוך המידע של העסק, בודק מה פנוי ביומן וקובע תור באישור. גם בלילה."}
        </p>
      </div>
      <div className="bot-try-cta">
        <a className="btn btn-tg" href="https://t.me/liz_cosmetic_bot" target="_blank" rel="noreferrer">
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path
              fill="currentColor"
              d="M21.9 4.3 18.7 19.4c-.2 1.1-.9 1.3-1.8.8l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.4-5 9-8.2c.4-.4-.1-.6-.6-.2L6.3 13 1.5 11.5c-1-.3-1.1-1 .2-1.5L20.6 2.8c.9-.3 1.6.2 1.3 1.5z"
            />
          </svg>
          פתיחה בטלגרם
        </a>
        <a className="btn btn-ghost" href="/demos/bot.html">
          <span>איך הוא בנוי</span>
        </a>
      </div>
    </aside>
  );
}
