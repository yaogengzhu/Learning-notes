/**
 * 生成器是一个函数， 可以用来生成迭代器
 * 生成器和普通函数不一样， 普通函数一旦执行，就必须执行完毕
 * 生成器函数可以暂停
 */

/**
 *  生成器函数遇到暂停点就会停下来，直到再次让他执行
 */

/**
 * 
 */

// 生成器函数和普通函数不一样， 调用它的话函数并不会立即执行
// 它会返回一个生成器的迭代器，迭代器是一个对象，每调用next() 就会执行一次
function* go() {
    console.log(1)
    // 此处的b 是供外界输入进来的值
    // 这行代码实现了输入和输出， 本次的输出放入yield的后面，下次的输入放在yield的前面
    let b = yield true

    console.log(2)
    let c = yield b

    console.log(3)
    // let d = yield c
    return c
}

let it = go()

// r1.next()
let r1 = it.next('A值')
// 第一次调用next，会返回一个对象，第一个值value是 yield 'a', 第二个值是 done 表示迭代是否完成
// next 第一次执行传递参数是没有意义的
console.log(r1)
let r2 = it.next('B值')
console.log(r2)
let r3 = it.next('c值')
console.log(r3)