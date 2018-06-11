/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: kael
 * @Last Modified time: 2018-02-02 17:38:36
 */
//观察者列表(订阅者)
class ObserverList {
  constructor() {
    this.observerList = [];
  }
  add(observer) {
    return this.observerList.push(observer);
  }
  remove(observer) {
    var observerList = this.observerList;
    for(var i = 0; i < observerList.length; i++) {
      if(observerList[i] == observer) {
        observerList.splice(i,1);
      }
    }
    return observerList;
  }
  get(index) {
    if(index > -1 && index < this.observerList.length) {
      return this.observerList[index];
    }
  }
  count() {
    return this.observerList.length;
  }
}

//观察目标(发布者)
class Subject {
  constructor() {
    this.observers = new ObserverList();
  }
  addObserver(observer) {
    this.observers.add(observer);
  }
  removeObserver(observer) {
    this.observers.remove(observer);
  }
  notify(args) {
    //获取 this.observers 的 observerList 的长度
    var length = this.observers.count();
    for(var i = 0; i < length; i++) {
      //更新的是 observerList[i] 的数据
      this.observers.get(i).update(args);
    }

  }
}

module.exports = { Subject };