/*
 * @Author: yaogeng.zhu
 * @Date: 2021-12-15 17:34:34
 * @Last Modified by:   yaogeng.zhu
 * @Last Modified time: 2021-12-15 17:34:34
 */

/**
 * 手写apply
 * @param {*} cxt
 * @param {*} args
 * @returns
 */

Function.prototype.myApply = function (cxt, args) {
    ctx = cxt || window;
    const key = Symbol();
    ctx[key] = this;
    const result = cxt[key](...args);
    delete cxt[key];
    return result;
};
