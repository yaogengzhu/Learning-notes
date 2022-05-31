// Proxy 用于修改某些操作的默认行为

const obj = new Proxy(
  {},
  {
    get: function (target, propkey, recevier) {
      console.log(propkey, 'propkey')
      return Reflect.get(target, propkey, recevier)
    },

    set: function (target, propkey, value, recevier) {
      console.log(target, 'target')
      return Reflect.set(target, propkey, value, recevier)
    },
  }
)

obj.a = 1

++obj.a

// 拦截读取属性的行为的列子

const person = {
  name: 'zyg',
  age: 20,
}

const hanlder = {
  get: function (target, propKey, recevier) {
    if (['name', 'age'].includes(propKey)) {
      return Reflect.get(target, propKey, recevier)
    }
    return '0'
  },
}

const proxy = new Proxy(person, hanlder)

console.log(proxy.age)
console.log(proxy.name)
console.log(proxy.test)