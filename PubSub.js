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
    console.log(this.subscribers)
    this.subscribers[type].push({
      cb: fn
    })
  }

  unsubscribe(type, fn) {
    // todo unsubscribe
    let subscribers = this.subscribers[type];
    subscribers.forEach((item, i) => {
      if (item.cb === fn) {
        subscribers.splice(i, 1);
      }
    })
  }

  publish(type, args) {
    // todo publish
    if (!this.subscribers[type]) {
      return
    }
    let subscribers = this.subscribers[type];
    let length = subscribers ? subscribers.length : 0;
    while (length--) {
      subscribers[length].cb(args);
    }
  }
}
