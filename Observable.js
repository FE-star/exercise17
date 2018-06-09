/*
 * @Author: zChange 
 * @Date: 2018-06-09  
 * @Last Modified by: zChange
 * @Last Modified time: 2018-06-09
 */

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
    this.observerList.splice(this.observerList.findIndex(item => item === observer), 1)
  }
  count() {
    // return observer list size
    return this.observerList.length;
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
    this.observers.observerList.map(item  => item.update(...args))
  }
}

module.exports = { Subject };