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
  remove(observer) {
    const count = this.count();
    let i = 0;
    while (i < count) {
      if (this.observerList[i] === observer) {
        this.observerList.splice(i, 1);
        break;
      }
      i++;
    }
  }
  count() {
    return this.observerList.length;
  }
  get(index) {
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
    this.observers.remove(observer);
  }
  notify(...args) {
    const count = this.observers.count();
    let i = 0;
    while (i < count) {
      this.observers.get(i).update(...args);
      i++;
    }
  }
}

module.exports = {
  Subject
};
