/*
 * @Author: zChange 
 * @Date: 2018-06-09 
 * @Last Modified by: zChange
 * @Last Modified time: 2018-06-09 
 */

module.exports = class PubSub {

  constructor() {
    this.subscribers = {};
  }

  subscribe(type, fn) {
    // todo subscribe
    if (!this.subscribers[type]) { 
      this.subscribers[type] = []
    }
    this.subscribers[type].push(fn)
  }

  unsubscribe(type, fn) {
    // todo unsubscribe
    if (!!this.subscribers[type]) { 
      this.subscribers[type].splice(this.subscribers[type].findIndex(item => item === fn), 1)
    }
  }

  publish(type, ...args) {
    // todo publish
    if (!!this.subscribers[type]) { 
      this.subscribers[type].map(ob => ob(...args));
    }
  }

}
