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
    let sub = this.subscribers[type]
    if (sub) {
      sub.push(fn);
    } else {
      this.subscribers[type] = [fn];
    }
  }

  unsubscribe(type, fn) {
    if (!this.subscribers[type]) return;
    const sub = this.subscribers[type];
    const idx = sub.indexOf(fn);
    if (idx >= 0) {
      sub.splice(idx, 1);
    }
  }

  publish(type, ...args) {
    const sub = this.subscribers[type];
    if (!sub) return;
    sub.forEach(fn => {
      fn(...args);
    })
  }

}
