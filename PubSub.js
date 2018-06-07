/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: kael
 * @Last Modified time: 2018-02-02 17:39:45
 */

module.exports = class PubSub {

  constructor() {
    this.subscribers = {};
	this.subUid=-1;
	this.topics={};
  }

  subscribe(type, fn) {
    // todo subscribe
	let container=this.subscribers[type]||[]
	container.push(fn)
	this.subscribers[type]=container
  }

  unsubscribe(type, fn) {
    // todo unsubscribe
	let continer=this.subscribers[type]
	if(!continer){
		return ''
	}
	this.subscribers[type]=continer.filter((item)=>{
		return item!==fn
	})
  }

  publish(type, ...args) {
    // todo publish
	let container=this.subscribers[type]
	if(!container){
		return 
	}
	container.forEach((item)=>{
		return item.apply(type,args)
	})
  }

}
