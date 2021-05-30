const axios = require("axios");
const cheerio = require("cheerio");

axios.get("https://www.tistory.com/category/getMoreCategoryPost.json?category=life&lastPublished=0&first=true").then((response) => {
    const htmlString = response.data;
    //const $ = cheerio.load(htmlString);
    //const h1 = $('h1').text(); // h1에 할당된 텍스트 획득
    
    console.dir(htmlString.data.list);
});