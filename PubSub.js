/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-11-14 18:12:33
 */

module.exports = class PubSub {

  constructor() {
    this.subscribers = {};
  }

  subscribe(type, fn) {
    // todo subscribe
    if( !this.subscribers[type]){
      this.subscribers[type] = [];
    }
    this.subscribers[type].push(fn);
  }

  unsubscribe(type, fn) {
    // todo unsubscribe
    if( !this.subscribers[type] ){
      return false;
    }
    this.subscribers[type] = this.subscribers[type].filter(func => func !== fn);
  }

  publish(type, ...args) {
    // todo publish
    if( !this.subscribers[type] ){
      return false;
    }
    let len = this.subscribers[type].length;
    this.subscribers[type].map(func => func.call(this, ...args));
  }

}
