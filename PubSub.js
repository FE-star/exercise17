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
    (this.subscribers[type] = this.subscribers[type] || []). push(fn);
  }

  unsubscribe(type, fn) {
    // todo unsubscribe
    if(typeof this.subscribers[type] === "unedfined") return;
    this.subscribers[type].forEach((f, index) => {
      if(f === fn ) {
        this.subscribers[type].splice(index, 1);
      }
    })
  }

  publish(type, ...args) {
    // todo publish
    if(typeof this.subscribers[type] === "unedfined") return;
    this.subscribers[type].forEach((fn) => {
      fn.apply(this, args);
    })
  }

}
