import { chromium, devices } from "playwright";

const browser = await chromium.launch();
const context = await browser.newContext(devices["iPhone 13"]);
const page = await context.newPage();
await page.goto(process.argv[2] ?? "https://theinvisiblerules.com", {
  waitUntil: "networkidle",
  timeout: 60000,
});

const before = await page.evaluate(() => document.body.scrollHeight);

// Scroll the whole way down so every scroll-triggered fade-in fires.
await page.evaluate(async () => {
  for (let y = 0; y < document.body.scrollHeight; y += 400) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 40));
  }
  window.scrollTo(0, 0);
});
await page.waitForTimeout(1500);

const after = await page.evaluate(() => document.body.scrollHeight);

const sections = await page.evaluate(() =>
  [...document.querySelectorAll("main > section, main > div")].map((s) => {
    const r = s.getBoundingClientRect();
    return {
      id: s.id || "(no id)",
      top: Math.round(r.top + window.scrollY),
      height: Math.round(r.height),
      text: (s.innerText || "").trim().slice(0, 45).replace(/\s+/g, " "),
    };
  })
);

console.log(`page height before scrolling: ${before}px`);
console.log(`page height after scrolling:  ${after}px\n`);
for (const s of sections) {
  console.log(
    `${String(s.height).padStart(6)}px  top:${String(s.top).padStart(6)}  ${s.id.padEnd(14)} ${s.text}`
  );
}

await browser.close();
