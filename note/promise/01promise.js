/**
 *  promise 是一个类， 类可以创建实例
 *  
 */
const Promise = require('./02.promise')

let p = new Promise(function(resolve, reject) {
    setTimeout(function() {
        Math.random() * 100 > 60 ? resolve('ok') : reject('no')
    }, 2000)

})

p.then( res => {
    console.log(res)
}, (e) => {
    console.log(e)
})