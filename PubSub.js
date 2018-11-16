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
    if (this.subscribers[type]) {
      this.subscribers[type].push(fn)
    } else {
      this.subscribers[type] = [fn]
    }
  }

  unsubscribe(type, fn) {
    // todo unsubscribe
    this.subscribers[type] && (this.subscribers[type] = this.subscribers[type].filter(item => item !== fn))
  }

  publish(type, ...args) {
    // todo publish
    let arr = this.subscribers[type]
    if (arr) {
      let len = arr.length
      for (; len--;) {
        if (typeof arr[len] === 'function') {
          arr[len](...args)
        }
      }
    } 
  }

}
