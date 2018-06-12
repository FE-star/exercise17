/*
 * @Author: kael
 * @Date: 2018-02-01 17:41:25
 * @Last Modified by: kael
 * @Last Modified time: 2018-02-02 17:39:45
 */

module.exports = class PubSub {

  constructor() {
    /* 数据结构, 需要注意的是在这个例子中每个type下的订阅者subscriber都是一个Function。在实际开中subscriber也可以是一个对象, 但是需要具备处理通知的能力(即需要有一个处理通知的方法例如update), 这样订阅者在收到通知时就可以做响应。
    {
      'type1': [subscriber1, subscriber2, ...],
      'type2': [subscriber1, subscriber2, ...],
      ...
    }
    */
    // 存储所有订阅的type和type下的观察者
    this.subscribers = {};
  }

  // 订阅
  subscribe(type, fn) {
    // todo subscribe
    // 订阅的type不存则初始化该type的订阅者为[], 否则为该type添加一个订阅者fn
    if (!this.subscribers[type]) {
      this.subscribers[type] = [];
    }
    this.subscribers[type].push(fn);
    return this;
  }

  // 退订(订阅的主题)
  unsubscribe(type, fn) {
    // todo unsubscribe
    // 退订订阅的type不存在直接return, 否则移出所有订阅者
    if (!this.subscribers[type]) return;
    this.subscribers[type] = [];
    return this;
  }

  // 发布
  publish(type, ...args) {
    // todo publish
    // 如果发布通知的type不存在则不处理，否则通知到改type主题的所有订阅者, 并做相关处理(带上发布的信息 args 到每个订阅者手中)
    const subscribers = this.subscribers[type];
    if (!subscribers) return;
    for (let i = 0, len = subscribers.length; i < len; i++) {
      subscribers[i](...args); // !!!注意这里的 subscriber是一个function, 因此可以直接执行。如果subscriber是个对象, 则需要调用其对应的方法如: update()。在直接执行时还带上了收到的数据args
    }
    return this;
  }
}