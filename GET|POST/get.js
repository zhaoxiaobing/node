/**
 * Created by zhaoxiaobing on 16/1/12.
 */

const http = require('http');
const url = require('url');
const util = require('util');


http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end(util.inspect(url.parse(req.url, true)));
    console.log(util.inspect(url.parse(req.url, true)));
    console.log('------------- 华丽的分割线 -------------');
    console.log(req.url);
    console.log(url.parse(req.url, true));
    console.log(util.inspect(url.parse(req.url, true)));
}).listen(3000);