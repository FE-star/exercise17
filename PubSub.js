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
    let sub = this.subscribers[type];
    if (!sub) {
      this.subscribers[type] = [fn];
    } else {
      this.subscribers[type].push(fn);
    }
  }

  unsubscribe(type, fn) {
    let sub = this.subscribers[type];
    if (!sub) {
      return;
    }
    let index = sub.indexOf(fn);
    sub.splice(index, 1);
  }

  publish(type, ...args) {
    if (!this.subscribers[type]) {
      return false;
    } else {
      this.subscribers[type].forEach(element => {
        element(...args);
      });
    }
  }

}
