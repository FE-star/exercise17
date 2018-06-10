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
    for(let key in this.subscribers){
      if(key == type){
        for ( let i=0,len = this.subscribers[key].length;i<len;i++ ) {
          if ( this.subscribers[key][i] == fn ) {
              this.subscribers[key].splice( i, 1 );
              return;
          }
        }
      }
    }
  }

  publish(type, ...args) {
    // todo publish
    for(let item of this.subscribers[type]){
        item(...args);
    }
  }

}
