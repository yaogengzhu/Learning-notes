// class Person  {
//     constructor() {
//         this.name = 'zs'
//     }

//     say() {
//         console.log(this.name)
//     }
// }
function Person() {
    this.name = 'zs'
}

Person.prototype.say = function() {
    console.log(this.name)
}
// const p = new Person()

// console.log(p.name);
// p.say()

function _new() {
    const obj = {} // 创建一个对象
    const constructor = Array.prototype.shift.call(arguments) // 取出构造函数
    obj.__proto__ = constructor.prototype // 对象继承构造函数原型
    const result = constructor.apply(obj, arguments) // 改变this指向 ----> 对象的this指向构造函数 为继承构造函数的属性和方法
    return obj // 返回一个对象
}


const p1 = _new(Person)
p1.say()
// p1.name

const arr = [1, 3, 3, null, undefined, NaN]

const arr1 = arr.filter( item => !isNaN(item) )
Number.isNaN(undefined) // false
isNaN(undefined) // true
console.log(arr1)