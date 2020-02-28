function Promise(task) {
    const that = this
    that.status = 'pending'
    // 

    that.value = undefined
    // 存放成功的回调函数
    that.onFulfilledBacks = []
    // 存放是失败的回调函数
    that.OnrejectedBacks = []

    // 成功时调用
    function resolve(value) {
        if (that.status === 'pending') {
            // console.log(value)
            that.status = 'fulfilled'
            that.value = value
            console.log(that.onFulfilledBacks)
            that.onFulfilledBacks.forEach( item => item(value))
        }
    }

    // 失败时调用
    function reject(reason) {
        if (that.status === 'pending') {
            // console.log(reason)
            that.status = 'rejected'
            that.value = reason
            that.OnrejectedBacks.forEach( item => item(reason) )
        }
    }

    try {
        task(resolve, reject)
    } catch (e) {
        reject(e)
    }
}

Promise.prototype.then = function(onFulfilled, onRejected) {
    // console.log(this.onFulfilledBacks)
    const that = this
    // 订阅
    if (that.status === 'pending') {
        this.onFulfilledBacks.push(onFulfilled)
        this.OnrejectedBacks.push(onRejected)
    }

    
}

// Promise.prototype.then = function (onFulfilled, onReject) {
//     let that = this
//     // if (that.status === 'fulfilled') {
//     //     // 成功态直接执行
//     //     onFulfilled(that.value)
//     // }

//     // if (that.status === 'rejected') {
//     //     onReject(that.value)
//     // }
//     if (that.status === 'pending') {
        
//     }
//     that.onFulfilledBacks.push(onFulfilled)
//     that.OnrejectedBacks.push(onReject)
// }
module.exports = Promise