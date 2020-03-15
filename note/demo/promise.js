
const PENDING = 'pending' // 初始状态
const FULFULLED = 'fulfulled'  // 成功状态
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
        if(value instanceof Promise) {
            return value.then(resolve, reject)
        }
        if (self.status === PENDING) {
            // 如果是pending状态则转化为FULFULLED状态
            self.status = FULFULLED
            self.value = value // 成功后会得到一个值，这个值不能修改
            self.onReslovedCallbacks.forEach(cb => cb(self.value))
        }
    }

    function reject(reason) {
        if (self.status === PENDING) {
            self.status = REJECTED
            self.value = reason // 将失败的原因给value
            self.onRejectedCallbacks.forEach(cb => cb(self.value))
        }
    }

    try {
        // 因为函数执行的时候可能回异常，需要捕获
        exector(resolve, reject)
    } catch (e) {
        // 如果函数执行失败了， 则使用失败的原因reject
        reject(e)
    }
}


// resolvePromise
function resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
        return reject(new TypeError('循环引用'))
    }
    let called = false // 标识promise2 是否成功或者失败
    if (x instanceof Promise) {
        if (x.status === PENDING) {
            x.then(function (y) {
                resolvePromise(promise2, y, resolve, reject)
            }, reject)
        } else {
            // 表示x已经是成功或者失败状态
            x.then(resolve, reject)
        }
        // x 对应的是一个thenable对象或者函数, 只要有then的方法或对象
    } else if (x !== null && (typeof x === 'object' || (typeof x === 'function'))) {
        // 写的promise与其他promise 交互
        try {
            let then = x.then
            if (typeof then === 'function') {
                // if (called) return
                // called = true
                then.call(x, function (y) {
                    // 递归调用
                    if (called) return
                    called = true
                    resolvePromise(promise2, y, resolve, reject)
                }, function (error) {
                    if (called) return
                    called = true
                    reject(error)
                })
            } else {
                // 到此x不是一个thenable对象, 那直接当成值resolve
                resolve(x)
            }
        } catch (e) {
            reject(e)
        }
    } else {
        // 如果x是一个普通的值，这个用x的值去promise2
        resolve(x)
    }
}


// 必须提供一个then 方法来
// onFulfilled 用来接收Promise成功的回调
Promise.prototype.then = function (onFulfilled, onRejected) {
    let self = this
    let promise2
    // 如果成功和失败的回调没有传递， 表示这个传递没有任何逻辑，只是会把值往后抛（值的穿透）
    // 2.2.1
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value  // 给了一个默认函数
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }

    // 2.2.2
    if (self.status === FULFULLED) { // 表示当前promise状态已经成功，onFulfilled方法直接取值
        return promise2 = new Promise(function (resolve, reject) {
            setTimeout(() => {
                try {
                    let x = onFulfilled(self.value)
                    // 如果获取到了 返回值x， 会走解析promise的过程
                    resolvePromise(promise2, x, resolve, reject)
                } catch (e) {
                    // 如果成功的状态出异常，抛出异常
                    reject(e)
                }
            })

        })

    }

    if (self.status === REJECTED) { // 表示promise失败状态
        return promise2 = new Promise(function(resolve, reject) {
            setTimeout(() => {
                try {
                    let x = onRejected(self.value)
                    resolvePromise(promise2, x, resolve, reject)
                } catch (e) {
                    reject(e)
                }
            })
        })
    }

    if (self.status === PENDING) {
        return promise2 = new Promise(function(resolve, reject) {
            self.onReslovedCallbacks.push(function () {
                setTimeout(() => {
                    try {
                        let x = onFulfilled(self.value)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                })
            })
    
            self.onRejectedCallbacks.push(function () {
                setTimeout(() => {
                    try {
                        let x = onRejected(self.value)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                })
            })
        })
    }





}

Promise.prototype.catch = function(onRejected) {
    this.then(null, onRejected)
}

module.exports = Promise