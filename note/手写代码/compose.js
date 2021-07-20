function f1(x) {
    return x + 1
}

function f2(x) {
    return x + 2
}

const a = compose(f1, f2)

function compose(...fn) {
    if (!fn.length) return (v) => v
    if (fn.length === 1) return fn[0]
    return fn.reduce(
        (pre, cur) =>
            (...arg) =>
                pre(cur(...arg))
    )
}
// console.log(a(1))

// reduce 方法

/***
 *  1. acc 累计器
 *  2. cur 当前值
 *  3. idx 索引
 *  4。src 源数组
 *
 *  arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
 */

// demo1

const array1 = [1, 2, 3, 4] // 计算求和
const result = array1.reduce((acc, cur) => acc + cur)
const result1 = array1.reduce((acc, cur) => acc + cur, 10) // 第二个参数为 acc初始值 initialValue, 没有提供的话 拿数组的第一个值为初始值

array1.reduce((acc, cur, idx, src) => {
    return acc + cur
}, 10)

Array.prototype.myReducer = function (recuder, initialValue) {
    // 判断是否有初始值
    const hasInitval = arguments.length > 1
    let ret = hasInitval ? initialValue : this[0] // 否则会取数组的第一个值
    for (let i = hasInitval ? 0 : 1; i < this.length; i++) {
        ret = recuder.call(undefined, ret, this[i], i, this) // reducer的自我调用
    }
    return ret
}
// 数组值的累加
var sum = Array([0, 1, 2, 3]).reduce(function (accumulator, currentValue) {
    return accumulator + currentValue
}, 0)

// 对象求和
var initialValue = 0
var sum = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(function (
    accumulator,
    currentValue
) {
    return accumulator + currentValue.x
},
initialValue)
console.log(sum)

// 统计数组字数出现的次数
var arr1 = [1, 1, 1, 1, 1, 2, 2, 2, 3, 4, 5, 9]
const c = arr1.reduce((acc, cur) => {
    if (cur in acc) {
        acc[cur]++
    } else {
        acc[cur] = 1
    }
    return acc // { '1': 5, '2': 3, '3': 1, '4': 1, '5': 1, '9': 1 }
}, {})

// 数组去重呢
const newA = arr1.reduce((acc, cur) => {
    if (acc.includes(cur)) {
        return acc
    } else {
        acc.push(cur)
    }
    return acc
}, []) // [ 1, 2, 3, 4, 5, 9 ]

// 按属性对obj 进行分类

var people = [
    { firstName: 'A', name: 'Alice', age: 21 },
    { firstName: 'A', name: 'Alice', age: 21 },
    { firstName: 'A', name: 'Alice', age: 21 },
    { firstName: 'M', name: 'Max', age: 20 },
    { firstName: 'J', name: 'Jane', age: 20 },
]


var  s = people.reduce((acc, cur) => {
    const key = cur.firstName
    // console.log(cur.firstName)
    // console.log(key)
    if (!acc[key]) {
        acc[key] = []
    }
    acc[key].push(cur)
    return acc
}, {})

let rs = []
for (let key in s ) {
    // console.log(key)
    if ({}.hasOwnProperty.call(s, key)) {
        const val = s[key];
        rs.push(val);
    }
}

console.log(rs)