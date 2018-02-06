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
    if (this.subscribers[type]) {
      let idx = 0, typeHandlers = this.subscribers[type];

      while (idx < typeHandlers.length) {
        if (typeHandlers[idx] === fn) return;
        ++ idx;
      }

      this.subscribers[type].push(fn);
      return;
    }
    this.subscribers[type] = [fn];
    
  }

  unsubscribe(type, fn) {
    let idx = 0;
    let typeHandlers = this.subscribers[type] || [];
    while (idx < typeHandlers.length) {
      if (typeHandlers[idx] === fn) return typeHandlers.splice(idx, 1);
      ++ idx;
    }
  }

  publish(type, ...args) {
    let typeHandlers = this.subscribers[type] || [];
    typeHandlers.forEach(handler => {
      handler.apply(this, args);
    });
  }

}
