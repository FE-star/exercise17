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
    let temp = this.observerList.indexOf(observer)
    if(temp!=-1){
      this.observerList.splice(temp,1)
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
    this.observers.add(observer)
    // todo add observer
  }
  removeObserver(observer) {
    this.observers.remove(observer)
    // todo remove observer
  }
  notify(...args) {
    for(let i=0;i<this.observers.count();i++){
      this.observers.observerList[i].update(...args);
    }
    // todo notify
  }
}

module.exports = { Subject };