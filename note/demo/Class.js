// 类

/**
 *  以前js的类和构造函数是一体的,
 *  类里面可以定义构造函数，当你创建一个实例的时候就会创建构造函数
 */

// 定义一个类， 创建实例
class Parent {
    constructor(name) {
        this.name = name  // 实例的私有属性
    }
    // 属于实例的公有属性， 也相当于原型上的属性
    getName() {
        console.log(this.name)
    }
}

let p = new Parent('yaogengzhu')
console.log(p.getName())

class Child extends Parent {
    constructor(name, age ) {
        // super 指的是父类的构造函数
        super(name)
        this.age = age
    }

    getAge() {
        console.log(this.age)
    }
}

const child1 = new Child('zs', 22)
console.log(child1.name)

console.log(child1.getAge())

// create 方法

Object.create = function(prototype) {
    // 先创建一个空的函数
    function Fn() {
        Fn.prototype = prototype
    }

    // 返回这个函数的实例
    return new Fn() //
}


function Father() {
    this.name = 'yaogengzhu'
}
function Son() {

}

// 静态属性 是不需要new是直接可以调用的

Son.prototype = Object.create(Father.prototype)
Son.prototype.constructor = Son
let son1 = new Son()
console.log(son1.constructor)
console.log(son1.name)

// 类 和 类的实例
// 一个属性如果放在原型上 是可以通过实例来调用的
// 