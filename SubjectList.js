/**
 * 文件名称: SubjectList
 * 创建时间: 2018/06/10 18:46
 * 创建用户: Yatoo2018
 * 用户邮箱: tanpf2018@163.com
 * 所属项目: zhenchuanx
 * 项目路径：
 *
 * 修改原因: xxx
 * 修改时间: xxx
 * 修改人名: xxx
 */

console.log('开始加载模块SubjectList')


// 循环引用点和index.js中同时引用了Subject
// let {Subject} = require("./Subject")
// console.log("in SubjectList, Subject is ", typeof Subject)

// 抽离出发布者集合
class SubjectList {
	constructor() {
		this.list = []; // 基于数组
		// 循环引用放在运行时，而非加载时
		this.Subject = require("./Subject").Subject
	}
	add(obj) {
		if(obj instanceof this.Subject) {
			this.list.push(obj);
			return this;
		} else {
			console.error("请添加一个Subject类的实例")
		}
	}
	// 移除一个数据，obj.id或者obj
	remove(data) {
		if(data instanceof Object) {
			this._remove(data)
		} else if( data instanceof Number){
			this._removeById(data)
		} else {
			console.error("expect params is a number type or Subject type, but that is a " + typeof data)
		}
	}
	// 通过id删除
	_removeById(id) {
		let idx = this._indexOfById(id)
		return this._removeAt(idx)
	}

	// 通过observer本身删除j
	_remove(obj) {
		let idx = this._indexOfByObject(obj)
		this._removeAt(idx)
		return this;
	}
	_indexOfById(id){
		return this.list.findIndex(_o => _o.id === id);
	}
	_indexOfByObject(obj) {
		if(obj instanceof this.Subject) {
			return this.list.findIndex(_o => _o.id === obj.id)
		} else {
			return -1
		}
	}
	_removeAt(idx) {
		if(idx !== -1 || idx < this.count()){
			this.list.splice(idx, 1)
		} else {
			console.warn("数据中没有要删除的数据");
		}
		return this;
	}
	// 总数
	count() {
		return this.list.length
	}
	// 获取一个数据，通过索引
	get(i) {
		return this.list[i]
	}
}
exports.SubjectList = SubjectList

console.log('模块SubjectList加载完毕')