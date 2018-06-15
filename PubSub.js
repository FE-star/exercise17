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

    this.subscribers[type].push(fn);
    return this;

  }

  unsubscribe(type, fn) {
    // todo unsubscribe
    this.subscribers[type] = [];
    return this;
  }

  publish(type, ...args) {
    // todo publish
    if (!this.subscribers[type] || this.subscribers[type].length === 0){
      return false;
    }
    
    var fns = this.subscribers[type];
    for (var i = 0; i < fns.length; i++) {
      fns[i].apply(type, args);
    }
    
    return this;

  }

}
