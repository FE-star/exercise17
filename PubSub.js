/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: kael
 * @Last Modified time: 2018-02-02 17:39:45
 */

module.exports = class PubSub {

  constructor() {
    this.subscribers = {};
    this.count = 0;
  }

  subscribe(type, fn) {
    // todo subscribe
    if (!this.subscribers[type]) {
      this.subscribers[type] = []
    }
    this.subscribers[type].push({
      index: this.count.toString(),
      callback: fn,
    })
    console.log(this.subscribers)
    return this.count++
  }

  unsubscribe(type, fn) {
    // todo unsubscribe
    return ((callback) => {
      delete this.subscribers[type]
      callback()
    })(fn)
  }

  publish(type, ...args) {
    // todo publish
    if (this.subscribers[type]) {
      let subscriber = this.subscribers[type];
      for (let i = 0; i < subscriber.length; i++) {
        subscriber[i].callback(...args) // TOTHINK
      }
      return this // TOTHINK
    }
    return false
  }

}
