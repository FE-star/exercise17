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
    // add observer to list
    this.observerList.push(observer);
  }
  remove(idx) {
    this.observerList.splice( idx, 1 );
    // remove observer from list
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
    // add observer
    this.observers.add(observer);
  }
  removeObserver(observer) {
    // remove observer
    this.observers.remove( this.observers.observerList.indexOf(observer) );
  }
  notify(...args) {
    this.observers.observerList.map( observer => {
        observer.update.call( observer, ...args);
    })
  }
}

module.exports = { Subject };