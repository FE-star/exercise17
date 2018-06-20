/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: weie
 * @Last Modified time: 2018-06-20 15:39:45
 */

module.exports = class PubSub {

  constructor() {
    this.subscribers = {};
  }

  subscribe(type, fn) {
    // todo subscribe
    if(!this.subscribers[type]){
      this.subscribers[type] = []
    }
    this.subscribers[type].push(fn)
  }

  unsubscribe(type, fn) {
    // todo unsubscribe
    if(!!this.subscribers[type]){
      this.subscribers[type].splice(this.subscribers[type].findIndex(item => item === fn),1)
    }
  }

  publish(type, ...args) {
    // todo publish
    if(!!this.subscribers[type]){
      this.subscribers[type].map(ob => ob(...args))
    }
  }

}
