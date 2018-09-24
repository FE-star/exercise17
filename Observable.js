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
    // todo add observer to list
    this.observerList.push(observer);
  }
  remove(observer) {
    // todo remove observer from list
    for (let i = 0; i < this.observerList.length; i++) {
      if (observer === this.observerList[i]) {
        this.observerList.splice(i, 1);
      }
    }
  }
  count() {
    // return observer list size
    return this.observerList.length;
  }
  get(index) {
    return this.observerList[index];
  }
}

class Subject {
  constructor() {
    this.observers = new ObserverList();
  }
  addObserver(observer) {
    // todo add observer
    this.observers.add(observer);
  }
  removeObserver(observer) {
    // todo remove observer
    return this.observers.remove(observer);
  }
  notify(...args) {
    // todo notify
    for (let i = 0, len = this.observers.count(); i < len; i++) {
      this.observers.get(i).update(...args);
    }
  }
}

module.exports = { Subject };