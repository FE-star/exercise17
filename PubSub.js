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
    if (this.subscribers[type] === undefined) {
      this.subscribers[type] = [fn];
    } else {
      this.subscribers[type].push(fn);
    }

  }

  unsubscribe(type, fn) {
    // todo unsubscribe
    if (this.subscribers[type] === undefined) {
      return false;
    } else {
      let queue = this.subscribers[type];
      let index = 0;
      queue.forEach(element => {
        if(element === fn){
          queue.splice(index, 1)
        }
        index++;
      });
    }
  }

  publish(type, ...args) {
    // todo publish
    if (this.subscribers[type] === undefined) {
      return false;
    } else {
      let queue = this.subscribers[type];
      queue.forEach(element => {
        element.apply(this, args)
      });
    }
  }

}
