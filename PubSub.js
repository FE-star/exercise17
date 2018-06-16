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
    if (!this.subscribers[type]) {
      this.subscribers[type] = [];
    }
    this.subscribers[type].push({
      fn: fn
    });
  }

  unsubscribe(type, fn) {
    this.subscribers[type] = [];
  }

  publish(type, ...args) {
    if(!this.subscribers[type] || this.subscribers[type].length === 0) {
      return false;
    }
    let fns = this.subscribers[type],
      len = fns ? fns.length : 0;
    while(len--) {
      // apply is very important: CreateListFromArrayLike called on non-object;
      // args has no `...`
      fns[len].fn.apply(type, args);
    }
    return this;
  }

};
