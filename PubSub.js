/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: kael
 * @Last Modified time: 2018-02-02 17:39:45
 */

module.exports = class PubSub {

  constructor() {
    //  储存需要订阅和发布的事件对象，调度中心
    this.subscribers = {};
  }

  /**
   *  订阅事件
   * @param {*} type 订阅事件的名称
   * @param {*} fn 回调函数
   */
  subscribe(type, fn) {
    //  如果第一次订阅
    if (!this.subscribers[type]) {
      this.subscribers[type] = [];
    }
    this.subscribers[type].push(fn);
    return this;
    // todo subscribe
  }
  //  取消订阅
  unsubscribe(type, fn) {
    if (!this.subscribers[type]) {
      return false;
    }
    delete this.subscribers[type];
    // todo unsubscribe
  }
  //  发布事件
  publish(type, ...args) {
    if (!this.subscribers[type]) {
      return false;
    }
    this.subscribers[type].forEach((item, index) => {
      this.subscribers[type][index](...args);
    });
  }

}
