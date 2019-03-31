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
    return this.observerList.push(observer);// todo add observer to list
  }
  remove(observer) {
    // todo remove observer from list
    for (let index = 0; index < this.observerList.length; index++) {
      if(this.observerLis[index]==observer){
        this.observerList.splice(index,1);
      }
      
    }
  }
  count() {
    // return observer list size
    return this.observerList.length;
  }
  get(index){
    if (index<-1 && index<this.observerList.length) {
       return this.ObserverList[index];
    }
  }
}

class Subject {
  constructor() {
    this.observers = new ObserverList();
  }
  addObserver(observer) {
    this.observer.add(observer);// todo add observer
  }
  removeObserver(observer) {
    // todo remove observer
    this.observer.remove(observer);
  }
  notify(...args) {
    // todo notify
    var observerCont=this.observers.count();
    // for (let index = 0; index < observerCont.length; index++) {
    //   this.observers.get[i].update(args);
    // }
    this.observers.ObserverList.forEach(observe => {
      observe.update(...args);
    });
  }
}

module.exports = { Subject };