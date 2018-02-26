/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: kael
 * @Last Modified time: 2018-02-02 17:38:36
 */

//  观察者
class ObserverList {
  constructor() {
    this.observerList = [];
  }
  //  注册一个观察对象
  add(observer) {
    // todo add observer to list
    this.observerList.push(observer);
  }
  //  移除一个观察对象
  remove(observer) {
    // todo remove observer from list
    for (var i = 0; i < this.observerList.length; i++) {
      if (this.observerList[i] === observer) {
        this.observerList.splice(i, 1);
      }
    }
  }
  //  返回当前观察列表的长度
  count() {
    return this.observerList.length;
    // return observer list size
  }
}

//  发布者
class Subject {
  constructor() {
    this.observers = new ObserverList();
  }
  addObserver(observer) {
    this.observers.add(observer);
    // todo add observer
  }
  removeObserver(observer) {
    // todo remove observer
    this.observers.remove(observer);
  }
  notify(...args) {
    // todo notify
    this.observers.observerList.forEach((item, index) => {
      this.observers.observerList[index].update(...args);
    });
  }
}

module.exports = { Subject };