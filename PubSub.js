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
    //初始化type类订阅者
    if(!this.subscribers[type]){
      this.subscribers[type] = [];
    }
    //增加token方便删除
    var token = ++this.subUid+'';
    this.subscribers[type].push({
      token: token,
      fn: fn
    });
    return token;
  }

  unsubscribe(type, fn) {
    // todo unsubscribe
    if(!this.subscribers[type]){
      return -1;
    }
    //学习数组的filter方法
    this.subscribers[type] = this.subscribers[type].filter(subObj => subObj.fn !== fn);
    // for(var m in this.subscribers[type]){
      // if(this.subscribers[type][m].fn === fn){
        // this.subscribers[type].splice(m,1);
      // }
    // }
  }

  publish(type, ...args) {
    // todo publish
    if(!this.subscribers[type]){
      return false;
    }
    var subArr = this.subscribers[type];
    var len = subArr.length;
    //发布type类信息给订阅者
    while(len--){
      subArr[len].fn(...args);
    }
  }

}
