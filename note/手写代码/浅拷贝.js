function shallowCopy(obj) {
    let newObj = {}
    // for in 可枚举属性，包括继承的可枚举属性。
    for (let key in obj) {
        console.log(key, obj[key]);
        // 定义：判断该对象是否有某个指定的自定义属性，不包含继承原型链的属性
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key]
        }
    }
    return newObj
}


let a = { 
    c: 2,
    f: {
        a: 3
    },
    d: {
        d: {
            c: 3
        }
    }
}

Object.defineProperty(a, 'g', {
    value: 42,
    enumerable: false, // 是否可以枚举
  });
// console.log(a, 'string?')
// Object.prototype
const d = shallowCopy(a)
// const d = {
//     ...a
// }
console.log(d.g)

const h = Reflect.ownKeys(a) // 回一个由目标对象自身的属性键组成的数组。
console.log(h, '??')

/**
 * 
 *  什么是可枚举属性？
 *  指的对象内部‘可枚举标志'为true的属性。对于通过赋值，和属性初始化的属性，该值为true， 通过Object.defineProperty定义的属性，这该属性的这个标志为false
 * 
 *  注： 对象属性中标识不可枚举的属性，一般不能为遍历工具所遍历
 * 
 */