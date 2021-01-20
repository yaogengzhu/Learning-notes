
/**
 *  接受三个参数
 *  1. object 操作对象本身
 *  2. 需要操作属性的名字
 *  3. describe
 */

let obj = {
    a: 1
}
Object.defineProperty(obj, 'b' , {
    value: 2,
    enumerable: true,
    writable: true
})
for( let i in obj) {
    console.log(i, '--')
}

Object.defineProperties(obj, {
    a: {
        value: 100
    },
    b: {
        value: 30
    }
})

console.log(obj)