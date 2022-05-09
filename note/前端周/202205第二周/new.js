function Person(name) {
  this.name = name
}

Person.prototype.getName = function () {
  console.log(this.name)
  return this.name
}

const objectFactory = function () {
  const obj = new Object() // 从Object.prototype 上克隆一个空对象
  constructor = [].shift.call(arguments) // 取得外部传入的构造器，此时是Person
  obj.__proto__ = constructor.prototype // 指向正确的原型
  const ret = constructor.apply(obj, arguments) // 借用外部传入的构造器给obj设置属性, 也是改变this的指向
  return ret instanceof Object ? ret : obj // 确保总是返回一个对象
}

const newObj = objectFactory(Person, 'zyg', '1')
console.log(newObj)
newObj.getName()

/**
 * 1. 首先从Object.prototype 中克隆出一个空对象 --->  Object.create()
 * 2. 拿到需要被new的构造函数的构造器 constructor 并让空对象的__proto__ 原型---> 指向 contractor的原型prototype .
 *      ----> [].shift.call(arguments) // 取出参数第一个值 obj.__proto__ = constructor.prototype
 * 3. 借用构造器给obj设置属性 const result = construtor.apply(obj, arguments)
 */
