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
  }
  remove(observer) {
    // todo remove observer 
    from list
  }
  count() {
    // return observer list size
  }
}

class Subject {
  constructor() {
    this.observers = new ObserverList();
  }
  addObserver(observer) {
    // todo add observer
  }
  removeObserver(observer) {
    // todo remove observer
  }
  notify(...args) {
    // todo notify
  }
}

module.exports = { Subject };