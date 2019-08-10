/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: mt
 * @Last Modified time: 2019-08-10 23:29:08
 */

class ObserverList {
  constructor() {
    this.observerList = [];
  }
  add(observer) {
    this.observerList.push(observer);
  }
  remove(observer) {
    const index = this.observerList.indexOf(observer);
    if (index !== -1) {
      this.observerList.splice(index, 1);
    }
  }
  count() {
    return this.observerList.length;
  }
  iterate(cb) {
    this.observerList.forEach(cb);
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
    this.observers.iterate(function (observer) {
      observer.update(...args);
    });
  }
}

module.exports = { Subject };