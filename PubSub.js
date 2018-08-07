
module.exports = class PubSub {

  constructor() {
    this.subscribers = {};
  }

  subscribe(type, fn) {
    this.subscribers[type] = this.subscribers[type] || [];
    this.subscribers[type].push(fn);
    return this;
  }

  unsubscribe(type, fn) {
    if(!this.subscribers[type]){
      return false;
    }
    this.subscribers[type].splice(this.subscribers[type].indexOf(fn), 1);
  }

  publish(type, ...args) {
    if(this.subscribers[type]){
      this.subscribers[type].forEach(subscribe=>subscribe(...args))
    }
    return this;
  }

}
