/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: kael
 * @Last Modified time: 2018-02-02 17:39:45
 */

module.exports = class PubSub {

  constructor() {
    this.subscribers = {};
    this.subId = -1;
  }

  subscribe(type, fn) {
    // todo subscribe
    if(!this.subscribers[type]) {
      this.subscribers[type] = [];
    }
    this.subscribers[type].push({
      type: type,
      fn: fn
    })
    return type;
  }

  unsubscribe(type, fn) {
    // todo unsubscribe
    for(let i = 0, len = this.subscribers[type].length; i < len; i++) {
      if(this.subscribers[type][i].fn === fn) {
        this.subscribers[type].splice(i, 1);
        return type;
      }
    }
    return this;
  }

  publish(type, ...args) {
    // todo publish
    let types = this.subscribers[type],
        len = types.length;
    if(!types) return false;
    while(len--) {
      types[len].fn(args[0])
    }
    return this;
  }

}
