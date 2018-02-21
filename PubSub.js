/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: kael
 * @Last Modified time: 2018-02-02 17:39:45
 */

module.exports = class PubSub {

    constructor() {
        this.subscribers = {
            // add:fn,
            // click:fn

        };
    }

    subscribe(type, fn) {//订阅
        // todo subscribe
        //方法一(别人写的)
        if (!this.subscribers[type]) {
            this.subscribers[type] = []
        }
        this.subscribers[type].push(fn)

        //方法二(我写的)
        // this.subscribers[type] = fn

        console.log(this.subscribers[type])

    }

    unsubscribe(type, fn) {//删除订阅事件
        // todo unsubscribe

        const subscribers = this.subscribers;
        if (!subscribers[type]) return;
        let index = subscribers[type].indexOf(fn);
        subscribers[type].splice(index, 1);
    }

    publish(type, ...args) {//触发事件(发布事件)
        // todo publish
        // 循环调用该类型订阅者的处理函数
        if (this.subscribers[type]) {
            for (let i = 0, len = this.subscribers[type].length; i < len; i++) {
                this.subscribers[type][i](...args);

            }
        }

    }
}
