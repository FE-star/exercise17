/*
 * @Author: kael 
 * @Date: 2018-02-01 17:59:38 
 * @Last Modified by: yatoo2018
 * @Last Modified time: 2018-06-010 17:20:47
 */

const assert = require('assert');
const { PubSub, Observable } = require('..');

describe('PubSub', () => {
  let ob = new PubSub();

  it('subscribe -> publish', async () => {
    let sum = 0;
    let val =Math.random() * 1e9 >> 0;
    ob.subscribe('add', (val) => sum += val);
    ob.publish('add', val);
    assert.ok(sum === val);
  });

  it('subscribe -> publish -> unsubscribe -> publish', async () => {
    let sum = 0;
    let val = Math.random() * 1e9 >> 0;
    let add = (val) => sum += val;
    ob.subscribe('add', add);
    ob.publish('add', val);
    assert.ok(sum === val);

    sum = 0;
    val = 1 + (Math.random() * 1e9 >> 0);
    ob.unsubscribe('add', add);
    ob.publish('add', val);
    assert.ok(sum !== val);
  });
});






describe('Observable', () => {

  it('addObserver -> notify', async () => {
    let subject = new Observable.Subject();
    let ob = new Observable.Observer();
    subject.addObserver(ob);
    assert.ok(subject.observers.count() === 1);
    let val = Math.random() * 1e9 >> 0;
    subject.notify(val);
    assert.ok(ob.sum === val);
  });

  it('addObserver -> notify -> removeObserver -> notify', async () => {
    let subject = new Observable.Subject();
    let ob = new Observable.Observer();
    subject.addObserver(ob);
    assert.ok(subject.observers.count() === 1);
    let val = Math.random() * 1e9 >> 0;
    subject.notify(val);

    ob.sum = 0;
    val = 1 + (Math.random() * 1e9 >> 0);
    subject.removeObserver(ob);
    assert.ok(subject.observers.count() === 0);
    subject.notify(val);
    assert.ok(ob.sum !== val);
  });



  it('addSubject', async () => {
    let subject = new Observable.Subject();
    let ob = new Observable.Observer();
    ob.addSubject(subject)
    assert.equal(ob.subjects.count(),1)
  });
  it('addSubject -> removeSubject',() => {
    let subject = new Observable.Subject();
    let ob = new Observable.Observer();
    ob.addSubject(subject)
    assert.equal(ob.subjects.count(), 1)
    ob.removeSubject(subject)
    assert.equal(ob.subjects.count(), 0)
  })
});
