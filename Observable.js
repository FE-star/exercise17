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
    if(this.observerList.indexOf(observer) > -1){
      return false;
    }
    this.observerList.push(observer);
  }
  remove(observer) {
    // todo remove observer from list
    let i = this.observerList.indexOf(observer);
    if(i>-1){
      this.observerList.splice(i, 1);
    }else{
      return false
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
    var observerCount = this.observers.count();
    for(let i=0;i<observerCount; i++){
      this.observers.observerList[i].update(...args)
    }
  }
}

module.exports = { Subject };