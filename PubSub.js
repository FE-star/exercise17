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
      this.subscribers[type]=[];
    }
    this.subscribers[type].push(fn);
  }

  unsubscribe(type, fn) {
    if(this.subscribers[type]==fn){
      delete this.subscribers[type]
    }
    // todo unsubscribe
  }

  publish(type, ...args) {
    // todo publish
       this.subscribers[type].forEach(fn => {
         fn(...args);
       });
    }
  

}
