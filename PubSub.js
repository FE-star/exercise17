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
    this.subscribers[type] ?
    this.subscribers[type].push(fn):
    this.subscribers[type] = [fn]
  }

  unsubscribe(type, fn) {
    this.subscribers[type] = 
      (this.subscribers[type] || [])
        .filter(item => item !== fn)
  }

  publish(type, ...args) {
    (this.subscribers[type] || []).forEach(item => item(...args))
  }

}
