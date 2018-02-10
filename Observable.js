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
    var index = this.observerList.indexOf(observer)
    if (index === -1) {
      this.observerList.push(observer)
    }
  }
  remove(observer) {
    var index = this.observerList.indexOf(observer)
    if (index >= 0) {
      this.observerList.splice(index, 1)
    } else {
      return false
    }
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
    this.observers.add(observer)
  }
  removeObserver(observer) {
    this.observers.remove(observer)
  }
  notify(...args) {
    var list = this.observers.observerList
    for (var i = 0; i < list.length; i++) {
      list[i].update(...args)
    }
  }
}

module.exports = { Subject };
