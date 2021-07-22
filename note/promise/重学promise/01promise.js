// promise的三种状态值 pending fulfiled
const PENDIGN = 'pending'
const FUlFILlED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
    constructor(executor) {
        this.status = PENDIGN // promise的初始状态值
        this.value = undefined //成功后的状态值
        this.reason = undefined // 失败的状态值
        this.onFulfilledCallbacks = [] // 存放成功的回调
        this.onRejectedCallbakcs = [] // 存放失败的回调地址
        this.resolved = this.resolved.bind(this) //
        this.rejected = this.rejected.bind(this)

        try {
            executor(this.resolved, this.rejected)
        } catch (e) {
            this.rejected(e)
        }
    }

    // 成功的回调
    resolved(value) {
        if (this.status === PENDIGN) {
            this.status = FUlFILlED
            this.value = value
            this.onFulfilledCallbacks.forEach((fn) => fn(this.value))
        }
    }

    // 失败的回调
    rejected(reason) {
        if (this.status === PENDIGN) {
            this.status = REJECTED
            this.reason = reason
            this.onRejectedCallbakcs.forEach((fn) => fn(this.reason))
        }
    }

    then(onFulfilled, onRejected) {
        if (this.status === FUlFILlED) {
            onFulfilled(this.value)
        }
        if (this.status === REJECTED) {
            onRejected(this.reason)
        }
        if (this.status === PENDIGN) {
            this.onFulfilledCallbacks.push(onFulfilled)
            this.onRejectedCallbakcs.push(onRejected)
        }
    }
}

const p = new MyPromise(function (resolve, reject) {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve('成功')
        } else {
            reject('失败')
        }
    }, 1000)
    // if (Math.random() > 0.5) {
    //     resolve('成功')
    // } else {
    //     reject('失败')
    // }
})
p.then(
    (ok) => {
        console.log(ok)
    },
    (e) => {
        console.log(e)
    }
)
