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
    const listeners = this.subscribers[type] = this.subscribers[type] || [];
    listeners.push(fn);
  }

  unsubscribe(type, fn) {
    // todo unsubscribe
    const listeners = this.subscribers[type];
    if (listeners) {
      this.subscribers[type] = listeners.filter(listener => listener !== fn)
    }
  }

  publish(type, ...args) {
    // todo publish
    const listeners = this.subscribers[type];
    listeners && listeners.forEach(listener => listener(...args));
  }

}
