# 链表

数组的缺点：需要申请一段连续的内存空间（一整块的内存），数组插入需要位移操作

链表的优势：
- 不必要的连续空间
- 不必要创建时确定大小，可以无限的延伸下去。
- 算法复杂度O1
## 定义链表

链表是由一组节点组成的集合。每个节点都使用一个对象的引用指向它的后继。指向另一个节点的引用叫做链。

数组元素靠它们的位置进行引用，链表元素则是靠相互之间的关系进行引用。

## 设计一个基于对象的链表

```js
function Node(element) {
    this.element = element;
    this.next = null;
}

function LList() {
    this.head = new Node('head'); // 一个新的节点
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.findPrevious = findPrevious;
}

/**
 * find()，该方法遍历链表，查找给定数据。
 * @param {*} item
 * @returns
 */
function find(item) {
    var currNode = this.head;
    /**
     *  {
     *    elment: 'head',
     *    next: null
     *  }
     */
    /**
     * 判断当前节点是否等于 传进来的节点element
     *
     */
    while (currNode.element != item) {
        currNode = currNode.next; // 不等于，让当前节点的next 指向下一个next
    }
    return currNode; // 直到不等于时，返回该节点
}

/**
 * 新的节点插入链表中
 * @param {*} element  需要创建的新元素
 * @param {*} item     插入到哪个节点中
 */
function insert(element, item) {
    // 创建一个新的节点
    /**
     *
     *  newNode
     *  {
     *    element: xxx,
     *    next: null
     *  }
     */
    const newNode = new Node(element);
    let current = this.find(item); // 找到需要插入节点的的位置
    newNode.next = current.next; // 节点next的切换
    current.next = newNode; // 然后这个新的节点挂载到当前节点上
}

function display() {
    let currNode = this.head; // 定义节点为头部节点
    while (!(currNode.next == null)) {
        // 循环遍历，判断当前节点的下一个节点是否为null
        console.log(currNode.next.element); // 打印节点
        currNode = currNode.next;
    }
}

/**
 * 找到上一个节点
 * @param {*} item
 * @returns
 */
function findPrevious(item) {
    let currNode = this.head; // 定义一个当前节点
    // 循环遍历当前节点是不为null 且 当前节点下一个节点不等于该元素
    while (!(currNode.next == null) && currNode.next.element != item) {
        currNode = currNode.next;
    }
    return currNode; // 返回的就是上一个节点
}

/**
 * 从链表中删除节点时，需要先找到待删除节点前面的节点。找到这个节点后，修改它的 next 属性，使其不再指向待删除节点，而是指向待删除节点的下一个节点。
 */
function remove(item) {
    // 先找到上一个节点
    let prevNode = this.findPrevious(item);
    // 如果上一个节点不为空， 则将上一节点，挂载下下一个节点进行关联，移除该节点
    if (!(prevNode.next == null)) {
        prevNode.next = prevNode.next.next;
    }
}

// 测试程序
const cities = new LList();
cities.insert('Conway', 'head');
cities.insert('oooo', 'Conway');
cities.insert('xxxx', 'oooo');
cities.display();

```




## 双向链表
与普通链表不同的是，普通链表只有一个向下的节点的链接。而双向链表中。一个链向下元素，一个链向前元素