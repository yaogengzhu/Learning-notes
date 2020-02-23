// 函数


// 1. 默认参数  (a.必填项不填报错 b. 有些参数不传递参数的话有默认值)
function ajax(url = new Error('url 不能为空'), method = 'GET', dataType = 'json') {
    console.log(url)
    console.log(method)
    console.log(dataType)

    // if (typeof url === 'undefined') thorw Error('url 不能为空')
    
}

"use strict";
function ajax() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Error('url 不能为空');
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
  var dataType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'json';
  console.log(url);
  console.log(method);
  console.log(dataType); 
  // if (typeof url === 'undefined') thorw Error('url 不能为空')
}

ajax('/user')

// 2. 展开操作符
function sum(prefix, a, b) {
    return prefix + (a + b)
}
function sum1(prefix, ...rest) {
    // 1. 循环求和
    // let result = 0
    // rest.forEach(function(item){
    //     result += item
    // })

    // 2 reduce 计算 汇总 收敛 把数组中的一堆值计算出来一个值

    // 可以传递一个参数，也可以传递两个参数
    // 第二个参数为初始值 0 
    let result = rest.reduce(function(val, item, index, origin) {
        return val + item   // 返回值会成为函数下一次执行的val
    }, 0)

    // 求均值
    let avage = rest.reduce( function(val, item, index, origin) {
        let sum = val + item  // 返回值会成为函数下一次执行的val
        if (index === 0) {
            return sum/ origin.length
        } else {
            return sum
        }
    }, 0)

    return prefix + avage
}
console.log(sum1('$', 1 , 3, 4, 12))


// 实现reduce方法
Array.prototype.reduce1 = function(reducer, initialval) {
    for (let i = 0; i < this.length; i++ ) {
        // 递归
        initialval = reducer(initialval, this[i])
    }
    return initialval
}

const result2 = [1,2, 4].reduce1(function(val, item) {
    return val + item
}, 0)

console.log(result2)

let arr4 = [1, 2, 3]
let arr5 = [4, 5, 6]
let arr6 = [].concat(arr4).concat(arr5)
// 展开运算符，相当于把数组的每个元素依次取出放出
let arr7 = [...arr4, ...arr5]
console.log(arr6)
console.log(arr7)

// 拿出最大值
let max = Math.max(...arr7)
console.log(max)

let obj1 = { name: 1 } 
let obj2 = { age: 22 }
let obj3 = {}

// 1. 循环赋值
// for(let key in obj1) {
//     obj3[key] = obj1[key]
// }
// for(let key in obj2) {
//     obj3[key] = obj2[key]
// }
console.log(obj3)

// 2. assign
// Object.assign(obj3, obj1, obj2)
// console.log(obj3)

// 3. 对象解构
obj3 = {...obj1, ...obj2}
console.log(obj3)

// 实现深拷贝
obj4 = { name: 'yaogengzhu', age: 12,
 home: { city: 'wuhan', }
}


const obj5 = {}
// let obj6 = Object.assign(obj5, obj4)

// 深拷贝
// let obj6 = JSON.parse(JSON.stringify(obj4))
let obj6 = cloneObj(obj4)
obj6.home.city = 'huangshi'
console.log(obj6.home.city)
console.log(obj4.home.city)
// 改变obj6 不改变obj4


// 简单的深度拷贝
function cloneObj(origin) {
    let newObj = {}
    for(let key in origin) {
        // 判断类型
        if (typeof origin[key] === 'object') {
            newObj[key] = cloneObj(origin[key])
        } else {
            newObj[key] = origin[key]
        }
    }

    return newObj
}

// 箭头函数
// 声明函数更简单的实现过程
let sum21 = function(a, b) {
    return a + b
}

// 简化1
let sum31 = (a, b) =>  {
    return a + b
}

// 简化2 
let sum22 = (a, b) => a + b

// 简化3 如果只有一个参数
let test = b => b

let obj = {
    name1: 'zhuyaogeng',
    getName() {
        setTimeout(() => {
            console.log(this.name1, 'name1')
        }, 100)
    }
}
obj.getName()