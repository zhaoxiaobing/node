/**
 * Created by zhaoxiaobing on 16/1/12.
 */

const http = require('http');
const url = require('url');
const util = require('util');


http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end(util.inspect(url.parse(req.url, true)));
    console.log('该睡觉啦!');
}).listen(3000);