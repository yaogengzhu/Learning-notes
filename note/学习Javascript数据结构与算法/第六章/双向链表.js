class DoublyNode extends Node {
    // {1}
    constructor(element, next, prev) {
        super(element, next); // {2}
        this.prev = prev; // {3} 新增的 }
    }
}
class DoublyLinkedList extends LinkedList {
    // {4}
    constructor(equalsFn = defaultEquals) {
        super(equalsFn); // {5}
        this.tail = undefined; // {6} 新增的 }
    }
}
