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
  getIndexOf(obj) {
    var i = 0;
    while( i < this.observerList.length ){
      if( this.observerList[i] === obj ){
        return i;
      }
      i++;
    }
    return -1;
  }
  remove(observer) {
    // todo remove observer from list
    console.log(observer);
    console.log(this.observerList);
      this.observerList.splice(this.observerList.getIndexOf(observer),1);

  }
  count() {
    // return observer list size
    return this.observerList.length;
  }
  getIndex(index) {
    return this.observerList[index];
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
    console.log(this.observers.observerList);
    for(var i=0;i<observerCount;i++) {
      this.observers.getIndex(i).update(...args);
    }
  }
}

module.exports = { Subject };