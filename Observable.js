/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: weie
 * @Last Modified time: 2018-06-20 17:38:36
 */

class ObserverList {
  constructor() {
    this.observerList = [];
  }
  add(observer) {
    return this.observerList.push(observer)
  }
  remove(observer,index) {
    // if(index === undefined || index===0){
    //   this.observerList.shift()
    // } else if(index === this.observerList.length -1){
    //   this.observerList.pop()
    // }
    this.observerList.splice(this.observerList.findIndex(item => item === observer),1)
  }
  count() {
    return this.observerList.length
  }
  IndexOf (observer,startIndex) {
    let i= startIndex, pointer=-1
    while (i < this.observerList.length) {
      if(this.observerList[i] === observer){
        pointer = i
      }
      i++
    }
    return pointer
  }
  Get (index){
    if(index > -1 && index < this.observerList.length){
      return this.observerList[index]
    }
  }
}

class Subject {
  constructor() {
    this.observers = new ObserverList();
  }
  addObserver(observer) {
    this.observers.add(observer)
  }
  removeObserver(observer) {
    // this.observers.remove(this.observers.IndexOf(observer,0))
    this.observers.remove(observer)
  }
  // notify(context) {
  //   var observerCount = this.observers.count();
  //   for(var i=0;i<observerCount;i++){
  //     this.observers.Get(i).Update(context)
  //   }
  // }
  notify(...args) {
    // todo notify
    this.observers.observerList.map(item  => item.update(...args))
  }
}

module.exports = { Subject };