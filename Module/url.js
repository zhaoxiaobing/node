/**
 * Created by zhaoxiaobing on 16/1/12.
 */

const url = require('url');

/**
 * 该模块四个方法
 * parse    输出类型 object
 * resolve  参数是两个路径，第一个路径是开始的路径或者说当前路径，第二个则是想要去往的路径，返回值是一个组装好的url
 * resolveObject
 * format   作用与parse相反，它的参数是一个JSON对象，返回一个组装好的url地址
 * Url
 */

const path = 'http://www.daling.com?name=xiaobing&age=25';

console.log(url.parse(path));
/*
Url {
    protocol: 'http:',  协议
    slashes: true,
    auth: null,
    host: 'www.daling.com',主机名
    port: null,   端口号
    hostname: 'www.daling.com',
    hash: null,
    search: '?name=xiaobing&age=25', URL 的“查询字符串”部分，包括开头的问号。
    query: 'name=xiaobing&age=25', 查询字符串中的参数部分（问号后面部分字符串），
    pathname: '/',  URL的路径部分,位于主机名之后请求查询之前
    path: '/?name=xiaobing&age=25',
    href: 'http://www.daling.com/?name=xiaobing&age=25' }
    */
console.log('\n---------------------------------- 华丽的分割线 ----------------------------------\n');
var url1 = 'http://www.daling.com',
    url2 = 'images';

console.log(url.resolve(url1, url2)); // http://www.daling.com/images


console.log('\n---------------------------------- 华丽的分割线 ----------------------------------\n');

var json1 = {
    protocol: 'http:',
    host: 'www.daling.com',
    pathname: 'api/cart/views',
    search: 'is_mini=0&_=1450082616033'
}
console.log(url.format(json1));