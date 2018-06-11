/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: 周朝
 * @Last Modified time: 2018-06-11 21:00:00
 */

module.exports = class PubSub {

    constructor() {
        this.subscribers = {}
    }

    subscribe(type, fn) {
        let listeners = this.subscribers[type] || []
        listeners.push(fn)
        this.subscribers[type] = listeners
    }

    unsubscribe(type, fn) {
        let listeners = this.subscribers[type]
        if (!listeners) return
        this.subscribers[type] = listeners.filter(v => v !== fn)
    }

    publish(type, ...args) {
        let listeners = this.subscribers[type]
        if (!listeners) return
        listeners.forEach(item => (item.apply(type, args)))
    }
}