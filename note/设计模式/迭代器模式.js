/**
 * 迭代器模式： 是指提供一种方法顺序访问一个聚合对象中的各个元素，而又不需要暴露该对象的内部状态
 *
 * 迭代器分为两种： 内部迭代和外部迭代
 *
 * 内部迭代：
 */

const each = function (arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback.call(arr[i], i, arr[i])
    }
}

each([1, 2, 4], function (i, v) {
    console.log(i, v)
})

const compare = function (arr1, arr2) {
    if (arr1.length !== arr2.length) {
        // console.log('arry1 和 arry2 不想等');
        return
    }

    each(arr1, function (i, n) {
        if (n !== arr2[i]) {
            console.log('arry1 和 arry2 不想等')
            return
        }
    })

    // console.log('相等')
}
// compare([1, 2], [2, 4])
