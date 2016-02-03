/**
 * Created by zhaoxiaobing on 16/2/4.
 */

'use strict';

const http = require('http');

var server = http.createServer((req,res) => {

    var body = '';

    req.setEncoding('utf8');

    req.on('data', (chunk) => {
        body += chunk;
    });

    req.on('end', () => {
       try{
           var data = JSON.parse(body);
       } catch(er) {
           res.statusCode = 400;
           return res.end('error: '+ er.message);
       }
        res.write(typeof data);
        res.end();
    });


});

server.listen(1337);

