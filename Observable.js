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
    // todo add observer to list
	 this.observerList.push(observer)
  }
  removeAt(index) {
    // todo remove observer from list
	this.observerList.splice(index,1)
  }
  count() {
    // return observer list size
	return this.observerList.length;
  }
  get(index){
	  if(index>-1&&index<this.count()){
		  return this.observerList[index]
	  }
  }
  indexOf(observer,startIndex=0){
	  let i=startIndex
	  while(i<this.count()){
		  if(this.observerList[i]===observer){
			  return i
		  }
		  i++
	  }
	  return -1;
  }
}

class Subject {
  constructor() {
    this.observers = new ObserverList();
  }
  addObserver(observer) {
    // todo add observer
	this.observers.add(observer)
  }
  removeObserver(observer) {
    // todo remove observer
	this.observers.removeAt(this.observers.indexOf(observer))
  }
  notify(...args) {
    // todo notify
	let observerCount=this.observers.count()
	for(let i=0;i<observerCount;i++){
		this.observers.get(i).update(args)
	}
  }
}

module.exports = { Subject }