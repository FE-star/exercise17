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
      var oI = this.get(observer);
      if (oI > -1) {
          this.observerList.splice(oI, 1);
      }
  }
  count() {
    // return observer list size
      return this.observerList.length;
  }
  get(observer) {
      if(typeof observer === 'number') {
         return this.observerList[observer];
      }
      return this.observerList.findIndex( o => o.name === observer.name);
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
      const len = this.observers.count();
      for(let i = 0; i < len; i++){
          this.observers.get(i).update(...args)
      }
  }
}

module.exports = { Subject };