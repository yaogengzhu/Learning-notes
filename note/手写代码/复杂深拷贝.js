/**
 * 1. 函数参数进行校验， 判断对象的方式
 * 2. 考虑到数组的兼容
 * @param {*} obj
 * @returns
 */

function deepClone(obj, map = new Map()) {
    if (!isObject(obj)) return obj // 如果返回
    let cloneObj = Array.isArray(obj) ? [] : {}
    if (map.get(obj)) {
        return map.get(obj)
    }
    map.set(obj, cloneObj)
    for (let key in obj) {
        cloneObj[key] = deepClone(obj[key], map)
    }
    return cloneObj
}
function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]'
}
let obj = {
    a: 1,
    b: {
        city: 'wh'
    }
}

let v = deepClone(obj)
v.b.city = 'nj'
console.log(obj)