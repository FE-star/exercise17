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
    if(!this.subscribers[type]) {
      this.subscribers[type] = [fn];
      return;
    }
    this.subscribers[type] = [...this.subscribers[type], fn];
  }

  unsubscribe(type, fn) {
    // todo unsubscribe
    if(this.subscribers[type]){
      this.subscribers[type] = this.subscribers[type].filter(func => func !== fn)
    }
  }

  publish(type, ...args) {
    // todo publish
    this.subscribers[type] && this.subscribers[type].map(fn => {
      fn.apply(fn, args)
    })
  }

}
