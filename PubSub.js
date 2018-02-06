/*
 * @Author: kael
 * @Date: 2018-02-01 17:41:25
 * @Last Modified by: kael
 * @Last Modified time: 2018-02-02 17:39:45
 */

module.exports = class PubSub {

  constructor(subscribers, subUid) {
    this.subscribers = subscribers || {};
    this.subUid = subUid || -1;
  }

  publish(type, args) {
    // todo publish
    if (!this.subscribers[type]) {
      return false;
    }

    var subList = this.subscribers[type],
      len = subList ? subList.length : 0;

    while (len--) {
      subList[len].func(args)
    }
    return this
  }

  subscribe(type, fn) {
    // todo subscribe
    if(!this.subscribers[type]){
      this.subscribers[type] = []
    }
    var token = ( ++(this.subUid) ).toString();
    this.subscribers[type].push({
      token: token,
      func: fn
    })
    return token;
  }

  unsubscribe(type, fn) {
    // todo unsubscribe
    let subs = this.subscribers[type]
    subs.map(function (val, i) {
      if(val.func == fn){
        subs.splice(i, 1)
      }
    })
  }

}
