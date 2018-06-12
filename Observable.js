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
    return this.observerList.push(observer);
  }
  remove(observer) {
    // todo remove observer from list
    if (observer && observer.indexOf(this.observerList) > -1) {
      return this.observerList.splice(observer.indexOf(this.observerList), 1);
    }
    return this.observerList;
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
    this.observers.remove(observer);
  }
  notify(...args) {
    // todo notify
    var count = this.observers.count();
    for (let i = 0; i < count; i++) {
      this.observers.get(i).update( context );
    }
  }
}

module.exports = { Subject };