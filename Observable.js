/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: kael
 * @Last Modified time: 2018-02-02 17:38:36
 */
let helper = require('./helper');
class ObserverList {
  constructor() {
    this.observerList = [];
  }
  add(observer) {
    // todo add observer to list
    if (!this.observerList || !helper.isArray(this.observerList)) {
      this.observerList = [];
    }
    this.observerList.push(observer);
  }
  remove(observer) {
    // todo remove observer from list
    // 如果当前没有观察者，或者this.observerList不是array，那么不做任何处理
    if (!this.observerList || !helper.isArray(this.observerList) || this.observerList.length === 0) {
      return;
    }
    let index = this.observerList.indexOf(observer);
    index != -1 && this.observerList.splice(index, 1);
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
    this.observers.add(observer);
  }
  removeObserver(observer) {
    // todo remove observer
    this.observers.remove(observer);
  }
  notify(...args) {
    // todo notify
    this.observers.observerList.forEach(observer => observer.update(...args));
  }
}

module.exports = { Subject };