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
      this.subscribers[type] = []
    }

    this.subscribers[type].push(fn)
  }

  unsubscribe(type, fn) {
    // todo unsubscribe
    if (!type) {
      return;
    }

    const listenerList = this.subscribers[type];

    if (!listenerList) {
      return;
    }

    const index = listenerList.indexOf(fn);

    if (index === -1) {
      return;
    }

    listenerList.splice(index, 1);
  }

  publish(type, ...args) {
    const listenerList = this.subscribers[type]
    if (!listenerList) {
      return;
    }

    for (const listener of listenerList) {
      listener(...args);
    }
  }

}
