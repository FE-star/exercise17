/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: yingrui zhang
 * @Last Modified time: 2018-06-16 13:12:49
 */

class ObserverList {
  constructor() {
    this.observerList = [];
  }
  add(observer) {
    this.observerList.push(observer)
  }
  remove(observer) {
    this.observerList.splice(this.observerList.indexOf(observer), 1)
  }
  count() {
    return this.observerList.length
  }
}

class Subject {
  constructor() {
    this.observers = new ObserverList();
  }
  addObserver(observer) {
    this.observers.add(observer);
  }
  removeObserver(observer) {
    this.observers.remove(observer);
  }
  notify(...args) {
    for (let i = 0; i < this.observers.count(); i++) {
      this.observers.observerList[i].update(...args)
    }
  }
}

module.exports = { Subject };