/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: kael
 * @Last Modified time: 2018-02-02 17:39:45
 */
// 发布
module.exports = class PubSub {

  constructor() {
    this.subscribers = {};
  }

  // 订阅
  subscribe(type, fn) {
    // todo subscribe
    this.subscribers[type] = fn
  }

  unsubscribe(type, fn) {
    // todo unsubscribe
    this.subscribers[type] = () => console.log(`unsubscirbe ${type}`)
  }

  // 出版 发布
  publish(type, ...args) {
    // todo publish
    if (this.subscribers[type]) {
      this.subscribers[type](...args)
    }
  }

}