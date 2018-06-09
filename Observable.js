/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: LynnZhang
 * @Last Modified time: 2018-06-09 22:00:00
 */

class ObserverList {
    constructor() {
        this.observerList = [];
    }

    add(observer) {
        this.observerList.push(observer)
    }

    remove(observer) {
        let hasIndex = this.observerList.indexOf(observer);
        if (hasIndex > -1) {
            this.observerList.splice(hasIndex, 1)
        }
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

    notify(...args) {
        this.observers.observerList.map(observer => {
            observer.update(...args)
        })
    }
}

module.exports = {Subject};