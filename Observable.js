/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: kael
 * @Last Modified time: 2018-02-02 17:38:36
 */

class ObserverList {
    constructor() {
        this.observerList = [];
    }

    add(observer) {
        this.observerList.push(observer)
    }

    remove(observer) {
        this.observerList = this.observerList.filter(item => item !== observer)
    }

    count() {
        return this.observerList.length
    }
}

class Subject {
    constructor() {
        this.observers = new ObserverList();
    }

    addObserver(observer) {
        this.observers.add(observer)
    }

    removeObserver(observer) {
        this.observers.remove(observer)
    }

    notify(info) {
        this.observers.observerList.map(item => {
            item.update(info)
        })
    }
}

module.exports = {Subject};