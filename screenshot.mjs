import puppeteer from 'puppeteer-core';
import fs from 'fs';

(async () => {
  let executablePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  if (!fs.existsSync(executablePath)) {
    executablePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  }

  const browser = await puppeteer.launch({
    executablePath,
    headless: "new"
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 2500 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 60000 });
  
  const path = 'C:\\Users\\phoni\\.gemini\\antigravity-ide\\brain\\315fe54a-1c46-44fe-84be-1b5ee119b5c7\\screenshot.png';
  await page.screenshot({ path, fullPage: true });
  console.log(`Screenshot saved to ${path}`);
  
  await browser.close();
})();
