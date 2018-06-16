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
    this.subscribers[type]=fn
    // todo subscribe
  }

  unsubscribe(type, fn) {
    this.subscribers[type]=''
    // todo unsubscribe
  }

  publish(type, ...args) {
    if(this.subscribers[type]) {
      this.subscribers[type](args[0])
    }
    // todo publish
  }

}
