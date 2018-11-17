/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: kael
 * @Last Modified time: 2018-02-02 17:38:36
 */

class ObserverList {
  constructor() {
    this.observerList = []
  }
  add(observer) {
    return this.observerList.push(observer)
  }
  remove(observer) {
    for(var i=0,len=this.count();i<len;i++)
      if(this.observerList[i]===observer)
        return this.observerList.splice(i, 1)
  }
  count() {
    return this.observerList.length
  }
  get(i){
    return this.observerList[i]
  }
}

class Subject {
  constructor() {
    this.observers = new ObserverList()
  }
  addObserver(observer) {
    this.observers.add(observer)
  }
  removeObserver(observer) {
    this.observers.remove(observer)
  }
  notify(...args) {
    for (var i = 0, len = this.observers.count(); i < len; i++)
      this.observers.get(i).update(...args)
  }
}

module.exports = { Subject };