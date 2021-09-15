/**
 * es5版深拷贝
 * @param {*} origin 源对象
 * @param {*} target 目标对象 {}
 * @returns
 */

/**
 * 1. 遍历这个对象 （for in）
 * 2. 因为for in 会遍历出原型上的对象属性，需要判断是否是属于本身的属性 hasProperty
 * 3. 需要判断这个对象就是一个对象并且不是null
 * 4. 判读这个对象是 对象还是数组类型 ===> 给tar[k] 创建一个空的类型
 * 5. 递归该方法 传入参数 origin[k]
 * 6. 如果对象不是一个对象或者是null, 给tar[k] = origin[k]
 *
 */
function deepClone(origin, target) {
    let tar = target || {}; // 可以传递一个对象进去，首先判断这个对象是不是存在
    const toStr = Object.prototype.toString;
    const OBJECT = '[object Object]';
    for (let k in origin) {
        if (origin.hasOwnProperty(k)) {
            // 判断该属性是否属于本身， 而不是原型上的属性
            if (typeof origin[k] === 'object' && typeof origin[k] !== null) {
                // 判断该对象是否是对象
                tar[k] = toStr.call(origin[k]) === OBJECT ? {} : [];
                deepClone(origin[k], tar[k]);
            } else {
                tar[k] = origin[k];
            }
        }
    }
    return tar;
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

const obj1 = deepClone(obj, {});
obj1.address.provice = '湖南';
console.log(obj1);
console.log(obj);
