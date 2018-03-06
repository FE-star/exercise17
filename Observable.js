/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: Nico
 * @Last Modified time: 2018-03-06 18:58:38
 */

class ObserverList {
    constructor() {
        this.observerList = [];
    }
    add(observer) {
        // todo add observer to list
        this.observerList.push(observer)
    }
    remove(observer) {
        // todo remove observer from list
        let _this = this;
        _this.observerList.forEach(function(val, key) {
            if (observer === val) {
                _this.observerList.splice(key, 1);
            }
        })
    }
    count() {
        // return observer list size
        return this.observerList.length;
    }
}

class Subject {
    constructor() {
        this.observers = new ObserverList();
    }
    addObserver(observer) {
        // todo add observer
        this.observers.add(observer);
    }
    removeObserver(observer) {
        // todo remove observer
        this.observers.remove(observer);
    }
    notify(...args) {
        // todo notify
        this.observers.observerList.forEach(function(val, key) {
            val.update(...args);
        })
    }
}

module.exports = { Subject };