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
    if (!this.subscribers[type]) {
      this.subscribers[type] = new Map();
    }
    this.subscribers[type].set(fn, fn);
  }

  unsubscribe(type, fn) {
    // todo unsubscribe
    if (this.subscribers[type].has(fn)) {
      this.subscribers[type].delete(fn);
    }
  }

  publish(type, ...args) {
    // todo publish
    if (this.subscribers[type].size) {
      for (const [key, func] of this.subscribers[type]) {
        func(args);
      }
    }
  }

}
