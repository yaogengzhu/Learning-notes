function start() {
    console.log('开始')
}

function end() {
    console.log('结束')
}

// start()

// end()

function Action() {

}

// Action.prototype.start = () => {
//     console.log('开始----')
// }

// Action.prototype.end = () => {
//     console.log("结束----")
// }
// const action = new Action()

// Action.prototype = {
//     start: function () {
//         console.log("开始----")
//     },
//     end: function () {
//         console.log('结束###')
//     }
// }
// const action = new Action()

// action.start()
// action.end()


// 函数是一等公民

(function (a, b) {
    console.log(a * b)
})(10, 20)