/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: Yatoo2018
 * @Last Modified time: 2018-06-10 17:20:45
 */
console.log('开始加载Subject模块')
let {ObserverList} = require("./ObserverList")
console.log("in Subject, ObserverList is ", typeof ObserverList)
/**
 * 发布者基类
 */
let ID = 0;
class Subject {
  constructor() {
    this.id = ID++;
    // 这是发布者和订阅者之间的关系， 发布者持有一个订阅者集，
    // 发布者可以知道都有哪些订阅者关注了自己
    this.observers = new ObserverList();
  }
  // 订阅者关注了发布者
  addObserver(observer) {
    // todo add observer
    this.observers.add(observer)
    return this;
  }
  // 订阅者取消关注发布者
  removeObserver(observer) {
    // todo remove observer
    this.observers.remove(observer)
    return this;
  }
  notify(...args) {
    // todo notify 发布者更新了某件事，需要通知所有订阅者
    let count = this.observers.count();
    for(let i = 0; i < count; i++) {
      this.observers.get(i).update(...args)
    }
  }
}

exports.Subject = Subject
console.log('模块Subject加载完毕')