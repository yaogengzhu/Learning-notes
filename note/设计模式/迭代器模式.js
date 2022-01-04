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

// 外部迭代
const Iterator = function (obj) {
    var current = 0

    var next = function () {
        current += 1
    }

    var isDone = function () {
        return current >= obj.length
    }

    var getCurrentItem = function () {
        return obj[current]
    }

    return {
        next,
        isDone,
        getCurrentItem,
        length: obj.length,
    }
}

// 改写外部迭代模式
const compareOutter = function (iterator1, iterator2) {
    if (iterator1.length !== iterator2.length) {
        return console.log('iterator1 和 iterator2 不相等')
    }

    while (!iterator1.isDone() && !iterator2.isDone()) {
        if (iterator1.getCurrentItem() !== iterator2.getCurrentItem()) {
            return console.log('iterator1 和 iterator2 不相等')
        }

        iterator1.next()
        iterator2.next()
    }

    console.log('相等')
}
let iterator1 = Iterator([1, 2, 3])
let iterator2 = Iterator([1, 2, 3, 4])

compareOutter(iterator1, iterator2)

// 倒叙迭代器
const fallEach = function (arr, callback) {
    for (let i = arr.length - 1; i >= 0; i--) {
        callback(i, arr[i])
    }
}

fallEach([1, 2, 3], function (i, k) {
    console.log(i, k)
})

// 中止迭代器, 像for循环中的break一样，提供跳出循环的方法。
const breakEach = function (arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(i, arr[i]) === false) {
            break
        }
    }
}

breakEach([1, 2, 3, 4], function (i, n) {
    if (n > 3) return false
    console.log(n)
})

// 迭代器模式的应用举例

/**
 *  根据不同浏览器获取相应的上传组件对象
 */

const getActiveUploadObj = function() {
    try {
        retrun new ActiveXObject('IE上传')
    } catch(e) {
        return false
    }
}

const getFlashUploadObj = function() {
    if (supportFlash()) { // 省略该方法
        var str  = `<object type='xx'></object>` // 省写
        return $(str).appendTo($('body'))
    }
    return false
}

const getFormUploadObj = function() {
    var str = `<input type='file' />`
    return $(str).appendTo($('body'))
}

/**
 * 提供以下几个步骤
 * 1. 提供一个可被迭代的方法，使getActiveUploadObj， getFlashUploadObj，getFormUploadObj 可以按照优先级被循环迭代
 * 2. 如果正在被迭代的函数返回一个对象，则表示找到了正确的upload对象，反之如果该函数返回false，则迭代器继续工作
 */

const iteratorUploadObj = function() {
    for (let i = 0; fn = arguments[i++]) {
        const uploadObj = fn()
        if (uploadObj !== false) {
            return uploadObj
        }
    }
}

const uploadObj = iteratorUploadObj(getActiveUploadObj, getFlashUploadObj, getFormUploadObj)