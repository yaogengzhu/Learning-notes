const obj = {
  a: 1,
  [Symbol()]: 0,
}

// 判断对象是否有该属性 ---》 a in Object的替代方案
console.log(Reflect.has(obj, 'a'))

//
console.log(Object.keys(obj))
console.log(Reflect.ownKeys(obj))

console.log(Reflect.deleteProperty(obj, 'a')) // 替代 delete obj.a
