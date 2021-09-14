/***
 *  1.原型链继承 ---> es5继承
 */
function Parent(name) {
    this.name = name;
}
Parent.prototype.getname = function () {
    console.log(this.name);
};
// const parent = new Parent('zhuyaogeng')
// parent.getname()
function Child() {}
// 原型链继承
Child.prototype = new Parent('zhuyaogeng');
const child = new Child();
child.getname();
/**
 * 1. 引用类型属性被所有的实例共享
 * 2. 创建C1的的实例，不能向Parent传值
 */
function P1() {
    this.name = ['zs', 'ls'];
}
function C1() {}
C1.prototype = new P1();
const c1 = new C1();
console.log(c1.name.push('wh'));
console.log(c1.name);
const c2 = new C1();
console.log(c2.name, '实例共享');

/**
 * 借用构造函数继承. 解决了 1原型属性的被所有实例共享的问题， 解决向Parent传值的问题
 * 缺点，方法都在构造函数中定义，每次创建实例都会遍历一遍方法
 */
function P2(name) {
    this.name = ['zs', 'ls', name];
}
function C2(name) {
    P2.call(this, name);
}
const c3 = new C2('6666');
const c4 = new C2('7777');
c3.name.push('ls');
console.log(c3.name, '构造函数继承');
console.log(c4.name, 'c4');

/**
 * 组合继承
 * 原型链继承 + 经典继承
 */
function P4(name) {
    this.name = name;
    this.color = ['red', 'blue', 'green'];
}
P4.prototype.getName = function () {
    console.log(this.name);
};
function C4(name, age) {
    P4.call(this, name);
    this.age = age;
}
C4.prototype = new P4(); // 原型指向
C4.prototype.constructor = C4;
const c5 = new C4('zyg', 18);
c5.color.push('black');
const c6 = new C4('ws', 19);
console.log(c5.color, 'c5');
console.log(c6.color, 'c6');

/**
 *  原型式继承： 创建一个函数， 返回一个构造函数的实例，构建函数的原型指向 传进来的对象参数
 */

function createObj(o) {
    function F() {}
    F.prototype = o;
    return new F();
}
var person = {
    name: 'kevin',
    friends: ['daisy', 'kelly'],
};
var person1 = createObj(person);
var person2 = createObj(person);
person1.friends.push('ls')
person1.name = 'zyg'
person1.friends = ['sss', 'ccc']
console.log(person1.name, '??/')
console.log(person1.friends, '??/')
console.log(person2.friends, '??/')
console.log(person2.name, '??/name')

/**
 *  寄生式继承 创建一个用于封装继承过程的函数，该函数在内部以某种形式来增强对象，最后返回该对象
 *  缺点： 跟借用构造函数一样，每次创建对象都会把创建方法都走一遍
 */

function createObj2(o) {
    const clone = Object.create(o)
    clone.sayName = function() {
        console.log('hi')
        return this
    }
    return clone
}
const cc = {
    name: 'cc',
    age: 12
}
const d = createObj2(cc)
console.log(d.sayName())