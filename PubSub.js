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
    if(typeof this.subscribers[type] === 'undefined') {
      this.subscribers[type] = [fn];
    } else {
      this.subscribers[type].push(fn);
    }
  }

  unsubscribe(type, fn) {
    // todo unsubscribe
    let listener = this.subscribers[type];
    if(!listener) {
      return;
    }
    this.subscribers[type] = listener.filter(item => item != fn);

  }

  publish(type, ...args) {
    // todo publish
    let listener = this.subscribers[type];
    if(!listener) {
      return;
    }
    listener.forEach(element => {
      element.call(this, ...args);
    });
  }

}
