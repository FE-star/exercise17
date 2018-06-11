/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: Yatoo2018
 * @Last Modified time: 2018-06-10 17:20:45
 */

class PubSub {

	constructor() {
		this.subscribers = {};
	}

	subscribe(type, fn) {
		// subscribe
		if (!this.subscribers[type]) {
			this.subscribers[type] = [];
		}
		this.subscribers[type].push({
			func: fn
		})
	}

	unsubscribe(type, fn) {
		// unsubscribe
		if (this.subscribers[type]) {
			this.subscribers[type].forEach((temp, index) => {
				if (temp.func == fn) {
					this.subscribers[type].splice(index,1);
				}
			})
		}
	}

	publish(type, ...args) {
		// publish
		if (!this.subscribers[type]) {
			return
		}
		this.subscribers[type].forEach(item => {
			item.func(...args);
		})
	}

}

exports.PubSub = PubSub