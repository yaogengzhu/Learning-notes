// Promise 的三个状态
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function Promise(execute) {
    const self = this
    self.status = 'pending' // 默认状态为pendindg
    self.value = undefined // 存放成功状态的值
    self.reason = undefined // 存放失败状态的值

    // 存放成功的回调地址
    self.onResolvedCallbacks = []
    self.onRejectedCallbacks = []

    // 成功回调
    function resolve(value) {
        if (self.status === PENDING) {
            self.status = FULFILLED
            self.value = value
            // 依次将成功的回调执行
            self.onResolvedCallbacks.forEach((fn) => fn(self.value))
        }
    }

    // 失败回调
    function reject(reason) {
        if (self.status === PENDING) {
            self.status = REJECTED
            self.reason = reason
            // 依次将失败的回调执行
            self.onRejectedCallbacks.forEach((fn) => fn(self.reason))
        }
    }

    try {
        execute(resolve, reject)
    } catch (e) {
        reject(e)
    }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
    const self = this
    // 如果成功和失败没有传，这只会把值传递出去
    onFulfilled =
        typeof onFulfilled === 'function' ? onFulfilled : (value) => value
    onRejected =
        typeof onRejected === 'function'
            ? onRejected
            : (reason) => {
                  throw reason
              }
    // 如果当前promise 是成功态，则直接取值
    if (self.status === FULFILLED) {
        onFulfilled(self.value)
    }

    if (self.status === REJECTED) {
        onFulfilled(self.reason)
    }

    if (self.status === PENDING) {
        // 如果promise的状态是 pending， 需要onFufilled 和 onRejected 函数存起来，等待确定状态
        self.onResolvedCallbacks.push(() => {
            onFulfilled(self.value)
        })

        self.onRejectedCallbacks.push(() => {
            onRejected(self.reason)
        })
    }
}

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('成功')
    }, 1000)
    return resolve
}).then(
    (data) => {
        console.log('success', data)
    },
    (err) => {
        console.log('faild', err)
    }
)