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
    if(this.subscribers.type!=[]){
      this.subscribers.type=[];
    }
    this.subscribers.type.push(fn)
    ;
  }

  unsubscribe(type, fn) {
    // todo unsubscribe
    let temp = this.subscribers.type.indexOf(fn)
    if(temp!=-1){
       this.subscribers.type.splice(temp,1)
    }
  }

  publish(type, ...args) {
      for(let i=0;i<this.subscribers.type.length;i++){
        this.subscribers.type[i](...args)
    }
    // todo publish
  }

}
