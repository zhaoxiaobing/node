/**
 * Created by zhaoxiaobing on 16/1/12.
 */


const http = require('http');
const querystring = require('querystring');
const util = require('util');

http.createServer((req,res) => {
    var post = '';
    req.on('data',(chunk) => {
        console.log(chunk);
        post += chunk;
    });
    req.on('end',() => {
        post = querystring.parse(post);
        res.end(util.inspect(post));
        console.log(util.inspect(post));
    });
}).listen(8888);