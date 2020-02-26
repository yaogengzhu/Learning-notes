// 构造函数的参数是一个异步任务
function Promise(task) {
    let that = this // 混存this
    // 默认状态为pending
    that.status = 'pending'
    that.value = undefined  // 是promise的结果

    // 所有成功和失败的回调函数
    that.onResolvedCallbacks = []
    that.onRejectedCallbacks = []

    // 调用此方法，可以将promise变成成功状态
    function resolve(value) {
        if (that.status === 'pending') {
            that.status = 'fulfilled'
            that.value = value
            that.onResolvedCallbacks.forEach( item => item(value) )
        }
    }
    // 调用该方法， 可以将promise变成失败态
    function reject(reason) {
        // 如果当前状态是初始状态，则转成失败
        if (that.status === 'pending') {
            that.status = 'rejected'
            that.value = reason
            that.onRejectedCallbacks.forEach( item => item(reason) )
        }
    }


    // 捕获异常
    try {
        task(resolve, reject)
    } catch(e) {
        reject(e)
    }
    
}

// onFulfilled 成功回调， onReject 失败回调

Promise.prototype.then = function (onFulfilled, onReject) {
    let that = this
    that.onResolvedCallbacks.push(onFulfilled)
    that.onRejectedCallbacks.push(onReject)
}

module.exports = Promise