/*
 * @Author: mandy
 * @Date: 2018-06-08
 */

//观察者列表
class ObserverList {
  constructor () {
    this.observerList = [];
  }

  add (observer) {
    // todo add observer to list
    return this.observerList.push(observer);
  }

  count () {
    // todo return observer list size
    return this.observerList.length;
  }

  get (index) {
    if (index > -1 && index < this.observerList.length) {
      return this.observerList[index];
    }
  }

  indexOf (obj, strIndex) {
    var i = strIndex;
    while (i < this.observerList.length) {
      if (this.observerList[i] === obj) {
        return i
      }
      i++;
    }
    return -1;
  }

  remove (index) {
// todo remove observer from list
    this.observerList.splice(index, 1);
  }

}
//目标
class Subject {
  constructor () {
    this.observers = new ObserverList();
  }

  addObserver (observer) {
    // todo add observer
    this.observers.add(observer);
  }

  removeObserver (observer) {
    // todo remove observer
    this.observers.remove(this.observers.indexOf(observer, 0));
  }

  notify (...args) {
    // todo notify
    var observerCount = this.observers.count();
    for (var i = 0; i < observerCount; i++) {
      this.observers.get(i).update(args);
    }
  }
}

module.exports = {Subject};