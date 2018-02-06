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
    var len = this.observerList.length;
    for(var i = 0; i < len; i++) {
      if(this.observerList[i] === observer) {
        this.observerList.splice(i, 1);
      }
    }
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
    var len = this.observers.count();
    for(var i = 0; i < len; i++) {
      this.observers.observerList[i].update(...args);
    }
  }
}

module.exports = { Subject };