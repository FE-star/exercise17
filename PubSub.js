/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: kael
 * @Last Modified time: 2018-02-02 17:39:45
 */

module.exports = class PubSub {

  constructor() {
    this.subscribers = {};
	this.subUid=-1;
	this.topics={};
  }

  subscribe(type, fn) {
    // todo subscribe
	if(!this.topics[type]){
		this.topics[type]=[]
	}
	var token=(++this.subUid).toString();
	this.topics[type].push({
		token:token,
		fn:fn
	})
	return token;
  }

  unsubscribe(type, fn) {
    // todo unsubscribe
	for(var m in this.topics){
		if(this.topics[m]){
			var j=this.topics[m].length;
			for(var i=0;i<j;i++){
				if(this.topics[m][i].token===type){
					this.topics[m].splice(i,1);
					return type
				}
			}
		}
	}
	return this
  }

  publish(type, ...args) {
    // todo publish
	if(!this.topics[type]){
		return false
	}
	var subscribers=this.topics[type]
	var len=subscribers?subscribers.length:0
	while(len--){
		subscribers[len].fn(type,args)
	}
	return this
  }

}
