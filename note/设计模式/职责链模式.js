/**
 * 职责链模式的定义：
 * 使用多个对象都有机会处理请求, 从而避免请求的发送者和接受者之间的耦合关系，将这些对象连成一条链子，
 * 并沿着这条链子传递该请求，直到有一个对象处理它为止。
 */

/**
 * 普通函数写法
 * @param {*} orderType  订单类型
 * @param {*} pay   是否已支付
 * @param {*} stock 库存数量
 */
const order = function (orderType, pay, stock) {
    if (orderType === 1) {
        if (pay === true) {
            console.log('已付款500元定金，可以得到100优惠券')
        } else {
            if (stock > 0) {
                console.log('普通购买，无优惠券')
            } else {
                console.log('库存不足')
            }
        }
    } else if (orderType === 2) {
        if (pay === true) {
            console.log('已付款200元定金，可以得到50优惠券')
        } else {
            if (stock > 0) {
                console.log('普通购买，无优惠券')
            } else {
                console.log('库存不足')
            }
        }
    } else if (orderType === 3) {
        if (stock > 0) {
            console.log('普通购买，无优惠券')
        } else {
            console.log('库存不足')
        }
    }
}

// order(1, true, 500)

/**
 * 职责链重构
 */
const order500 = function (orderType, pay, stock) {
    if (orderType === 1 && pay === true) {
        console.log('已付款500元定金，可以得到100优惠券')
    } else {
        order200(orderType, pay, stock)
    }
}

const order200 = function (orderType, pay, stock) {
    if (orderType === 2 && pay === true) {
        console.log('已付款200元定金，可以得到50优惠券')
    } else {
        orderNormal(orderType, pay, stock)
    }
}

const orderNormal = function (orderType, pay, stock) {
    if (stock > 0) {
        console.log('普通购买，无优惠券')
    } else {
        console.log('库存不足')
    }
}

// order500(3, true, 500)

/**
 * 升级写法
 */

const Chain = function (fn) {
    this.fn = fn
    this.successor = null // 表示职责链的下一个节点
}

/**
 * 指定在链中的下一个节点
 * @param {*} successor
 * @returns
 */
Chain.prototype.setNextSuccessor = function (successor) {
    return (this.successor = successor)
}

/**
 * 传递请求给某一个节点
 * @returns
 */
Chain.prototype.passRequest = function () {
    let ret = this.fn.apply(this, arguments)
    if (ret === 'nextSuccessor') {
        return (
            this.successor &&
            this.successor.passRequest.apply(this.successor, arguments)
        )
    }

    return ret
}

const upgradeOrder500 = function (orderType, pay, stock) {
    if (orderType === 1 && pay === true) {
        console.log('已付款500元定金，可以得到100优惠券')
    } else {
        return 'nextSuccessor'
    }
}

const upgradeOrder200 = function (orderType, pay, stock) {
    if (orderType === 2 && pay === true) {
        console.log('已付款200元定金，可以得到50优惠券')
    } else {
        return 'nextSuccessor'
    }
}

const upgradeOrderNormal = function (orderType, pay, stock) {
    if (stock > 0) {
        console.log('普通购买，无优惠券')
    } else {
        console.log('库存不足')
    }
}

// 将3个订单的函数分别包装成职责链的节点
const chainOrder500 = new Chain(upgradeOrder500)
const chainOrder200 = new Chain(upgradeOrder200)
const chainNormal = new Chain(upgradeOrderNormal)

// 指定节点在职责链的顺序
chainOrder500.setNextSuccessor(chainOrder200)
chainOrder200.setNextSuccessor(chainNormal)

// 将请求传递给第一个节点
chainOrder500.passRequest(2, true, 500)