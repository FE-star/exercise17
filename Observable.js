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
    const index = this.observerList.indexOf(observer);
    if (index !== -1) {
      this.observerList.splice(index, 1);
    }
  }
  count() {
    // return observer list size
    return this.observerList.length
  }
  get(index){
    if( index > -1 && index < this.observerList.length ){
      return this.observerList[ index ];
    }
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
    if(this.observers.count() > 0) {
      const length = this.observers.count();
      for (let i = 0; i < length; i++) {
      this.observers.get(i).update(...args);
    }
    }
  }
}

module.exports = { Subject };