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

  console.log('Navigating to http://localhost:3001...');
  await page.goto('http://localhost:3001', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000); // Allow canvas & font rendering

  // 1. Full page screenshot
  const fullPagePath = path.join(__dirname, 'landing_fullpage.png');
  await page.screenshot({ path: fullPagePath, fullPage: true });
  console.log(`Full page screenshot saved to: ${fullPagePath}`);

  // 2. Viewport screenshot (Hero area)
  const heroPath = path.join(__dirname, 'landing_hero.png');
  await page.screenshot({ path: heroPath, fullPage: false });
  console.log(`Hero viewport screenshot saved to: ${heroPath}`);

  await browser.close();
})();
