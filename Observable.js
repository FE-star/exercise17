/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: kael
 * @Last Modified time: 2018-02-02 17:38:36
 */

class ObserverList {
  constructor() {
    this.observerList = [];
  }
  add(observer) {
    return this.observerList.push(observer);
  }
  remove(observer) {
    let observerIndex = this.observerList.indexOf(observer);
    return this.observerList.splice(observerIndex, 1);
  }
  count() {
    return this.observerList.length;
  }
  getObserverList() {
    return this.observerList;
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
    let observerList = this.observers.getObserverList();
    for (let observer of observerList) {
      observer.update(...args);
    }
  }
}

module.exports = { Subject };
