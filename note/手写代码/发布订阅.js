// var salesOffices = {}
// salesOffices.clientList = []
// salesOffices.listen = function(fn) {
//     this.clientList.push(fn)
// }
// salesOffices.trigger = function() {
//     for(var i = 0; i < this.clientList.length; i++) {
//         this.clientList[i].apply(this, arguments)
//     }
// }
// salesOffices.listen(function(price, squ) {
//     console.log('价格=' + price)
// })
// salesOffices.trigger(100, 1)

var event = {
    clientList: [],
    listen: function(key, fn) { // 监听函数
        if (!this.clientList[key]) {
            this.clientList[key] = []
        }
        this.clientList[key].push(fn) // 订阅的消息加入缓存列表中
    },
    trigger: function() { // 触发函数
        var key = Array.prototype.shift.call(arguments)
        var fns = this.clientList[key]
        if (!fns || fns.length === 0) {
            return
        }

        fns.forEach(fn => {
            fn.apply(this, arguments)
        })
        
    },
    remove: function(key, fn) {
        var fns = this.clientList[key]
        if (!fns) return
        if (!fn) { // 没有传入具体回调函数，表示需要取消key对应所有的订阅
            fns && (fns.length = 0)
        } else {
            fns.forEach( (fn, index) => {
                if (fn === fns[index]) {
                    fns.splice(index, 1)
                }
            })
        }
    }
}


event.listen('hello', function() {
    console.log('ok2')
})
event.listen('hello1', function() {
    console.log('ok1')
})
// 定义一个installEvent函数，这个函数可以给所有的对象都动态安装发布订阅功能
var installEvent = function(obj) {
    for (var i in event) {
        obj[i] = event[i]
    }
}

const salesOffices = {}
installEvent(salesOffices)

function getName(area) {
    console.log(area)
}

function getPrice(price) {
    console.log(price)
}

salesOffices.listen('88平米', getName)
salesOffices.listen('88平米', getPrice)
// salesOffices.remove('88平米', getName)

salesOffices.trigger('88平米', 'city')




class PubSubEvnet {
    constructor() {
        this.callBack = []
    }
    listen(key, fn) {
        if (!this.callBack[key]) {
            this.callBack[key] = []
        }
        this.callBack[key].push(fn)
    }
    trigger() {
        const key = Array.prototype.shift.call(arguments)
        const fns = this.callBack[key]
        if (!fns || fns.length === 0 ) return
        fns.forEach(fn => {
            fn.apply(this, arguments)
        })
    }

}

const pubS = new PubSubEvnet()

pubS.listen('hello', function(name) {
    console.log('hello' + name)
})
pubS.trigger('hello', 'zyg')