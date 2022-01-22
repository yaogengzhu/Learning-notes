var a = { },
 b = '0',
 c = 0

 a[b] = 'aa'
 a[c] = 'bb'
 console.log(a[b])

 /***
  * 堆栈内存
  * 
  *  1. 对象
  * 
  */

/**
 * 二分查找
 * @param {F} A 
 * @param {*} x 
 * @returns 
 */
function bsearch(A, x) {
    let l = 0;
    let r = A.length - 1; // 右边界
    let guess

    while (l <= r) {
        guess = Math.floor((l + r) / 2)

        if (A[guess] === x) return guess
        else if (A[guess] > x) r = guess - 1;
        else l = guess + 1
    }

    return -1;
}


console.log(bsearch([1,4,56,73,32,32], 4))



console.log(1)
setTimeout(() => {
    console.log(2)
}, 0)
Promise.resolve().then(() => {
    console.log(3)
})
console.log(4)

Promise.resolve().then(() => {
    // console.log(5)
    setTimeout(() => {
        console.log(5)
    }, 0);
})

setTimeout(() => {
    console.log(6)
    console.log(7)
}, 0);

Promise.resolve().then(() => {
    console.log(8)
})

