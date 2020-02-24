let arr1 = [25, 66, 88, 99, 5]
// filter 方法 (返回true，会保留在新数组中，否则会被删除)

Array.prototype.filter1 = function(fn) {
    let newArr = []
  
    for (let i = 0; i < this.length; i++ ) {
        let flag = fn(this[i])
        flag && newArr.push(this[i])

    }
    return newArr
}

let arr2 = arr1.filter1(function(item) {
    return item > 44
})

console.log(arr2)

// 
let arr3 = Array(3)
arr3.fill(3)
console.log(arr3)

// 常用的 forEach map filter some find findIndex every

let arr4 = [1, 2, 3]
Array.prototype.find1 = function(fn) {
    for(let i=0; i < this.length; i++) {
        let flag = fn(this[i])
        if (flag) {
            return this[i]
        }
    }
}
let result = arr4.find(function(item) {
    return item === 2
})
console.log(result)

//findIndex
Array.prototype.findIndex1 = function(fn) {
    for(let i=0; i < this.length; i++) {
        let flag = fn(this[i])
        if (flag) {
            // return this[i]
            return i
        }
    }
}

// some 
Array.prototype.some1 = function(fn) {
    for(let i=0; i < this.length; i++) {
        let flag = fn(this[i])
        if (flag) {
            return flag 
        } else {
            return false
        }
    }
}

// every 
Array.prototype.some1 = function(fn) {
    for(let i=0; i < this.length; i++) {
        let flag = fn(this[i])
        if (!flag) {
            return false 
        }
        return true
    }
}

// Array.from 类数组转成数组
// function print() {
//     Array.from(arguments).forEach(funtion(item) {
//         console.log(item)
//     })
// }

// Array.of(3) 
let arr5 = Array.of(4)
console.log(arr5)