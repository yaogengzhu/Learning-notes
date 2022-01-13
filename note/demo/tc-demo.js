/**
 * 跟着杜老师学链表
 */
const order500 = function (orderType, pay, stock, next) {
    if (orderType === 1 && pay === true) {
        console.log('已付款500元定金，可以得到100优惠券')
    } else {
        next.handler(orderType, pay, stock, next.next)
    }
}

const order200 = function (orderType, pay, stock, next) {
    if (orderType === 2 && pay === true) {
        console.log('已付款200元定金，可以得到50优惠券')
    } else {
        next.handler(orderType, pay, stock, next.next)
    }
}

const orderNormal = function (orderType, pay, stock) {
    if (stock > 0) {
        console.log('普通购买，无优惠券')
    } else {
        console.log('库存不足')
    }
}

/**
 * 创建新的节点
 * @param {*} handler
 * @param {*} next
 */
function HandlerNode(handler) {
    this.handler = handler
    this.next = null
}
function LinkList() {
    this.head = null
    this.length = 0
    LinkList.prototype.appendNode = function (data) {
        const newNode = new HandlerNode(data)
        if (this.length === 0) {
            this.head = newNode
        } else {
            let currentNode = this.head
            while (currentNode.next) {
                currentNode = currentNode.next
            }
            currentNode.next = newNode
        }
        this.length += 1
    }
}

/**
 * 处理链表，并返回一个处理函数
 * @param {*} handlers
 * @returns
 */
function chainhandler(handlers) {
    const linkList = new LinkList()
    handlers.forEach((data) => {
        linkList.appendNode(data)
    })

    return function (orderType, pay, stock) {
        linkList.head.handler(orderType, pay, stock, linkList.head.next)
    }
}

let handler = chainhandler([order500, order200, orderNormal])

handler(1, true, 500)
handler(2, false, 500)
