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
    if (typeof this.subscribers[type] === 'undefined') {
      this.subscribers[type] = []
    }
    this.subscribers[type].push(fn)
  }

  unsubscribe(type, fn) {
    // todo unsubscribe
    this.obsubscribe('unsubscribe', fn, type)
  }

  publish(type, ...args) {
    // todo publish
    this.obsubscribe('publish', ...args, type)
  }
  obsubscribe(action, args, type) {
    this.subscribers[type].forEach((ele, index) => {
      if (action === 'publish') {
        ele(args)
      } else if (action === 'unsubscribe') {
        if (ele === args) {
          this.subscribers[type].splice(index, 1)
        }
      }
    })
  }
}
