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
    if (!type || !fn) return;
    if (!this.subscribers[type]) {
      this.subscribers[type] = []
    }

    this.subscribers[type].push(fn)
  }

  unsubscribe(type, fn) {
    if(!type) return
    const subscribeFns = this.subscribers[type]

    if (!subscribeFns || subscribeFns.length === 0) return
    
    if(!fn) this.subscribers[type] = []
    
    for (let i = 0, len = subscribeFns.length; i < len; i++) {
      if (subscribeFns[i] === fn) {
        subscribeFns.splice(i, 1)
        return
      }
    }
    
  }

  publish(type, ...args) {
    if (!type) return
    const subscribeFns = this.subscribers[type]
    if (!subscribeFns || subscribeFns.length === 0) return
    
    if (subscribeFns.length === 1) return subscribeFns[0](...args)
    
    for (let i = 0, len = subscribeFns.length; i < len; i++) {
      subscribeFns[i](...args)
    }
  }

}
