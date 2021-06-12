const puppeteer = require('puppeteer');
const cheerio = require("cheerio");

(async () =>{
    const browser = await puppeteer.launch({
        headless: false
    });

    
    const page = await browser.newPage();
    
    await page.setViewport({
        width : 1440,
        height: 1080
    })

    await page.goto("https://www.tistory.com/category/life");
    const html = await page.content();
    const $ = cheerio.load(html);
    let hrefArray = [];
    $("ul.list_gnb > li > a").each((index, element) =>{
        const href = $(element).attr("href");
        hrefArray.push(href);
    })
    
    console.log(hrefArray); 
    //await browser.close();
})(); //즉시 실행