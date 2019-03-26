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
  remove(index) {
    // todo remove observer from list
    this.observerList.splice(index, 1)
  }
  count() {
    // return observer list size
    return this.observerList.length
  }
  get(index) {
    if (index > -1 && index < this.observerList.length) {
      return this.observerList[index]
    }
  }
  indexOf(observer, startIndex) {
    var i = startIndex;
    while (i < this.observerList.length) {
      if (this.observerList[i] === observer) {
        return i
      }
      i++
    }
    return -1
  }
}

class Subject {
  constructor() {
    this.observers = new ObserverList();
  }
  addObserver(observer) {
    // todo add observer
    this.observers.add(observer)
  }
  removeObserver(observer) {
    // todo remove observer
    this.observers.remove(this.observers.indexOf(observer, 0))
  }
  notify(...args) {
    // todo notify
    var observerCount = this.observers.count();
    for (var i = 0; i < observerCount; i++) {
      this.observers.get(i).update(...args)
    }
  }
}

module.exports = { Subject };