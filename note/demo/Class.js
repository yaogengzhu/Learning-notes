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