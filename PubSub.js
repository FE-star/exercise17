/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: kael
 * @Last Modified time: 2018-02-02 17:46:36
 */

module.exports = class PubSub {

  constructor() {
    this.subscribers = {};
  }

  subscribe(type, fn) {
    let listeners = this.subscribers[type] = this.subscribers[type] || [];
    listeners.push(fn);
  }

  unsubscribe(type, fn) {
    let listeners = this.subscribers[type];
    if (!listeners) return;
    this.subscribers[type] = listeners.filter(listener => listener !== fn);
  }

  publish(type, ...args) {
    let listeners = this.subscribers[type];
    if (!listeners) return;
    listeners.forEach(listener => listener(...args));
  }

}
