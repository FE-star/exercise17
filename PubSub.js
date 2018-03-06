/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: Nico
 * @Last Modified time: 2018-03-06 18:58:38
 */

module.exports = class PubSub {

    constructor() {
        this.subscribers = {};
    }

    subscribe(type, fn) {
        // todo subscribe
        if (!this.subscribers[type]) {
            this.subscribers[type] = [];
        }
        this.subscribers[type].push({ fn });
    }

    unsubscribe(type, fn) {
        // todo unsubscribe
        if (!this.subscribers[type]) {
            return false;
        }

        let subscribers = this.subscribers[type];

        subscribers.forEach((val, key) => {
            if (val.fn === fn) {
                subscribers.splice(key, 1);
            }
        });

    }

    publish(type, ...args) {
        // todo publish
        if (!this.subscribers[type]) {
            return false;
        }
        let subscribers = this.subscribers[type];
        for (let i = 0; i < subscribers.length; i++) {
            subscribers[i]['fn'](...args);
        }
    }

}