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
    let index = 0;
    this.observerList.forEach(element => {
      if(element === observer){
        this.observerList.splice(index, 1)
      }
      index++;
    });
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
    this.observers.remove( this.observers.observerList.indexOf(observer) );
  }
  notify(...args) {
    // todo notify
    this.observers.observerList.map( observer => {
        observer.update.call( observer, ...args);
    })
  }
}

module.exports = { Subject };
