function Promise(task) {
    const that = this
    that.status = 'pending'
    that.value = undefined

    // 存放成功的回调函数
    that.onResolvedBacks = []
    that.onRejectedBacks = []
    // 成功回调函数
    function resolve(value) {
        if (that.status === 'pending') {
            that.status = 'fulfilled'
            that.value = value
            that.onResolvedBacks.forEach( fn => fn(value))
        }
    }

    // 失败的回调函数
    function reject(reason) {
        if (that.status === 'pending') {
            that.status = 'rejected'
            that.value = reason
            that.onRejectedBacks.forEach( fn => fn(reason))
        }
    }

    try {
        task(resolve, reject)
    } catch(e) {
        reject(e)
    }
}

// then
Promise.prototype.then = function(onResovled, onRejected = function(){}) {
    const that = this 
    if (that.status === 'pending') {
        that.onResolvedBacks.push(onResovled)
        that.onRejectedBacks.push(onRejected)
    }
    if (that.status === 'fulfilled') {
        onResovled(that.value)
    }
    if (that.status === 'rejected') {
        onRejected(that.value)
    }
   
}

Promise.prototype.catch = function(onRejected) {
    const that = this
    if (that.status === 'rejected') {
        onRejected(that.value)
    }
    that.onRejectedBacks.push(onRejected)
}

module.exports = Promise
