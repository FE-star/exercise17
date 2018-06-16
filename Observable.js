
class ObserverList {
  constructor() {
    this.observerList = [];
  }
  add(observer) {
    // todo add observer to list
    return this.observerList.push(observer);
  }
  remove(observer) {
    // todo remove observer from list
    this.observerList.splice(this.observerList.indexOf(observer), 1);
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
    for (let i = 0; i < this.observers.count(); i += 1) {
      args.forEach((value) => {
        this.observers.observerList[i].update(value)
      })
    }
  }
}

module.exports = { Subject };