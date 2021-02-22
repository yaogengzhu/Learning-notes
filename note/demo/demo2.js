// 改造方法
// Function.prototype.methods = function (name, fn) {
//     this.prototype[name] = fn
// }

// function Action() {

// }

// Action.methods('start', function () {
//     console.log("开始执行")
// })

// Action.methods("end", function () {
//     console.log("结束执行")
// })

// const action = new Action()

// action.start()
// action.end()


// 链式调用

Function.prototype.methods = function (name, fn) {
    this.prototype[name] = fn
    return this
}


function Action() {

}


Action.methods('start', function () {
    console.log("开始-执行@@@")
}).methods('end', function () {
    console.log("结束执行---")
})


const action = new Action()

action.start()

action.end()
