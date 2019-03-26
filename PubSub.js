/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: kael
 * @Last Modified time: 2018-02-02 17:39:45
 */

module.exports = class PubSub {

  constructor() {
    this.subscribers = {};
    this.subUid = -1;
  }

  subscribe(type, fn) {
    // todo subscribe
    if (!this.subscribers[type]) {
      this.subscribers[type] = []
    }

    let token = (++this.subUid).toString();

    this.subscribers[type].push({
      token: token,
      func: fn
    })
    // console.log(this.subscribers)
    return token;
  }

  unsubscribe(type, fun) {
    // todo unsubscribe
    for (let m in this.subscribers) {
      if (this.subscribers[type]) {
        for (var i = 0, j = this.subscribers[m].length; i < j; i++) {
          if (this.subscribers[type][i].func === fun) {
            this.subscribers[type].splice(i, 1);
            return fun
          }
        }
      }
    }
    return this;
  }

  publish(type, args) {
    // todo publish
    if (!this.subscribers[type]) {
      return false;
    }

    let tempSub = this.subscribers[type]
    let len = tempSub ? tempSub.length : 0;

    while (len--) {
      // console.log(tempSub[len].func)
      tempSub[len].func(args)
    }
    return this;
  }

}
