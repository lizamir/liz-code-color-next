import { SITE } from "@/content";

/** A WhatsApp link that opens a chat with Liz with the message already written. */
export const whatsappLink = (message: string) => `${SITE.whatsapp}?text=${encodeURIComponent(message)}`;

/** A mail link to Liz with the subject and body already written. */
export const mailLink = (subject: string, body: string) =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
