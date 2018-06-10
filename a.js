/**
 * 文件名称: a
 * 创建时间: 2018/06/10 23:32
 * 创建用户: Yatoo2018
 * 用户邮箱: tanpf2018@163.com
 * 所属项目: zhenchuanx
 * 项目路径：
 *
 * 修改原因: xxx
 * 修改时间: xxx
 * 修改人名: xxx
 */
console.log(' 开始加载 A 模块');
var b = require('./b.js');
console.log('in a, b is ', b);

exports.func = function() {
	console.log('调用 A 模块成功');
};

console.log('A 模块加载完毕');