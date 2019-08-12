/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: kael
 * @Last Modified time: 2018-02-02 17:39:45
 */

module.exports = class PubSub {

  constructor() {
    this.subscribers = {};
    this.id = 0;
  }

  subscribe(type, fn) {
    if (!this.subscribe[type]) this.subscribe[type] = [];

    this.subscribe[type].push({
      token: this.id,
      func: fn,
    });

    this.id += 1;

    return this.id;
  }

  unsubscribe(type, fn) {
    let subscribe = this.subscribe[type];

    if (!subscribe) return false;

    const len = subscribe.length;

    subscribe.forEach((item, index) => {
      if (item.func === fn) subscribe.splice(index, 1);
    });

    return this;
  }

  publish(type, ...args) {
    const subscribe = this.subscribe[type];

    if (!subscribe) return false;

    subscribe.forEach((item) => {
      item.func(args[0]);
    });

    return this;
  }

}
