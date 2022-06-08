/**
 * Object.assgin
 */

/**
 * 常见用途
 *
 * 1. 为对象添加属性
 * 2. 为对象添加方法
 * 3. 克隆对象
 * 4. 合并多个对象
 * 5. 为属性添加默认值
 */

const obj = {}
Object.assign(obj, { a: 1 })
console.log(obj)

function Fn() {
  //
}
Object.assign(Fn.prototype, {
  hello: function () {
    console.log('ok')
  },
})

const fn = new Fn()
fn.hello()

// 克隆对象，只能克隆对象自身的值

function clone(origin) {
  return Object.assign({}, origin)
}

// 如果像保持原形继承 考虑使用 getPrototypeOf --> 返回一个对象的原型

function clone1(origin) {
  let originProto = Object.getPrototypeOf(origin)
  return Object.assign(Object.create(originProto), origin)
}

Object.assign({}, { a: 1 }, { c: 2 })


// 可以对数组进行合并

Object.assign([1, 2, 3], [1, 4]) // [1, 4, 3]