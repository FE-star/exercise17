/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: zelda.zhangze
 * @Last Modified time: 2018-06-10 21:44:42
 */

class ObserverList {
  constructor() {
    this.observerList = [];
  }
  add(observer) {
    // todo add observer to list
    this.observerList.push(observer);
  }
  count() {
    // return observer list size
    return this.observerList.length;
  }
  get(index) {
    if (index > -1 && index < this.count()) {
      return this.observerList[i];
    }
  }
  indexOf(observer, startIndex) {
    // 数组本身也支持indexOf
    var i = startIndex;
    while (i < this.count()) {
      if (this.get(i) === observer) {
        return i;
      }
      i++;
    }
    return -1;
  }
  remove(observer) {
    // todo remove observer from list
    this.observerList.splice(this.indexOf(observer), 1);
  }
  removeAt(index) {
    this.observerList.splice(index, 1);
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
    let count = this.observers.count();
    for (var i = 0; i < count; i++) {
      this.observers.observerList[i].update(...args);
    }
  }
}

module.exports = { Subject };