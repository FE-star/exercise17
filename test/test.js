/*
 * @Author: kael
 * @Date: 2018-02-01 17:59:38
 * @Last Modified by: kael
 * @Last Modified time: 2018-02-02 17:40:47
 */

const assert = require('assert');
const { PubSub, Observable } = require('..');

describe('PubSub', () => {
  // 实例化一个发布订阅模式实例ob
  let ob = new PubSub();

  it('subscribe -> publish', async () => {
    /** 按位运算符
     * 1. num >> 0
     * 2. ~~num
     * 3. Math.floor(num)
     */
    let sum = 0;
    let val = Math.random() * 1e9 >> 0;

    /**
     * 1. 【订阅】订阅add, 为其加入一个订阅者。订阅者为一个处理方法 (val) => sum += val
     * 2. 【发布】给add的订阅者发布一个通知, 通知的信息为一个随机数 val
     * 3. 因为 add 的处理方法中 sum 为0, 所以该处理方法执行后的 sum 值一定是等于接收到的(通知)的值 val。 所以这里断言 ob.publish('add', val) 之后 sum 值一定等于 val;
    */
    ob.subscribe('add', (val) => sum += val);
    ob.publish('add', val);
    assert.ok(sum === val);
  });

  it('subscribe -> publish -> unsubscribe -> publish', async () => {
    let sum = 0;
    let val = Math.random() * 1e9 >> 0 + 1;

    /**
     * 1. 【订阅】订阅add, 为其加入一个订阅者。订阅者为一个处理方法 (val) => sum += val
     * 2. 【发布】给add的订阅者发布一个通知, 通知的信息为一个随机数 val
     * 3. 【分析并断言】因为 add 的处理方法中 sum 为0, 所以该处理方法执行后的 sum 值一定是等于接收到的(通知)的值 val。 所以这里断言 ob.publish('add', val) 之后 sum 值一定等于 val;
    */
    let add = (val) => sum += val;
    ob.subscribe('add', add);
    ob.publish('add', val);
    assert.ok(sum === val);

    /**
     * 1. 【取消订阅】将sum的值重置为0; 取消add的订阅(即移出add下的订阅者add函数)。
     * 2. 【发布】给add的订阅者发布一个通知, 通知的信息为一个随机数 val
     * 3. 【分析并断言】ob.publish('add', val) 方法发布了一个通知，但是在上一步中取消了add的订阅(移除了add的订阅者)，所以没有订阅者会收到通知。即 sum 值仍然是 0, 而发布的通知时的 val 为一个【0, 1) 之间的数。因此断言两者一定不想等。
    */
    sum = 0;
    val = Math.random() * 1e9 >> 0 + 1;
    ob.unsubscribe('add', add);
    ob.publish('add', val);
    assert.ok(sum !== val);
  });
});

describe('Observable', () => {
  // 观察者类
  class Observer {
    constructor() {
      this.sum = 0;
    }
    update(val) {
      this.sum += val;
    }
  }

  it('addObserver -> notify', async () => {
    // 实例化一个目标对象subject 和 一个观察者 ob
    let subject = new Observable.Subject();
    let ob = new Observer();

    // 添加ob到subject的观察者列表，使其作为subject的观察者
    subject.addObserver(ob);

    // 断言: subject观察者的个数一定是1
    assert.ok(subject.observers.count() === 1);

    // subject发送一个通知(携带一个随机数据 val)到刚添加的观察者ob
    let val = Math.random() * 1e9 >> 0;
    subject.notify(val);
    // 断言: 观察者更新后的属性(sum)和发送的数据(val)一定是相同的
    assert.ok(ob.sum === val);
  });

  it('addObserver -> notify -> removeObserver -> notify', async () => {
    /**
     * 1. 实例化一个目标对象 subject 和一个观察者 ob
     * 2. 将观察者 ob 添加到 目标对象 subject 的观察者列表中
     * 3. 断言 subject 的观察者个数一定为1
     * 4. 随机发送一个数据通知到刚添加的观察者，断言发送的数据和观察者更新后的属性sum一定相同
     */
    let subject = new Observable.Subject();
    let ob = new Observer();
    subject.addObserver(ob);
    assert.ok(subject.observers.count() === 1);
    let val = Math.random() * 1e9 >> 0;
    subject.notify(val);

    // 将观察者的属性sum重置为0
    ob.sum = 0;
    val = Math.random() * 1e9 >> 0;

    // 从subject的观察者列表中移出刚添加的观察者ob, 断言subject的观察者个数为0
    subject.removeObserver(ob);
    assert.ok(subject.observers.count() === 0);

    // 目标对象发送一个通知到观察者，断言发送的随机数据一定不等于观察者ob的sum属性
    subject.notify(val);
    assert.ok(ob.sum !== val);
  });
});
