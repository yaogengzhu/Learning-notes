const Promise = require('./promise.js')

const p = new Promise((reslove, reject) => {
    setTimeout(() => {
        Math.random() * 100 > 60 ? reslove('ok') : reject('error')
    }, 1000);
})

// p.then()
// const p1 = p.then()

p.then( function(res) {
    console.log(res)
}).catch( e => {
    console.log(e)
})