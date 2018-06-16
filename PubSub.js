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
    this.subscribers[type] = fn;
  }

  unsubscribe(type, fn) {
    // todo unsubscribe
    if(this.subscribers[type]) {
      delete this.subscribers[type]
    }
  }

  publish(type, ...args) {
    // todo publish
    if(!this.subscribers[type]) return;
    let subscribe = this.subscribers[type];
    subscribe(...args);
  }

}
