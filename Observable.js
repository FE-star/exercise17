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
    return this.observerList.push(observer)
  }
  get(index) {
      if(index > -1 && index < this.observerList.length){
          return this.observerList[index]
      }
  }
  remove(observer) {
      this.observerList = this.observerList.filter((item) => {
          return item !== observer
      })
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
    // todo add observer
    this.observers.add(observer)
  }
  removeObserver(observer) {
    // todo remove observer
    this.observers.remove(observer)
  }
  notify(...args) {
    // todo notify
    var count = this.observers.count()
    for (var i = 0; i < count; i++) {
        this.observers.get(i).update(...args)
    }
  }
}

module.exports = { Subject };
