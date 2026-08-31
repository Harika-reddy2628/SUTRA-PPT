const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage({
    viewport: { width: 1920, height: 1080 }
  });

  await page.goto('http://localhost:3001', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // Capture individual sections by selector
  const sections = ['problem', 'fsd', 'deep-jscc', 'perception', 'gcs', 'benchmarks', 'team'];

  for (const sec of sections) {
    const el = await page.$(`#${sec}`);
    if (el) {
      await el.screenshot({ path: path.join(__dirname, `section_${sec}.png`) });
      console.log(`Captured section #${sec}`);
    }
  }

  await browser.close();
})();
