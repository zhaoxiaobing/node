/**
 * Created by zhaoxiaobing on 16/1/9.
 */

const fs = require('fs');


//同步读取
var datas = fs.readFileSync('../data/data.js'); //二进制数据
console.log(datas.toString());
console.log('同步读取');