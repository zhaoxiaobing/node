/**
 * Created by zhaoxiaobing on 16/1/9.
 */

const fs = require('fs');

//异步读取
fs.readFile('../data/data.js', (err,data) => {
    if(err){
        return  console.error(err);
    }
    //data 为二进制数据
    console.log('异步读取' + data.toString());
});

console.log('异步读取');

