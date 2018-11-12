/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: kael
 * @Last Modified time: 2018-02-02 17:39:45
 */

module.exports = class PubSub {

  constructor() {
    this.subscribers = {};
    this.token = -1;
  }

  subscribe(type, fn) {
    // todo subscribe
    if(!this.subscribers[type]){
      this.subscribers[type] = [];
    }
    this.subscribers[type].push({
      token: fn.name || ++this.token,
      fn:fn
    });
    return this.token;
  }

  unsubscribe(type, fn) {
    // todo unsubscribe
    if(this.subscribers[type]){
      var len = this.subscribers[type].length;
      for(var i = 0; i< len;i++){
        if(this.subscribers[type][i].token === fn.name){
          this.subscribers[type].splice(i,1);
        }
      }
    }
  }

  publish(type, ...args) {
    // todo publish
    if(this.subscribers[type]){
      var len = this.subscribers[type].length;
      for(var i = 0; i< len;i++){
        for(var arg of args){
          this.subscribers[type][i].fn(arg);
        }

      }
    }
  }

}
