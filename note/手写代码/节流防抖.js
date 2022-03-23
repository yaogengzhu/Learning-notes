/*
 * @Author: yaogeng.zhu
 * @Date: 2021-12-15 17:38:40
 * @Last Modified by: yaogeng.zhu
 * @Last Modified time: 2021-12-15 17:43:23
 */

/**
 * 多次点击，间隔多少时间执行一次
 * @param {*} fn
 * @param {*} delay
 * @returns
 */
function throttle(fn, delay) {
    let timer = null;
    return function () {
        if (timer) return;
        const args = Array.prototype.slice.call(arguments);
        timer = setTimeout(() => {
            fn.call(this, ...args);
            timer = null;
        }, delay);
    };
}

/**
 * 点击多次，只执行一次，如果定时器存在，直接清空定时器
 * @param {*} fn
 * @param {*} delay
 * @returns
 */
function debounce(fn, delay) {
    let timer = null;
    return function () {
        if (timer) {
            clearTimeout(timer);
        }
        const args = Array.prototype.slice.call(arguments);
        timer = setTimeout(() => {
            fn.call(this, ...args);
        }, delay);
    };
}

/* 实现一个类似于`Function.prototype.call`的方法，可以改变函数的上下文。 */
Function.prototype.myCall = function(context) {
    context = context ? context : window
    const args = [...arguments].slice(1) // 取出剩余的参数
    const key = Symbol()
    context[key] = this // 重置上下文
    const result = context[key](...args) // 执行函数
    delete context[key]
    return result
}


/* 实现一个类似于`Function.prototype.call`的方法，可以改变函数的上下文。 */
Function.prototype.myApply = function(context) {
    context = context ? context : window
    const args = [...arguments].slice(1) // 取出剩余的参数
    const key = Symbol()
    context[key] = this // 重置上下文

    if (!args) {
        const result = context[key](...args) // 执行函数
        delete context[key]
        return result
    }
    const result = context[key](...args) // 执行函数
    delete context[key]
    return result
}



/* It's creating a new function that has the same properties as the original function, but with the
context of the new context. */
Function.prototype.myBind = function(context) {
    context = context ? context : window
    const key = Symbol()
    context[key] = this // 重置上下文
    return context[key]
}
