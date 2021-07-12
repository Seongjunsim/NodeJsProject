// @ts_check

const posts = [
    {
        id: 'my_first_post',
        title: 'My First Post',
        content: 'Hellooo',
    },{
        id: 'second',
        title: 'hihi',
        content: 'good',
    },
]


/**
 * @typedef APIResponse
 * @property {number} statusCode
 * @property {string | Object} body
 */

/**
 * @typedef Route
 * @property {RegExp} url
 * @property {"GET" | "POST"} method
 * @property {(matches: stinrg[], body: Object.<string, *> | undefined) => Promise<APIResponse>)} callback
 */

const fs = require('fs');

/**@returns {Promise<Post[]>} */
async function getPosts(){
    const json = fs.promises.readFile("database.json", "utf-8")
    return JSON.parse(json).posts
}

/**@type {Route[]} */
const routes = [
    {
        url: /^\/posts$/,
        method: "GET",
        callback: async ()=> {
            return {
                statusCode: 200,
                body: getPosts(),
            }
        }
    },
    {
        url:  /^\/posts\/([a-zA-Z0-9-_]+)$/ , // TODO: RegExp 로  고쳐야함
        method: 'GET',
        callback: async (matches) =>{
            const postId = matches[1];
            if(!postId){
                return{
                    statusCode:404,
                    body: 'Not found'
                }
            }
            const post = posts.find(_post=>_post.id === postId)
            if(!post){
                return{
                    statusCode:404,
                    body: 'not found'
                }
            }
            return {
                statusCode: 200,
                body : post,
            }
        }
    },
    {
        url: /^\/posts$/ , // TODO: RegExp 로  고쳐야함
        method: 'POST',
        callback: async (_, body) => {
            if(!body){
                return{
                    statusCode : 400,
                    body: 'Ill_formed request'
                }
            }
            /** @type {string} * */
            /* eslint-disable-next-line prefer-destructuring*/
            const title = body.title
            const newPost = {
                id: title.replace(" ", "_"),
                title : title,
                content : body.content
            }

            posts.push(newPost)
            return {
                statusCode: 200,
                body : newPost,
            }
        }
    }
]

module.exports = {
    routes,
}