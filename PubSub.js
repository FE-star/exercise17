/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: kael
 * @Last Modified time: 2018-02-02 17:39:45
 */

module.exports = class PubSub {
  constructor() {
    this.subscribers = {}
  }

  subscribe(type, fn) {
    if (!this.subscribers[type]) {
      this.subscribers[type] = []
    }
    this.subscribers[type].push(fn)
  }

  unsubscribe(type, fn) {
    let list = this.subscribers[type]
    if (!list) return false
    if (!fn) {
      list && (list.length = 0)
    } else {
      for (let i = list.length - 1; i >= 0; i--) {
        let _fn = list[i]
        if (_fn === fn) {
          list.splice(i, 1)
        }
      }
    }
  }

  publish(type, ...args) {
    let list = this.subscribers[type]
    if (!list || list.length === 0) return false
    for (let i = 0, fn; (fn = list[i++]); ) {
      fn.apply(this, args)
    }
  }
}
