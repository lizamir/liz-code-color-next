import { describe, expect, it } from "vitest";
import { briefMessage, briefSubject } from "@/lib/brief";

const empty = { type: "", when: "", name: "", idea: "" };

describe("briefMessage", () => {
  it("has a friendly default when nothing was filled in", () => {
    expect(briefMessage(empty)).toBe("היי ליז, הגעתי מהפורטפוליו.\n\nאשמח לשמוע מה אפשר לעשות ביחד.");
  });

  it("includes everything the visitor filled in", () => {
    const message = briefMessage({ type: "דף נחיתה", when: "גמיש", name: " דנה ", idea: " אתר לקליניקה " });
    expect(message).toBe("היי ליז, אני דנה.\nאני מחפש/ת: דף נחיתה.\nלוח זמנים: גמיש.\n\nאתר לקליניקה");
  });
});

describe("briefSubject", () => {
  it("adds the project type when there is one", () => {
    expect(briefSubject("")).toBe("פנייה מהפורטפוליו");
    expect(briefSubject("דף נחיתה")).toBe("פנייה מהפורטפוליו: דף נחיתה");
  });
});
