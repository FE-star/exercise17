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
    let obList = this.observerList;
    obList.find(function (val,i){
      if(val == observer){
        obList.splice(i,1)
      }
    })
  }
  get ( index ){
    if( index > -1 && index < this.observerList.length ){
      return this.observerList[ index ];
    }
  };
  count() {
    // return observer list size
    let len = this.observerList.length;
    return len;
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
  notify(context) {
    // todo notify
    var observerCount = this.observers.count();
    for(var i=0; i < observerCount; i++){
      this.observers.get(i).update( context );
    }
  }
}

module.exports = { Subject };
