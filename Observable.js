/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: kael
 * @Last Modified time: 2018-02-02 17:38:36
 */

class ObserverList {
  constructor() {
    this.observerList = []
  }
  add(observer) {
    return this.observerList.push(observer)
  }
  remove(observer) {
    for (let i = this.observerList.length - 1; i >= 0; i--) {
      let _observer = this.observerList[i]
      if (_observer === observer) {
        this.observerList.splice(i, 1)
      }
    }
  }
  count() {
    return this.observerList.length
  }
}

class Subject {
  constructor() {
    this.observers = new ObserverList()
  }
  addObserver(observer) {
    this.observers.add(observer)
  }
  removeObserver(observer) {
    this.observers.remove(observer)
  }
  notify(...args) {
    this.observers.observerList.map(item => {
      item.update(...args)
    })
  }
}

module.exports = { Subject }
