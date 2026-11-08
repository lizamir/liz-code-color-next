import { expect, test } from "@playwright/test";

test("the business site leads to the technical page", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("רעיונות");
  await page.getByRole("link", { name: "למגייסים" }).first().click();
  await expect(page).toHaveURL(/\/dev\/$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Full‑Stack");
});

test("the brief writes a ready message", async ({ page }) => {
  await page.goto("/");
  await page.getByLabel("אתר או דף נחיתה").check({ force: true });
  await page.getByLabel(/איך קוראים לכם/).fill("דנה");
  await expect(page.locator("#contact pre")).toContainText("היי ליז, אני דנה.");
  await expect(page.getByRole("link", { name: "שליחה בוואטסאפ" })).toHaveAttribute("href", /wa\.me.*text=/);
});

test("the day/night switch changes the page and is remembered", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "מצב לילה" }).first().click();
  await expect(page.locator("html")).toHaveAttribute("data-mode", "night");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-mode", "night");
});

test("a project page keeps the stack folded at the end", async ({ page }) => {
  await page.goto("/work/ganli/");
  const tech = page.locator("details", { hasText: "הצד הטכני" });
  await expect(tech).not.toHaveAttribute("open");
  await tech.locator("summary").click();
  await expect(tech.getByRole("list", { name: "טכנולוגיות" })).toBeVisible();
});

test("the CV opens from the technical page", async ({ page }) => {
  await page.goto("/dev/");
  await page
    .getByRole("link", { name: /קורות חיים/ })
    .first()
    .click();
  await expect(page).toHaveURL(/\/resume\/$/);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("the phone menu opens and closes with Escape", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  // the label switches between open and close, so find it by the menu it controls
  const burger = page.locator('button[aria-controls="mobile-menu"]');
  await burger.click();
  await expect(burger).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(burger).toHaveAttribute("aria-expanded", "false");
});
