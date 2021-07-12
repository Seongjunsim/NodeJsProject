// @ts-check

/**
* 블로그 포스팅 서비스
* - 로컬 파일을 데이터베이스로 활용 (JSON)
* - 인증 로직 X
* - RESTful API 사용 
*/

// http 뼈대

const http = require('http');
const {routes} = require('./api');

/**
 * 코드 뻐대 구성 JSDoc 이런식으로 타입 정의
 * @typedef Post
 * @property {string} id
 * @property {string} title
 * @property {string} content
 */

/**@tpye {Post[]} */


const server = http.createServer((req,res)=>{
    async function main(){
        const route = routes.find((_route)=>
            req.url && 
            req.method && 
            _route.url.test(req.url)&&
            _route.method === req.method
        )
    
        if(!route){
            res.statusCode = 404
            res.end("Not found")
            return
        }

        const regexResult = route.url.exec(req.url)

        if(!regexResult){
            res.statusCode = 404
            res.end("Not found")
            return
        }
        const body = req.headers['content-type'] === 'application/json' && await new Promise((resolve,reject) =>{
            req.setEncoding('utf-8')
            req.on('data', data =>{
                try{
                    resolve(JSON.parse(data))
                }catch{
                    reject(new Error("JSON TYPE ERROR"))
                }
            }) || undefined;
        })
        console.log(body);

        // @ts-ignore
        const result = await route.callback(regexResult, body);
        res.statusCode = result.statusCode

        if(typeof result.body == 'string'){
            res.end(result.body)
        }else{
            res.setHeader('Content-Type', 'application/json; charset=utf-8;')
            res.end(JSON.stringify(result.body));
        }
    }

    main()
})
/**
 * Post
 * 
 * GET / posts
 * GET /posts /:id
 * POST / posts
 */
const PORT = 4000;

server.listen(PORT,()=>{
    console.log(`ther server is listening at port : ${PORT}`);
})