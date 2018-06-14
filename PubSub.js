/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-06-14 15:13:44
 */

module.exports = class PubSub {
  constructor() {
    this.subscribers = {}; // 相当于调度中心
  }
  // 订阅
  subscribe(type, fn) {
    // todo subscribe
    if (!this.subscribers[type]) {
      this.subscribers[type] = []; // 如果没有该方法,就先注册
    }

    this.subscribers[type].push(fn);
  }
  // 退订
  unsubscribe(type, fn) {
    // todo unsubscribe
    if (!this.subscribers[type] || !this.subscribers[type].length) {
      // 没有该订阅者
      return;
    }
    const index = this.indexOf(type, fn);
    if (index >= 0) {
      // 移除订阅者
      this.subscribers[type].splice(index, 1);
    }
  }
  /**
   * 获取该订阅者在数组中的位置
   * @param {*} type 
   * @param {*} fn 
   */
  indexOf(type, fn) {
    let index = -1;
    this.subscribers[type].forEach((item, itemIndex) => {
      if (fn == item) {
        index = itemIndex
      }
    });
    return index;
  }
  // 发布
  publish(type, ...args) {
    // todo publish
    if (!this.subscribers[type] || !this.subscribers[type].length) {
      // 不存在这个订阅者, 发布失败
      return false;
    }

    // 存在该订阅者, 发布信息
    const array = this.subscribers[type];
    array.forEach(fn => {
      fn(...args);
    });

    return this;
  }
};