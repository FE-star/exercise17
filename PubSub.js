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
        if (this.subscribers[type]) {
            this.subscribers[type].push(fn);
        } else {
            this.subscribers[type] = [fn];
        }
    }

    unsubscribe(type, fn) {
        // todo unsubscribes
        if (this.subscribers[type]) {
            this.subscribers[type] = this.subscribers[type].filter(fun => fun !== fn);
        }
    }

    publish(type, ...args) {
        // todo publish
        if (this.subscribers[type]) {
            var subscriber = this.subscribers[type];
            var len = subscriber ? subscriber.length : 0;
            while (len--) {
                if (typeof subscriber[len] === 'function') {
                    return subscriber[len](...args);
                }
            }
            return this;
        }
        return false;
    }

}
