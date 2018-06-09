/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: LynnZhang
 * @Last Modified time: 2018-06-09 22:00:00
 */

module.exports = class PubSub {

    constructor() {
        this.subscribers = {};
    }

    subscribe(type, fn) {
        this.subscribers[type]=fn
    }

    unsubscribe(type, fn) {
        delete this.subscribers[type]
    }

    publish(type, ...args) {
        if(!this.subscribers[type]){
            return
        }
        let fn=this.subscribers[type];
        fn(...args)
    }

}
