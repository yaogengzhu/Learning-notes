const fs = require('fs')
const path = require('path')
console.log(path.resolve(__dirname))


// 哨兵变量
function read(length, cb) {
    let html = {}
    return function(key, value) {
        html[key] = value
        if (Object.keys(html).length === length) {
            cb(html)
        }
    }
    
}

let done = read(3, function(html) {
    console.log(html)
})
fs.readFile(path.resolve(__dirname, '1.txt'), 'utf-8', function(err, data) {
    // console.log(data)
    done('data', data)
})

fs.readFile(path.resolve(__dirname, '2.txt'), 'utf-8', function(err, data) {
    // console.log(data)
    done('template', data)
})

fs.readFile(path.resolve(__dirname, '2.txt'), 'utf-8', function(err, data) {
    // console.log(data)
    done('template1', data)
})