# 什么事 async

async 函数就是 Generator 函数的语法糖。

```js
var fs = require('fs')
var readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, function (error, data) {
            if (error) reject(error)
            resolve(data)
        })
    })
}
var gen = function* () {
    var f1 = yield readFile('/etc/fstab')
    var f2 = yield readFile('/etc/shells')
    console.log(f1.toString())
    console.log(f2.toString())
}
```

async 写法

```js
var asyncReadFile = async function () {
    var f1 = await readFile('/etc/fstab')
    var f2 = await readFile('/etc/shells')
    console.log(f1.toString())
    console.log(f2.toString())
}
```


async函数对 Generator 函数的改进，体现在以下四点。
- 内置执行器。Generator函数的执行必须靠执行器
- 更好的语义化
- 更广的适用性
- 返回值是Promise。async函数的返回值是Promise对象，这比Generator函数的返回值是Iterator对象方便多了。
