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
    for (let index = 0; index < this.observerList.length; index++) {
      const element = this.observerList[index];
      if (element == observer) {
        this.observerList.splice(index, 1)
      }
    }
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
    // todo add observer
    console.log(observer);
    this.observers.add(observer)
  }
  removeObserver(observer) {
    this.observers.remove(observer)
    // todo remove observer
  }
  notify(...args) {
    // todo notify
    this.observers.observerList.forEach(e => {
      e.update.call(e, ...args)
    })
  }
}

module.exports = { Subject };