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
  remove(observer) {
    // todo remove observer from list
    if(!observer){
      return;
    }
    for(let i=0;i<this.observerList.length;i++){
      let item = this.observerList[i]
      if(item === observer){
        this.observerList.splice(i, 1); //删除对于的订阅
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
    if(this.observers.count() === 0){
      return;
    }
    for(let i=0;i<this.observers.count();i++){
      this.observers.observerList[i].update(...args);
    }
  }
}

module.exports = { Subject };