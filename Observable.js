/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: kael
 * @Last Modified time: 2018-02-02 17:38:36
 */

 //观察者列表
class ObserverList {
  constructor() {
    this.observerList = [];
  }
  add(observer) {
    // todo add observer to list,return length
    return this.observerList.push(observer);
  }
  remove(observer) {
    // todo remove observer from list
    this.observerList.splice(this.observerList.indexOf(observer),1);
  }
  count() {
    // return observer list size
    return this.observerList.length;
  }
  get(index) {
    return this.observerList[index];
  }
}

//目标
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
    let observerCount = this.observers.count();
    // for(let mm in this.observers.observerList){
    //   this.observers.observerList[mm].update(...args);
    // }
    for(var i=0;i<observerCount;i++){
      this.observers.get(i).update(...args);
    }
  }
}

module.exports = { Subject };