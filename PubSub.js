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
    (this.subscribers[type]=this.subscribers[type] || []).push(fn);
  }

  unsubscribe(type, fn) {
    // todo unsubscribe
   if(!fn) {
     return this.subscribers[type] = [];
   }
   let i = this.subscribers[type].length - 1;
   while(~i) {
    if(fn === this.subscribers[type][i]) {
      this.subscribers[type].splice(i, 1);
      break;
    }
    i--;
   }
  }

  publish(type, ...args) {
    // todo publish
    if(!this.subscribers[type] || !this.subscribers[type].length) {
      return;
    }
    let i = this.subscribers[type].length - 1;
    while(~i) {
      this.subscribers[type][i](...args);
      i--;
    }
  }

}
