/**
 *  读取异步文件
 */

 let fs = require('fs')

 /**
  *  回调的特点是 error first 
  *  调用回调函数的时候，第一个参数永远是错误对象
  */

  /**
   * 
   * 回调函数的问题
   *  1. 无法捕获错误 try catch 
   *  2. 不能return
   *  3. 回调地狱
   */
function read(filename) {
    fs.readFile(filename, 'utf-8', function( err, data) {

        throw new Error('出错了')
        if (err) {
            console.log(err)
        } else {
            console.log(data)
        }
    })
}


try {
    let result = read('./1.txt')
} catch(e) {
    console.log('Error', e)
}

console.log(2)