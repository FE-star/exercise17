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
    if (!this.subscribers[type]) this.subscribers[type] = [];
    this.subscribers[type].push({func: fn});
  }

  unsubscribe(type, fn) {
    // todo unsubscribe
    for (var m in this.subscribers) {
      if (m === type) {
        for (var i = 0, j = this.subscribers[m].length; i < j; i++) {
          if (this.subscribers[m][i].func === fn) {
            this.subscribers[m].splice( i, 1 );
          }
        }
      }
    }
    return this;
  }

  publish(type, ...args) {
    // todo publish
    if (!this.subscribers[type]) {
      return false;
    }
    var subscribers = this.subscribers[type],
    len = subscribers ? subscribers.length : 0;
    while (len--) {
      subscribers[len].func(...args);
    }
    return this;
  }

}
