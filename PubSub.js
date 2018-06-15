/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: kael
 * @Last Modified time: 2018-02-02 17:39:45
 */
//
module.exports = class PubSub {

  constructor() {
    this.subscribers = {};
  }

  subscribe(type, fn) {
    // todo subscribe
      this.subscribers[type] = this.subscribers[type] || [];
      this.subscribers[type].push(fn);
      return this;

  }

  unsubscribe(type, fn) {
    // todo unsubscribe
      if(!this.subscribers[type]){
          return false;
      }
      this.subscribers[type].splice(this.subscribers[type].indexOf(fn), 1);

  }

  publish(type, ...args) {
    // todo publish
        if(this.subscribers[type]){
            this.subscribers[type].forEach(subscribe=>subscribe(...args))
        }
        return this;

  }

}
