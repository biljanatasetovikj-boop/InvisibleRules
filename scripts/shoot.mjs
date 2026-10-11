// Usage: node scripts/shoot.mjs <base-url> <name=css-selector> [...]
// Screenshots each selector on desktop and phone after triggering the
// scroll-in animations.
import { chromium, devices } from "playwright";
import { mkdirSync } from "node:fs";

const [base, ...pairs] = process.argv.slice(2);
const targets = pairs.map((p) => {
  const i = p.indexOf("=");
  return { name: p.slice(0, i), sel: p.slice(i + 1) };
});
mkdirSync("playwright-report-shots", { recursive: true });

const browser = await chromium.launch();
for (const [label, opts] of [
  ["desktop", { viewport: { width: 1440, height: 900 } }],
  ["phone", devices["iPhone 13"]],
]) {
  const page = await (await browser.newContext(opts)).newPage();
  await page.goto(base, { waitUntil: "networkidle", timeout: 60000 });
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 400) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 40));
    }
  });
  await page.waitForTimeout(1200);
  for (const t of targets) {
    const file = `playwright-report-shots/${t.name}-${label}.png`;
    const el = page.locator(t.sel).first();
    // Walk through the section itself so every staggered fade-in fires,
    // then give the slowest one time to finish.
    await el.evaluate(async (node) => {
      const top = node.getBoundingClientRect().top + window.scrollY;
      for (let y = top - 200; y < top + node.offsetHeight; y += 200) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 150));
      }
    });
    await page.waitForTimeout(1500);
    await el.screenshot({ path: file });
    console.log(file);
  }
}
await browser.close();
