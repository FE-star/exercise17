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
    this.observerList.push(observer)
  }
  remove(observer) {
    // todo remove observer from list
    var idx = 0;
    while(idx < this.observerList.length) {
      if (this.observerList[idx] === observer) {
        this.observerList.splice(idx, 1);
        continue;
      }
      ++ idx;
    }
  }
  count() {
    return this.observerList.length
  }
}

class Subject {
  constructor() {
    this.observers = new ObserverList();
  }
  addObserver(observer) {
    this.observers.add(observer)
  }
  removeObserver(observer) {
    this.observers.remove(observer)
  }
  notify(...args) {
    this.observers.observerList.forEach(item => {
      item.update(...args)
    })
  }
}

module.exports = { Subject };