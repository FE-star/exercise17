/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: kael
 * @Last Modified time: 2018-02-02 17:39:45
 */

module.exports = class PubSub {

  constructor() {
    this.subscribers = {};
  }

  subscribe(type, fn) {
    // todo subscribe
    if(!this.subscribers[type]){
      this.subscribers[type] = [];
    }
    this.subscribers[type].push(fn); 
  }

  unsubscribe(type, fn) {
    // todo unsubscribe
    let fns = this.subscribers[type]
    if(!fns || !fns.length){
      return;
    }
    if(!fn){
      fns = []
    }else{
      for(let i=0;i<fns.length;i++){
        let item = fns[i]
        if(item === fn){
          fns.splice(i, 1); //删除订阅
        }
      }
    }
  }

  publish(type, ...args) {
    // todo publish
    let fns = this.subscribers[type]
    if(!fns || !fns.length){
      return;
    }
    for(let i=0;i<fns.length;i++){
      fns[i].apply(this, args);
    }
  }

}
