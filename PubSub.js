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
    const subs = this.subscribers[type];
    for (let i = subs.length - 1; i >= 0; i--) {
      if (subs[i] === fn) {
        subs.splice(i, 1);
      }
    }
  }

  publish(type, ...args) {
    // todo publish
    const subs = this.subscribers[type];
    subs.forEach((sub) => {
      sub.apply(this, args);
    });
  }

}
