import { describe, expect, it } from "vitest";
import { bareUrl, formatPhone, intlPhone } from "@/lib/format";

describe("format", () => {
  it("adds a dash to a phone number", () => {
    expect(formatPhone("0501234567")).toBe("050-1234567");
  });

  it("converts a phone number to international format", () => {
    expect(intlPhone("0501234567")).toBe("+972501234567");
  });

  it("removes https from an address", () => {
    expect(bareUrl("https://example.com")).toBe("example.com");
  });
});
