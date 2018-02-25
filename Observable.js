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
    for (var i = 0; i < this.observerList.length; i++) {
      if (this.observerList[i] === observer) {
        this.observerList.splice(i, 1);
      }
    }
  }
  count() {
    return this.observerList.length;
    // return observer list size
  }
}

//  发布者
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
    // todo notify
    this.observers.observerList.forEach((item, index) => {
      this.observers.observerList[index].update(...args);
    });
  }
}

module.exports = { Subject };