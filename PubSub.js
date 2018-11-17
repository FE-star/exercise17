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
    !this.subscribers[type] && (this.subscribers[type] = []);
    this.subscribers[type].push(fn);
  }

  unsubscribe(type, fn) {
    // todo unsubscribe
    const fnArr = this.subscribers[type];
    if (!fnArr.length) {
      return false;
    }

    !fn && (fnArr.length = 0);

    const ind = fnArr.indexOf(fn);

    if (ind !== -1) {
      fnArr.splice(ind, 1);
    }
  }

  publish(type, ...args) {
    // todo publish
    const listeners = this.subscribers[type] || [];
    listeners.forEach(lis => lis.apply(this, args));
  }
};
