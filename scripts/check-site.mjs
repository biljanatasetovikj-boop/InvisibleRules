// Walks the live site on a desktop and a phone viewport, screenshots each
// page, and reports broken links, console errors, tiny text and overflow.
import { chromium, devices } from "playwright";
import { mkdirSync } from "node:fs";

const BASE = process.argv[2] ?? "https://theinvisiblerules.com";
const PAGES = [
  "/",
  "/for-companies",
  "/privacy",
  "/learn-the-rules",
  "/quiz",
  "/archetype-quiz",
];
const OUT = "playwright-report-shots";
mkdirSync(OUT, { recursive: true });

const problems = [];
const note = (where, what) => problems.push(`${where}: ${what}`);

const browser = await chromium.launch();

for (const [label, ctxOpts] of [
  ["desktop", { viewport: { width: 1440, height: 900 } }],
  ["phone", devices["iPhone 13"]],
]) {
  const context = await browser.newContext(ctxOpts);

  for (const path of PAGES) {
    const page = await context.newPage();
    const consoleErrors = [];
    page.on("console", (m) => {
      if (m.type() === "error") consoleErrors.push(m.text());
    });
    page.on("pageerror", (e) => consoleErrors.push(String(e)));

    const res = await page.goto(BASE + path, {
      waitUntil: "networkidle",
      timeout: 60000,
    });
    if (!res || res.status() >= 400) {
      note(`${label} ${path}`, `HTTP ${res ? res.status() : "no response"}`);
    }

    // Sections fade in when scrolled into view, so walk the page first or
    // everything below the fold is captured blank.
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 400) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 40));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(1200);
    await page.screenshot({
      path: `${OUT}/${label}${path.replace(/\//g, "_") || "_home"}.png`,
      fullPage: true,
    });

    for (const e of consoleErrors) note(`${label} ${path}`, `console: ${e}`);

    // Horizontal overflow: the page should never scroll sideways.
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth
    );
    if (overflow > 2) note(`${label} ${path}`, `scrolls sideways by ${overflow}px`);

    // Any visible text rendering below 12px is hard to read on a phone.
    const tiny = await page.evaluate(() => {
      const out = [];
      for (const el of document.querySelectorAll("body *")) {
        if (!el.childNodes.length) continue;
        const direct = [...el.childNodes]
          .filter((n) => n.nodeType === 3)
          .map((n) => n.textContent.trim())
          .join(" ")
          .trim();
        if (!direct) continue;
        const r = el.getBoundingClientRect();
        if (!r.width || !r.height) continue;
        const size = parseFloat(getComputedStyle(el).fontSize);
        if (size < 12) out.push(`${size}px "${direct.slice(0, 40)}"`);
      }
      return [...new Set(out)];
    });
    for (const t of tiny) note(`${label} ${path}`, `text under 12px -> ${t}`);

    // Mojibake left over from the encoding incident.
    const body = await page.evaluate(() => document.body.innerText);
    const bad = body.match(/Â|â€|Ã.|�/g);
    if (bad) note(`${label} ${path}`, `garbled characters: ${[...new Set(bad)].join(" ")}`);

    await page.close();
  }

  // Follow every internal link once, from the home page.
  const page = await context.newPage();
  await page.goto(BASE, { waitUntil: "networkidle", timeout: 60000 });
  const links = await page.evaluate(() =>
    [...document.querySelectorAll("a[href]")].map((a) => a.href)
  );
  await page.close();

  for (const href of [...new Set(links)]) {
    if (!href.startsWith(BASE)) continue;
    if (href.includes("#")) continue;
    const r = await context.request.get(href).catch(() => null);
    if (!r || r.status() >= 400) {
      note(`${label} link`, `${href} -> ${r ? r.status() : "unreachable"}`);
    }
  }

  await context.close();
}

await browser.close();

if (problems.length === 0) {
  console.log("CLEAN - no problems found");
} else {
  console.log(`FOUND ${problems.length} problem(s):`);
  for (const p of problems) console.log(" - " + p);
}
console.log(`\nScreenshots in ${OUT}/`);
