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
    const subscribers = this.subscribers;
    // todo subscribe
    // 判断是否有相关类型的订阅者，如果没有则创建
    if(!subscribers[type]) {
      subscribers[type] = [];
    }
    // 增加指定类型的订阅者
    subscribers[type].push(fn);
  }

  unsubscribe(type, fn) {
    // todo unsubscribe
    let index = this.subscribers.indexOf(type);
    this.subscribers.splice(index, 1);
  }

  publish(type, ...args) {
    // todo publish
    // 循环调用该类型订阅者的处理函数
    if (this.subscribers[type]) {
      for (let i = 0, len = this.subscribers[type].length; i < len;i++) {
        this.subscribers[type][i](...args);
      }
    }
  }

}
