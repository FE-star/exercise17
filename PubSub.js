/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: kael
 * @Last Modified time: 2018-02-02 17:39:45
 */

module.exports = class PubSub {
	constructor() {
		this.subscribers = {};
	}
	subscribe(type, fn) {
		// todo subscribe
		(this.subscribers[type]= this.subscribers[type] || []).push({
			fn: fn
		})	
		
	}
	unsubscribe(type, fn) {
		// todo unsubscribe
		if(!this.subscribers[type]) return
		this.subscribers[type].map((item, index)=> {
			if(item.fn == fn) {
				this.subscribers[type].splice(index, 1)
			}
			
		})
	}

	publish(type, ...args) {
		// todo publish
		let subscribers= this.subscribers[type],
			len= subscribers ? subscribers.length : 0

		while(len--) {
			subscribers[len].fn(...args)
		}
	}

}
