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
    this.observerList.push(observer);
  }
  get(index) {
    if(index > -1 && index < this.observerList.length){
      return this.observerList[index];
    }
  }
  remove(observer) {
    // todo remove observer from list
    var observerListLen = this.observerList.length;
    for(var i = 0;i < observerListLen;i++){
      if(this.observerList[i] === observer){
        this.observerList.splice(i,1);
      }
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
    var obseversCount = this.observers.count();
    for(var i = 0; i< obseversCount;i++){
      for(var arg of args) {
        this.observers.get(i).update(arg);
      }
    }
  }
}

module.exports = { Subject };