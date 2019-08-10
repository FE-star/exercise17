/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: mt
 * @Last Modified time: 2019-08-10 23:03:01
 */

module.exports = class PubSub {

  constructor() {
    this.subscribers = {};
  }

  subscribe(type, fn) {
    this.subscribers[type] = this.subscribers[type] || [];
    this.subscribers[type].push(fn);
  }

  unsubscribe(type, fn) {
    if (this.subscribers[type] === undefined) {
      throw new Error('unknown type');
    }

    const index = this.subscribers[type].indexOf(fn);
    if (index !== -1) {
      this.subscribers[type].splice(index, 1);
    }
  }

  publish(type, ...args) {
    if (this.subscribers[type] === undefined) {
      throw new Error('unknown type');
    }

    this.subscribers[type].forEach(fn => {
      fn.apply(this, args);
    });
  }

}
