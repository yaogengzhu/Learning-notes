/**
 *  先实现一个组合继承
 */

// function Parent(name) {
//     this.name = name;
//     this.colors = ['red', 'green', 'blue']
// }

// function Child(name, age) {
//     Parent.call(this, name);
//     this.age = age
// }

// Child.prototype = new Parent();
// Child.prototype.constructor = Child;
/**
 * 寄生组合继承
 *
 */
function Parent(name) {
    this.name = name;
    this.colors = ['red', 'green', 'blue'];
}

Parent.prototype.getName = function () {
    console.log(this.name);
    return this.name;
};

function Child(name, age) {
    Parent.call(this, name);
    this.age = age;
}
// const F = function () {}; // 创建一个构造函数
// F.prototype = Parent.prototype; // 当前构造函数原型指向Parent的原型
// Child.prototype = new F();
// const child1 = new Child('zyg', 19);
// console.log(new F(), '???');
// console.log(child1.name);

function object(o) {
    function F() {}
    F.prototype = 0;
    return new F();
}
function prototype(child, parent) {
    const prototype = object(parent.prototype);
    prototype.constructor = child;
    child.prototype = prototype;
}
// 使用时
prototype(Child, Parent);

const child = new Child('zyg', 27);
const p1 = new Parent('ls');
console.log(child);
console.log(p1.getName(), 'xx');
