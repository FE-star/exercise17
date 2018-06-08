/*
 * @Author: mandy
 * @Date: 2018-06-08
 */

module.exports = class PubSub {

  constructor () {
    this.subscribers = {};
  }

  //订阅
  subscribe (type, fn) {
    // todo subscribe
    let currentSubscriber = this.subscribers[type] || [];
    currentSubscriber.push(fn);
    this.subscribers[type]=currentSubscriber
  }

//取消订阅
  unsubscribe (type, fn) {
    // todo unsubscribe
    let currentSubscriber = this.subscribers[type];
    if (!currentSubscriber) {
      console.log('The subscription does not exist');
      return;
    }
    this.subscribers[type] = currentSubscriber.filter(v => v !== fn)
    // delete currentSubscriber;

  }

  publish (type, ...args) {
    // todo publish
    let subscribers=this.subscribers;
    let currentSubscriber = subscribers[type];
    if (!currentSubscriber) {
      console.log('The subscription does not exist');
      return;
    }
    currentSubscriber.forEach(item => (item.apply(type, args)))
  }

}
