/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-11-14 17:35:43
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
    const index = this.observerList.findIndex(o => o === observer);
    if (index > -1) {
      this.observerList.splice(index ,1);
    }
  }
  get(index) {
    if( index > -1 && index < this.observerList.length){
      return this.observerList[ index ];
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
    var observerCount = this.observers.count();
    for(let i=0; i < observerCount; i++){
      this.observers.get(i).update(...args);
    }
  }
}

module.exports = { Subject };