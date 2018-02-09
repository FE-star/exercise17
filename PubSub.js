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
    this.subscribers[type].push(fn)
  }

  unsubscribe(type, fn) {
    // todo unsubscribe
    let fns = this.subscribers[type];

    if(!fn){
      fns && (fns.length = 0);
    }else{
      for(let l = fns.length - 1; l >= 0; l--){
        let _fn = fns[l];
        if(_fn === fn){
          fns.splice(l, 1);
        }
      }
    }
  }

  publish(type, ...args) {
    // todo publish
    let fns = this.subscribers[type]

    for(let i = 0, fn; fn = fns[i++] ; ){
      fn.call(this, ...args)
    }
  }

}
