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
    this.observerList.push(observer)
  }
  remove(observer) {
    const index = this.observerList.indexOf(observer);
    if (index === -1) {
      return;
    }

    this.observerList.splice(index, 1);
  }
  count() {
    return this.observerList.length;
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
    for (const ob of this.observers.observerList) {
      ob.update && ob.update(...args)
    }
  }
}

module.exports = { Subject };