/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: kael
 * @Last Modified time: 2018-02-02 17:39:45
 */
let helper = require('./helper');
module.exports = class PubSub {

  constructor() {
    this.subscribers = {};
  }

  subscribe(type, fn) {
    // todo subscribe
    if (!this.subscribers[type] || !helper.isArray(this.subscribers[type])) {
      this.subscribers[type] = [];
    }
    this.subscribers[type].push(fn);
  }

  unsubscribe(type, fn) {
    // todo unsubscribe
    // 如果type主题没有订阅者，或者this.subscribers[type]不是array，那么不做任何处理
    if (!this.subscribers[type] || !helper.isArray(this.subscribers[type]) || this.subscribers[type].length === 0) {
      return;
    }
    let index = this.subscribers[type].indexOf(fn);
    index != -1 && this.subscribers[type].splice(index, 1);
  }

  publish(type, ...args) {
    // todo publish
    this.subscribers[type] && this.subscribers[type].forEach(fn => fn(...args));
  }

}
