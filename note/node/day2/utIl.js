const util = require('util')

let obj = {
    name: 'zyg',
    home: {
        city: 'bj',
        c: {
            a: 2
        }
    }
}

console.log(util.inspect(obj, { depth: 3}));