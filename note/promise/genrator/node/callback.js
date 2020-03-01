
let fs = require('fs')
fs.readFile('./data.txt', 'utf-8', function (err, data) {
    console.log(data)
})

fs.readFile('./data.txt', function(err, data) {
    console.log(err)
})

// 发布订阅模式

let html = {}