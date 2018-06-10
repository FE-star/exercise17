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
    return this.observerList.push(observer)
  }
  remove(observer) {
    // todo remove observer from list
    let num = this.observerList.indexOf(observer);
    return this.observerList.splice(num,1);
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
    this.observers.remove(observer)
    
  }
  notify(...args) {
    // todo notify
    let len = this.observers.count();
    for(let i =0; i<len;i++){
      this.observers.observerList[i].update(...args);
    }
  }
}

module.exports = { Subject };