/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: flcwl
 * @Last Modified time: 2018-06-17 22:05:43
 */

module.exports = class PubSub {

  constructor() {
    this.subscribers = {};
  }

  subscribe(type, fn) {
    // todo subscribe
    if (!this.subscribers[type]) {
      this.subscribers[type] = [];
    }
    this.subscribers[type].push(fn);
  }

  unsubscribe(type, fn) {
    // todo unsubscribe
    if (!this.subscribers[type]){
      return;
    }
    this.subscribers[type] = this.subscribers[type].filter(item => {
      item !== fn;
    }); // 移除该监听
  }

  publish(type, ...args) {
    // todo publish
    if (!this.subscribers[type]) {
      return;
    }
    this.subscribers[type].forEach(fnItem => {
      fnItem(...args);
    });
  }

}
