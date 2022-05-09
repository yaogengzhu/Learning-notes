/**
 * instanceof 判断一个实例是否属于这个构造函数
 * 对比typeof 用于判断一个变量的类型
 *
 * 拓展
 * prototype 原型 ---> 附属于函数的一个属性  本质是对象
 * __proto__ 原型连接点 --> 附属于对象的属性， 本质也是一个对象
 *
 * 为什么undefined 和 null 使用typeof 判断都是对象
 * ---> 原因：js在底层存储变量时，会在变量的机器码低位1-3位存储其类型信息。
 * ---> null, 所有的机器码都为0， 因此直接被当作对象来看 ---> 避免使用typeof 来判断null
 *
 * 对象的__proto__保存着该对象构造函数的prototype
 */

/**
 *
 * @param {*} origin
 * @param {*} target
 * @returns
 */
// 循环判断原型
function myInstanceof(origin, target) {
  while (origin) {
    if (origin.__proto__ === target.prototype) {
      return true
    }
    orginal = origin.__proto__
  }
  return false
}

console.log(myInstanceof(null, Object)) // false
console.log(typeof null === 'object') // true
