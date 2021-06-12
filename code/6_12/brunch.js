const puppeteer = require('puppeteer');
//pptr . dev
(async () => {
  const browser = await puppeteer.launch({
      headless : false,
  });
  const page = await browser.newPage();
  await page.setViewport({
      width : 1440,
      height : 900,
  });
  await page.goto('https://brunch.co.kr/search');
  await page.click("input.txt_search");
  await page.keyboard.type('it');
  await page.keyboard.press("Enter");
  // os 가 다를 경우 access안됨
  
  await page.waitForNavigation();

  await page.evaluate(() => {
      console.log("dho dkseho tlqkf ");
  });
})();