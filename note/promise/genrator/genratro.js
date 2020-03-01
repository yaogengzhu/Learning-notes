/**
 *   在Js中函数是第一等公民， 既可以作为参数， 也可以作为返回值
 */


// 函数作为返回值
function isType(type) {
    return function (param) {
        return Object.prototype.toString.call(param) === `[object ${type}]`
    }
}

// lodash   after 指定一个函数被调用多少次才会真正的执行
function eat() {
    console.log('eat')
}


// 函数作为参数传入另一个函数里面
function after(times, fn) {
    let count = 0
    return function () {
        if (++count === times) {
            fn()
        }
    }
}

// 前两次调用无用
let newEat = after(3, eat)
newEat()
newEat()
newEat()