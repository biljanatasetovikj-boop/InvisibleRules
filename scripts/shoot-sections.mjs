import { chromium, devices } from "playwright";

const BASE = process.argv[2] ?? "https://theinvisiblerules.com";
const IDS = ["who-i-help", "free-tools"];

const browser = await chromium.launch();
for (const [label, opts] of [
  ["desktop", { viewport: { width: 1440, height: 900 } }],
  ["phone", devices["iPhone 13"]],
]) {
  const page = await (await browser.newContext(opts)).newPage();
  await page.goto(BASE, { waitUntil: "networkidle", timeout: 60000 });
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 400) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 40));
    }
  });
  await page.waitForTimeout(1200);
  for (const id of IDS) {
    await page.locator(`#${id}`).screenshot({
      path: `playwright-report-shots/section-${label}-${id}.png`,
    });
  }
}
await browser.close();
console.log("done");
