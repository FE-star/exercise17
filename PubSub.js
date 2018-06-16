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
    if (!this.subscribers[type]) {
      this.subscribers[type] = []
    }
    this.subscribers[type].push(fn)
  }

  unsubscribe(type, fn) {
    var fns = this.subscribers[type];
    if (!fns) return false;
    if (!fn) {
      fns && (fns.length = 0)
    } else {
      for (var i = fns.length - 1; i >= 0; i--) {
        var _fn = fns[i];
        if (_fn === fn) {
          fns.splice(i, 1)
        }
      }
    }
  }

  publish(type, ...args) {
    var fns = this.subscribers[type]
    if (!fns || fns.length === 0) return false;
    for (var i = 0, fn;fn = fns[i++];) {
      fn.apply(this, args)
    }
  }

}
