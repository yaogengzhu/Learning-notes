# ES6

## let && const 
> 申明变量的方式，解决变量提升的问题

```js
for (let i = 0; i < 3; i ++) {
    setTimeout(() => {
        console.log(i)
    }, 100)
}

// 相当于 (es6转义之后)
for (var i = 0; i < 4; i++) {
    (function(i) {
        setTimeout(() => {
            console.log(i)
        }, 100)
    })(i)
}
```

> const 是常量的定义方式, 虽然说常量不能再引用别的对象了， 但是它的值如果是一个引用对象类型的话，引用对象的值还是可以改的
```js
const PI = 3.14
console.log(PI)
```

## 解构
> 分解一个数组的结构

```js
 let arr = [1, 2, 3]
 let a = arr [0]
 let b = arr [1]
 let c = arr [2]

 // 简化方式
let [d, e, f] = arr 
console.log(d, e, f) // 1 2 3
```

> 较为复杂的方式
```js
let arr2 = [{ name: '龙风', age: 18}, [1,2], 3]
let [{name, age}, [g, j], k] = arr2
// 对象的解构，数组解构
let [json, arr3, l] = arr2
console.log(name, age, g, j, k)
console.log(json, arr3, l)
// 解构对象
let obj1 = { name1: 'yaogengzhu', age1: 9}
let { name1, age1 } = obj1

// 命名的赋值 (可以换一个名字)
let { name1: name2, age1: age2} = obj1
console.log(name1, age1 )
console.log(name2, age2)

// 默认解构, 能取出来的值就取出来的追值，取不出来就用默认值
let obj2 = { name3: 'longfeng'}
let { name3, age3 } = obj2
console.log(name3, age3)

// 省略赋值（不想的数据，可以省略）
let arr4 = [1, 2, 3]
let [ , , j1] = arr4
console.log(j1)
```
> 运行结果
```md
1 2 3
1 2 3
龙风 18 1 2 3
{ name: '龙风', age: 18 } [ 1, 2 ] 3
yaogengzhu 9
yaogengzhu 9
longfeng undefined
3
```

## 字符串
> 模版字符串

作用
- 字符串里可以嵌套变量
- 模版字符串可以换行
- 带标签的的模版字符串

> 字符串嵌套变量
```js
let name = 'zhuyaogeng', age = 19
let desc = name + '2020-02-21' + age
console.log(desc)
```
> 字符串原理(面试可能会考察)
```js
let desc2 = "${name} 2020-02-21 ${age}"
// 模拟操作 原理 (替换)
function replace(desc) {
    return desc.replace(/\$\{([^}]+)\}/g, function(matched, key) {
        console.log(arguments)
        return eval(key)
    })
}
console.log(replace(desc2))
```

> 模版字符串换行
```js
const user = [{id: 1, name: 'zhuyaogeng'}, {id: 2, name: 'longfeng'}]

/**
 *  <ul>
 *      <li>1: zhuyaogeng<li>
 *      <li>2: longfeng<li>
 *  <ul>
 */

 // map 方法 映射， 将老数组的每一个元素映射为新数组的每一个元素
 const newLi = user.map(function(user, index) {
     return `<li>${user.id}: ${user.name}</li>`
 }).join('')
 console.log(newLi)
 let ul = (
     `
     <ul>${newLi}<ul>
     `
 )
 console.log(ul)
 ```

>  带标签的模版字符串
```js
 // 用法三
 // 拓展： 其他运算符， 会把所有的参数，放入一个数组里 (rest其他运算符只能作为最后一个参数)
 // 希望有自己的模版拼接逻辑
 function test(string, ...values) {
     console.log(string, values)
     console.log(arguments)
     let result = ''
     for (let i = 0; i < values.length; i++) {
        result += (string[i] + values[i])
     }
     result += string[string.length - 1]
     return result.toUpperCase()
 }
 // 带标签的模版字符串像一个函数调用，
 // 1. 参数1文本的数组， 参数2
 let str = test`${name}测试${age}结果`
 console.log(str, 'str')
```

### 额外介绍字符串的新方法
- startsWith(以什么开头)
- endsWith(以什么结尾)
- includes(包含关系)
- repeat(重复)

```js
let str2 = 'yaogengzhu'
console.log( str2.startsWith('y'))


let filename = 'avatar.jpg'
if (filename.endsWith('jpg')) {
    console.log('是一张图片')
}

let content = 'abc'
console.log(content.includes('b'))
```

> 运行结果
```md
[Arguments] {
  '0': '${name}',
  '1': 'name',
  '2': 0,
  '3': '${name} 2020-02-21 ${age}' }
[Arguments] {
  '0': '${age}',
  '1': 'age',
  '2': 19,
  '3': '${name} 2020-02-21 ${age}' }
zhuyaogeng 2020-02-21 19
<li>1: zhuyaogeng</li><li>2: longfeng</li>

     <ul><li>1: zhuyaogeng</li><li>2: longfeng</li><ul>
     
[ '', '测试', '结果' ] [ 'zhuyaogeng', 19 ]
[Arguments] { '0': [ '', '测试', '结果' ], '1': 'zhuyaogeng', '2': 19 }
ZHUYAOGENG测试19结果 str
true
是一张图片
true
```
