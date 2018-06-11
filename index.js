/*
 * @Author: kael 
 * @Date: 2018-02-02 16:26:55 
 * @Last Modified by: Yatoo2018
 * @Last Modified time: 2018-06-10 21:21:02
 */
let { PubSub } = require("./PubSub")

console.log("index 开始加载")
let { Observer } = require("./Observer")
console.log('in index， Observer is ', typeof Observer)


let { Subject } = require("./Subject")

console.log('in index， Observer is ', typeof Observer)

exports.PubSub = PubSub;
exports.Observable= {Subject, Observer}
new Observer()
new Subject()