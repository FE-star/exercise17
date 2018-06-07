/*
 * @Author: kael
 * @Date: 2018-02-01 17:41:25
 * @Last Modified by: fridolph
 * @Last Modified time: 2018-06-07 14:27:03
 */

class ObserverList {
  constructor() {
    this.observerList = [];
  }

  add(observer) {
    this.observerList.push(observer)
  }

  get(index) {
    if (index >= 0 && index < this.count()) {
      return this.observerList[index]
    }
  }

  removeAt(index) {
    this.observerList.splice(index, 1)
  }

  count() {
    return this.observerList.length
  }

  indexOf(observer, startIndex = 0) {
    let i = startIndex

    while (i < this.count()) {
      if (this.observerList[i] === observer) {
        return i
      }
      i++
    }
    return -1
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
    this.observers.removeAt(this.observers.indexOf(observer))
  }

  notify(...args) {
    let observerCount = this.observers.count()
    for (let i = 0; i < observerCount; i++) {
      this.observers.get(i).update(args)
    }
  }
}

module.exports = { Subject }
