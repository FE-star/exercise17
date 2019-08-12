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
  }
  remove(index) {
    this.observerList.splice(index, 1);
  }
  count() {
    return this.observerList.length;
  }
  get(index) {
    return this.observerList[index];
  }
  indexOf(observer) {
    let index = -1;

    this.observerList.forEach((item, curIndex) => {
      if (item === observer) {
        index = curIndex;
      }
    });

    return index;
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
    const index = this.observers.indexOf(observer);

    this.observers.remove(index);
  }
  notify(...args) {
    const len = this.observers.count();

    for (let index = 0; index < len; index++) {
      const observer = this.observers.get(index);
      
      observer.update(...args);
    }
  }
}

module.exports = { Subject };