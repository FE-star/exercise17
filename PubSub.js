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
    (this.subscribers[type] = this.subscribers[type] || [])
    .push(fn);
  }

  unsubscribe(type, fn) {
    const fns = this.subscribers[type];
    if (fns) {
      for (var i = 0, j = fns.length; i < j; i++) {　
        if (fns[i] == fn) {　　　　　
          fns.splice(i, 1);　　　
          break;　　　
        }　　　
      }
    }
  }

  publish(type, ...args) {
    (this.subscribers[type] || [])
    .forEach((fn) => {
      fn.apply(this, args)
    });
  }
}
