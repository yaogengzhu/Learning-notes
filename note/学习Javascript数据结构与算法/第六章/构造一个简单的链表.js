/**
 *
 * 1. 需要有一个head 节点
 * 2. 通过while 循环， 找到最后一个节点 *
 * 3. 添加新的节点 最后的next = 当前节点
 */

function Node(data) {
    this.data = data
    this.next = null
}

function LinkList() {
    this.head = null
    this.length = 0
}

/**
 * 添加链表节点
 * @param
 */
LinkList.prototype.append = function (data) {
    // 创建一个新的节点
    const newNode = new Node(data)
    // 判断是否是第一个节点
    if (this.length === 0) {
        this.head = newNode
    } else {
        // 需要找到最后一个节点
        let currentNode = this.head
        while (currentNode.next) {
            currentNode = currentNode.next
        }
        currentNode.next = newNode
    }
    this.length += 1
}

/**
 *  toString 方法
 */
LinkList.prototype.toString = function () {
    let string = ''
    let currentNode = this.head
    while (currentNode) {
        string += currentNode.data + ','
        currentNode = currentNode.next
    }
    return string
}

/**
 * 插入方法
 * @param {*} data
 * @param {*} position
 */
LinkList.prototype.insert = function (data, position) {
    /**
     * 1.对position越界判断
     * 2.长度判断
     */
    if (position < 0 || this.length < position) {
        return false
    }
    // 根据data 创建节点
    const newNode = new Node(data)
    let currentNode = this.head
    // 判断插入的节点是否是第一个
    if (position === 0) {
        newNode.next = currentNode
        this.head = newNode
    } else {
        let index = 0
        // let currentNode = this.head
        let previous = null
        while (index++ < position) {
            // 遍历确定 当前位置的节点 和 前一个节点
            previous = currentNode
            currentNode = currentNode.next
        }
        newNode.next = currentNode // 当前位置插入新的节点
        previous.next = newNode // 前一个节点的next 指向新的节点
    }

    // 4 length
    this.length += 1
    return true
}

const list = new LinkList()
list.append(1)
list.append(1)
list.append(23)

list.insert(100, 1)

console.log(list.toString())
