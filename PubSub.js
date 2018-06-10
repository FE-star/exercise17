/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: zelda.zhangze
 * @Last Modified time: 2018-06-10 21:44:52
 */

module.exports = class PubSub {

  constructor() {
    this.subscribers = {};
  }

  subscribe(type, fn) {
    // todo subscribe
    if (!this.subscribers[type]) this.subscribers[type] = [];
    this.subscribers[type].push(fn);
  }

  unsubscribe(type, fn) {
    // todo unsubscribe
    if (this.subscribers[type]) {
      this.subscribers[type].splice(this.subscribers[type].indexOf(fn), 1);
    }
  }

  publish(type, ...args) {
    // todo publish
    if (this.subscribers[type]) {
      for (var i = 0, j = this.subscribers[type].length; i < j; i++) {
        this.subscribers[type][i](...args);
      }
    }
  }
}