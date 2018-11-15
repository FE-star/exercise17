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
    return this.observerList = this.observerList.filter(item => item !== observer);
    
  }
  getObserverByIndex(i) {
    return this.observerList[i]
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
    return this.observers.add(observer);
  }
  removeObserver(observer) {
    return this.observers.remove(observer);
  }
  notify(...args) {
    let count = this.observers.count();
    for (let i = 0; i < count; i++) {
      this.observers.getObserverByIndex(i).update(...args)
    }
  }
}

module.exports = { Subject };