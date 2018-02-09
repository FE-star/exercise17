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
      let len = this.observerList ? this.observerList.length :0;
      while(len--){
        if(this.observerList[len] === observer){
          this.observerList.splice(len,1);
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
      this.observers.remove(observer)
  }
  notify(...args) {
    // todo notify
      let len = this.observers.observerList ?  this.observers.observerList.length : 0;
      while (len--){
          this.observers.observerList[len].update(...args)
      }
  }
}

module.exports = { Subject };