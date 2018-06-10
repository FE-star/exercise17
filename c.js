/**
 * 文件名称: c.js
 * 创建时间: 2018/06/10 23:37
 * 创建用户: Yatoo2018
 * 用户邮箱: tanpf2018@163.com
 * 所属项目: zhenchuanx
 * 项目路径：
 *
 * 修改原因: xxx
 * 修改时间: xxx
 * 修改人名: xxx
 */
console.log(' 开始加载 c 模块');
var A = require('./a.js');
console.log('in c, a is ', A);

exports.func = function() {
	A.func();
}
console.log('c 模块加载完毕');