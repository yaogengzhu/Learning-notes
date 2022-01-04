function compareFn(propName) {
    return function (object1, object2) {
        let value1 = object1[propName]
        let value2 = object2[propName]
        if (value1 < value2) {
            return -1
        } else if (value1 > value2) {
            return 1
        } else {
            return 0
        }
    }
}

const data = [
    {
        name: 'yaogeng',
        age: 27,
    },
    {
        name: 'yihua',
        age: 24,
    },
]
/**
 * compareFn 执行后，返回一个函数
 */
const result = data.sort(compareFn('age'))
console.log(result)
