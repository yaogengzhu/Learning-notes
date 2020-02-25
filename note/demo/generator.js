// 生成器和迭代器

/**
 *  理解koa基础，异步解决方案， async await 的基础
 */

 /**
  * 
  *  read 生存器
  */

 function read(books){ 
    let index = 0
    console.log(index)
    return {
        next() {
            // 只要没取到就为false， 取不到为true
            let done = index == books.length - 1 
            let value = done ? undefined : books[index++]
            return {
                value,
                done
            }
        }
    }
 }


 // 迭代器可以不停的调用next 方法得到一个结果 { value, done}
 // done 为true时取完
 let it = read(['js', 'node'])
 // it 有一个next ，每次调用next 会返回一个结果 { value, done}
 let r1 = it.next()
 console.log(it)
 let r2 = it.next()
 console.log(r1)
 console.log(r2)


 /**
  *   生成器函数 和 普通函数不一样。 返回迭代器
  *   执行的时候也不一样
  */

  function *listen(books) {
    console.log('开始')
    for( let i =0; i < books.length; i++) {
        // yield  放弃屈服
        yield books[i]
    }
  }

  let  it1 = listen(['js', 'node'])
  let r3 = it1.next()
  let r4 = it1.next()
  let r5 = it1.next()

console.log(r3)
console.log(r4)
console.log(r5)