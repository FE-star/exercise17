/**
 * 文件名称: Observer
 * 创建时间: 2018/06/10 18:17
 * 创建用户: Yatoo2018
 * 用户邮箱: tanpf2018@163.com
 * 所属项目: zhenchuanx
 *
 * 修改原因: xxx
 * 修改时间: xxx
 * 修改人名: xxx
 */

console.log("开始加载Observer模块")
let {SubjectList} = require("./SubjectList")
console.log("in Observer, SubjectList is ", typeof SubjectList)
/**
 * 订阅者基类
 */
let ID = 0
class Observer{

	constructor(){
		this.id = ID++
		// 这是订阅者和发布者之间的关系， 订阅者持有一个发布者的数据集，
		// 订阅者可以知道自己都关注哪些发布者
		this.subjects = new SubjectList()
		this.sum = 0;
	}
	// 订阅者关注了发布者
	addSubject(obj) {
		this.subjects.add(obj)
		return this;
	}
	// 订阅者取消关注了订阅者, 需要从订阅者的关注者集合中移除订阅者
	removeSubject(obj){
		this.subjects.remove(obj)
		return this;
	}

	update(data){
		console.log('发布者 ==> ', this.id ,'更新了', data)
     // 收到更新之后要做的事情，提供给发布者的接口
		this.sum += data;
	}

}

exports.Observer = Observer
console.log("模块Observer加载完毕")