
const PENDING  = 'pending' // 初始状态
const FULFULLED  = 'fulfulled'  // 成功状态
const REJECTED = 'rejected'

// exector 执行器
function Promise(exector) {
    let self = this  // 先缓存当前promise实例
    self.status = PENDING // 设置状态
    // 定义成功的回调的地址
    self.onReslovedCallbacks = []
    // 定义失败的回调地址
    self.onRejectedCallbacks = []

    self.value = undefined

    // 当调用此方法的时候，如果status 为pending时可以转为成功状态， 如果是成功或者失败状态则什么都不做
    function resolve(value) {
        if (self.status === PENDING) {
            self.status = FULFULLED  // 成功后会得到一个值，这个值不能修改

            self.value = value
            self.onReslovedCallbacks.forEach( cb => cb(self.value))
        }
    }

    function reject(reason) {
        if (self.status === PENDING) {
            self.status = REJECTED
            self.value = reason // 将失败的原因给value
            self.onRejectedCallbacks.forEach( cb => cb(self.value))
        }
    }

    try {
        // 因为函数执行的时候可能回异常，需要捕获
        exector(resolve, reject)
    } catch (e) {
        // 如果函数执行失败了， 则使用失败的原因函数
        reject(e)
    }
}


// onFulfilled 用来接收Promise成功的回调
Promise.prototype.then function(onFulfilled, onRejected) {

    // 2.2.1
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    onRejected  = typeof onRejected === 'function' ? onRejected : reason => { throw reason }

    // 2.2.2
    onFulfilled(self.value)

}