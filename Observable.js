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
  remove(observer) {
    // todo remove observer from list
    var index =-1;
    for(i=0;i<this.ObserverList.length;i++){
      if(this.observerList[i] == observer) {
        index=i;
      }
    }
    if(index>-1) {
      this.observerList.sersplice(index,1);
    }

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
    this.observers.remove(observer);
  }
  notify(...args) {
    // todo notify
    console.log(...args);
    var observerCount = this.observers.count();
    for(var i=0;i<observerCount;i++) {
      this.observers[i].update(...args);
    }
  }
}

module.exports = { Subject };