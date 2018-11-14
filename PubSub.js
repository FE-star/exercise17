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
      this.subscribers[type] = [];
    }
    this.subscribers[type].push(fn);
  }

  unsubscribe(type, fn) {
    // todo unsubscribe
    const subscribes = this.subscribers[type];
    if (!subscribes) return;
    subscribes.splice(subscribes.findIndex(f => f === fn), 1);
  }

  publish(type, ...args) {
    // todo publish
    this.subscribers[type] && this.subscribers[type].forEach(func => func(...args));
  }

}
