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
    if(!this.subscribers[type]) this.subscribers[type] = [];
    var id = this.id++;
    this.subscribers[type].push({
      id: id,
      fn: fn
    });
    return this.subscribers;
  }

  unsubscribe(type,fn) {
    var subscribers = this.subscribers;
    for(var k in subscribers) {
      if(k == type) {
        subscribers[k].splice(0);
      }
    }
    return subscribers;
  }

  publish(type, args) {
    var watchers = this.subscribers[type];
    if(!watchers) return false;
    for(var i = 0; i < watchers.length; i++) {
      watchers[i].fn(args);
    }
  }
}
