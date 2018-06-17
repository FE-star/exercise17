/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: flcwl
 * @Last Modified time: 2018-06-17 14:29:49
 */

class ObserverList {
  constructor() {
    this.observerList = [];
  }

  add(observer) {
    // todo add observer to list
    if(this.observerList.includes(observer)) {
      return true; // 可以更新observer
    }
    return this.observerList.push(observer);
  }

  remove(observer) {
    // todo remove observer from list
    let index = -1;
    for (let i = 0; i < this.count(); i++) {
      if (this.observerList[i] == observer) { // 可二分 抽离出一个get方法
        index = i;
      }
    }
    if (index === -1) {
      return true;
    }
    this.observerList[index] = null;
    this.observerList.splice(index, 1);
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
    this.observers.remove(observer);
  }

  notify(...args) {
    // todo notify
    this.observers.observerList.forEach((observer) => {
      if (observer.update) {
        observer.update(...args);
      }
    });
  }

}

module.exports = { Subject };
