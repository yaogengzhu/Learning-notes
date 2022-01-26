/**
 * 双向链表
 */

function Node(data) {
    this.data = data
    this.prev = null
    this.next = null
}
function DobulyLinkList() {
    this.head = null
    this.tail = null
    this.length = 0
}

// 尾部添加一个新的项目
DobulyLinkList.prototype.append = function (data) {
    const newNode = new Node(data)
    if (this.length === 0) {
        this.head = newNode
        this.tail = newNode
    } else {
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
    }

    this.length += 1
}

// 向列表指定位置添加一个新的项
DobulyLinkList.prototype.insert = function (position, element) {}

// 获取对应的位置信息
DobulyLinkList.prototype.get = function () {}

DobulyLinkList.prototype.indexOf = function () {}

DobulyLinkList.prototype.update = function () {}

DobulyLinkList.prototype.removeAt = function (position, element) {}

// 从列表中移除一项
DobulyLinkList.prototype.remove = function (elment) {}

DobulyLinkList.prototype.isEmpty = function () {}

DobulyLinkList.prototype.size = function () {}

DobulyLinkList.prototype.toString = function () {}

DobulyLinkList.prototype.forwardString = function () {}

DobulyLinkList.prototype.backwordString = function () {}

const list = new DobulyLinkList()
list.append('1')
list.append('2')
list.append('3')

console.log(list)
