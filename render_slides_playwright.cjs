const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  console.log('🚀 Launching Chromium with Playwright for Pixel-Perfect Slide Rendering...');
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 2 // Crisp 2x retina render
  });

  const slides = [
    { html: 'slide_01.html', png: 'slide_01.png', pdf: 'slide_01.pdf' },
    { html: 'slide_02.html', png: 'slide_02.png', pdf: 'slide_02.pdf' },
    { html: 'slide_03.html', png: 'slide_03.png', pdf: 'slide_03.pdf' },
  ];

  for (const s of slides) {
    const htmlPath = path.resolve(__dirname, s.html);
    if (!fs.existsSync(htmlPath)) {
      console.log(`Skipping ${s.html} (not found)`);
      continue;
    }

    const pngPath = path.resolve(__dirname, s.png);
    const pdfPath = path.resolve(__dirname, s.pdf);

    console.log(`Rendering ${s.html} -> ${s.png} & ${s.pdf}...`);
    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle' });
    
    // Allow Google Fonts (Inter, Space Grotesk, JetBrains Mono) to settle
    await page.waitForTimeout(1500);

    // Capture crisp PNG
    await page.screenshot({
      path: pngPath,
      clip: { x: 0, y: 0, width: 1920, height: 1080 }
    });

    // Generate print-faithful PDF
    await page.pdf({
      path: pdfPath,
      width: '1920px',
      height: '1080px',
      printBackground: true,
      margin: { top: '0px', bottom: '0px', left: '0px', right: '0px' },
      scale: 1.0,
    });

    console.log(`✓ Generated ${s.png} & ${s.pdf}`);
  }

  await browser.close();
  console.log('🎉 All slides rendered successfully with Playwright!');
})();
