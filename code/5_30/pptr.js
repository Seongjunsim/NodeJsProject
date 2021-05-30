const puppeteer = require('puppeteer');
const cheerio = require("cheerio");

(async () =>{
    const browser = await puppeteer.launch({
        headless: false
    });

    
    const page = await browser.newPage();
    await page.goto('https://www.tistory.com/category/life');
    await page.setViewport({
        width : 1440,
        height: 1080
    })

    const html = await page.content();
    const $ = cheerio.load(html);
    const mArticleText = $('#mArticle').text();
    console.log(mArticleText);    

    //await browser.close();
})(); //즉시 실행