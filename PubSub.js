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
    this.subscribers[type].push(fn);
  }

  unsubscribe(type, fn) {
    for (var type in this.subscribers) {
      if (this.subscribers[type]) {
        for (var i = 0, j = this.subscribers[type].length; i < j; i++) {
          if (this.subscribers[type][i] === fn) {
            this.subscribers[type].splice(i, 1);
          }
        }
      }
    }
    return this;
  }

  publish(type, ...args) {
    if (!this.subscribers[type]) {
      return false;
    }
    var subscribers = this.subscribers[type],
        len = subscribers ? subscribers.length : 0;

    while (len--) {
      subscribers[len].call(type, ...args);
    }

    return this;
  }

}
