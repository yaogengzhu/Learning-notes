# defineProperty proxy reflect 区别


## defineProperty
defineProperty 可以直接在一个对象上定义新的属性，或者修改原有的属性，并返回此对象

语法
- Object.defineProperty(obj, prop, descriptor)
```js
Object.defineProperty({a: 1}, 'b', {
    value: 3, // 属性值
    configurable: true, // 该属性才能被改变和也能在对应的对象上被删除
    enumerable: true, // 枚举属性
    writable: true, // 属性可以被改写
    set: function() {},
    get: function() {}
})
```

## Proxy
Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。


```js
const validator = {
    set: function(obj, prop, value) {
        if (prop === 'age') {
            if(!Number.isInteger(value)) {
                console.log('age 必须是一个整数')
            }
        }
    }
}

let person = new Proxy({}, validator)

person.age = 44
```


## Reflect 
Reflect是内置对象，它提供一个内置的对拦截 JavaScript 操作的方法...

- 检测一个对象是否存在特殊属性  Reflect.has(obj, '属性名')
- Reflect.ownKeys(obj) // 返回这个对象的keys