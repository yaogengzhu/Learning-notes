// 字符串 (模版字符串)
let name = 'zhuyaogeng', age = 19
// let desc = name + '2020-02-21' + age
// console.log(desc)

// 1. 字符串里可以嵌套变量 
// 2. 模版字符串可以换行
// 3. 代标签的模版字符串

// let desc1 = `${name} 2020-02-21 ${age}`
let desc2 = "${name} 2020-02-21 ${age}"
// 模拟操作 原理 (替换)
function replace(desc) {
    return desc.replace(/\$\{([^}]+)\}/g, function(matched, key) {
        console.log(arguments)
        return eval(key)
    })
}

console.log(replace(desc2))

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


 // 字符串的新方法 
 // startsWith  （是以什么开头）
 // endsWith  以什么结尾
 // includes() 包含关系
 // repeat  重复多少次
let str2 = 'yaogengzhu'
console.log( str2.startsWith('y'))


let filename = 'avatar.jpg'
if (filename.endsWith('jpg')) {
    console.log('是一张图片')
}

let content = 'abc'
console.log(content.includes('b'))