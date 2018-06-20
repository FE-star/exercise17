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
    observer && this.observerList.push(observer);
  }
  remove(observer) {
    let index = this.observerList.indexOf(observer);
    this.observerList.splice(index, 1);
    // todo remove observer from list
  }
  indexOf(observer) {
    if (observer && Array.isArray(observer)) {
      this.observerList.forEach((item, index) => {
        if (item == observer) {
          return index;
        }
      })
    }
    return -1;
  }
  count() {
    return this.observerList.length;
    // return observer list size
  }
  get (index) {
    return this.observerList[index];
  }
}

class Subject {
  constructor() {
    this.observers = new ObserverList();
  }
  addObserver(observer) {
    this.observers.add(observer);
  }
  removeObserver(observer) {
    // todo remove observer
    this.observers.remove(observer)
  }
  notify(...args) {
    // todo notify
    let count = this.observers.count(), i = -1;
    while(++i < count){
      this.observers.get(i).update(...args);
    }
  }
}

module.exports = { Subject };