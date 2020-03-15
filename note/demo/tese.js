// 手写promise
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function Promise(task) {
    const self = this // 将promise实例赋值给self 
    self.status = PENDING // 将状态设置处初始状态
    self.value = undefined

    self.onFulfilledCallbacks = [] // 存储成功的回调
    self.onRejectedCallbacks = [] // 存储失败的回调

    // 成功的回调函数
    resolve(value) {
        // 当self的status 等于pengding时，将状态改为成功态
        if(self.status === PENDING) {
            self.status = FULFULLED
            self.value = value
            self.onFulfilledCallbacks.forEach( cb => cb(self.value))
        }
    }

    // 失败的回调
    reject(reason) {
        if (self.status === PENDING) {
            self.status = REJECTED 
            self.value = reason
            self.onRejectedCallbacks.forEach( cb => cb(self.value))
        }
    }

    // 失败的回调函数
    try {
        task()
    } catch (e) {
        reject(e)
    }
}