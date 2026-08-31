const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });

  const page = await context.newPage();
  console.log('Navigating to https://www.webauraindia.com/...');
  
  try {
    await page.goto('https://www.webauraindia.com/', { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2000);

    // 1. Take screenshots
    await page.screenshot({ path: path.join(__dirname, 'webaura_hero.png'), fullPage: false });
    await page.screenshot({ path: path.join(__dirname, 'webaura_fullpage.png'), fullPage: true });
    console.log('Screenshots captured successfully.');

    // 2. Extract DOM Component structures
    const components = await page.evaluate(() => {
      const results = {};

      // Hero data
      const hero = document.querySelector('main');
      results.heroHeadline = hero?.querySelector('h1')?.innerText || '';
      results.heroQuote = hero?.querySelector('blockquote')?.innerText || '';
      
      // Services data
      const serviceCards = Array.from(document.querySelectorAll('#story-services a, [aria-labelledby="home-services-heading"] a'));
      results.services = serviceCards.map(card => ({
        number: card.querySelector('span[aria-hidden="true"]')?.innerText || '',
        title: card.querySelector('h3')?.innerText || '',
        desc: card.querySelector('p')?.innerText || '',
        tag: card.querySelector('.rounded-full')?.innerText || ''
      }));

      // Navigation links
      const navLinks = Array.from(document.querySelectorAll('header a')).map(a => a.innerText.trim()).filter(Boolean);
      results.navLinks = navLinks;

      // Color & Font styles
      const computed = window.getComputedStyle(document.body);
      results.bodyFont = computed.fontFamily;
      results.bgColor = computed.backgroundColor;

      return results;
    });

    fs.writeFileSync(path.join(__dirname, 'webaura_components.json'), JSON.stringify(components, null, 2));
    console.log('Web Aura components extracted to webaura_components.json');
  } catch (err) {
    console.error('Error scraping:', err);
  } finally {
    await browser.close();
  }
})();
