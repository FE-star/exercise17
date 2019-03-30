/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: kael
 * @Last Modified time: 2018-02-02 17:38:36
 */

//观察者模式
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
    for (const i in this.observerList) {
      if (this.observerList[i] == observer) {
        this.observerList.splice(i, 1)
      }
    }
  }
  count() {
    // return observer list size
    return this.observerList.length
  }
}

//目标
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
    for (const observer of this.observers.observerList) {
      observer.update(...args)
    }
  }
}

module.exports = {
  Subject
};