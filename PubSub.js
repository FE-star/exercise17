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
    this.subscribe[type] = fn
    // todo subscribe
  }

  unsubscribe(type, fn) {
    this.subscribe[type] = null
    // todo unsubscribe
  }

  publish(type, ...args) {
    this.subscribe[type] && this.subscribe[type](...args)
    // todo publish
  }

}
