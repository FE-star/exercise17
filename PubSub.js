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
    if(!this.subscribe[type]){
      this.subscribe[type] = [];
    }
    this.subscribe[type].push(fn);
    // todo subscribe
  }

  unsubscribe(type, fn) {
    this.subscribe[type].splice()
    for(let key in this.subscribers){
      if(this.subscribers[key]){
        for ( let i=0,j = this.subscribers[key].length;i<j;i++ ) {
          if ( this.subscribers[key][i] == fn ) {
              this.subscribers[key].splice( i, 1 );
              return;
          }
        }
      }
    }
    // todo unsubscribe
  }

  publish(type, ...args) {
    let len = this.subscribers[type].length;
    len = len >0?len:0;
    while(len--){
      this.subscribers[type][len].func(type,...args);
    }
    // todo publish
  }

}
