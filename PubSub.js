/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-06-10 13:11:16
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
    let fns = this.subscribers[type]
    if (!fns) {
      return false
    }
    if (!fn) {
      fns && (fns.length = 0)
    } else {
      for (let i = fns.length - 1; i >= 0; i--) {
        let _fn = fns[i]
        if (_fn === fn) {
          fns.splice(i, 1)
        }
      }
    }
  }

  publish(type, ...args) {
    let fns = this.subscribers[type]
    if (!fns || fns.length === 0) {
      return false
    }
    for (let i =0; i < fns.length; i++) {
      fns[i](...args)
    }
  }

}
