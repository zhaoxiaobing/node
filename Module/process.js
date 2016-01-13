/**
 * Created by zhaoxiaobing on 16/1/13.
 */

// process.cwd() 当前路径
// process.version 包含当前node实例的版本号
// process.getgid(), process.setgid()：获取或者设置group id；
// process.getuid(), process.setuid()：获取或者设计user id；
// process.pid：获取进程id；
// process.memoryUsage() node进程内存的使用情况，rss代表ram的使用情况，vsize代表总内存的使用大小，包括ram和swap；



console.log(process.cwd());
console.log(process.version);
console.log(process.getgid());
console.log(process.getuid());
console.log(process.pid);
console.log(process.memoryUsage())