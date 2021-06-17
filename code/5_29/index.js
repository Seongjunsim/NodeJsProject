const axios = require("axios");
const fs = require("fs");
let article = {};
const crawler = (pageNumber) => {
    return axios.get(
        "https://api.brunch.co.kr/v1/search/article?"+
        `q=Hello%20World&page=${pageNumber}&pageSize=20&highlighter=y&escape=y&sortBy=accu`
        )
        .then((response) => {
        const htmlString = response.data;
        //const $ = cheerio.load(htmlString);
        //const h1 = $('h1').text(); // h1에 할당된 텍스트 획득
        console.log("current page number: ", pageNumber);
        article[pageNumber] = htmlString.data.list.map(item => {
            return {
                title: item.title,
                contentSummary: item.contentSummary,
                contentId: item.contentId
            }
        });
        const nextNumber = pageNumber + 1;
        if(nextNumber < 10){
            crawler(nextNumber);
            return;
        }
        fs.writeFile("brunch_article.json", JSON.stringify(article), (err, data)=>{
            if(err){
                console.error(err);
                return;
            }
            console.log("success file write");
        });
    });
};

const data = crawler(1);

