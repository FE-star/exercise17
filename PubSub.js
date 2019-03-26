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
    this.subscribers[type].push({ fn: fn });
  }

  unsubscribe(type, fn) {
    // todo unsubscribe
    if (this.subscribers[type]) {
      var len = this.subscribers[type].length;
      for (var i = 0; i < len; i++) {
        if (this.subscribers[type][i].fn === fn) {
          this.subscribers[type].splice(i, 1);
          break;
        }
      }
    }
  }

  publish(type, ...args) {
    // todo publish
    if (!this.subscribers[type]) {
      return false;
    }
    var typeSubs = this.subscribers[type],
      len = typeSubs ? typeSubs.length : 0;
    while (len--) {
      typeSubs[len].fn(...args);
    }
  }

}
