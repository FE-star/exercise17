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
    // todo add observer to list
  }
  remove(observer) {
    this.observerList.pop()
    // todo remove observer from list
  }
  count() {
    return this.observerList.length
    // return observer list size
  }
}

class Subject {
  constructor() {
    this.observers = new ObserverList();
  }
  addObserver(observer) {
    console.log(this.observers);
    this.observers.add(observer)
    // todo add observer
  }
  removeObserver(observer) {
    this.observers.remove(observer)
    // todo remove observer
  }
  notify(...args) {
    if (this.observers.observerList.length>0)
    this.observers.observerList[0].update(args)
    // todo notify
  }
}

module.exports = { Subject };