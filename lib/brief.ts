export type Brief = { type: string; when: string; name: string; idea: string };

/** Writes the message of the contact brief from what the visitor filled in. */
export function briefMessage({ type, when, name, idea }: Brief): string {
  const lines = [`היי ליז, ${name.trim() ? `אני ${name.trim()}.` : "הגעתי מהפורטפוליו."}`];
  if (type) lines.push(`אני מחפש/ת: ${type}.`);
  if (when) lines.push(`לוח זמנים: ${when}.`);
  if (idea.trim()) lines.push("", idea.trim());
  else lines.push("", "אשמח לשמוע מה אפשר לעשות ביחד.");
  return lines.join("\n");
}

/** The subject line of the mail version of the brief. */
export const briefSubject = (type: string) => "פנייה מהפורטפוליו" + (type ? `: ${type}` : "");
