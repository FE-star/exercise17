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
      if(this.subscribers[type]) {
          let typeFns = this.subscribers[type], len = typeFns ? typeFns.length : 0;
          while (len--) {
              if (typeFns[len] === fn) {
                  return;
              }
          }
          this.subscribers[type].push(fn);
          return;
      }
      this.subscribers[type]=[fn]; //如果subscribers没有type属性，则创建type属性并把fn赋值给type。
  }

  unsubscribe(type, fn) {
    // todo unsubscribe
      let typeFns = this.subscribers[type] || [], len= typeFns ? typeFns.length : 0;
      while (len--){
          if(typeFns[len] === fn){
              return typeFns.splice(len,1)
          }
      }

  }

  publish(type, ...args) {
    // todo publish
      let typeFns = this.subscribers[type] || [],len= typeFns ? typeFns.length:0;
      while (len--){
        typeFns[len].apply(this,args);
      }

  }

}
