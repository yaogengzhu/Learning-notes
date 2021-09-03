function EventEmitter() {
    this.events = {} // 把所有的事件监听放到这个函数里保存
    this.maxListener = 3 // 给指定一个事件类型添加最多的事件数量
}

/**
 * 设置类型的最大长度
 * @param {*} number 
 */
EventEmitter.prototype.setMaxListener = function(number) {
    this.maxListener = number
}

/**
 * type 事件类型
 * listener 事件监听函数
 */
EventEmitter.prototype.on = EventEmitter.prototype.addListener = function(type, listener) {
    if (this.events[type]) {
        if (this.events[type].length >= this.maxListener && this.maxListener !== 0) {
            console.error(`Max linteners 过多 超出${this.maxListener}, 可能出现内存泄漏`)
            return
        }
        this.events[type].push(listener)
    } else {
        // 如果之前没有添加此事件的监听函数，则赋值一个数组
        this.events[type] = [listener]
    }
}

/**
 * 发送事件
 * @param {*} type 
 */
EventEmitter.prototype.emit = function(type, ...rest) {
    this.events[type] && this.events[type].forEach(fn => fn.apply(this, rest))
}

/**
 * 只执行一次，监听的时候设置函数，自己销毁掉自己
 * @param {*} type 
 * @param  {...any} rest 
 */
EventEmitter.prototype.once = function(type, listener) {
    // 用完即焚
    const wrapper = (...rest) => {
        listener.apply(this, rest) // 执行
        this.removeListener(type, wrapper)
    }
    this.on(type, wrapper)
}

/**
 * 移除事件
 */
EventEmitter.prototype.removeListener = function(type, listener) {
    // 过滤掉监听函数
    if(this.events[type]) {
        this.events[type] = this.events[type].filter(fn !== listener) // 比较函数的地址引用
    }
}

/**
 * 移除某个类型的所有监听函数
 * @param {*} type 
 */
EventEmitter.prototype.removeAllListener = function(type) {
    delete this.events[type]
}
/**
 * 返回该类型下的所有的监听函数
 * @param {*} type 
 * @returns 
 */
EventEmitter.prototype.listener = function(type) {
    return this.events[type]
}
module.exports = EventEmitter

// const Event = require('events') // node events 事件
const l = new EventEmitter()
l.setMaxListener(5)
l.on('click', function(res) {
    console.log(res)
})
l.on('click', function(res) {
    console.log(res)
})
l.on('click', function(res) {
    console.log(res)
})
l.on('click', function(res) {
    console.log(res)
})

l.emit('click', 'ok')