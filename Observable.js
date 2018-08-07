

class ObserverList {
  constructor() {
    this.observerList = [];
  }
  add(observer) {
    return this.observerList.push(observer);
  }
  remove(observer) {
    this.observerList.splice(this.observerList.indexOf(observer), 1);
  }
  count() {
    return this.observerList.length;
  }
  get(index){  //保持完整性，在别的地方要用的 时候可以直接调用，而不需要管observerList 是什么东西，什么数据结构。
    return this.observerList[index];
  }
}

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
  notify(...args) {
    this.observers.observerList.forEach(observer=> observer.update(...args));
  }
}

module.exports = { Subject };