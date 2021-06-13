const fs = require('fs');

fs.readFile('hello.txt', { flag: 'r', encoding:'utf-8'}, (err, data) => {
    console.log(data)
})