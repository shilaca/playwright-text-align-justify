import test, { expect } from "@playwright/test";

test("/ Snapshot", async ({ page }) => {
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  await expect(page).toHaveScreenshot("snapshot.png", { fullPage: true });
});
