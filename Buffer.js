/**
 * Created by zhaoxiaobing on 16/1/8.
 */

const buf1 = new Buffer(10);

const buf2 = new Buffer([1,2,3]);

const buf3 = new Buffer('test');

const buf4 = new Buffer('test','utf8');

console.log(buf4);


const buf = new Buffer('hello world','ascii');
console.log(buf.toString('hex'));
console.log(buf.toString('base64'));