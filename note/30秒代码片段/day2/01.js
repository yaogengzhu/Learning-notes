function Parent(name) {
    this.name = name
}

function Child(name) {
    this.name = name
    Parent.call(this, 'wh')
    console.log(this.name)
}
const p = new Child('zy')

console.log(p.__proto__, '>??>')

// 函数的执行环境对象

/**
 *  1. 函数的this会指向函数的调用环境
 *  2. this是函数的关键字，会指向函数的调用对象
 *  3. 箭头函数this 指向创建时的环境
 *  4. 普通函数，由于闭包函数是window执行的，所以this指向window；
 */

var sayName = function () {
    return this.name
}
var obj = {
    name: 'obj',
    sayName: sayName,
}
console.log(obj.sayName() === 'obj') //true
console.log(sayName() === 'obj') //false


// https://segmentfault.com/a/1190000020013532
