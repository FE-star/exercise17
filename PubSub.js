/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: yingrui zhang
 * @Last Modified time: 2018-06-16 13:12:49
 */

module.exports = class PubSub {

  constructor() {
    this.subscribers = {};
  }

  subscribe(type, fn) {
    if (!this.subscribers[type]) {
      this.subscribers[type] = [];
    }
    
    this.subscribers[type].push(fn);
  }

  unsubscribe(type, fn) {
    let fns = this.subscribers[type];

    if (!fns) {
      return false;
    }

    this.subscribers[type] = fns.filter(item => item !== fn);
  }

  publish(type, ...args) {
    let fns = this.subscribers[type] || [];

    fns.map(fn => fn.apply(this, args));
  }
}
