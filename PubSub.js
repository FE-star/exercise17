
module.exports = class PubSub {

  constructor() {
    this.subscribers = {};
    this.count = 0;
  }

  subscribe(type, fn) {
    // todo subscribe
    if (!this.subscribers[type]) {
      this.subscribers[type] = [];
    }
    this.subscribers[type].push({
      index: this.count.toString(),
      callback: fn,
    })
    return this.count++;
  }

  unsubscribe(type, fn) {
    // todo unsubscribe
    return ((callback) => {
      delete this.subscribers[type]
      callback()
    })(fn)
  }

  publish(type, ...args) {
    // todo publish
    if (this.subscribers[type]) {
      let subscriber = this.subscribers[type];
      for (let i = 0; i < subscriber.length; i++) {
        subscriber[i].callback(...args) // TOTHINK
      }
      return this // TOTHINK
    }
    return false
  }
}
