const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
      width : 1440,
      height : 900
  });
  await page.goto('https://brunch.co.kr/search?q=IT&type=article');
  await page.screenshot({ path: 'brunch.png' });

  await browser.close();
})();