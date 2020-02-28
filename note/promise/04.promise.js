const Promise1 = require('./02.promise')
const p1 = new Promise1(function(resolve, reject) {
    setTimeout(function() {
       
    }, 0)
    Math.random() * 100 > 60 ? resolve('ok') : reject('失败')
    
    // console.log('ok')
})

p1.then( function(res) {
    console.log(res + '1')
}, function(e) {
    console.log(e)
})

