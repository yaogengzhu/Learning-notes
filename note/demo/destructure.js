/**
 *  解构： 分解一个数组的解构
 */

 let arr = [1, 2, 3]
 let a = arr [0]
 let b = arr [1]
 let c = arr [2]

 console.log(a, b, c)
// 解构的时候，等号两边结构类似， 右边还必须是一个真实的值
let [d, e, f] = arr 
console.log(d, e, f)

// 较为复杂的结构
let arr2 = [{ name: '龙风', age: 18}, [1,2], 3]
let [{name, age}, [g, j], k] = arr2
// 对象的解构，数组解构
let [json, arr3, l] = arr2
console.log(name, age, g, j, k)
console.log(json, arr3, l)
// 解构对象
let obj1 = { name1: 'yaogengzhu', age1: 9}
let { name1, age1 } = obj1
// 命名的赋值
let { name1: name2, age1: age2} = obj1
console.log(name1, age1 )
console.log(name2, age2)

// 默认解构, 能取出来的值就取出来的追值，取不出来就用默认值
let obj2 = { name3: 'longfeng'}
let { name3, age3 } = obj2
console.log(name3, age3)

// 省略赋值
let arr4 = [1, 2, 3]
let [ , , j1] = arr4
console.log(j1)