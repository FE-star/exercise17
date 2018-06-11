/*
 * @Author: kael
 * @Date: 2018-02-01 17:41:25
 * @Last Modified by: kael
 * @Last Modified time: 2018-02-02 17:38:36
 */

//  观察者列表
class ObserverList {
  constructor() {
    this.observerList = [];
  }
  add(observer) {
    // todo add observer to list
    // 添加一个观察者到观察者列表
    return this.observerList.push(observer);
  }
  remove(observer) {
    // todo remove observer from list
    // 从观察者列表移出指定的观察者
    this.observerList.forEach((ob, index, arr) => {
      if (ob === observer) {
        arr.splice(index, 1);
      }
    });
  }
  count() {
    // return observer list size
    // 统计观察者个数
    return this.observerList.length;
  }

  // 根据index获取指定的观察者
  get(index) {
    if (index < 0 || index > this.count - 1) return null;
    return this.observerList[index];
  }
}

class Subject {
  constructor() {
    this.observers = new ObserverList();
  }
  addObserver(observer) {
    // todo add observer
    // 添加观察者
    return this.observers.add(observer);
  }
  removeObserver(observer) {
    // todo remove observer
    // 移出观察者
    this.observers.remove(observer);
  }
  notify(...args) {
    // todo notify
    // 通知每个观察者，更新所有观察者(observerList[i])的数据
    const length = this.observers.count();
    for (var i = 0; i < length; i++) {
      this.observers.get(i).update(...args);
    }
  }
}

module.exports = { Subject };