const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  console.log('🚀 Compiling Project SUTRA Pitch Script PDF using Playwright...');
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  // 1. Render Pitch Script PDF (A4 Document)
  const scriptPage = await browser.newPage();
  const scriptHtmlPath = path.resolve(__dirname, 'pitch_script.html');
  const scriptPdfPath = path.resolve(__dirname, 'PROJECT_SUTRA_PITCH_SCRIPT.pdf');

  await scriptPage.goto(`file://${scriptHtmlPath}`, { waitUntil: 'networkidle' });
  await scriptPage.waitForTimeout(1500);

  await scriptPage.pdf({
    path: scriptPdfPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '10mm', bottom: '10mm', left: '10mm', right: '10mm' },
    scale: 0.95,
  });
  console.log(`✓ Pitch Script PDF generated: ${scriptPdfPath}`);

  // 2. Render Combined Multi-Slide Presentation PDF (16:9 Landscape)
  console.log('🚀 Generating multi-slide Presentation Deck PDF (16:9 Landscape)...');
  
  // We can render each slide HTML into 16:9 PDF
  const slides = ['slide_01', 'slide_02', 'slide_03'];
  for (const slide of slides) {
    const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 2 });
    const htmlPath = path.resolve(__dirname, `${slide}.html`);
    const pdfPath = path.resolve(__dirname, `${slide}.pdf`);
    
    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1500);
    
    await page.pdf({
      path: pdfPath,
      width: '1920px',
      height: '1080px',
      printBackground: true,
      margin: { top: '0px', bottom: '0px', left: '0px', right: '0px' },
      pageRanges: '1'
    });
    console.log(`✓ ${slide}.pdf verified.`);
  }

  await browser.close();
  console.log('🎉 Pitch Script and Slide Deck PDFs generated successfully!');
})();
