/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: catcuts
 * @Last Modified time: 2018-06-10 07:34:07
 */

module.exports = class PubSub {

  constructor() {
    this.subscribers = {};
  }

  subscribe(type, fn) {
    // todo subscribe
    if (!this.subscribers[type]) {
      this.subscribers[type] = [fn];
    } else {
      this.subscribers[type].push(fn);
    }
  }

  unsubscribe(type, fn) {
    // todo unsubscribe
    var fns = this.subscribers[type];
    var fn_index = fns.indexOf(fn);
    if (fn_index !== -1) {
      fns.splice(fn_index, 1);
    }
  }

  publish(type, ...args) {
    // todo publish
    var fns = this.subscribers[type];
    for (let i = 0; i < fns.length; i++) {
      fns[i](...args);
    }
  }

}
