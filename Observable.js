/*
 * @Author: kael
 * @Date: 2018-02-01 17:41:25
 * @Last Modified by: kael
 * @Last Modified time: 2018-02-02 17:38:36
 */
// 观察者模式
class ObserverList {
  constructor() {
    this.observerList = [];
  }
  add(observer) {
    // todo add observer to list
    this.observerList.push(observer)
  }
  remove(observer) {
    // todo remove observer from list
    this.observerList.splice(this.observerList.indexOf(observer), 1)
  }
  count() {
    // return observer list size
    return this.observerList.length
  }

  getObserverList () {
    return this.observerList
  }
}

class Subject {
  constructor() {
    this.observers = new ObserverList();
  }
  addObserver(observer) {
    // todo add observer
      this.observers.add(observer)
  }
  removeObserver(observer) {
    // todo remove observer
    this.observers.remove(observer)
  }
  notify(...args) {
    // todo notify
    this.observers.getObserverList().forEach((observer) => {
      observer.update(args[0])
    })
  }
}

module.exports = { Subject };
