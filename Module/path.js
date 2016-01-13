/**
 * Created by zhaoxiaobing on 16/1/13.
 */


const path = require('path');
const pwd = process.cwd(); //  输出:  /Users/zhaoxiaobing/xiaobing/nodejs/Module
/**
 * path.normalize(p)
 * 格式化路径
 * 特点：将不符合规范的路径格式化，简化开发人员中处理各种复杂的路径判断
 */
console.log(path.normalize('/foo/bar//baz/asdf/quux/..')); //  输出:  /foo/bar/baz/asdf

/**
 * path.join([path1], [path2], […])
 * 路径合并
 * 特点：将所有名称用path.seq串联起来，然后用normailze格式化
 */
console.log(path.join('///foo', 'bar', '//baz/asdf', 'quux', '..')); // 输出:  /foo/bar/baz/asdf


/**
 * path.resolve([from …], to)
 * 路径寻航
 * 特点：相当于不断的调用系统的cd命令
 */
console.log(path.resolve('foo/bar', '/tmp/file/', '..', 'a/../subfile')); //  输出:  /tmp/subfile


/**
 * path.relative(from, to)
 * 相对路径
 * 返回某个路径下相对于另一个路径的相对位置串，
 */
console.log(path.relative('c:/xiaobing/node','c:/xiaobing/mygit/daling'));  // 输出:  ../mygit/daling


/**
 * path.dirname(p)
 * 文件夹名称
 * 特点：返回路径的目录名称
 */
console.log(path.dirname(pwd)); //  输出:  /Users/zhaoxiaobing/xiaobing/nodejs


/**
 * path.basename(p)
 * 文件夹名称
 * 特点：返回路径的目录名称
 */
console.log(path.basename(pwd)); // 输出:  Module
console.log(path.basename('/Users/zhaoxiaobing/xiaobing/nodejs/Module/path.js')); // path.js


/**
 * path.extname(p)
 * 返回一个路径的文件扩展名
 */
console.log(path.extname('a/b/c/index.html')); // 输出:  .html
console.log(path.extname('a/b/c/index.')); // 输出:   .
console.log(path.extname('a/b/c/index')); //  输出:   ''

/**
 * path.sep
 */
console.log(pwd.split(path.sep)); // 输出:  [ '', 'Users', 'zhaoxiaobing', 'xiaobing', 'nodejs', 'Module' ]

