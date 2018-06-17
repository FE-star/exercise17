/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: flcwl
 * @Last Modified time: 2018-06-17 13:36:05
 */

module.exports = class PubSub {

  constructor() {
    this.subscribers = {};
  }

  subscribe(type, fn) {
    // todo subscribe
    switch (type) {
      case 'add': 
        this.subscribers.add = fn;
        break;
    }
  }

  unsubscribe(type, fn) {
    // todo unsubscribe
    switch (type) {
      case 'add': 
        this.subscribers.add = null;
        break;
    }
  }

  publish(type, ...args) {
    // todo publish
    switch (type) {
      case 'add': 
        if (this.subscribers.add) {
          return this.subscribers.add(...args);
        }
        break;
    }
  }

}
