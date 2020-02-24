// 对象
let name = 'yaogengzhu'
let age = 10
let obj1 = {
    name: name,
    age: age
}
// 如果对象属性名和变量一直可以只写一个
let obj2 = {
    name,
    age
}
console.log(obj1, obj2)

let obj3 = { age: 1}
let obj4 = { age: 2}
let obj5 = {}
// obj5 继承自obj3 设置obj5的原型为obj3
// obj5.__proto__ = obj3
Object.setPrototypeOf(obj5, obj3)
// 
let obj6 = {
    __proto__: obj3
}
console.log(obj5.age, obj6.age)

let obj7 = { age: 1, getFood() {
    return '面包'
}}

let obj8 = {
    __proto__: obj7,
    getFood() {
        // 可以通过super调用父亲的方法
        return '牛奶'+super.getFood()
    }
}
