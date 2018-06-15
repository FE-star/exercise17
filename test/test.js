/*
 * @Author: kael 
 * @Date: 2018-02-01 17:59:38 
 * @Last Modified by: kael
 * @Last Modified time: 2018-02-02 17:40:47
 */
//import 'babel-polyfill'
const assert = require('assert');
//对象解构赋值
//根据 require 加载 index.js 进行对象变量的解构赋值
const { PubSub, Observable } = require('../index');

//async es6语法糖
describe('PubSub', () => {
  let ob = new PubSub();
  //async es2017
  //订阅 -》 发布模式
  it('subscribe -> publish',() => {
    let sum = 0;
    let val = Math.random() * 1e9 >> 0;
    ob.subscribe('add', (val) => sum += val);
    ob.publish('add', val);
    assert.ok(sum === val);
  });

  it('subscribe -> publish -> unsubscribe -> publish',() => {
    let sum = 0;
    let val = Math.random() * 1e9 >> 0;
    let add = (val) => sum += val;
    ob.subscribe('add', add);
    ob.publish('add', val);
    assert.ok(sum === val);

    sum = 0;
    val = Math.random() * 1e9 >> 0;
    ob.unsubscribe('add', add);
    ob.publish('add', val);
    assert.ok(sum !== val);
  });
});

//观察
describe('Observable', () => {
  class Observer {
    constructor() {
      this.sum = 0;
    }
    update(val) {
      this.sum += val;
    }
  }
  //观察=》通知
  it('addObserver -> notify',() => {
    let subject = new Observable.Subject();
    let ob = new Observer();
    subject.addObserver(ob);
    assert.ok(subject.observers.count() === 1);
    let val = Math.random() * 1e9 >> 0;
    subject.notify(val);
    assert.ok(ob.sum === val);
  });

  it('addObserver -> notify -> removeObserver -> notify',() => {
    let subject = new Observable.Subject();
    let ob = new Observer();
    subject.addObserver(ob);
    assert.ok(subject.observers.count() === 1);
    let val = Math.random() * 1e9 >> 0;
    subject.notify(val);

    ob.sum = 0;
    val = Math.random() * 1e9 >> 0;
    subject.removeObserver(ob);
    assert.ok(subject.observers.count() === 0);
    subject.notify(val);
    assert.ok(ob.sum !== val);
  });
});
