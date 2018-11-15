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
    this.subscribers[type] = this.subscribers[type] || []
    this.subscribers[type]['callback'] = this.subscribers[type]['callback'] || []
    this.subscribers[type]['data'] = this.subscribers[type]['data'] || []
    if (fn) {
      this.subscribers[type]['callback'].push(fn)
    }
    for (let index = 0; index < this.subscribers[type]['callback'].length; index++) {
      for (let j = 0; j < this.subscribers[type]['data'].length; j++) {
        const element = array[j];
        this.subscribers[type]['callback'][index](element)
      }
    }  
    this.subscribers[type]['data'] = []
  }

  unsubscribe(type, fn) {
    this.subscribers[type] = this.subscribers[type] || []
    this.subscribers[type]['callback'] = this.subscribers[type]['callback'] || []
    this.subscribers[type]['data'] = this.subscribers[type]['data'] || []
    for (let index = 0; index < this.subscribers[type]['callback'].length; index++) {
      if (this.subscribers[type]['callback'][index] == fn) {
        this.subscribers[type]['callback'].splice(index, 1)
      }
    }  
    // todo unsubscribe
  }

  publish(type, ...args) {
    this.subscribers[type] = this.subscribers[type] || []
    this.subscribers[type]['data'] = this.subscribers[type]['data'] || []
    args.forEach(e => {
      this.subscribers[type]['data'].push(e)
    })
    for (let index = 0; index < this.subscribers[type]['callback'].length; index++) {
      for (let j = 0; j < this.subscribers[type]['data'].length; j++) {
        const element = this.subscribers[type]['data'][j];
        this.subscribers[type]['callback'][index](element)
      }
    }
    this.subscribers[type]['data'] = []
    // todo publish
  }

}
