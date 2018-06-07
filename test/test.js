/*
 * @Author: kael
 * @Date: 2018-02-01 17:59:38
 * @Last Modified by: fridolph
 * @Last Modified time: 2018-06-07 15:20:10
 */

const assert = require('assert')
const { PubSub, Observable } = require('../index')

describe('PubSub', () => {
  let ob = new PubSub()

  it('subscribe -> publish', async () => {
    let sum = 0
    let val = Math.random() * 1e9 >> 0
    ob.subscribe('add', val => sum += val)
    ob.publish('add', val)
    // console.log(`sum: ${sum}, val: ${val}`)
    assert.ok(sum === val)
  })

  it('subscribe -> publish -> unsubscribe -> publish', async () => {
    let sum = 0
    let val = Math.random() * 1e9 >> 0
    let add = val => sum += val
    ob.subscribe('add', add)
    ob.publish('add', val)
    // console.log(`sum: ${sum}, val: ${val}`)
    assert.ok(sum === val)

    sum = 0
    val = Math.random() * 1e9 >> 0
    ob.unsubscribe('add', add)
    ob.publish('add', val)
    // console.log(`sum: ${sum}, val: ${val}`)
    assert.ok(sum !== val)
  })
})

describe('Observable', () => {
  class Observer {
    constructor() {
      this.sum = 0
    }
    update(val) {
      this.sum = this.sum + Number(val)
    }
  }

  it('addObserver -> notify', async () => {
    let subject = new Observable.Subject()
    let ob = new Observer()
    subject.addObserver(ob)
    assert.ok(subject.observers.count() === 1)

    let val = Math.random() * 1e9 >> 0
    subject.notify(val)
    assert.ok(ob.sum === val)
  })

  it('addObserver -> notify -> removeObserver -> notify', async () => {
    let subject = new Observable.Subject()
    let ob = new Observer()
    subject.addObserver(ob)
    // console.log(`sum: ${sum}, val: ${val}`)
    assert.ok(subject.observers.count() === 1)

    let val = Math.random() * 1e9 >> 0 // >> 0 用来去掉小数
    subject.notify(val)

    ob.sum = 0
    val = Math.random() * 1e9 >> 0
    subject.removeObserver(ob)
    assert.ok(subject.observers.count() === 0)
    subject.notify(val) // notify后 ob.sum进行了更新 自然不等于 0了
    // console.log(`sum: ${sum}, val: ${val}`)
    assert.ok(ob.sum !== val) // 所以测试通过
  })
})
