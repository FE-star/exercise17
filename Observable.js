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
    this.observerList.push(observer);
    // todo add observer to list
  }
  remove(observer) {
    this.observerList = this.observerList.filter(item => item != observer);
    // todo remove observer from list
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
    this.observers.add(observer);
    // todo add observer
  }
  removeObserver(observer) {
    // todo remove observer
    this.observers.remove(observer);
  }
  notify(...args) {
    this.observers.observerList.map(item => {
      args.map(val => item.update(val));
    })
    // todo notify
  }
}

module.exports = { Subject };