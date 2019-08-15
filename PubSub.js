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
    this.subscribers[type] = this.subscribers[type] || []
    // 增加监听事件
    this.subscribers[type].push(fn)
  }

  unsubscribe(type, fn) {
    // todo unsubscribe
    // 未监听该事件
    let ary = this.subscribers[type]
    if (!ary) {
      return '未监听该类型的事件'
    }
    // 解除该监听事件
    let inx = ary.indexOf(fn)
    if (inx > -1) {
      ary.splice(inx, 1)
      return true
    } else {
      return '该类型上没有该事件'
    }
  }

  publish(type, ...args) {
    // todo publish
    let ary = this.subscribers[type]
    if (!ary) {
      return
    }
    // 触发该订阅事件
    ary.forEach(fn => {
      fn(...args)
    })
  }

}
