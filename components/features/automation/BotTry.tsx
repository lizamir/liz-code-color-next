import { ghostOnDeep } from "./automationClasses";

/** The live bot callout: a QR code and buttons that open the Telegram bot. */
export default function BotTry({ dev }: { dev: boolean }) {
  return (
    <aside
      className="reveal [margin:-24px_0_clamp(48px,7vw,88px)] grid grid-cols-[auto_1fr_auto] items-center gap-[clamp(16px,3vw,36px)] rounded-[28px] border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.07)] p-[clamp(18px,2.6vw,30px)] mobile:grid-cols-[auto_1fr]"
      aria-labelledby="bot-try-h"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="block h-[120px] w-[120px] rounded-[16px] bg-white p-[6px] mobile:h-24 mobile:w-24"
        src="/assets/bot-qr.svg"
        width="120"
        height="120"
        alt="קוד QR לבוט @liz_cosmetic_bot בטלגרם"
      />
      <div>
        <p className="inline-flex max-w-[36rem] items-center gap-2 tracking-[0.12em] text-[#8ff0b4] [font:800_0.8rem_var(--font-display)]">
          <i
            aria-hidden="true"
            className="h-[9px] w-[9px] animate-[ping-live_1.8s_infinite] rounded-[50%] bg-[#3ad07a] shadow-[0_0_0_0_rgba(58,208,122,0.6)] [.a11y-nomotion_&]:animate-none"
          />{" "}
          בוט חי
        </p>
        <h3 id="bot-try-h" className="[margin:4px_0_6px] [font-size:clamp(1.4rem,2.4vw,2rem)] text-white">
          {dev ? "דברו עם סוכן AI שבניתי" : "נסו עוזר דיגיטלי שבניתי"}
        </h3>
        <p className="max-w-[36rem] text-on-deep-2">
          {dev
            ? "סוכן ב‑n8n עם Claude: ארבעה כלים בלבד (מאגר מידע, בדיקת זמינות, קביעת תור ומייל), זיכרון שיחה וכללי בטיחות בהנחיות."
            : "עוזר לקליניקת קוסמטיקה: עונה ללקוחות מתוך המידע של העסק, בודק מה פנוי ביומן וקובע תור באישור. גם בלילה."}
        </p>
      </div>
      <div className="grid gap-2.5 mobile:col-span-full mobile:flex mobile:flex-wrap">
        <a
          className="btn border-[#0b6fa3] bg-[#0b6fa3] text-white hover:border-[#085a85] hover:bg-[#085a85]"
          href="https://t.me/liz_cosmetic_bot"
          target="_blank"
          rel="noreferrer"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path
              fill="currentColor"
              d="M21.9 4.3 18.7 19.4c-.2 1.1-.9 1.3-1.8.8l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.4-5 9-8.2c.4-.4-.1-.6-.6-.2L6.3 13 1.5 11.5c-1-.3-1.1-1 .2-1.5L20.6 2.8c.9-.3 1.6.2 1.3 1.5z"
            />
          </svg>
          פתיחה בטלגרם
        </a>
        <a className={ghostOnDeep} href="/demos/bot.html">
          <span>איך הוא בנוי</span>
        </a>
      </div>
    </aside>
  );
}
