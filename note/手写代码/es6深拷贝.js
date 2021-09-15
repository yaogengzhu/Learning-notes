function deepClone1(origin) {
    if (typeof origin !== 'object' || typeof origin == undefined) {
        return origin;
    }
    if (origin instanceof Date) {
        return new Date(origin);
    }
    if (origin instanceof RegExp) {
        return new RegExp(origin);
    }
    let target = new origin.constructor();
    for (let k in origin) {
        if (origin.hasOwnProperty(k)) {
            target[k] = deepClone(origin[k]);
        }
    }
    return target;
}

const obj = {
    name: 'zyg',
    age: 19,
    address: {
        provice: '湖北',
        city: '武汉',
        location: ['1232323', '12123.32'],
    },
    hobby: ['平平'],
};

const obj1 = deepClone1(obj);
obj1.address.provice = '湖南';
console.log(obj1);
console.log(obj);

/**
 *  解决重新拷贝的问题
 */

function deepClone(origin, hasMap = new WeakMap()) {
    if (typeof origin !== 'object' || typeof origin == undefined) {
        return origin;
    }
    if (origin instanceof Date) {
        return new Date(origin);
    }
    if (origin instanceof RegExp) {
        return new RegExp(origin);
    }
    // 解决这个对象重复拷贝问题
    const hasKey = hasMap.get(origin);
    if (hasKey) {
        return hasKey;
    }
    let target = new origin.constructor();
    hasMap.set(origin, target);
    for (let k in origin) {
        if (origin.hasOwnProperty(k)) {
            target[k] = deepClone(origin[k], hasMap);
        }
    }
    return target;
}

let test1 = {};
let test2 = {};
test1.test2 = test2;
test2.test1 = test1;

const result = deepClone(test1);
console.log(result);


const obj = {a: 1}
console.log(new obj.constructor)