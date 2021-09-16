/**
 * instanceof 判断一个实例是否属于这个构造函数
 *
 *
 * 拓展
 * prototype 原型 ---> 附属于函数的一个属性  本质是对象
 * __proto__ 原型连接点 --> 附属于对象的属性， 本质也是一个对象
 *
 * 对象的__proto__保存着该对象构造函数的prototype
 */

/**
 *
 * @param {*} origin
 * @param {*} target
 * @returns
 */
function myInstanceof(origin, target) {
    while (origin) {
        if (origin.__proto__ === target.prototype) {
            return true;
        }
        orginal = origin.__proto__;
    }
    return false;
}
