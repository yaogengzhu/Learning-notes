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
